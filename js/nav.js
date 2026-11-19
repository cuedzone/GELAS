/**
 * KisahNusantara - nav.js
 * Logika Navigasi: Popup Modal Beranimasi Elegan (Lingkaran Setiap Halaman), Sticky Header & Indikator Halaman Aktif
 * Dimuat di: Semua halaman
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Popup Modal Navigation Logic (Lingkaran-Lingkaran Setiap Halaman)
  const popupTrigger = document.getElementById("nav-popup-trigger");
  const popupModal = document.getElementById("nav-popup-modal");
  const popupClose = document.getElementById("nav-popup-close");

  function openNavPopup() {
    if (popupModal) {
      popupModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
      if (popupClose) popupClose.focus();
    }
  }

  function closeNavPopup() {
    if (popupModal) {
      popupModal.classList.remove("is-open");
      document.body.style.overflow = "";
      if (popupTrigger) popupTrigger.focus();
    }
  }

  if (popupTrigger) {
    popupTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      openNavPopup();
    });
  }

  if (popupClose) {
    popupClose.addEventListener("click", closeNavPopup);
  }

  if (popupModal) {
    popupModal.addEventListener("click", (e) => {
      if (e.target === popupModal) {
        closeNavPopup();
      }
    });

    // Tutup saat pengguna klik salah satu tautan lingkaran
    popupModal.querySelectorAll(".nav-circle-item").forEach(item => {
      item.addEventListener("click", closeNavPopup);
    });
  }

  // Tutup dengan tombol Escape (Aksesibilitas)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popupModal && popupModal.classList.contains("is-open")) {
      closeNavPopup();
    }
  });

  // 2. Sticky Header Scroll Effect
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader && !siteHeader.classList.contains("is-sticky")) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add("is-sticky");
      } else {
        siteHeader.classList.remove("is-sticky");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Active Nav Link Indicator (Dukungan Circular Pills & Popup Circle Items)
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const currentSearch = window.location.search;

  function updateActiveLink(selector, activeClass) {
    const links = document.querySelectorAll(selector);
    links.forEach(link => {
      const href = link.getAttribute("href") || "";
      const [linkPath, linkSearch] = href.split("?");
      const normalizedLinkPath = linkPath || "index.html";
      const normalizedLinkSearch = linkSearch ? `?${linkSearch}` : "";

      if (linkSearch) {
        if (normalizedLinkPath === currentPath && normalizedLinkSearch === currentSearch) {
          link.classList.add(activeClass);
        } else {
          link.classList.remove(activeClass);
        }
      } else {
        if ((normalizedLinkPath === currentPath || (currentPath === "" && normalizedLinkPath === "index.html")) && !currentSearch) {
          link.classList.add(activeClass);
        } else {
          link.classList.remove(activeClass);
        }
      }
    });
  }

  updateActiveLink(".nav-circle-pill", "is-active");
  updateActiveLink(".nav-circle-item", "is-active-circle");
  updateActiveLink(".nav-link", "is-active");
});
