document.addEventListener("DOMContentLoaded", function () {
    // Copyright year
    var yearEl = document.getElementById("copyright-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile nav toggle
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    if (toggle && links) {
        toggle.addEventListener("click", function () {
            links.classList.toggle("open");
        });
        // Close nav when a link is clicked
        links.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", function () {
                links.classList.remove("open");
            });
        });
    }

    // Navbar scroll effect
    var navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            navbar.classList.toggle("scrolled", window.scrollY > 10);
        });
    }

    // Service accordion
    document.querySelectorAll(".service-item").forEach(function (item) {
        var header = item.querySelector(".service-header");
        var body = item.querySelector(".service-body");
        if (!header || !body) return;

        header.addEventListener("click", function () {
            var isActive = item.classList.contains("active");

            // Close all
            document.querySelectorAll(".service-item").forEach(function (si) {
                si.classList.remove("active");
                var sb = si.querySelector(".service-body");
                if (sb) sb.style.maxHeight = null;
            });

            // Open clicked (if it wasn't already open)
            if (!isActive) {
                item.classList.add("active");
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });

    // Modal open/close
    document.querySelectorAll("[data-modal]").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            var modal = document.getElementById(trigger.getAttribute("data-modal"));
            if (modal) modal.classList.add("active");
        });
    });

    document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
        // Close on backdrop click
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) overlay.classList.remove("active");
        });
        // Close on X button
        var closeBtn = overlay.querySelector(".modal-close");
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                overlay.classList.remove("active");
            });
        }
    });

    // Close modals on Escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            document.querySelectorAll(".modal-overlay.active").forEach(function (m) {
                m.classList.remove("active");
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            var href = this.getAttribute("href");
            if (href === "#") return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var navHeight = navbar ? navbar.offsetHeight : 0;
                var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                window.scrollTo({ top: top, behavior: "smooth" });
            }
        });
    });
});
