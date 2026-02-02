export default function Tokenomics() {
    const contractAddress = '0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        alert('Alamat disalin!');
    };

    return (
        <section id="tokenomics" className="section">
            <div className="container">
                <div className="section-header">
                    <h2>Informasi <span className="text-gradient">Token</span></h2>
                    <p>Verifikasi detail token Kliwon secara langsung di blockchain.</p>
                </div>

                <div className="contract-box" id="contract">
                    <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginBottom: '0.5rem' }}>SMART CONTRACT
                            ADDRESS (POLYGON)</div>
                        <div className="address-text">{contractAddress}</div>
                    </div>
                    <button className="copy-btn" onClick={copyToClipboard}>SALIN</button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href={`https://polygonscan.com/address/${contractAddress}`} target="_blank" rel="noopener noreferrer"
                        className="btn-outline" style={{ borderRadius: '12px', fontSize: '0.9rem' }}>
                        Lihat di PolygonScan ↗
                    </a>
                </div>
            </div>
        </section>
    )
}
