# Kliwon (KLW) - Smart Asset Planting

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cindolab/kliwon)

Website resmi untuk Token Kliwon (KLW) di jaringan Polygon. Proyek ini dikembangkan oleh **CindoLab** sebagai platform inovatif untuk "menanam" aset digital dan memanen hasil berupa berbagai cryptocurrency (KLW, POL, WETH, WBTC).

🔗 **Live Website:** [https://kliwon.cindo.workers.dev](https://kliwon.cindo.workers.dev)  
*(Juga terintegrasi dengan Cloudflare Workers)*

## 🌟 Fitur Utama

- **Desain Premium:** Antarmuka modern dengan tema "CindoLab Blue" dan Glassmorphism.
- **Informasi Token:** Detail lengkap tentang kontrak KLW dan tokenomics.
- **Ekosistem Planting:** Penjelasan visual tentang mekanisme staking dan reward.
- **Dashboard Holders:** Monitor distribusi token dan top holders secara real-time. [Lihat Dashboard →](/holders)
- **Open Source:** Kode sumber website ini terbuka untuk transparansi dan kolaborasi.

## 🚀 Teknologi

- **HTML5 & CSS3:** Struktur dan gaya responsif tanpa framework berat.
- **Cloudflare Workers:** Hosting serverless yang cepat dan aman.
- **SVG Graphics:** Aset visual ringan dan tajam.

## 🔗 Tautan Penting

- **Smart Contract:** [0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8](https://polygonscan.com/address/0xd4a3F69399eA250AaA4Ee62Ec5271002E51EeCd8)
- **GitHub Repository:** [https://github.com/cindolab/kliwon](https://github.com/cindolab/kliwon)
- **Twitter/X:** [@cindolab](https://twitter.com/cindolab)
- **Telegram:** [@cindolab](https://t.me/cindolab)
- **Instagram:** [@cindolabot](https://instagram.com/cindolabot)
- **Facebook:** [CindoLab](https://facebook.com/cindolab)

## 🛠️ Cara Menjalankan Secara Lokal

1.  Clone repository:
    ```bash
    git clone https://github.com/cindolab/kliwon.git
    cd kliwon
    ```

2.  Install dependencies (jika menggunakan Wrangler):
    ```bash
    npm install
    ```

3.  Jalankan server pengembangan:
    ```bash
    npx wrangler dev
    ```

4.  Akses dashboard holders:
    - Buka browser ke `http://localhost:8787/holders`
    - Atau buka file `holders/index.html` secara langsung

## 📊 Dashboard Holders

Dashboard interaktif untuk monitoring pemegang token KLW dengan fitur:

- **Token Statistics:** Total supply, holders, transaksi 24h, market cap
- **Top Holders Table:** Daftar pemegang terbesar dengan persentase kepemilikan
- **Distribution Chart:** Visualisasi distribusi token
- **Recent Transactions:** Transfer token terbaru
- **Web3 Integration:** Koneksi wallet MetaMask untuk cek balance

📁 Lokasi: `/holders` | 🔗 [Dokumentasi Lengkap](/holders/README.md)

## 📄 Lisensi

Copyright © 2026 CindoLab. All rights reserved.