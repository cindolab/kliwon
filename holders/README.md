# KLW Token Holders Dashboard

Dashboard untuk monitoring pemegang token dan distribusi **Kliwon Token (KLW)** di Polygon Network.

![KLW Logo](logo.png)

## 📊 Fitur

- **Token Statistics**: Menampilkan total supply, jumlah holder, transaksi 24 jam, dan market cap
- **Top Holders**: Daftar pemegang token terbesar dengan persentase kepemilikan
- **Distribution Chart**: Visualisasi distribusi token menggunakan Chart.js
- **Recent Transactions**: Transaksi transfer token terbaru
- **Wallet Integration**: Koneksi dengan MetaMask untuk melihat balance KLW
- **Responsive Design**: Tampilan optimal di semua perangkat

## 🚀 Live Demo

Buka `index.html` di browser untuk melihat dashboard.

## 📝 Informasi Token

- **Nama**: Kliwon Token
- **Symbol**: KLW
- **Network**: Polygon (MATIC)
- **Contract Address**: `0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8`
- **Explorer**: [PolygonScan](https://polygonscan.com/token/0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8)

## 🛠️ Teknologi

- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan glassmorphism dan gradient effects
- **JavaScript (ES6+)** - Logika aplikasi
- **Ethers.js** - Interaksi dengan blockchain Polygon
- **Chart.js** - Visualisasi data distribusi token
- **Web3** - Koneksi wallet MetaMask

## 📦 Struktur File

```
klw-holders/
├── index.html          # Halaman utama dashboard
├── styles.css          # Styling dan design system
├── app.js              # JavaScript logic dan Web3 integration
├── logo.png            # Logo KLW Token
└── README.md           # Dokumentasi
```

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#9333EA` - `#7C3AED`
- **Gold Accent**: `#F59E0B` - `#D97706`
- **Blue**: `#3B82F6` - `#2563EB`
- **Green**: `#10B981`

### Typography
- **Primary Font**: Inter
- **Display Font**: Space Grotesk

## 🔧 Setup & Installation

1. **Clone repository**:
```bash
git clone <repository-url>
cd klw-holders
```

2. **Buka di browser**:
```bash
# Buka index.html langsung di browser
# Atau gunakan live server
npx serve .
```

3. **Konfigurasi API (Opsional)**:
   - Dapatkan API key dari [PolygonScan](https://polygonscan.com/apis)
   - Update `POLYGONSCAN_API_KEY` di `app.js`

## 💡 Penggunaan

### Melihat Token Statistics
Dashboard otomatis memuat statistik token dari blockchain saat halaman dibuka.

### Koneksi Wallet
1. Klik tombol "Hubungkan Wallet"
2. Approve koneksi di MetaMask
3. Pastikan network sudah di Polygon Mainnet
4. Balance KLW Anda akan ditampilkan

### Navigasi
- **Overview**: Statistik umum token
- **Holders**: Daftar top holders
- **Distribusi**: Chart distribusi token
- **Transaksi**: Transfer terbaru

## 🔗 Links

- [PolygonScan Contract](https://polygonscan.com/token/0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8)
- [Polygon Network](https://polygon.technology/)
- [Ethers.js Documentation](https://docs.ethers.org/)
- [Chart.js Documentation](https://www.chartjs.org/)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🚧 Development

### Mock Data
Saat ini dashboard menggunakan mock data untuk:
- Daftar holders
- Transaksi terbaru
- Statistik 24 jam

Untuk data real-time, integrasikan dengan:
- PolygonScan API
- The Graph Protocol
- Moralis API
- Alchemy API

### Customization

**Mengubah warna tema**:
Edit variabel CSS di `styles.css`:
```css
:root {
    --purple-primary: #9333EA;
    --gold-primary: #F59E0B;
    /* ... */
}
```

**Menambah fitur baru**:
1. Update HTML di `index.html`
2. Tambah styling di `styles.css`
3. Implementasi logic di `app.js`

## 📄 License

MIT License - bebas digunakan untuk proyek personal maupun komersial.

## 👨‍💻 Author

Dashboard ini dibuat untuk monitoring token KLW di Polygon Network.

## 🙏 Credits

- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Icons**: Feather Icons (SVG)
- **Charts**: Chart.js
- **Web3**: Ethers.js

---

**Contract Address**: `0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8`

**Network**: Polygon Mainnet

**Made with 💜 for KLW Token Community**
