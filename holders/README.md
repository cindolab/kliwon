# KLW Token Holders Dashboard

> Real-time dashboard untuk monitoring pemegang token Kliwon (KLW) di Polygon Network

[![Live Demo](https://img.shields.io/badge/demo-live-blue)](https://kliwon.cindo.workers.dev/holders)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Polygon](https://img.shields.io/badge/network-Polygon-8247E5)](https://polygon.technology/)

## 🌟 Features

### 📊 Token Analytics
- **Real-time Statistics** - Total supply, holders, transaksi 24h, market cap
- **Distribution Chart** - Visualisasi distribusi token dengan Chart.js
- **Top Holders Table** - Daftar pemegang token terbesar dengan pagination
- **Recent Transactions** - Monitor transfer token terbaru

### 💼 Wallet Integration
- **Enhanced Wallet Provider** - Class-based architecture dengan ENS support
- **Multi-Wallet Support** - MetaMask, Trust Wallet, WalletConnect (coming soon)
- **ENS Resolution** - Otomatis menampilkan nama dan avatar ENS
- **Auto-Reconnect** - Koneksi otomatis saat reload halaman
- **Network Switching** - Otomatis switch ke Polygon Network

### 🎨 Modern UI/UX
- **CindoLab Blue Theme** - Matching dengan website utama
- **Glassmorphism Effects** - Modern glass-like design
- **Responsive Design** - Optimal di desktop, tablet, dan mobile
- **Smooth Animations** - Transisi dan hover effects yang halus
- **Loading States** - Shimmer animations untuk loading data

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- MetaMask atau Trust Wallet extension
- Koneksi internet

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/cindolab/kliwon.git
   cd kliwon/holders
   ```

2. **Open locally**
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js
   npx serve .
   
   # Atau buka langsung index.html di browser
   ```

3. **Visit dashboard**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
holders/
├── index.html              # Main dashboard page
├── styles.css              # Complete styling with blue theme
├── app.js                  # Dashboard logic & data loading
├── wallet-provider.js      # Enhanced wallet connection provider
├── logo.svg                # KLW token logo (SVG)
├── logo.png                # KLW token logo (PNG fallback)
└── README.md              # This file
```

## 🔧 Configuration

### Contract Address

Dashboard terhubung ke KLW token contract di Polygon:

```javascript
const CONTRACT_ADDRESS = '0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8';
```

### RPC Endpoint

Default menggunakan public Polygon RPC:

```javascript
const POLYGON_RPC = 'https://polygon-rpc.com';
```

Untuk performa lebih baik, gunakan RPC private:
- [Alchemy](https://www.alchemy.com/)
- [Infura](https://infura.io/)
- [QuickNode](https://www.quicknode.com/)

## 💻 Usage

### Connect Wallet

1. Klik tombol **"Hubungkan Wallet"** di header
2. Pilih wallet (MetaMask atau Trust Wallet)
3. Approve koneksi di wallet Anda
4. Dashboard akan menampilkan ENS name (jika ada) atau address

### View Holders

- Scroll ke section **"Top Holders"**
- Lihat ranking, address, balance, dan persentase
- Klik **"View →"** untuk melihat detail di PolygonScan
- Gunakan pagination untuk navigasi

### Check Distribution

- Section **"Distribusi Token"** menampilkan chart
- Breakdown: Top 10, Top 11-50, Others
- Interactive legend dengan persentase

### Monitor Transactions

- Section **"Transaksi Terbaru"** menampilkan transfer terkini
- Informasi: From/To address, amount, timestamp
- Klik **"View TX →"** untuk detail transaksi

## 🎨 Customization

### Change Theme Colors

Edit `styles.css`:

```css
:root {
    --primary-blue: #0052FF;      /* Main color */
    --primary-hover: #0040cc;     /* Hover state */
    --bg-dark: #050505;           /* Background */
    --bg-card: #0F0F12;           /* Card background */
}
```

### Update Logo

Replace `logo.svg` dengan logo Anda:

```html
<img src="logo.svg" alt="Your Logo" class="logo">
```

### Modify Contract

Update contract address di `app.js`:

```javascript
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';
```

## 🔌 API Integration

### PolygonScan API

Untuk data real-time, integrasikan PolygonScan API:

```javascript
const API_KEY = 'your-api-key';
const endpoint = `https://api.polygonscan.com/api?module=token&action=tokenholderlist&contractaddress=${CONTRACT_ADDRESS}&apikey=${API_KEY}`;

const response = await fetch(endpoint);
const data = await response.json();
```

Get API key: [PolygonScan API](https://polygonscan.com/apis)

### The Graph

Untuk query advanced, gunakan The Graph:

```graphql
{
  token(id: "0xd4a3f69399ea250aaa4ee62ec5271002e51eecd8") {
    totalSupply
    holders {
      address
      balance
    }
  }
}
```

## 🛠️ Development

### Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables
- **JavaScript (ES6+)** - Modern JS features
- **Ethers.js v5.7.2** - Web3 interactions
- **Chart.js v4.4.0** - Data visualization

### Code Style

- Use ES6+ features (arrow functions, async/await)
- Follow consistent naming conventions
- Comment complex logic
- Keep functions small and focused

### Testing

```bash
# Test wallet connection
1. Connect MetaMask
2. Verify ENS display
3. Check balance loading

# Test data loading
1. Verify stats display
2. Check chart rendering
3. Test table pagination

# Test responsiveness
1. Resize browser window
2. Test on mobile device
3. Verify all breakpoints
```

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }
```

## 🔐 Security

### Best Practices

- ✅ Never commit private keys or API keys
- ✅ Use environment variables for sensitive data
- ✅ Validate all user inputs
- ✅ Implement rate limiting for API calls
- ✅ Use HTTPS in production

### Wallet Security

- ✅ Never request private keys
- ✅ Only request account access
- ✅ Clear explanation before connection
- ✅ Respect user's rejection

## 🚀 Deployment

### GitHub Pages

```bash
# Push to GitHub
git remote add origin https://github.com/username/klw-holders.git
git push -u origin main

# Enable GitHub Pages
# Settings → Pages → Source: main branch
```

### Vercel

```bash
npm i -g vercel
cd holders
vercel
```

### Netlify

```bash
npm i -g netlify-cli
cd holders
netlify deploy
```

### Cloudflare Pages

1. Connect GitHub repository
2. Build settings: None (static site)
3. Deploy

## 📊 Performance

### Optimization Tips

- ✅ Lazy load images
- ✅ Minimize HTTP requests
- ✅ Use CDN for libraries
- ✅ Implement caching
- ✅ Compress assets

### Current Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 95+

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Dashboard**: [kliwon.cindo.workers.dev/holders](https://kliwon.cindo.workers.dev/holders)
- **Main Website**: [kliwon.cindo.workers.dev](https://kliwon.cindo.workers.dev)
- **Contract**: [PolygonScan](https://polygonscan.com/token/0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8)
- **GitHub**: [github.com/cindolab/kliwon](https://github.com/cindolab/kliwon)

## 👥 Community

- **Twitter**: [@cindolab](https://twitter.com/cindolab)
- **Telegram**: [@cindolab](https://t.me/cindolab)
- **Instagram**: [@cindolabot](https://instagram.com/cindolabot)
- **Facebook**: [CindoLab](https://facebook.com/cindolab)

## 📞 Support

Need help? Reach out:

- **Email**: support@cindolab.com
- **Issues**: [GitHub Issues](https://github.com/cindolab/kliwon/issues)
- **Telegram**: [@cindolab](https://t.me/cindolab)

## 🙏 Acknowledgments

- [Ethers.js](https://docs.ethers.org/) - Web3 library
- [Chart.js](https://www.chartjs.org/) - Charting library
- [Polygon](https://polygon.technology/) - Layer 2 scaling solution
- [Google Fonts](https://fonts.google.com/) - Outfit font family

---

**Made with 💙 by CindoLab**

© 2026 Kliwon Token. All rights reserved.
