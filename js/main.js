/**
 * KisahNusantara - main.js
 * Pemilik File: Toni (Logika JavaScript & Dokumentasi)
 * Tugas Terkait: T-T2 (loadStories, escapeHTML, createCard, renderCards, initHome)
 * Dimuat di: Semua halaman
 */

/**
 * Mengambil seluruh data cerita dari file data/stories.json
 * @returns {Promise<Array>} Array objek cerita
 */
async function loadStories() {
  try {
    const response = await fetch("data/stories.json");
    if (!response.ok) {
      throw new Error(`Gagal memuat stories.json: Status ${response.status}`);
    }
    const stories = await response.json();
    return stories;
  } catch (error) {
    console.error("Error pada loadStories:", error);
    return [];
  }
}

/**
 * Mencegah injeksi HTML berbahaya dari teks data
 * @param {string} str 
 * @returns {string}
 */
function escapeHTML(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Membuat elemen kartu cerita sesuai kontrak PRD Bagian 9.4
 * @param {Object} story Objek data cerita
 * @returns {HTMLElement} Elemen <article class="story-card">
 */
function createCard(story) {
  const article = document.createElement("article");
  article.className = "story-card";
  article.dataset.id = story.id;

  const kategoriLower = (story.kategori || "").toLowerCase();
  const badgeClass = `badge badge--${escapeHTML(kategoriLower)}`;

  article.innerHTML = `
    <img class="story-card__img" src="${escapeHTML(story.gambar)}" alt="${escapeHTML(story.judul)}" loading="lazy">
    <div class="story-card__body">
      <span class="${badgeClass}">${escapeHTML(story.kategori)}</span>
      <h3 class="story-card__title">${escapeHTML(story.judul)}</h3>
      <p class="story-card__meta">${escapeHTML(story.daerah)}, ${escapeHTML(story.provinsi)}</p>
      <p class="story-card__text">${escapeHTML(story.ringkasan)}</p>
      <a class="btn btn--primary" href="detail.html?id=${story.id}">Baca Cerita</a>
    </div>
  `;
  return article;
}

/**
 * Merender daftar kartu ke dalam elemen kontainer
 * @param {Array} list Array objek cerita
 * @param {HTMLElement} container Elemen target penampung kartu
 */
function renderCards(list, container) {
  if (!container) return;
  container.innerHTML = "";
  if (!Array.isArray(list) || list.length === 0) return;

  list.forEach(story => {
    const card = createCard(story);
    container.appendChild(card);
  });
}

/**
 * Mengambil satu cerita berdasarkan id
 * @param {Array} stories 
 * @param {number|string} id 
 * @returns {Object|null}
 */
function getStoryById(stories, id) {
  const numericId = parseInt(id, 10);
  return stories.find(s => s.id === numericId) || null;
}

/**
 * Mengambil maksimal n cerita terkait dengan kategori yang sama (selain cerita saat ini)
 * @param {Array} stories 
 * @param {Object} currentStory 
 * @param {number} max 
 * @returns {Array}
 */
function getRelated(stories, currentStory, max = 3) {
  if (!currentStory) return [];
  return stories
    .filter(s => s.kategori === currentStory.kategori && s.id !== currentStory.id)
    .slice(0, max);
}

/**
 * Inisialisasi halaman Beranda (index.html)
 * Mengontrol Hero Slider Imersif sesuai referensi Dribbble
 */
async function initHome() {
  const featuredGrid = document.getElementById("featured-grid");
  const heroBg = document.getElementById("hero-slider-bg");
  const heroTag = document.getElementById("hero-tag");
  const heroTitle = document.getElementById("hero-title");
  const heroDesc = document.getElementById("hero-desc");
  const heroCta = document.getElementById("hero-cta");
  const slideCurrent = document.getElementById("slide-current");
  const btnPrev = document.getElementById("slide-prev");
  const btnNext = document.getElementById("slide-next");

  if (!featuredGrid) return;

  const stories = await loadStories();
  if (stories.length === 0) return;

  // Ambil cerita unggulan (atau ambil koleksi untuk deck slider)
  const featured = stories.filter(s => s.featured === true);
  const deckStories = featured.length >= 3 ? featured : stories.slice(0, 6);

  // Render kartu ke #featured-grid
  renderCards(deckStories, featuredGrid);

  let currentIndex = 0;
  const cards = featuredGrid.querySelectorAll(".story-card");

  function updateHeroShowcase(index) {
    if (index < 0 || index >= deckStories.length) return;
    currentIndex = index;
    const story = deckStories[currentIndex];

    // 1. Update background image
    if (heroBg && story.gambar) {
      heroBg.style.backgroundImage = `url('${story.gambar}')`;
    }

    // 2. Update teks showcase kiri
    if (heroTag) {
      heroTag.textContent = `${story.daerah}, ${story.provinsi} • ${(story.kategori || "").toUpperCase()}`;
    }
    if (heroTitle) {
      heroTitle.textContent = (story.judul || "").toUpperCase();
    }
    if (heroDesc) {
      heroDesc.textContent = story.ringkasan || "";
    }
    if (heroCta) {
      heroCta.setAttribute("href", `detail.html?id=${story.id}`);
    }

    // 3. Update counter slide (01, 02, ...)
    if (slideCurrent) {
      slideCurrent.textContent = String(currentIndex + 1).padStart(2, "0");
    }

    // 4. Update status kartu aktif di deck
    cards.forEach((card, idx) => {
      if (idx === currentIndex) {
        card.classList.add("is-active-card");
        // Scroll kartu aktif agar terlihat
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else {
        card.classList.remove("is-active-card");
      }
    });
  }

  // Klik pada masing-masing kartu di deck untuk berpindah slide
  cards.forEach((card, idx) => {
    card.addEventListener("click", (e) => {
      // Jika pengguna mengklik link langsung di kartu, biarkan membuka detail
      if (e.target.tagName.toLowerCase() === "a") return;
      updateHeroShowcase(idx);
    });
  });

  // Tombol panah Sebelumnya
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      const nextIdx = (currentIndex - 1 + deckStories.length) % deckStories.length;
      updateHeroShowcase(nextIdx);
    });
  }

  // Tombol panah Berikutnya
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const nextIdx = (currentIndex + 1) % deckStories.length;
      updateHeroShowcase(nextIdx);
    });
  }

  // Set slide pertama saat load
  updateHeroShowcase(0);
}

// Jalankan otomatis bila ada di halaman beranda
if (document.getElementById("featured-grid")) {
  document.addEventListener("DOMContentLoaded", initHome);
}
