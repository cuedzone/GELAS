/**
 * KisahNusantara - detail.js
 * Pemilik File: Toni (Logika JavaScript & Dokumentasi)
 * Tugas Terkait: T-T4 (Halaman Detail Cerita & Cerita Terkait)
 * Dimuat di: detail.html saja
 */

async function initDetail() {
  const storyDetailWrap = document.getElementById("story-detail");
  const notFoundWrap = document.getElementById("not-found");

  const titleEl = document.getElementById("story-title");
  const categoryEl = document.getElementById("story-category");
  const regionEl = document.getElementById("story-region");
  const imageEl = document.getElementById("story-image");
  const contentEl = document.getElementById("story-content");
  const sourcesEl = document.getElementById("story-sources");
  const relatedGrid = document.getElementById("related-grid");

  if (!storyDetailWrap) return;

  const stories = await loadStories();
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = urlParams.get("id");

  const story = getStoryById(stories, storyId);

  // Jika cerita tidak ditemukan / ID tidak valid (F-06 & F-10)
  if (!story) {
    storyDetailWrap.setAttribute("hidden", "true");
    if (notFoundWrap) {
      notFoundWrap.removeAttribute("hidden");
    }
    document.title = "Cerita Tidak Ditemukan - KisahNusantara";
    return;
  }

  // Tampilkan container detail & sembunyikan not-found
  storyDetailWrap.removeAttribute("hidden");
  if (notFoundWrap) {
    notFoundWrap.setAttribute("hidden", "true");
  }

  // Perbarui Judul Dokumen (Tab Browser)
  document.title = `${story.judul} - KisahNusantara`;

  // Isi teks & elemen detail
  if (titleEl) titleEl.textContent = story.judul;
  if (categoryEl) {
    categoryEl.textContent = story.kategori;
    categoryEl.className = `badge badge--${(story.kategori || "").toLowerCase()}`;
  }
  if (regionEl) {
    regionEl.textContent = `${story.daerah}, ${story.provinsi}`;
  }
  if (imageEl) {
    imageEl.src = story.gambar;
    imageEl.alt = story.judul;
  }

  // Format isi cerita (pisahkan per \n\n menjadi paragraf <p>)
  if (contentEl) {
    contentEl.innerHTML = "";
    const paragraphs = (story.isi || "").split("\n\n");
    paragraphs.forEach(pText => {
      const p = document.createElement("p");
      p.textContent = pText.trim();
      p.style.marginBottom = "1.2rem";
      contentEl.appendChild(p);
    });
  }

  // Isi daftar sumber referensi
  if (sourcesEl) {
    sourcesEl.innerHTML = "";
    if (Array.isArray(story.sumber)) {
      story.sumber.forEach(sourceText => {
        const li = document.createElement("li");
        li.textContent = sourceText;
        sourcesEl.appendChild(li);
      });
    }
  }

  // Muat cerita terkait dengan kategori yang sama (F-07)
  if (relatedGrid) {
    const relatedStories = getRelated(stories, story, 3);
    renderCards(relatedStories, relatedGrid);
  }
}

document.addEventListener("DOMContentLoaded", initDetail);
