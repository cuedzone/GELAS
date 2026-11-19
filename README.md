# KisahNusantara 🇮🇩

> **Storytelling Sejarah dan Budaya Nusantara**  
> Proyek website statis interaktif berbasis web tanpa database yang dikembangkan secara kolaboratif menggunakan Git & GitHub.

---

## 📖 Tentang Proyek

**KisahNusantara** adalah platform cerita digital yang menghadirkan kekayaan cerita sejarah, budaya tradisi, dan legenda rakyat dari berbagai penjuru nusantara dalam format kartu visual dan narasi bacaan yang nyaman.

Proyek ini dibangun untuk memenuhi tugas **Kerjasama Digital** dengan menerapkan alur kerja modern berbasis Git: branching, pull request, code review, dan continuous deployment via GitHub Pages.

---

## 👥 Tim Pengembang

| Nama | Peran | Tugas Utama |
|---|---|---|
| **Edy Sutanto** | **Kapten** / PM & Integrator | Manajemen repo, integrasi, kerangka awal, Beranda, deployment |
| **Riki** | UI/UX & Tampilan | Desain antarmuka, CSS layout & tokens, responsif, navigasi |
| **Alvin** | Konten & Data | Riset 10+ cerita, kurasi gambar terbuka, penyusunan `stories.json`, halaman Tentang |
| **Toni** | Logika JS & Dokumentasi | Render data kartu, pencarian & filter, detail cerita, dokumentasi |

---

## ✨ Fitur Utama

- 🏛️ **Beranda Interaktif (`index.html`):** Hero banner pengantar, eksplorasi kategori, dan 3 cerita unggulan (*featured*).
- 📜 **Daftar Cerita (`cerita.html`):** Grid kartu cerita dengan dukungan pencarian kata kunci dan filter kategori (Sejarah, Budaya, Legenda).
- 📖 **Halaman Detail Cerita (`detail.html?id=`):** Bacaan narasi lengkap, atribusi sumber terpercaya, dan rekomendasi cerita terkait.
- 👥 **Tentang Tim (`tentang.html`):** Profil anggota pengembang dan transparansi sumber referensi.
- 📱 **Desain Responsif:** Tampilan optimal pada layar HP (360px), tablet (768px), hingga desktop (1280px).
- 🚀 **Online di GitHub Pages:** Dapat diakses langsung melalui peramban web tanpa instalasi server lokal yang rumit.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantik standar web.
- **CSS3:** Flexbox, Grid, dan CSS Variables (tema warna naskah kuno & batik).
- **JavaScript (ES6+):** Logika filter, pencarian (debounce), dan manipulasi DOM murni tanpa framework.
- **Penyimpanan Data:** `data/stories.json` yang dimuat secara asinkron menggunakan `fetch()`.
- **Tipografi:** Google Fonts (*Playfair Display* & *Inter*).
- **Version Control & Hosting:** Git, GitHub, dan GitHub Pages.

---

## 🚀 Cara Menjalankan secara Lokal

1. **Clone repositori:**
   ```bash
   git clone https://github.com/USERNAME/kisahnusantara.git
   cd kisahnusantara
   ```

2. **Buka di Visual Studio Code:**
   ```bash
   code .
   ```

3. **Jalankan dengan Live Server:**
   - Pasang ekstensi **Live Server** di VS Code.
   - Klik kanan pada file `index.html` → pilih **Open with Live Server**.
   - > **Penting:** Jangan membuka file HTML langsung dengan klik ganda (`file:///`), karena peramban akan memblokir pembacaan data `fetch("data/stories.json")`.

---

## 📁 Struktur Folder Proyek

```text
kisahnusantara/
├── index.html          # Beranda
├── cerita.html         # Daftar cerita + filter + pencarian
├── detail.html         # Halaman detail satu cerita
├── tentang.html        # Halaman profil tim
├── 404.html            # Halaman penanganan 404
├── PRD.md              # Dokumen kebutuhan produk utama
├── README.md           # Dokumentasi proyek
├── .gitignore          # Daftar file yang diabaikan Git
├── css/
│   └── style.css       # Style utama & design tokens
├── js/
│   ├── main.js         # Fetch data umum & logika Beranda
│   ├── filter.js       # Pencarian & filter kategori
│   ├── detail.js       # Rendering detail cerita & cerita terkait
│   └── nav.js          # Menu navigasi & tema
├── data/
│   └── stories.json    # Basis data cerita (JSON)
├── images/
│   └── ui/             # Aset visual antarmuka & logo
├── docs/
│   ├── sumber.md       # Daftar pustaka & atribusi lisensi gambar
│   ├── laporan/        # Dokumen laporan tugas
│   └── presentasi/     # Materi presentasi
├── latihan/            # Latihan Pull Request pertama anggota
└── .github/            # Template PR & Issue
```

---

## 📄 Lisensi & Hak Cipta

Seluruh konten narasi cerita ditulis ulang menggunakan kata-kata sendiri untuk tujuan edukasi. Gambar yang digunakan bersumber dari repositori domain publik atau lisensi Creative Commons dengan atribusi lengkap pada `docs/sumber.md`.
