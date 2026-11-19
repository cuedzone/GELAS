/**
 * KisahNusantara - nav.js
 * Pemilik File: Riki (UI/UX & Tampilan)
 * Tugas Terkait: T-R3 (Menu hamburger & footer)
 * Dimuat di: Semua halaman
 */

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("is-open");
    });
  }

  // Menandai menu navigasi aktif sesuai halaman saat ini
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });
});
