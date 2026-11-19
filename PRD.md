# PRD — KisahNusantara

> **Storytelling Sejarah dan Budaya Nusantara**
> Website statis tanpa database, dikerjakan tim 4 orang memakai Git & GitHub.

| Item | Isi |
|---|---|
| **Versi dokumen** | 1.0 |
| **Status** | Disetujui tim, siap dikerjakan |
| **Pemilik dokumen** | Edy Sutanto (Kapten) |
| **Anggota** | Edy (Kapten), Riki, Alvin, Toni |
| **Terakhir diperbarui** | 19 November 2026 |
| **Deadline tugas** | ____ (isi oleh Kapten) |

> **PRD ini adalah sumber kebenaran utama.** Jika ada perbedaan dengan materi lain (misalnya dokumen Word panduan), **ikuti PRD ini**. Perubahan isi PRD hanya boleh lewat Pull Request yang disetujui Kapten.

---

## 0. PROTOKOL WAJIB UNTUK AI (BACA PERTAMA)

Bagian ini berlaku untuk **AI apa pun** (Claude, ChatGPT, Copilot, Gemini, dll.) yang menerima dokumen ini.

### 0.1 Aturan Gerbang Peran (Role Gate)

1. **Sebelum melakukan apa pun**, AI **wajib** bertanya persis seperti ini:

   > **Kamu sebagai siapa di tim KisahNusantara?**
   > 1. Edy (Kapten / Project Manager)
   > 2. Riki (UI/UX & Tampilan)
   > 3. Alvin (Konten & Data)
   > 4. Toni (Logika JavaScript & Dokumentasi)

2. AI **tidak boleh** menjawab pertanyaan lain, membuat kode, atau memberi saran **sebelum** pengguna menjawab.
3. Setelah dijawab, AI konfirmasi singkat: *"Oke, kamu [Nama], peran [Peran]."* lalu **hanya memuat SKILL milik orang tersebut** (Bagian 14).
4. AI lalu bertanya dua hal:
   - Tugas mana yang dikerjakan hari ini (pilih kode tugas, mis. `T-R4`)?
   - Posisi Git sekarang: sudah clone? sudah buat branch? sedang di branch apa?
5. Jika pengguna ganti peran di tengah percakapan, AI **bertanya ulang untuk konfirmasi**, lalu ganti skill.
6. Jika jawaban pengguna tidak jelas (misalnya hanya "saya anggota"), AI **bertanya ulang**. Jangan menebak.

### 0.2 Aturan Perilaku AI Setelah Peran Diketahui

- **Tetap di scope.** Hanya bantu mengerjakan file milik peran tersebut (lihat tabel kepemilikan di Bagian 9.3). Jika diminta mengubah file milik orang lain, AI mengingatkan dan menyarankan membuat **Issue** atau meminta pemilik file.
- **Kontrak antar anggota (Bagian 9.4) tidak boleh diubah sepihak.** Perubahan harus lewat Issue dan disetujui Kapten.
- **Pengguna pemula Git.** Jelaskan **satu langkah per satu perintah**, sebutkan fungsi tiap perintah dalam satu kalimat, dan minta pengguna menjalankan `git status` jika ragu.
- **Dilarang menyarankan** perintah berbahaya (`git push --force`, `git reset --hard`, `git rebase`, `git clean -fd`, menghapus folder `.git`) kecuali diminta eksplisit, dan **wajib** disertai peringatan.
- **Kode harus lengkap dan siap tempel**, disertai nama file dan lokasinya. Bukan potongan.
- **Bahasa Indonesia**, ringkas, memakai poin-poin.
- **Jangan pernah** meminta atau menampilkan password, token, atau kunci pribadi.
- **Jangan menambah database, backend, atau framework** di luar Bagian 8.
- Setelah tugas selesai, AI mengingatkan: **commit, push, buat Pull Request, lalu beri tahu Kapten**.

### 0.3 Prompt Pembuka (Tempel Bersama PRD Ini)

```text
Berikut PRD proyek KisahNusantara. Ikuti Bagian 0 (Protokol AI) dari PRD ini.
Mulai dengan menanyakan saya sebagai siapa, jangan lanjut sebelum saya jawab.
[tempel seluruh isi PRD.md di bawah baris ini]
```

---

## 1. Ringkasan Produk

**KisahNusantara** adalah website *storytelling* yang menampilkan cerita sejarah, budaya, dan legenda dari berbagai daerah Indonesia dalam format kartu yang menarik dan halaman cerita yang nyaman dibaca.

- **Jenis:** website statis (HTML, CSS, JavaScript murni).
- **Penyimpanan data:** satu file `data/stories.json` (tanpa database).
- **Hosting:** GitHub Pages (gratis).
- **Kolaborasi:** Git & GitHub (branch, commit, Pull Request, review).
- **Bahasa konten:** Bahasa Indonesia.

## 2. Latar Belakang dan Tujuan

### 2.1 Latar Belakang
- Banyak cerita sejarah dan budaya daerah sulit ditemukan dalam bentuk digital yang ringkas dan menarik.
- Tugas kuliah **Kerjasama Digital** menuntut tim membuat proyek website sambil **menerapkan alur kerja kolaborasi Git & GitHub**.

### 2.2 Tujuan
| Kode | Tujuan | Ukuran Keberhasilan |
|---|---|---|
| G-1 | Menghasilkan website cerita Nusantara yang berfungsi | Semua fitur MUST (Bagian 5) lolos kriteria penerimaan |
| G-2 | Menerapkan kerja tim dengan Git & GitHub | Setiap anggota punya minimal **5 commit** dan **2 Pull Request** ter-merge |
| G-3 | Konten bermutu dan bersumber jelas | Minimal **10 cerita**, masing-masing punya sumber |
| G-4 | Website online dan dapat dipresentasikan | Tayang di GitHub Pages, tanpa error di konsol |

### 2.3 Di Luar Tujuan (Non-Goals)
- Tidak ada login, komentar, atau upload dari pengguna.
- Tidak ada database, backend, atau CMS.
- Tidak ada multi-bahasa di versi 1.0.

## 3. Pengguna Sasaran

| Persona | Kebutuhan | Yang Dicari di Website |
|---|---|---|
| **Sinta**, pelajar/mahasiswa | Bahan belajar dan tugas sekolah | Cerita ringkas, mudah dicari, ada sumber |
| **Bagas**, pecinta budaya/wisatawan | Mengenal budaya sebelum berkunjung | Kartu menarik, filter per daerah/kategori |
| **Dosen penilai** | Menilai hasil dan proses kerja tim | Website rapi, repo GitHub terstruktur, riwayat kontribusi jelas |

## 4. Ruang Lingkup

### 4.1 Termasuk (In Scope)
- 5 halaman: Beranda, Daftar Cerita, Detail Cerita, Tentang Tim, dan halaman 404.
- Pencarian dan filter kategori.
- Tampilan responsif (HP, tablet, desktop).
- Deploy ke GitHub Pages.
- Dokumentasi (README, laporan, bahan presentasi).

### 4.2 Tidak Termasuk (Out of Scope)
- Akun pengguna, komentar, rating.
- Database dan API server.
- Panel admin.
- Aplikasi mobile native.

## 5. Kebutuhan Fitur

**Prioritas:** `MUST` wajib selesai, `SHOULD` dikerjakan jika waktu cukup, `COULD` bonus.

| ID | Fitur | Prioritas | Pemilik Utama |
|---|---|---|---|
| F-01 | Beranda | MUST | Edy |
| F-02 | Navbar & Footer konsisten | MUST | Riki |
| F-03 | Daftar cerita (grid kartu) | MUST | Toni (logika), Riki (tampilan) |
| F-04 | Pencarian | MUST | Toni |
| F-05 | Filter kategori | MUST | Toni |
| F-06 | Detail cerita (`detail.html?id=`) | MUST | Toni (logika), Riki (tampilan) |
| F-07 | Cerita terkait | SHOULD | Toni |
| F-08 | Tentang Tim | MUST | Alvin |
| F-09 | Responsif | MUST | Riki |
| F-10 | Halaman 404 dan *empty state* | MUST | Edy (404), Toni (empty state) |
| F-11 | Mode gelap | COULD | Riki |
| F-12 | Tombol salin tautan cerita | COULD | Toni |
| F-13 | Deploy GitHub Pages | MUST | Edy |

### 5.1 Kriteria Penerimaan per Fitur

**F-01 Beranda**
- Ada *hero* berisi judul, tagline, dan tombol "Jelajahi Cerita" yang menuju `cerita.html`.
- Menampilkan 3 cerita unggulan (data dengan `"featured": true`) pada `#featured-grid`.
- Ada bagian ringkas "Apa itu KisahNusantara" dan tiga kartu kategori (Sejarah, Budaya, Legenda) yang menuju `cerita.html?kategori=...`.

**F-02 Navbar & Footer**
- Navbar berisi: Beranda, Cerita, Tentang. Menu aktif diberi penanda.
- Di layar ≤ 768px, navbar berubah menjadi menu *hamburger* yang bisa dibuka/tutup.
- Footer berisi nama proyek, nama tim, tahun, dan tautan GitHub repo.
- Identik di semua halaman.

**F-03 Daftar Cerita**
- Semua cerita dari `stories.json` tampil sebagai kartu di `#story-grid`.
- Kartu berisi: gambar, kategori (lencana), judul, daerah, ringkasan, tombol "Baca Cerita".
- Klik kartu membuka `detail.html?id=<id>`.
- Grid: 1 kolom (HP), 2 kolom (tablet), 3 kolom (desktop).

**F-04 Pencarian**
- Kolom `#search-input` mencari di `judul`, `daerah`, `ringkasan`, dan `tags`.
- Tidak membedakan huruf besar/kecil. Jeda ketik (*debounce*) 250 ms.
- Jumlah hasil tampil di `#result-count`, contoh: "Menampilkan 4 cerita".

**F-05 Filter Kategori**
- Tombol filter: Semua, Sejarah, Budaya, Legenda.
- Filter **dan** pencarian bekerja bersamaan (hasil = irisan keduanya).
- Parameter URL `?kategori=Legenda` otomatis mengaktifkan filter saat halaman dibuka.

**F-06 Detail Cerita**
- `detail.html?id=1` menampilkan judul, kategori, daerah, gambar, isi cerita (paragraf), dan daftar sumber.
- Jika `id` tidak ada atau tidak valid, tampil pesan "Cerita tidak ditemukan" dan tombol kembali ke daftar cerita.
- Judul tab browser (`document.title`) ikut berubah sesuai judul cerita.

**F-07 Cerita Terkait**
- Menampilkan maksimal 3 cerita lain dengan kategori sama pada `#related-grid`.

**F-08 Tentang Tim**
- Menjelaskan tujuan proyek, dan kartu profil 4 anggota (nama, peran, tugas utama).
- Ada tautan ke repo GitHub dan daftar sumber (`docs/sumber.md`).

**F-09 Responsif**
- Tidak ada scroll horizontal pada lebar 360px, 768px, dan 1280px.
- Teks minimal 16px, area sentuh tombol minimal 44px.

**F-10 404 dan Empty State**
- `404.html` tersedia dan memuat tautan kembali ke Beranda.
- Jika pencarian tidak menemukan hasil, `#empty-state` tampil dengan pesan ramah.

**F-11 Mode Gelap (COULD)**
- Tombol alih tema, pilihan tersimpan di `localStorage`.

**F-12 Salin Tautan (COULD)**
- Tombol "Salin Tautan" di halaman detail menyalin URL ke clipboard dan memberi notifikasi singkat.

**F-13 Deploy**
- Website dapat dibuka di `https://USERNAME.github.io/kisahnusantara/` dan semua halaman, gambar, serta data termuat tanpa error.

## 6. Peta Halaman dan Alur Pengguna

```text
Beranda (index.html)
 ├── Jelajahi Cerita ─────────► Daftar Cerita (cerita.html)
 ├── Kartu Kategori ──────────► cerita.html?kategori=Legenda
 ├── Kartu Cerita Unggulan ───► Detail (detail.html?id=3)
 └── Tentang ─────────────────► tentang.html

Daftar Cerita
 ├── Cari + Filter kategori
 └── Klik kartu ──────────────► Detail Cerita
                                   ├── Cerita Terkait ──► Detail lain
                                   └── Kembali ─────────► Daftar Cerita
```

**Alur utama:** Pengguna membuka Beranda → memilih kategori atau cerita unggulan → membaca detail → lanjut ke cerita terkait.

## 7. Spesifikasi Data (`data/stories.json`)

### 7.1 Skema Satu Cerita

| Field | Tipe | Wajib | Aturan |
|---|---|---|---|
| `id` | angka | Ya | Unik, berurutan mulai 1, tidak boleh dipakai ulang |
| `judul` | teks | Ya | Maks. 70 karakter |
| `kategori` | teks | Ya | Hanya: `Sejarah`, `Budaya`, atau `Legenda` (huruf besar di awal) |
| `daerah` | teks | Ya | Nama daerah/kota, mis. "Yogyakarta" |
| `provinsi` | teks | Ya | Nama provinsi |
| `ringkasan` | teks | Ya | 80 sampai 160 karakter |
| `isi` | teks | Ya | 250 sampai 500 kata. Paragraf dipisah `\n\n` |
| `gambar` | teks | Ya | Path relatif, mis. `images/prambanan.jpg` |
| `gambarSumber` | teks | Ya | Asal gambar dan lisensinya |
| `tags` | array teks | Ya | 2 sampai 5 kata kunci huruf kecil |
| `sumber` | array teks | Ya | Minimal 1 referensi (judul + penerbit/situs) |
| `featured` | boolean | Ya | `true` untuk cerita unggulan di Beranda (tepat 3 cerita) |
| `penulis` | teks | Tidak | Nama anggota penulis |

### 7.2 Contoh

```json
[
  {
    "id": 1,
    "judul": "Legenda Candi Prambanan",
    "kategori": "Legenda",
    "daerah": "Sleman",
    "provinsi": "DI Yogyakarta",
    "ringkasan": "Kisah cinta Bandung Bondowoso dan Roro Jonggrang yang melahirkan seribu candi.",
    "isi": "Paragraf pertama cerita.\n\nParagraf kedua cerita.",
    "gambar": "images/prambanan.jpg",
    "gambarSumber": "Wikimedia Commons, CC BY-SA 4.0",
    "tags": ["candi", "legenda", "jawa"],
    "sumber": ["Cerita rakyat Roro Jonggrang, Kemdikbud"],
    "featured": true,
    "penulis": "Alvin"
  }
]
```

### 7.3 Aturan Data
- JSON harus valid (cek di VSCode atau jsonlint.com sebelum commit). Tanda koma terakhir **tidak boleh** ada.
- Tulis cerita dengan **kata-kata sendiri**. Dilarang menyalin utuh dari internet.
- **Distribusi minimal:** 3 Sejarah, 3 Budaya, 3 Legenda (total ≥ 10).
- Gambar: format `.jpg`/`.webp`, rasio 16:9, lebar maks. 1200px, ukuran ≤ 300 KB, nama file huruf kecil tanpa spasi (`candi-prambanan.jpg`).
- Hanya gambar bebas hak cipta atau berlisensi terbuka, dan sumbernya dicatat di `gambarSumber`.
- **Hanya Alvin** yang mengubah `stories.json` agar tidak terjadi *conflict*.

## 8. Teknologi dan Batasan

| Bagian | Pilihan |
|---|---|
| Struktur | HTML5 semantik |
| Gaya | CSS3 murni (Flexbox + Grid + CSS Variables) |
| Logika | JavaScript murni (ES6+), tanpa framework |
| Data | `data/stories.json` dibaca lewat `fetch()` |
| Font | Google Fonts: **Playfair Display** (judul) dan **Inter** (isi) |
| Editor | VSCode + ekstensi Live Server |
| Versi | Git + GitHub |
| Hosting | GitHub Pages |

**Batasan penting:**
- `fetch()` **tidak berjalan** jika file dibuka langsung (`file://`). Selalu jalankan lewat **Live Server** (klik kanan `index.html` → *Open with Live Server*).
- Semua path memakai **relatif** (`css/style.css`, bukan `/css/style.css`) agar jalan di GitHub Pages.
- Tidak memakai library tambahan kecuali disetujui Kapten lewat Issue.

## 9. Struktur Repo dan Kontrak Antar Anggota

### 9.1 Struktur Folder

```text
kisahnusantara/
├── index.html
├── cerita.html
├── detail.html
├── tentang.html
├── 404.html
├── PRD.md
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   ├── main.js         # fungsi umum + Beranda
│   ├── filter.js       # pencarian dan filter (cerita.html)
│   ├── detail.js       # halaman detail (detail.html)
│   └── nav.js          # menu hamburger dan tema
├── data/
│   └── stories.json
├── images/
│   └── ui/             # logo, ikon, favicon
├── docs/
│   ├── sumber.md       # daftar pustaka dan sumber gambar
│   ├── laporan/        # bahan laporan
│   └── presentasi/     # bahan presentasi
├── latihan/            # latihan PR pertama (satu file per anggota)
└── .github/
    ├── pull_request_template.md
    └── ISSUE_TEMPLATE/
        └── tugas.md
```

### 9.2 Urutan Memuat Script (di setiap halaman, sebelum `</body>`)

```html
<script src="js/main.js"></script>
<script src="js/nav.js"></script>
<!-- cerita.html saja -->
<script src="js/filter.js"></script>
<!-- detail.html saja -->
<script src="js/detail.js"></script>
```

### 9.3 Kepemilikan File (Siapa Boleh Mengubah Apa)

| File / Folder | Pemilik |
|---|---|
| `PRD.md`, `index.html`, `404.html`, `.github/`, `.gitignore` | **Edy** |
| `css/style.css`, `js/nav.js`, `images/ui/`, markup `cerita.html` dan `detail.html` | **Riki** |
| `data/stories.json`, `images/*.jpg` (gambar cerita), `tentang.html`, `docs/sumber.md` | **Alvin** |
| `js/main.js`, `js/filter.js`, `js/detail.js`, `README.md`, `docs/laporan/`, `docs/presentasi/` | **Toni** |
| `latihan/<nama>.md` | Masing-masing pemilik nama |

Mengubah file milik orang lain: buat **Issue** dan minta pemilik mengerjakan, atau minta izin di grup lalu sebutkan di Pull Request.

### 9.4 Kontrak Antar Anggota (JANGAN DIUBAH SEPIHAK)

Kontrak ini memastikan HTML (Riki/Edy), JavaScript (Toni), dan data (Alvin) saling cocok.

**Hook HTML yang wajib ada**

| Halaman | ID / Class | Fungsi |
|---|---|---|
| `index.html` | `#featured-grid` | Tempat 3 kartu unggulan |
| `cerita.html` | `#search-input` | Kolom pencarian |
| `cerita.html` | `.filter-btn` + atribut `data-kategori="Semua\|Sejarah\|Budaya\|Legenda"` | Tombol filter |
| `cerita.html` | `#story-grid` | Tempat kartu cerita |
| `cerita.html` | `#result-count` | Teks jumlah hasil |
| `cerita.html` | `#empty-state` | Pesan hasil kosong (awalnya `hidden`) |
| `detail.html` | `#story-detail` | Pembungkus seluruh detail |
| `detail.html` | `#story-title`, `#story-category`, `#story-region`, `#story-image`, `#story-content`, `#story-sources` | Isian detail |
| `detail.html` | `#related-grid` | Cerita terkait |
| `detail.html` | `#not-found` | Pesan cerita tidak ditemukan (awalnya `hidden`) |

**Kartu cerita (dibuat JS, di-style CSS)**

```html
<article class="story-card">
  <img class="story-card__img" src="images/xxx.jpg" alt="Judul cerita" loading="lazy">
  <div class="story-card__body">
    <span class="badge badge--legenda">Legenda</span>
    <h3 class="story-card__title">Judul</h3>
    <p class="story-card__meta">Sleman, DI Yogyakarta</p>
    <p class="story-card__text">Ringkasan...</p>
    <a class="btn btn--primary" href="detail.html?id=1">Baca Cerita</a>
  </div>
</article>
```

Kelas lencana: `badge--sejarah`, `badge--budaya`, `badge--legenda`. Tombol filter aktif memakai kelas `is-active`. Elemen tersembunyi memakai atribut `hidden`.

**URL:** `cerita.html?kategori=Legenda` dan `detail.html?id=3`.

## 10. Panduan Desain (UI/UX)

### 10.1 Konsep
Nuansa **batik dan naskah kuno**: hangat, elegan, mudah dibaca.

### 10.2 Design Tokens (CSS Variables, di `:root`)

```css
:root {
  --color-bg: #FBF6EC;        /* krem kertas */
  --color-surface: #FFFFFF;
  --color-text: #2B2118;
  --color-muted: #6B5B4E;
  --color-primary: #6B3E26;   /* cokelat soga */
  --color-accent: #C9962B;    /* emas */
  --color-indigo: #1F3A5F;
  --color-sejarah: #1F3A5F;
  --color-budaya: #2F6B4F;
  --color-legenda: #8A3B2E;

  --font-heading: "Playfair Display", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;

  --radius: 12px;
  --shadow: 0 4px 16px rgba(43, 33, 24, 0.10);
  --container: 1120px;
}
```

### 10.3 Aturan Visual
- Kontras teks terhadap latar minimal 4.5:1.
- Judul memakai `--font-heading`, isi memakai `--font-body`.
- Jarak antar-bagian konsisten (kelipatan 8px).
- Kartu: sudut membulat, bayangan halus, efek *hover* terangkat sedikit.
- Setiap gambar punya atribut `alt` yang bermakna.
- Elemen interaktif punya *focus outline* yang terlihat.

### 10.4 Breakpoint
- HP: < 640px (1 kolom)
- Tablet: 640 sampai 1023px (2 kolom)
- Desktop: ≥ 1024px (3 kolom)

## 11. Spesifikasi Teknis JavaScript

**`js/main.js` (dimuat di semua halaman)**

| Fungsi | Fungsi / Hasil |
|---|---|
| `loadStories()` | `fetch("data/stories.json")`, mengembalikan array cerita, menangani error |
| `escapeHTML(str)` | Mencegah injeksi HTML dari data |
| `createCard(story)` | Mengembalikan elemen kartu sesuai kontrak 9.4 |
| `renderCards(list, container)` | Mengosongkan lalu mengisi container dengan kartu |
| `getStoryById(stories, id)` | Mengembalikan satu cerita atau `null` |
| `getRelated(stories, story, max = 3)` | Cerita lain dengan kategori sama |
| `initHome()` | Di `index.html`: isi `#featured-grid` dengan cerita `featured: true` |

**`js/filter.js`**

| Fungsi | Fungsi / Hasil |
|---|---|
| `filterStories(stories, { keyword, kategori })` | Mengembalikan hasil irisan pencarian dan filter |
| `debounce(fn, ms)` | Menunda eksekusi saat mengetik |
| `initList()` | Membaca `?kategori=`, memasang event, memperbarui `#result-count` dan `#empty-state` |

**`js/detail.js`**
- `initDetail()`: membaca `?id=`, mengisi elemen detail, mengatur `document.title`, memecah `isi` per `\n\n` menjadi elemen `<p>`, mengisi `#story-sources`, memanggil `getRelated`. Jika tidak ketemu, tampilkan `#not-found`.

**Aturan kode:** nama variabel Inggris atau Indonesia konsisten, beri komentar singkat pada fungsi, jangan ada `console.log` tersisa saat merge, gunakan `textContent` atau `escapeHTML` (bukan `innerHTML` mentah dari data).

## 12. Kebutuhan Non-Fungsional

| Aspek | Target |
|---|---|
| **Kinerja** | Lighthouse Performance ≥ 80 di mobile |
| **Aksesibilitas** | Lighthouse Accessibility ≥ 90 |
| **Kompatibilitas** | Chrome, Edge, Firefox, dan Chrome Android versi terbaru |
| **Keandalan** | Tidak ada error merah di konsol browser |
| **Ukuran** | Gambar ≤ 300 KB per file, total repo wajar (< 30 MB) |
| **Keamanan** | Tidak ada token/password/data pribadi di repo |
| **Pemeliharaan** | Kode rapi, terkomentar, README jelas |

## 13. Alur Kerja Git (Aturan Tim)

### 13.1 Branch
- `main`: selalu stabil dan menjadi sumber GitHub Pages. **Dilarang commit langsung** (kecuali commit awal Kapten).
- Satu tugas = satu branch, format: `feature/nama-tugas` atau `fix/nama-bug` atau `docs/nama`.
- Branch utama tiap anggota: Riki `feature/desain-ui`, Alvin `feature/konten-cerita`, Toni `feature/logika-js`, Edy `feature/kerangka-awal`. Untuk tugas berikutnya buat branch baru yang lebih spesifik (mis. `feature/halaman-detail`).

### 13.2 Pesan Commit

Format: `jenis: deskripsi singkat dalam bahasa Indonesia`

| Awalan | Kegunaan |
|---|---|
| `feat:` | Fitur baru |
| `fix:` | Perbaikan bug |
| `style:` | Perubahan tampilan/CSS |
| `data:` | Menambah/mengubah konten |
| `docs:` | Dokumentasi |
| `chore:` | Pengaturan, rapi-rapi |

Contoh baik: `data: tambah 3 cerita legenda Jawa Timur`. Contoh buruk: `update`, `fix`, `asdf`.

### 13.3 Pull Request dan Review
- Judul PR mengikuti format pesan commit.
- Isi PR memakai template (Bagian 20.1).
- **Minimal 1 reviewer**. Kapten me-review PR anggota. PR Kapten di-review anggota lain secara bergantian.
- Reviewer memeriksa: berjalan di Live Server, tidak ada error konsol, sesuai kontrak 9.4, tidak mengubah file milik orang lain.
- Merge memakai tombol **Squash and merge** atau **Merge pull request** (pilih satu dan konsisten). Hapus branch setelah merge.

### 13.4 Pengaturan Kapten di GitHub
- **Settings → Branches → Add rule** untuk `main`: centang *Require a pull request before merging* dan *Require approvals* (1).
- **Settings → Collaborators**: undang Riki, Alvin, Toni.
- **Projects**: buat papan **To Do, Doing, In Review, Done**.
- **Issues**: satu Issue per tugas (`T-xx`), diberi label `ui`, `konten`, `js`, `docs`, `kapten`.

## 14. SKILL PER ANGGOTA

> AI memuat **hanya satu skill** sesuai jawaban Gerbang Peran (Bagian 0).

---

### 14.1 SKILL: EDY — Kapten / Project Manager & Integrator

**Misi:** Memastikan proyek berjalan, repo sehat, dan semua pekerjaan tergabung rapi dan tayang online.

**Gaya AI membantu Edy:** seperti asisten manajer proyek: ringkas, ingatkan prioritas dan tenggat, bantu menyusun Issue dan review, jelaskan langkah GitHub (Settings, Projects, Pages) selangkah demi selangkah.

**Boleh mengubah:** `PRD.md`, `index.html`, `404.html`, `.github/`, `.gitignore`, kerangka awal (seluruh halaman HTML dasar + hook kontrak).
**Tidak boleh mengubah sepihak:** CSS (Riki), JSON/gambar (Alvin), JS (Toni). Gunakan Issue.

**Daftar Tugas**

| Kode | Tugas | Hasil Akhir |
|---|---|---|
| T-E1 | Buat repo `kisahnusantara` (Public, ada README), clone, push `PRD.md` ke `main` | PRD ada di GitHub |
| T-E2 | Atur *branch protection* `main`, undang Riki, Alvin, Toni | Aturan aktif, anggota bergabung |
| T-E3 | Buat papan Projects, label, template Issue dan PR, lalu Issue untuk semua tugas `T-xx` | Papan terisi |
| T-E4 | Buat **kerangka awal**: struktur folder, semua file HTML dengan hook kontrak 9.4, `style.css` kosong dengan komentar, `main.js` kosong, `stories.json` berisi 2 cerita contoh. Merge **paling awal** | Kerangka di `main` |
| T-E5 | Buat `index.html` lengkap (F-01) | Beranda sesuai kriteria |
| T-E6 | Buat `404.html` (F-10) | Halaman 404 jalan |
| T-E7 | Review dan merge semua PR (maks. 1 hari kerja per PR) | PR tidak menumpuk |
| T-E8 | Selesaikan conflict bila ada | `main` bersih |
| T-E9 | Rapat singkat mingguan, perbarui papan Projects | Progres tercatat |
| T-E10 | Aktifkan GitHub Pages, uji semua halaman online | Website tayang |
| T-E11 | QA akhir memakai checklist Bagian 17, buat *release* `v1.0` | Rilis final |

**Definition of Done Edy:** `main` bisa dijalankan tanpa error, Pages aktif, semua Issue `MUST` tertutup, kontribusi 4 anggota terlihat di Insights.

**Perintah Git khusus Edy**
```bash
git checkout main
git pull origin main
git log --oneline --graph      # lihat riwayat gabungan
git tag v1.0                   # tandai rilis final
git push origin v1.0
```

**Prompt awal untuk AI (Edy):** "Saya Edy, kapten. Saya mau mengerjakan T-E4 (kerangka awal). Buatkan semua file lengkap siap tempel sesuai kontrak PRD."

---

### 14.2 SKILL: RIKI — UI/UX & Tampilan (Frontend Design)

**Misi:** Membuat tampilan KisahNusantara indah, konsisten, dan nyaman di semua perangkat.

**Gaya AI membantu Riki:** seperti desainer frontend: jelaskan kenapa memilih sebuah gaya CSS, beri kode CSS lengkap dengan komentar, patuhi design tokens 10.2.

**Boleh mengubah:** `css/style.css`, `js/nav.js`, `images/ui/`, markup `cerita.html` dan `detail.html` (hanya struktur/tampilan).
**Tidak boleh:** menghapus atau mengganti nama ID/kelas pada kontrak 9.4. Tidak mengubah `stories.json` atau file JS milik Toni.

**Daftar Tugas**

| Kode | Tugas | Hasil Akhir |
|---|---|---|
| T-R1 | Clone repo dan latihan PR pertama (`latihan/riki.md`) | PR latihan ter-merge |
| T-R2 | Tulis design tokens, *reset*, tipografi, `.container` di `style.css` | Fondasi CSS |
| T-R3 | Style navbar dan footer (F-02), buat `js/nav.js` untuk hamburger | Navigasi konsisten |
| T-R4 | Style `.story-card`, `.badge--*`, `.btn--*` sesuai kontrak | Kartu cantik |
| T-R5 | Style halaman Cerita: toolbar pencarian, tombol filter, grid, `#empty-state` | Halaman Cerita siap |
| T-R6 | Style halaman Detail: judul, gambar, tipografi bacaan nyaman, daftar sumber, cerita terkait | Detail siap |
| T-R7 | Responsif 360 / 768 / 1280 px (F-09) | Tidak ada scroll horizontal |
| T-R8 | Aksesibilitas: kontras, *focus outline*, `alt` gambar | Lighthouse A11y ≥ 90 |
| T-R9 | Logo dan favicon di `images/ui/` | Identitas visual |
| T-R10 | (COULD) Mode gelap (F-11) | Tombol tema jalan |

**Definition of Done Riki:** semua halaman rapi di 3 ukuran layar, tidak ada gaya *inline* yang berantakan, tidak ada ID/kelas kontrak yang hilang, PR sudah ter-merge.

**Perintah Git khusus Riki**
```bash
git checkout main && git pull origin main
git checkout -b feature/desain-ui
git add css/ js/nav.js images/ui/
git commit -m "style: tambah gaya kartu cerita"
git push -u origin feature/desain-ui
```

**Prompt awal untuk AI (Riki):** "Saya Riki, UI/UX. Saya mau mengerjakan T-R4 (style kartu). Buatkan CSS lengkap siap tempel sesuai design tokens dan kontrak PRD."

---

### 14.3 SKILL: ALVIN — Konten & Data (Riset Cerita)

**Misi:** Menyediakan konten cerita yang akurat, menarik, orisinal, dan bersumber jelas.

**Gaya AI membantu Alvin:** seperti editor dan peneliti: bantu mencari kerangka cerita, merapikan bahasa, mengecek struktur JSON. **AI tidak boleh menyalin teks dari internet mentah-mentah** dan harus mengingatkan Alvin menulis dengan kata-kata sendiri serta mencatat sumber.

**Boleh mengubah:** `data/stories.json`, gambar cerita di `images/`, `tentang.html`, `docs/sumber.md`.
**Tidak boleh:** mengubah nama field JSON (skema 7.1) tanpa Issue. Tidak menyentuh CSS/JS.

**Daftar Tugas**

| Kode | Tugas | Hasil Akhir |
|---|---|---|
| T-A1 | Clone repo dan latihan PR pertama (`latihan/alvin.md`) | PR latihan ter-merge |
| T-A2 | Susun daftar 10+ topik cerita (3 Sejarah, 3 Budaya, 3 Legenda, +1 bebas) dan diskusikan dengan tim | Daftar topik disetujui |
| T-A3 | Tulis cerita 1 sampai 5 ke `stories.json` (commit tiap 2 sampai 3 cerita) | 5 cerita valid |
| T-A4 | Tulis cerita 6 sampai 10+ | Total ≥ 10 cerita |
| T-A5 | Cari gambar berlisensi terbuka, kompres, simpan di `images/` | Gambar ≤ 300 KB |
| T-A6 | Isi `docs/sumber.md` (referensi tiap cerita + sumber gambar) | Daftar pustaka lengkap |
| T-A7 | Buat `tentang.html` (F-08) memakai kelas dari `style.css` | Halaman Tentang siap |
| T-A8 | Validasi JSON (VSCode / jsonlint) dan pastikan tepat 3 cerita `featured: true` | JSON bebas error |

**Checklist per cerita:** judul ≤ 70 karakter, ringkasan 80 sampai 160 karakter, isi 250 sampai 500 kata, kategori benar, ≥ 1 sumber, gambar ada dan lisensinya dicatat, kata-kata sendiri, ejaan sudah dicek.

**Definition of Done Alvin:** ≥ 10 cerita valid, semua gambar tampil, `sumber.md` lengkap, `tentang.html` selesai, PR ter-merge.

**Perintah Git khusus Alvin**
```bash
git checkout main && git pull origin main
git checkout -b feature/konten-cerita
git add data/stories.json images/
git commit -m "data: tambah 3 cerita legenda"
git push -u origin feature/konten-cerita
```

**Prompt awal untuk AI (Alvin):** "Saya Alvin, konten. Saya mau mengerjakan T-A3. Bantu saya menyusun kerangka cerita Roro Jonggrang, lalu saya tulis sendiri dan Anda koreksi bahasa serta strukturnya ke format JSON sesuai skema PRD."

---

### 14.4 SKILL: TONI — Logika JavaScript & Dokumentasi

**Misi:** Membuat data JSON tampil dan berfungsi (kartu, pencarian, filter, detail), serta menyusun dokumentasi proyek.

**Gaya AI membantu Toni:** seperti mentor JavaScript: jelaskan alur kode dalam bahasa sederhana, beri kode lengkap dengan komentar per fungsi, ikuti spesifikasi Bagian 11 dan kontrak 9.4.

**Boleh mengubah:** `js/main.js`, `js/filter.js`, `js/detail.js`, `README.md`, `docs/laporan/`, `docs/presentasi/`.
**Tidak boleh:** mengganti ID/kelas kontrak, mengubah `stories.json` dan CSS.

**Daftar Tugas**

| Kode | Tugas | Hasil Akhir |
|---|---|---|
| T-T1 | Clone repo dan latihan PR pertama (`latihan/toni.md`) | PR latihan ter-merge |
| T-T2 | `main.js`: `loadStories`, `escapeHTML`, `createCard`, `renderCards`, `initHome` | Beranda menampilkan 3 kartu unggulan |
| T-T3 | `filter.js`: `filterStories`, `debounce`, `initList` (F-03, F-04, F-05) | Pencarian + filter berjalan |
| T-T4 | `detail.js`: `initDetail`, `getStoryById`, `getRelated` (F-06, F-07) | Detail dan cerita terkait jalan |
| T-T5 | Penanganan error: gagal `fetch`, id tidak valid, hasil kosong | Tidak ada halaman putih/rusak |
| T-T6 | `README.md`: deskripsi, fitur, cara menjalankan (Live Server), struktur, anggota tim, tautan Pages | README lengkap |
| T-T7 | Checklist uji manual dan bahan laporan | `docs/laporan/` terisi |
| T-T8 | Bahan presentasi (slide + naskah demo) | `docs/presentasi/` terisi |
| T-T9 | (COULD) Tombol salin tautan (F-12) | Fitur jalan |

**Definition of Done Toni:** semua fitur JS pada F-03 sampai F-07 lolos kriteria penerimaan, tidak ada error konsol, README lengkap, PR ter-merge.

**Perintah Git khusus Toni**
```bash
git checkout main && git pull origin main
git checkout -b feature/logika-js
git add js/ README.md
git commit -m "feat: tambah pencarian dan filter kategori"
git push -u origin feature/logika-js
```

**Prompt awal untuk AI (Toni):** "Saya Toni, logika JS. Saya mau mengerjakan T-T3 (filter dan pencarian). Buatkan `js/filter.js` lengkap siap tempel sesuai kontrak dan Bagian 11 PRD."

---

## 15. Rencana Kerja dan Milestone

| Minggu | Milestone | Target |
|---|---|---|
| **1** | M1: Fondasi | T-E1 sampai T-E4, semua T-x1 (latihan PR), kerangka awal ter-merge, daftar topik cerita disetujui |
| **2** | M2: Pengembangan | T-E5, T-R2 sampai T-R6, T-A3 dan T-A4, T-T2 dan T-T3 |
| **3** | M3: Penyelesaian | T-T4 dan T-T5, T-R7 dan T-R8, T-A5 sampai T-A8, T-E10 dan T-E11, README, laporan, presentasi |

**Urutan ketergantungan:** T-E4 (kerangka) → semua tugas lain. Alvin mengisi data sambil Toni memakai 2 cerita contoh untuk uji. Riki dan Toni memakai kontrak 9.4 agar tidak saling menunggu.

## 16. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| *Conflict* karena edit file yang sama | Kerja terhenti | Patuhi kepemilikan file (9.3), `git pull` sebelum kerja |
| JSON rusak (koma/kurung) | Website kosong | Validasi sebelum commit, review PR |
| Anggota baru paham Git | Salah perintah | Latihan PR minggu 1, panduan manual Bagian 18 |
| Hak cipta gambar/teks | Masalah akademik | Wajib kata sendiri, gambar berlisensi, catat sumber |
| Path rusak di GitHub Pages | Gambar/CSS tidak muncul | Gunakan path relatif, uji setelah deploy |
| Deadline mepet | Fitur tidak selesai | Prioritas MUST dulu, COULD belakangan |
| Kontribusi tidak seimbang | Penilaian tidak adil | Papan Projects dan Insights dipantau Kapten |

## 17. Definition of Done Proyek (Checklist Akhir)

- [ ] Semua fitur `MUST` lolos kriteria penerimaan (Bagian 5)
- [ ] ≥ 10 cerita valid, 3 Sejarah, 3 Budaya, 3 Legenda
- [ ] Setiap cerita punya gambar dan sumber
- [ ] Tidak ada error di konsol pada semua halaman
- [ ] Tampil baik di 360 / 768 / 1280 px
- [ ] Lighthouse Performance ≥ 80 dan Accessibility ≥ 90
- [ ] Website tayang di GitHub Pages dan semua tautan berfungsi
- [ ] README lengkap
- [ ] Setiap anggota punya ≥ 5 commit dan ≥ 2 PR ter-merge
- [ ] Laporan dan presentasi siap
- [ ] Rilis `v1.0` dibuat

---

## 18. PANDUAN PUSH MANUAL KE GITHUB (LANGKAH DEMI LANGKAH)

> Ikuti **berurutan**. Edy mengerjakan 18.2 lebih dulu. Riki, Alvin, Toni mengerjakan 18.3 **setelah** Edy memberi tahu repo siap.

### 18.1 Persiapan (Semua Anggota, Sekali Saja)

1. Buat akun di **github.com** (jika belum).
2. Install **Git** dari **git-scm.com** (pilih pengaturan bawaan).
3. Buka **Git Bash** atau Terminal di VSCode (`Ctrl + ~`) dan cek:
   ```bash
   git --version
   ```
4. Atur identitas (pakai nama dan email **yang sama dengan akun GitHub**):
   ```bash
   git config --global user.name "Nama Kamu"
   git config --global user.email "email@kamu.com"
   git config --global init.defaultBranch main
   ```
5. Cek hasilnya:
   ```bash
   git config --list
   ```

### 18.2 EDY: Membuat Repo dan Push Pertama (PRD.md)

**A. Buat repo di GitHub**
1. Login GitHub → klik **+** (kanan atas) → **New repository**.
2. Isi: **Repository name** `kisahnusantara`, **Public**, centang **Add a README file**.
3. Klik **Create repository**.

**B. Clone ke komputer**
1. Di halaman repo klik tombol hijau **Code** → salin URL HTTPS.
2. Buka terminal di folder tempat menyimpan proyek (mis. `D:\Project`), lalu:
   ```bash
   git clone https://github.com/USERNAME-EDY/kisahnusantara.git
   cd kisahnusantara
   code .
   ```

**C. Masukkan PRD.md dan push ke `main`**
1. **Salin file `PRD.md`** ke dalam folder `kisahnusantara` (sejajar dengan `README.md`).
2. Cek status:
   ```bash
   git status
   ```
   Harus muncul `PRD.md` di daftar *Untracked files* (merah).
3. Tambahkan, commit, dan push:
   ```bash
   git add PRD.md
   git commit -m "docs: tambah PRD.md versi 1.0"
   git push origin main
   ```
4. Jika diminta login, ikuti jendela browser (lihat 18.6).
5. Buka halaman repo di GitHub dan segarkan. `PRD.md` harus muncul.

**D. Aktifkan aturan tim (setelah push pertama)**
1. **Settings → Collaborators → Add people**: undang Riki, Alvin, Toni dengan username GitHub mereka.
2. **Settings → Branches → Add branch ruleset / Add rule**: pilih branch `main`, centang **Require a pull request before merging** dan **Require approvals: 1**, lalu simpan.
3. Buat folder `.github` lewat PR kerangka (T-E3 dan T-E4), lalu beri tahu grup: *"Repo siap. Silakan clone dan kerjakan latihan PR."*

### 18.3 RIKI, ALVIN, TONI: Clone dan Latihan Push Pertama

> Ganti `<nama>` dengan nama kamu (huruf kecil): `riki`, `alvin`, atau `toni`.

**A. Terima undangan**
1. Buka email atau notifikasi GitHub → **Accept invitation**.
2. Buka repo `https://github.com/USERNAME-EDY/kisahnusantara`.

**B. Clone**
```bash
git clone https://github.com/USERNAME-EDY/kisahnusantara.git
cd kisahnusantara
code .
```

**C. Buat branch latihan**
```bash
git checkout main
git pull origin main
git checkout -b latihan/<nama>
```
Cek kamu sudah pindah branch:
```bash
git branch
```
(Branch aktif diberi tanda `*`.)

**D. Buat file latihan**
1. Di VSCode, buat folder `latihan` (jika belum ada) lalu file `latihan/<nama>.md`.
2. Isi contoh:
   ```markdown
   # Latihan Git - <Nama>
   - Peran: <peran kamu>
   - Hari ini saya belajar: clone, branch, commit, push.
   ```
3. Simpan (`Ctrl + S`).

**E. Commit dan push**
```bash
git status
git add latihan/<nama>.md
git commit -m "docs: latihan PR pertama <Nama>"
git push -u origin latihan/<nama>
```
> `-u` hanya dipakai saat push **pertama** dari branch baru.

**F. Buat Pull Request**
1. Buka repo di GitHub. Akan muncul banner kuning **Compare & pull request** → klik.
2. Judul: `docs: latihan PR pertama <Nama>`. Isi deskripsi singkat.
3. Di kanan, pada **Reviewers** pilih **Edy**.
4. Klik **Create pull request**.
5. Tunggu Edy me-review dan menekan **Merge**.

**G. Setelah di-merge**
```bash
git checkout main
git pull origin main
git branch -d latihan/<nama>
```

### 18.4 Rutinitas Push Harian (Semua Anggota)

```bash
# 1. Mulai hari: ambil update terbaru
git checkout main
git pull origin main

# 2. Buat branch untuk tugas hari ini
git checkout -b feature/nama-tugas

# 3. Kerjakan, lalu cek perubahan
git status
git diff

# 4. Simpan perubahan (tambahkan file yang kamu ubah saja)
git add nama-file-atau-folder
git commit -m "jenis: deskripsi singkat"

# 5. Kirim ke GitHub
git push -u origin feature/nama-tugas     # push pertama branch ini
git push                                   # push berikutnya di branch yang sama
```

Lalu buat **Pull Request** (seperti 18.3 F), beri tahu Edy, dan setelah ter-merge kembali ke langkah 1.

### 18.5 Alternatif Lewat VSCode (Tanpa Mengetik Perintah)

1. Buka panel **Source Control** (ikon cabang, `Ctrl + Shift + G`).
2. **Buat branch:** klik nama branch di pojok kiri bawah → **Create new branch** → ketik nama → Enter.
3. **Stage:** klik **+** di sebelah file yang berubah.
4. **Commit:** tulis pesan pada kotak di atas → klik **Commit**.
5. **Push:** klik **Publish Branch** (pertama kali) atau **Sync Changes**.
6. Buat PR di GitHub seperti biasa.

### 18.6 Masalah Login Saat Push

- Di Windows, Git biasanya membuka **jendela browser** untuk login GitHub. Pilih **Authorize**.
- Jika diminta *password*: GitHub **tidak menerima password akun**. Gunakan **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens, izin `repo`). Simpan token dengan aman dan **jangan dibagikan atau di-commit**.
- Jika muncul `403` / *Permission denied*: kemungkinan undangan belum diterima atau login memakai akun yang salah.

## 19. Troubleshooting Git (Pemula)

| Masalah | Penyebab | Solusi |
|---|---|---|
| `fatal: not a git repository` | Terminal bukan di folder repo | `cd kisahnusantara` lalu ulangi |
| `rejected ... non-fast-forward` / `fetch first` | Ada update baru di GitHub | `git pull origin main` (atau `git pull origin nama-branch`), lalu push lagi |
| `nothing to commit` | Belum ada perubahan, atau lupa simpan | Simpan file (`Ctrl + S`), cek `git status` |
| Lupa pindah branch, sudah mengedit di `main` | Salah branch | **Jangan commit.** Jalankan `git checkout -b feature/nama-tugas`, perubahan ikut pindah. Jika sudah commit, **tanya Edy** |
| *Merge conflict* | Dua orang mengubah baris sama | Buka file, pilih versi benar, hapus tanda `<<<<<<<`, `=======`, `>>>>>>>`, lalu `git add .`, `git commit`, `git push` |
| Salah commit pesan | Typo | `git commit --amend -m "pesan baru"` (hanya jika **belum** push) |
| Ingin batalkan perubahan satu file | Salah edit | `git restore nama-file` (perubahan hilang, hati-hati) |
| Tidak yakin kondisi | Bingung | `git status` lalu tanya di grup. **Jangan** mencoba perintah asing |

## 20. Template

### 20.1 Template Pull Request (`.github/pull_request_template.md`)

```markdown
## Ringkasan
(Apa yang dikerjakan? Kode tugas: T-xx)

## Perubahan
- 
- 

## Cara Mengecek
1. Jalankan dengan Live Server
2. 

## Checklist
- [ ] Sudah `git pull origin main` sebelum push
- [ ] Berjalan tanpa error di konsol
- [ ] Tidak mengubah file milik anggota lain
- [ ] Kontrak ID/kelas (PRD 9.4) tidak diubah
- [ ] Tidak ada token/password di kode
```

### 20.2 Template Issue (`.github/ISSUE_TEMPLATE/tugas.md`)

```markdown
---
name: Tugas
about: Tugas proyek KisahNusantara
labels: ''
---

**Kode tugas:** T-xx
**Penanggung jawab:** 
**Deskripsi:**

**Kriteria selesai:**
- [ ] 
- [ ] 

**Tenggat:** 
```

### 20.3 `.gitignore`

```gitignore
# Sistem
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Rahasia
.env
*.token

# Lainnya
node_modules/
*.log
```

## 21. Riwayat Perubahan Dokumen

| Versi | Tanggal | Perubahan | Oleh |
|---|---|---|---|
| 1.0 | 19 Nov 2026 | PRD pertama: protokol AI, skill per anggota, panduan push manual | Edy |

---

**Akhir PRD. Ingat: AI wajib bertanya lebih dulu "Kamu sebagai siapa?" sebelum membantu.**
