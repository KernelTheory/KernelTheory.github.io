document.addEventListener("DOMContentLoaded", function () {
  // Update footer year (if element exists)
  const currentYearElement = document.getElementById("currentYear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      // Skip if href is just '#' or scroll to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Test footer text element
  const footerText = document.querySelector(".footer-text");
  if (footerText) {
    console.log("Footer text element found:", footerText);

    // Test the visibility toggle after 2 seconds
    setTimeout(() => {
      footerText.classList.add("visible");
      console.log("Added visible class to footer text");

      setTimeout(() => {
        footerText.classList.remove("visible");
        console.log("Removed visible class from footer text");
      }, 3000);
    }, 2000);
  } else {
    console.log("Footer text element NOT found!");
  }

  // Navbar background change on scroll and footer text visibility
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const footerText = document.querySelector(".footer-text");

    // Navbar styling
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "none";
    }

    // Footer text visibility (only on desktop)
    if (window.innerWidth > 768 && footerText) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = 100; // pixels from bottom
      const distanceFromBottom = documentHeight - scrollPosition;

      if (distanceFromBottom <= threshold) {
        footerText.classList.add("visible");
      } else {
        footerText.classList.remove("visible");
      }
    }
  });

  // Form submission handling
  const consultationForm = document.getElementById("consultationForm");
  if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        projectType: document.getElementById("projectType").value,
      };

      // Here you would typically send this to your backend
      console.log("Form submitted:", formData);

      // Show success message
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML =
        '<i class="bi bi-check-circle"></i> Success! We\'ll be in touch soon';
      btn.disabled = true;

      // Reset form after delay
      setTimeout(() => {
        this.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 3000);
    });
  }
});
