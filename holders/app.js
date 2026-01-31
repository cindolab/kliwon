// KLW Token Holders Dashboard - Main JavaScript
// Simplified version without API Pro requirement

const CONTRACT_ADDRESS = '0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8';
const POLYGON_RPC = 'https://polygon-rpc.com';

// ERC20 ABI (minimal for our needs)
const ERC20_ABI = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function decimals() view returns (uint8)',
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address) view returns (uint256)',
    'event Transfer(address indexed from, address indexed to, uint256 value)'
];

let provider;
let contract;
let currentPage = 1;
const holdersPerPage = 20;

// Initialize the application
async function init() {
    try {
        // Setup provider
        provider = new ethers.providers.JsonRpcProvider(POLYGON_RPC);
        contract = new ethers.Contract(CONTRACT_ADDRESS, ERC20_ABI, provider);

        // Load initial data
        await loadTokenStats();
        await loadHoldersData();
        await loadRecentTransactions();

        // Setup event listeners
        setupEventListeners();

        console.log('Dashboard initialized successfully');
        console.log('ℹ️ Note: Holder data is simulated. For real data visit:');
        console.log('🔗 https://polygonscan.com/token/' + CONTRACT_ADDRESS + '#balances');
    } catch (error) {
        console.error('Initialization error:', error);
        showError('Failed to initialize dashboard. Please refresh the page.');
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('prevPage')?.addEventListener('click', () => changePage(-1));
    document.getElementById('nextPage')?.addEventListener('click', () => changePage(1));

    // Smooth scroll for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Update active state
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// Load token statistics
async function loadTokenStats() {
    try {
        const totalSupply = await contract.totalSupply();
        const decimals = await contract.decimals();

        const formattedSupply = ethers.utils.formatUnits(totalSupply, decimals);

        // Update UI
        document.getElementById('totalSupply').textContent = formatNumber(formattedSupply);

        // Fetch additional stats
        await fetchPolygonScanStats();

    } catch (error) {
        console.error('Error loading token stats:', error);
        document.getElementById('totalSupply').textContent = 'Error loading';
    }
}

// Fetch stats from PolygonScan API
async function fetchPolygonScanStats() {
    try {
        // Using mock data for now
        const mockData = {
            totalHolders: 1247,
            transactions24h: 342,
            marketCap: 1250000
        };

        document.getElementById('totalHolders').textContent = formatNumber(mockData.totalHolders);
        document.getElementById('transactions24h').textContent = formatNumber(mockData.transactions24h);
        document.getElementById('marketCap').textContent = '$' + formatNumber(mockData.marketCap);

        // Update distribution chart
        updateDistributionChart();

    } catch (error) {
        console.error('Error fetching PolygonScan stats:', error);
    }
}

// Load holders data
async function loadHoldersData() {
    try {
        // Note: Real-time holder data from Etherscan/PolygonScan requires API Pro subscription
        // Free tier API doesn't support tokenholderlist endpoint
        // Using simulated data based on typical token distribution patterns

        console.log('ℹ️ Note: Real-time holder data requires Etherscan API Pro ($199/month)');
        console.log('📊 Displaying simulated holder distribution data');
        console.log('💡 For real data, visit: https://polygonscan.com/token/' + CONTRACT_ADDRESS + '#balances');

        const mockHolders = generateMockHolders(100);
        displayHolders(mockHolders);
    } catch (error) {
        console.error('Error loading holders:', error);
        showError('Failed to load holders data');
    }
}

// Generate mock holders data
function generateMockHolders(count) {
    const holders = [];
    let remainingSupply = 1000000;

    for (let i = 0; i < count; i++) {
        const balance = remainingSupply * (Math.random() * 0.1 + 0.01) / (count - i);
        remainingSupply -= balance;

        holders.push({
            rank: i + 1,
            address: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
            balance: balance,
            percentage: (balance / 1000000) * 100,
            transactions: Math.floor(Math.random() * 500) + 10
        });
    }

    return holders.sort((a, b) => b.balance - a.balance);
}

// Display holders in table
function displayHolders(holders) {
    const tbody = document.getElementById('holdersTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    const start = (currentPage - 1) * holdersPerPage;
    const end = start + holdersPerPage;
    const pageHolders = holders.slice(start, end);

    pageHolders.forEach(holder => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>#${holder.rank}</strong></td>
            <td>
                <code style="font-size: 12px;">${truncateAddress(holder.address)}</code>
            </td>
            <td><strong>${formatNumber(holder.balance.toFixed(2))} KLW</strong></td>
            <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="flex: 1; height: 6px; background: var(--bg-card); border-radius: 3px; overflow: hidden;">
                        <div style="height: 100%; background: var(--gradient-blue); width: ${holder.percentage}%;"></div>
                    </div>
                    <span>${holder.percentage.toFixed(2)}%</span>
                </div>
            </td>
            <td>${formatNumber(holder.transactions)}</td>
            <td>
                <a href="https://polygonscan.com/address/${holder.address}" target="_blank" 
                   style="color: var(--primary-blue); text-decoration: none; font-weight: 500;">
                    View →
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Update pagination
    const totalPages = Math.ceil(holders.length / holdersPerPage);
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('totalPages').textContent = totalPages;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

// Change page
function changePage(delta) {
    currentPage += delta;
    loadHoldersData();
    document.querySelector('#holders').scrollIntoView({ behavior: 'smooth' });
}

// Load recent transactions
async function loadRecentTransactions() {
    try {
        const transactionsList = document.getElementById('transactionsList');
        if (!transactionsList) return;

        const mockTransactions = generateMockTransactions(10);

        transactionsList.innerHTML = '';

        mockTransactions.forEach(tx => {
            const item = document.createElement('div');
            item.className = 'transaction-item';
            item.innerHTML = `
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                        <div style="width: 40px; height: 40px; border-radius: 8px; background: var(--gradient-blue); display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <div>
                            <div style="font-weight: 600; margin-bottom: 4px;">
                                Transfer ${formatNumber(tx.amount)} KLW
                            </div>
                            <div style="font-size: 13px; color: var(--text-gray);">
                                From ${truncateAddress(tx.from)} → To ${truncateAddress(tx.to)}
                            </div>
                        </div>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 13px; color: var(--text-gray); margin-bottom: 4px;">
                        ${tx.timeAgo}
                    </div>
                    <a href="https://polygonscan.com/tx/${tx.hash}" target="_blank" 
                       style="color: var(--primary-blue); text-decoration: none; font-size: 13px; font-weight: 500;">
                        View TX →
                    </a>
                </div>
            `;
            transactionsList.appendChild(item);
        });

    } catch (error) {
        console.error('Error loading transactions:', error);
    }
}

// Generate mock transactions
function generateMockTransactions(count) {
    const transactions = [];
    const timeUnits = ['minutes', 'hours', 'days'];

    for (let i = 0; i < count; i++) {
        const unit = timeUnits[Math.floor(Math.random() * timeUnits.length)];
        const value = Math.floor(Math.random() * 59) + 1;

        transactions.push({
            hash: '0x' + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
            from: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
            to: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
            amount: (Math.random() * 10000).toFixed(2),
            timeAgo: `${value} ${unit} ago`
        });
    }

    return transactions;
}

// Update distribution chart
function updateDistributionChart() {
    const ctx = document.getElementById('distributionChart');
    if (!ctx) return;

    const top10 = 45.5;
    const top50 = 32.3;
    const others = 22.2;

    document.getElementById('top10Percentage').textContent = top10 + '%';
    document.getElementById('top50Percentage').textContent = top50 + '%';
    document.getElementById('othersPercentage').textContent = others + '%';

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Top 10 Holders', 'Top 11-50 Holders', 'Others'],
            datasets: [{
                data: [top10, top50, others],
                backgroundColor: [
                    'rgba(0, 82, 255, 0.8)',
                    'rgba(0, 51, 204, 0.8)',
                    'rgba(59, 130, 246, 0.8)'
                ],
                borderColor: [
                    'rgba(0, 82, 255, 1)',
                    'rgba(0, 51, 204, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 15, 18, 0.95)',
                    titleColor: '#FFFFFF',
                    bodyColor: '#B0B0B0',
                    borderColor: 'rgba(0, 82, 255, 0.3)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });
}

// Copy address to clipboard
function copyAddress() {
    const address = document.getElementById('contractAddress').textContent;
    navigator.clipboard.writeText(address).then(() => {
        const btn = event.target.closest('.copy-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        btn.style.color = '#10B981';

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = '';
        }, 2000);
    });
}

// Utility functions
function formatNumber(num) {
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2
    }).format(num);
}

function truncateAddress(address) {
    if (!address) return '';
    return address.slice(0, 6) + '...' + address.slice(-4);
}

function showError(message) {
    console.error(message);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
