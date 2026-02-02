import logo from '../assets/logo.svg'

export default function Footer() {
    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <div className="logo-wrapper" style={{ marginBottom: '1rem' }}>
                            <img src={logo} alt="Logo" style={{ width: '32px' }} />
                            <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>CindoLab</span>
                        </div>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
                            Membangun masa depan keuangan digital dengan solusi blockchain yang inovatif dan terpercaya.
                        </p>
                        <div className="social-icons">
                            <a href="https://github.com/cindolab/kliwon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/cindolab" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://t.me/cindolab" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-2.02-1.23-2.61-1.63-.68-.46-.08-.71.42-1.21.13-.13 2.38-2.18 2.42-2.37.04-.19.01-.35-.2-.44s-.53-.02-.76.03c-.32.07-5.12 3.23-5.22 3.31-.38.29-.76.43-1.08.42-.36-.01-1.06-.2-1.58-.37-.63-.22-1.13-.34-1.08-.72.02-.19.29-.39.79-.59 3.1-1.35 5.17-2.25 6.21-2.69 2.96-1.28 3.58-1.5 3.98-1.51.09 0 .28.02.41.11.1.08.13.19.14.28-.01.07.01.2-.01.21z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/cindolabot" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com/cindolab" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Produk</h4>
                        <ul>
                            <li><a href="#">Tokens</a></li>
                            <li><a href="#">Staking</a></li>
                            <li><a href="#">Farming</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Tentang</h4>
                        <ul>
                            <li><a href="#">Tim CindoLab</a></li>
                            <li><a href="#">Roadmap</a></li>
                            <li><a href="#">Whitepaper</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div style={{
                        textAlign: 'left',
                        marginBottom: '2rem',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                        color: 'var(--text-gray)'
                    }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Penafian</p>
                        <p style={{ marginBottom: '1rem' }}>Informasi yang tercantum di sini disediakan hanya untuk tujuan
                            informasi dan diskusi dan tidak dimaksudkan sebagai rekomendasi untuk investasi saham berbasis
                            bitcoin, layanan, produk, atau saran lain apa pun. Setiap peluang investasi dan/atau produk atau
                            layanan yang ditampilkan di sini hanya akan diselesaikan sesuai dengan materi penawaran resmi
                            yang berisi detail lengkap mengenai risiko smart contract, investasi minimum, biaya, dan
                            pengeluaran dari transaksi tersebut.</p>

                        <p style={{ marginBottom: '1rem' }}>Ketentuan setiap produk, layanan, atau peluang investasi saham
                            berbasis bitcoin tertentu tercantum dalam dokumen konstituen yang berlaku dan mungkin berbeda
                            secara material dari yang disajikan dalam presentasi ini.</p>

                        <p style={{ marginBottom: '1rem' }}>"Aset di platform" mengacu pada jumlah dana yang disalurkan oleh
                            manajer investasi yang menggunakan perangkat lunak CindoLab, termasuk layanan administrasi dana
                            saham berbasis bitcoin.</p>
                    </div>
                    <p>&copy; 2026 CindoLab. Semua hak dilindungi.</p>
                </div>
            </div>
        </footer>
    )
}
