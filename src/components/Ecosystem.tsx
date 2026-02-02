import logo from '../assets/logo.svg'

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="ecosystem-grid">
                    <div>
                        <h2>Ekosistem <span className="text-gradient">Panen Beragam</span></h2>
                        <p style={{ color: 'var(--text-gray)', marginBottom: '2rem' }}>
                            Tidak seperti token lain yang hanya memberikan satu jenis reward, Ekosistem Kliwon dirancang
                            untuk mendiversifikasi portofolio Anda secara otomatis.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--primary-blue)' }}>✓</span> Dapatkan <strong>KLW (Kliwon)</strong>
                                sebagai token utama.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--primary-blue)' }}>✓</span> Bonus panen dalam <strong>POL
                                    (Polygon)</strong>.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--primary-blue)' }}>✓</span> Potensi hasil dalam <strong>WETH &
                                    WBTC</strong>.
                            </li>
                        </ul>
                        <div className="token-list">
                            <span className="token-tag">KLW</span>
                            <span className="token-tag">POL</span>
                            <span className="token-tag">WETH</span>
                            <span className="token-tag">WBTC</span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                background: 'rgba(0,82,255,0.05)',
                                padding: '3rem',
                                borderRadius: '50%',
                                border: '2px dashed rgba(0,82,255,0.3)',
                                display: 'inline-block'
                            }}>
                            <img src={logo} alt="Core Ecosystem" style={{ width: '150px', height: '150px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
