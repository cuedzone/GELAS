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
  if (!currentStory || !Array.isArray(stories)) return [];
  const sameCategory = stories.filter(s => s.kategori === currentStory.kategori && s.id !== currentStory.id);
  if (sameCategory.length > 0) {
    return sameCategory.slice(0, max);
  }
  return stories.filter(s => s.id !== currentStory.id).slice(0, max);
}

/**
 * Inisialisasi halaman Beranda (index.html)
 * Mengisi kontainer #featured-grid dengan cerita featured: true
 */
async function initHome() {
  const featuredGrid = document.getElementById("featured-grid");
  if (!featuredGrid) return;

  const stories = await loadStories();
  const featured = stories.filter(story => story.featured === true).slice(0, 3);
  renderCards(featured, featuredGrid);
}

// Jalankan otomatis bila ada di halaman beranda
if (document.getElementById("featured-grid")) {
  document.addEventListener("DOMContentLoaded", initHome);
}
