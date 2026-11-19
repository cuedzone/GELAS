# KisahNusantara 🇮🇩

> **Platform Storytelling Interaktif Sejarah, Budaya, dan Legenda Nusantara**  
> Proyek web statis berbasis arsitektur client-side tanpa database, dikembangkan secara kolaboratif menggunakan alur kerja modern Git & GitHub.

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen?style=flat-square&logo=github)](https://cuedzone.github.io/GELAS/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantik-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-Batik%20Tokens-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

🌐 **Akses Live Website:** [https://cuedzone.github.io/GELAS/](https://cuedzone.github.io/GELAS/)

---

## 📖 1. Tentang Proyek

**KisahNusantara** adalah portal storytelling interaktif yang dirancang untuk melestarikan dan menghidupkan kembali kearifan lokal, sejarah kebangsaan, tradisi adat, serta mitologi rakyat nusantara. Format penyajian memanfaatkan kartu visual ringkas (*story cards*) dan halaman narasi mendalam yang nyaman dibaca di berbagai ukuran layar peramban.

Proyek ini dikembangkan untuk memenuhi tugas mata kuliah **Kerjasama Digital** dengan mempraktikkan metodologi *feature branching*, *code review*, *pull request review*, dan *Continuous Deployment* via GitHub Pages.

---

## 👥 2. Tim Pengembang & Struktur Peran

| Nama | Peran | Tanggung Jawab & Kepemilikan File |
|---|---|---|
| **Edy Sutanto** | **Kapten** / PM & Integrator | Manajemen repositori, integrasi kode, Beranda (`index.html`), penanganan 404 (`404.html`), konfigurasi `.github/`, dan *deployment*. |
| **Alvin Maulana** | Konten & Manajemen Data | Riset dan kurasi narasi cerita nusantara (`data/stories.json`), atribusi lisensi terbuka (`docs/sumber.md`), halaman Tentang Tim (`tentang.html`), dan kurasi visual. |
| **Ahmad Riki Safudin** | UI/UX & Desain Antarmuka | Sistem desain, tema token warna ultra-modern monokrom (`css/style.css`), interaktivitas navigasi responsif (`js/nav.js`), aset UI (`images/ui/`), dan markup halaman. |
| **Ach. Sultoni Ichwana** | Logika JS & Dokumentasi | Pengembangan seluruh modul logika JavaScript (`js/main.js`, `js/filter.js`, `js/detail.js`), sanitasi data, pengujian fungsional, dan penyusunan dokumentasi (`README.md`, `docs/laporan/`, `docs/presentasi/`). |

---

## ✨ 3. Fitur Utama Website

1. 🏛️ **Beranda Dinamis (`index.html`):**
   - Hero banner bertema naskah kuno nusantara.
   - Jelajah kategori cepat (Sejarah, Budaya, Legenda).
   - Render otomatis kartu cerita unggulan (*featured stories*) dari data JSON.
2. 📜 **Katalog & Filter Cerita (`cerita.html`):**
   - Grid kartu cerita adaptif sesuai kategori yang dipilih.
   - **Pencarian Real-Time:** Mencari kata kunci pada judul, daerah, ringkasan, maupun tag cerita.
   - **Debounce Input (250ms):** Mengurangi beban komputasi peramban saat pengguna mengetik cepat.
   - **Status Dinamis & Empty State:** Indikator jumlah hasil ditemukan (`#result-count`) serta pesan ramah ketika kata kunci tidak ditemukan (`#empty-state`).
3. 📖 **Halaman Narasi Lengkap (`detail.html?id=`):**
   - Menampilkan artikel cerita berdasarkan parameter query string `id`.
   - Pemformatan otomatis paragraf narasi dari data multiline string.
   - Daftar sumber referensi dan pustaka primer/sekunder.
   - Rekomendasi otomatis **Cerita Terkait** (*Related Stories*) berdasarkan kesamaan kategori.
   - Penanganan rute cerdas: menampilkan status *Cerita Tidak Ditemukan* jika `id` kosong atau tidak terdaftar.
4. 📱 **Desain Ramah Seluler & Aksesibilitas:**
   - Navigasi responsif (Hamburger Menu pada layar < 768px).
   - Tipografi yang nyaman dibaca (*Playfair Display* & *Inter*).
   - Kontras warna teks dan latar belakang memenuhi standar WCAG AA (minimal 4.5:1).
5. 🛡️ **Keamanan Data (Anti-XSS):**
   - Seluruh teks yang disuntikkan ke DOM disanitasi menggunakan fungsi `escapeHTML()`.

---

## 🏗️ 4. Arsitektur & Logika JavaScript (Modul Toni)

Sistem logika dibangun secara modular menggunakan JavaScript murni (*Vanilla ES6+*) tanpa ketergantungan library pihak ketiga:

```text
js/
├── main.js      # Core Engine: loadStories(), escapeHTML(), createCard(), renderCards(), getRelated(), initHome()
├── filter.js    # Katalog & Filter: filterStories(), debounce(), initList()
├── detail.js    # Halaman Pembaca: initDetail(), formatting paragraf, rekomendasi terkait, 404 handler
└── nav.js       # UI Utility: Toggle menu responsif & penanganan aria-expanded
```

### Alur Kerja Data (*Data Flow*)
```
[data/stories.json] 
        │
        ▼ (fetch asinkron)
[loadStories() di js/main.js]
        ├───> index.html    ──> filter featured:true ──> #featured-grid
        ├───> cerita.html   ──> filterStories()     ──> #story-grid
        └───> detail.html   ──> getStoryById()      ──> #story-detail & #related-grid
```

---

## 📋 5. Spesifikasi Kontrak Hook DOM (PRD Bagian 9.4)

Untuk menjaga konsistensi antara pengembang antarmuka (Riki/Edy) dan logika script (Toni), ID dan selector berikut bersifat permanen:

| Halaman | Selector / Hook | Fungsi Komponen |
|---|---|---|
| `index.html` | `#featured-grid` | Penampung 3 kartu cerita unggulan |
| `cerita.html` | `#search-input` | Kolom input pencarian teks |
| `cerita.html` | `.filter-btn[data-kategori]` | Tombol filter kategori (*Semua, Sejarah, Budaya, Legenda*) |
| `cerita.html` | `#story-grid` | Grid kontainer kartu cerita |
| `cerita.html` | `#result-count` | Label informasi jumlah hasil pencarian/filter |
| `cerita.html` | `#empty-state` | Blok pemberitahuan hasil kosong (`hidden`) |
| `detail.html` | `#story-detail` | Kontainer utama informasi artikel |
| `detail.html` | `#story-title`, `#story-category`, `#story-region` | Elemen metadata cerita |
| `detail.html` | `#story-image`, `#story-content`, `#story-sources` | Gambar, narasi paragraf, dan daftar referensi |
| `detail.html` | `#related-grid` | Grid penampung rekomendasi cerita terkait |
| `detail.html` | `#not-found` | Tampilan status cerita tidak ditemukan (`hidden`) |

---

## 🚀 6. Panduan Menjalankan secara Lokal

Karena aplikasi memuat data asinkron via `fetch("data/stories.json")`, peramban memerlukan server lokal untuk menghindari pembatasan keamanan *CORS / Local File Policy*.

### Opsi A: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder proyek di **Visual Studio Code**:
   ```bash
   code .
   ```
2. Pastikan ekstensi **Live Server** (`ritwickdey.liveserver`) telah terpasang.
3. Klik kanan pada berkas `index.html` → Pilih **Open with Live Server** (atau klik ikon **Go Live** di status bar kanan bawah).
4. Peramban akan otomatis terbuka di `http://127.0.0.1:5500/` atau `http://localhost:5500/`.

### Opsi B: Menggunakan PowerShell Built-in Server
Jalankan perintah berikut di PowerShell dari direktori akar proyek:
```powershell
powershell -ExecutionPolicy Bypass -File scratch/server.ps1
```
Akses di peramban: `http://localhost:5500/`.

---

## 🧪 7. Checklist Pengujian Fungsional

- [x] **Beranda (`index.html`):** Memuat 2-3 kartu cerita unggulan dengan badge kategori dan gambar yang tepat.
- [x] **Pencarian (`cerita.html`):** Responsif terhadap kata kunci pencarian, teks jumlah hasil terbarukan, dan debounce bekerja mulus.
- [x] **Filter Kategori (`cerita.html`):** Tombol kategori menambahkan kelas `.is-active` dan menyaring daftar kartu sesuai topik.
- [x] **Status Kosong (`cerita.html`):** Ketika kata kunci tidak ditemukan, kartu dikosongkan dan `#empty-state` tampil.
- [x] **Detail Cerita (`detail.html?id=1`):** Menampilkan judul, badge, asal daerah, gambar, pemecahan paragraf cerita, dan daftar pustaka.
- [x] **Rekomendasi Terkait (`detail.html`):** Rekomendasi cerita muncul di bagian bawah artikel.
- [x] **Penanganan Error (`detail.html?id=999`):** Menampilkan blok `#not-found` dengan tautan kembali ke katalog.
- [x] **Konsol Bersih:** Tidak ada unhandled runtime error pada peramban.

---

## 📁 8. Struktur Folder Repositori

```text
GELAS/
├── index.html                  # Halaman utama / Beranda
├── cerita.html                 # Katalog cerita, fitur pencarian & filter
├── detail.html                 # Halaman baca detail narasi cerita
├── tentang.html                # Profil tim dan tujuan proyek
├── 404.html                    # Halaman fallback rute error
├── PRD.md                      # Dokumen Product Requirement Document (PRD)
├── README.md                   # Dokumentasi resmi proyek
├── .gitignore                  # Berkas pengecualian Git
├── .github/
│   ├── pull_request_template.md# Standar checklist Pull Request tim
│   └── ISSUE_TEMPLATE/
│       └── tugas.md            # Template pembagian tugas tim
├── css/
│   └── style.css               # Desain antarmuka, tata letak, & CSS variables
├── js/
│   ├── main.js                 # Pemuatan data umum, kartu, & beranda
│   ├── filter.js               # Logika filter kategori & pencarian debounce
│   ├── detail.js               # Logika rendering cerita detail & terkait
│   └── nav.js                  # Navigasi responsif (hamburger menu)
├── data/
│   └── stories.json            # Koleksi data cerita (JSON)
├── images/
│   ├── prambanan.jpg           # Foto aset Candi Prambanan
│   ├── borobudur.jpg           # Foto aset Candi Borobudur
│   └── ui/                     # Aset antarmuka & ilustrasi
├── docs/
│   ├── sumber.md               # Daftar pustaka narasi & atribusi lisensi gambar
│   ├── laporan/                # Laporan akhir kerjasama digital
│   └── presentasi/             # Materi dan naskah presentasi kelompok
└── latihan/                    # Latihan Git/PR pertama tiap anggota
    ├── alvin.md
    ├── riki.md
    └── toni.md
```

---

## 🤝 9. Alur Kolaborasi Tim (Git Workflow)

1. **Sinkronisasi Branch:**
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Membuat Branch Fitur:**
   ```bash
   git checkout -b feature/nama-fitur
   ```
3. **Standar Pesan Commit:**
   - `feat:` Penambahan fitur baru (misal: logika pencarian).
   - `fix:` Perbaikan bug kode atau tampilan.
   - `docs:` Pembaruan dokumentasi atau panduan.
   - `style:` Pembaruan styling atau perapihan layout CSS.
   - `data:` Penambahan atau revisi data cerita JSON.
4. **Pengajuan Pull Request:**
   - Lakukan push branch ke remote: `git push -u origin feature/nama-fitur`.
   - Buka Pull Request di GitHub, lengkapi formulir checklist pada template PR, dan tandai kapten (**Edy**) untuk direview sebelum merge ke `main`.

---

## 📄 10. Lisensi & Hak Cipta

Seluruh konten teks disusun dengan gaya penceritaan orisinal berbasis riset sejarah dan cerita rakyat nusantara untuk keperluan edukasi. Seluruh aset gambar merujuk pada lisensi terbuka (*Creative Commons / Public Domain*) dengan atribusi lengkap pada [docs/sumber.md](docs/sumber.md).
