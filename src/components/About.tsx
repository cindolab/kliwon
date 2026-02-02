export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <h2>Mengapa Memilih <span className="text-gradient">Kliwon?</span></h2>
                    <p>Dikembangkan oleh CindoLab, Kliwon menghadirkan solusi pertanian aset digital yang transparan dan
                        efisien.</p>
                </div>
                <div className="grid-3">
                    <div className="card">
                        <div className="card-icon">🌱</div>
                        <h3>Pertanian Digital</h3>
                        <p>Konsep unik "Planting" di mana aset Anda dikunci dalam smart contract aman untuk menghasilkan
                            yield harian.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">⚡</div>
                        <h3>Kecepatan Polygon</h3>
                        <p>Dibangun di atas jaringan Polygon (POS) untuk transaksi super cepat dengan biaya gas yang sangat
                            rendah.</p>
                    </div>
                    <div className="card">
                        <div className="card-icon">🔒</div>
                        <h3>Keamanan Terjamin</h3>
                        <p>Smart contract yang diaudit dan transparan, memastikan keamanan aset digital Anda setiap saat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
