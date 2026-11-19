/**
 * KisahNusantara - filter.js
 * Pemilik File: Toni (Logika JavaScript & Dokumentasi)
 * Tugas Terkait: T-T3 (Pencarian & Filter Kategori di cerita.html)
 * Dimuat di: cerita.html saja
 */

/**
 * Filter cerita berdasarkan irisan kata kunci pencarian dan kategori terpilih
 * @param {Array} stories Array seluruh data cerita
 * @param {Object} filterOptions Objek berisi { keyword, kategori }
 * @returns {Array} Hasil filter yang lolos seleksi
 */
function filterStories(stories, { keyword = "", kategori = "Semua" }) {
  const cleanKeyword = keyword.trim().toLowerCase();
  const cleanKategori = kategori.trim();

  return stories.filter(story => {
    // 1. Cek Kategori
    const matchCategory =
      cleanKategori === "Semua" ||
      (story.kategori && story.kategori.toLowerCase() === cleanKategori.toLowerCase());

    // 2. Cek Keyword (judul, daerah, ringkasan, tags)
    let matchKeyword = true;
    if (cleanKeyword.length > 0) {
      const inJudul = (story.judul || "").toLowerCase().includes(cleanKeyword);
      const inDaerah = (story.daerah || "").toLowerCase().includes(cleanKeyword);
      const inRingkasan = (story.ringkasan || "").toLowerCase().includes(cleanKeyword);
      const inTags = Array.isArray(story.tags)
        ? story.tags.some(tag => (tag || "").toLowerCase().includes(cleanKeyword))
        : false;

      matchKeyword = inJudul || inDaerah || inRingkasan || inTags;
    }

    return matchCategory && matchKeyword;
  });
}

/**
 * Debounce function untuk menunda eksekusi saat pengguna mengetik
 * @param {Function} fn 
 * @param {number} delay Waktu jeda dalam milidetik (misal 250ms)
 * @returns {Function}
 */
function debounce(fn, delay = 250) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Inisialisasi logika pada halaman Daftar Cerita (cerita.html)
 */
async function initList() {
  const storyGrid = document.getElementById("story-grid");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const resultCount = document.getElementById("result-count");
  const emptyState = document.getElementById("empty-state");

  if (!storyGrid) return;

  const allStories = await loadStories();

  // Baca parameter kategori dari URL jika ada (mis. cerita.html?kategori=Legenda)
  const urlParams = new URLSearchParams(window.location.search);
  let activeKategori = urlParams.get("kategori") || "Semua";

  // Tandai tombol filter yang aktif sesuai URL
  filterButtons.forEach(btn => {
    const btnKategori = btn.getAttribute("data-kategori");
    if (btnKategori && btnKategori.toLowerCase() === activeKategori.toLowerCase()) {
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
    }
  });

  function updateView() {
    const keyword = searchInput ? searchInput.value : "";
    const filtered = filterStories(allStories, { keyword, kategori: activeKategori });

    renderCards(filtered, storyGrid);

    // Update result count (F-04)
    if (resultCount) {
      resultCount.textContent = `Menampilkan ${filtered.length} cerita`;
    }

    // Toggle empty state (F-10)
    if (emptyState) {
      if (filtered.length === 0) {
        emptyState.removeAttribute("hidden");
      } else {
        emptyState.setAttribute("hidden", "true");
      }
    }
  }

  // Pasang listener pada tombol filter kategori
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeKategori = btn.getAttribute("data-kategori") || "Semua";
      updateView();
    });
  });

  // Pasang listener input pencarian dengan debounce 250ms
  if (searchInput) {
    searchInput.addEventListener("input", debounce(() => {
      updateView();
    }, 250));
  }

  // Tampilkan data pertama kali
  updateView();
}

document.addEventListener("DOMContentLoaded", initList);
