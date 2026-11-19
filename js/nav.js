/**
 * KisahNusantara - nav.js
 * Logika Navigasi: Menu Hamburger Responsif, Sticky Header & Indikator Halaman Aktif
 * Dimuat di: Semua halaman
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle & Close on Click
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navMenu.classList.toggle("is-open");
    });

    // Tutup menu saat tautan diklik pada tampilan mobile
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Tutup menu saat pengguna klik di luar menu
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Tutup menu dengan tombol Escape (Aksesibilitas R-32)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

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

  // 3. Active Nav Link Indicator (Mendukung path & query param kategori)
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const currentSearch = window.location.search;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href") || "";
    const [linkPath, linkSearch] = href.split("?");
    const normalizedLinkPath = linkPath || "index.html";
    const normalizedLinkSearch = linkSearch ? `?${linkSearch}` : "";

    if (linkSearch) {
      if (normalizedLinkPath === currentPath && normalizedLinkSearch === currentSearch) {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    } else {
      if ((normalizedLinkPath === currentPath || (currentPath === "" && normalizedLinkPath === "index.html")) && !currentSearch) {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    }
  });
});
