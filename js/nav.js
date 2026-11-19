/**
 * KisahNusantara - nav.js
 * Logika Navigasi: Menu Hamburger Responsif, Sticky Header & Indikator Halaman Aktif
 * Dimuat di: Semua halaman
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("is-open");
    });
  }

  // 2. Sticky Header Scroll Effect (untuk halaman beranda dan lainnya)
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

  // 3. Active Nav Link Indicator
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
});
