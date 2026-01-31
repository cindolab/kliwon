/**
 * Enhanced Wallet Provider for KLW Holders Dashboard
 * Inspired by Uniswap's wallet connection architecture
 * Provides robust error handling, state management, and event system
 */

class WalletProvider {
    static _instance = null;

    constructor() {
        if (WalletProvider._instance) {
            return WalletProvider._instance;
        }

        // Connection state
        this.provider = null;
        this.signer = null;
        this.account = null;
        this.chainId = null;
        this.isConnected = false;
        this.isConnecting = false;

        // ENS data
        this.ensName = null;
        this.ensAvatar = null;

        // Event listeners
        this.listeners = new Map();

        // Mainnet provider for ENS
        this.mainnetProvider = new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com');

        // Supported chains
        this.supportedChains = {
            1: { name: 'Ethereum', symbol: 'ETH' },
            137: { name: 'Polygon', symbol: 'POL' },
            56: { name: 'BSC', symbol: 'BNB' }
        };

        WalletProvider._instance = this;
        this.init();
    }

    static getInstance() {
        if (!WalletProvider._instance) {
            WalletProvider._instance = new WalletProvider();
        }
        return WalletProvider._instance;
    }

    init() {
        // Setup event listeners for wallet buttons
        this.setupButtonListeners();

        // Setup ethereum provider listeners
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => this.handleAccountsChanged(accounts));
            window.ethereum.on('chainChanged', (chainId) => this.handleChainChanged(chainId));
            window.ethereum.on('disconnect', (error) => this.handleDisconnect(error));

            // Auto-connect if previously authorized
            this.checkPreviousConnection();
        }
    }

    setupButtonListeners() {
        const btn = document.getElementById('connectWallet');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.isConnected) {
                    this.disconnect();
                } else {
                    this.openWalletModal();
                }
            });
        }
    }

    async checkPreviousConnection() {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                await this.handleAccountsChanged(accounts);
            }
        } catch (error) {
            console.error('Error checking previous connection:', error);
        }
    }

    openWalletModal() {
        const modal = document.getElementById('walletModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    closeWalletModal() {
        const modal = document.getElementById('walletModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    async connectWallet(walletType) {
        if (this.isConnecting) {
            console.log('Connection already in progress');
            return;
        }

        this.isConnecting = true;

        try {
            if (walletType === 'metamask' || walletType === 'trust') {
                await this.connectEthereumWallet(walletType);
            } else {
                throw {
                    code: 'NOT_IMPLEMENTED',
                    message: 'This wallet type is coming soon! Please use MetaMask or Trust Wallet for now.'
                };
            }
        } catch (error) {
            this.handleConnectionError(error);
        } finally {
            this.isConnecting = false;
        }
    }

    async connectEthereumWallet(walletType) {
        if (typeof window.ethereum === 'undefined') {
            throw {
                code: 'WALLET_NOT_FOUND',
                message: `${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'} not installed`,
                walletType
            };
        }

        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            if (!accounts || accounts.length === 0) {
                throw new Error('No accounts returned from wallet');
            }

            await this.handleAccountsChanged(accounts);
            this.closeWalletModal();
            this.emit('connected', { account: this.account, chainId: this.chainId });

        } catch (error) {
            if (error.code === 4001) {
                throw {
                    code: 'USER_REJECTED',
                    message: 'User rejected the connection request'
                };
            } else if (error.code === -32002) {
                throw {
                    code: 'REQUEST_PENDING',
                    message: 'Connection request already pending. Please check your wallet.'
                };
            }
            throw error;
        }
    }

    async handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            this.disconnect();
            return;
        }

        this.account = accounts[0];
        this.isConnected = true;

        // Get chain ID
        try {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            this.chainId = parseInt(chainId, 16);
        } catch (error) {
            console.error('Error getting chain ID:', error);
        }

        // Update UI immediately
        this.updateUI(true);

        // Resolve ENS in background
        this.resolveENS(this.account).then(() => {
            if (this.ensName) {
                this.updateUI(true);
            }
        });

        this.emit('accountsChanged', accounts);
    }

    handleChainChanged(chainId) {
        this.chainId = parseInt(chainId, 16);
        console.log('Chain changed to:', this.chainId);
        window.location.reload();
    }

    handleDisconnect(error) {
        console.log('Wallet disconnected:', error);
        this.disconnect();
    }

    disconnect() {
        this.account = null;
        this.chainId = null;
        this.ensName = null;
        this.ensAvatar = null;
        this.isConnected = false;

        this.updateUI(false);
        this.emit('disconnected');
    }

    async resolveENS(address) {
        try {
            this.ensName = await this.mainnetProvider.lookupAddress(address);
            if (this.ensName) {
                this.ensAvatar = `https://metadata.ens.domains/mainnet/avatar/${this.ensName}`;
            }
        } catch (error) {
            console.warn('ENS resolution error:', error);
            this.ensName = null;
            this.ensAvatar = null;
        }
    }

    updateUI(connected) {
        const btn = document.getElementById('connectWallet');

        if (connected) {
            const displayId = this.ensName || `${this.account.substring(0, 6)}...${this.account.substring(38)}`;

            if (this.ensAvatar) {
                btn.innerHTML = `
                    <img src="${this.ensAvatar}" alt="Avatar" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.2);">
                    <span>${displayId}</span>
                `;
            } else {
                btn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    <span>${displayId}</span>
                `;
            }

            btn.classList.add('connected');
        } else {
            btn.innerHTML = `
                <span class="btn-icon">🔗</span>
                <span class="btn-text">Hubungkan Wallet</span>
            `;
            btn.classList.remove('connected');
        }
    }

    handleConnectionError(error) {
        console.error('Connection error:', error);

        let message = 'Failed to connect wallet';

        if (error.code === 'WALLET_NOT_FOUND') {
            const walletName = error.walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet';
            const downloadUrl = error.walletType === 'metamask'
                ? 'https://metamask.io/download/'
                : 'https://trustwallet.com/download';

            if (confirm(`❌ ${walletName} not detected!\\n\\nWould you like to download ${walletName}?`)) {
                window.open(downloadUrl, '_blank');
            }
            return;
        }

        if (error.code === 'USER_REJECTED') {
            message = '❌ Connection cancelled.\\n\\nYou rejected the connection request. Please try again and approve the connection.';
        } else if (error.code === 'REQUEST_PENDING') {
            message = '⏳ Connection request pending.\\n\\nPlease check your wallet and approve the connection.';
        } else if (error.code === 'NOT_IMPLEMENTED') {
            message = error.message;
        } else {
            message = `❌ Connection failed.\\n\\nError: ${error.message || 'Unknown error'}`;
        }

        alert(message);
    }

    // Event system
    on(event, listener) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(listener);
    }

    off(event, listener) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).delete(listener);
        }
    }

    emit(event, payload) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(listener => listener(payload));
        }
    }
}

// Initialize wallet provider
window.addEventListener('DOMContentLoaded', () => {
    window.walletProvider = WalletProvider.getInstance();
});
