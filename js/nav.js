/**
 * KisahNusantara - nav.js
 * Pemilik File: Riki (UI/UX & Tampilan)
 * Tugas Terkait: T-R3 (Menu hamburger, header scroll & interaktivitas navigasi)
 * Dimuat di: Semua halaman
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navCenterWrap = document.querySelector(".nav-center-wrap");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
      
      if (navCenterWrap) {
        navCenterWrap.classList.toggle("is-open");
      }
      if (navMenu) {
        navMenu.classList.toggle("is-open");
      }
    });
  }

  // 2. Sticky Header Scroll Effect
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        siteHeader.classList.add("is-scrolled");
      } else {
        siteHeader.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Carousel Slider Controls (#slide-prev, #slide-next)
  const featuredGrid = document.getElementById("featured-grid");
  const btnPrev = document.getElementById("slide-prev");
  const btnNext = document.getElementById("slide-next");

  if (featuredGrid && btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => {
      featuredGrid.scrollBy({ left: -320, behavior: "smooth" });
    });

    btnNext.addEventListener("click", () => {
      featuredGrid.scrollBy({ left: 320, behavior: "smooth" });
    });
  }

  // 4. Active Nav Link Indicator
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });
});
