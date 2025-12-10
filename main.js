document.addEventListener("DOMContentLoaded", function () {
  // Set dynamic copyright year
  document.getElementById("copyright-year").textContent =
    new Date().getFullYear();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          20;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });

  // Navbar styling on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 30px rgba(0, 255, 136, 0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Animate elements on scroll
  document
    .querySelectorAll(".why-card, .process-card, .vibe-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  // Stagger animation for grid items
  document
    .querySelectorAll(".why-grid, .process-timeline, .team-vibe")
    .forEach((grid) => {
      const cards = grid.querySelectorAll(
        ".why-card, .process-card, .vibe-card"
      );
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
      });
    });
});
