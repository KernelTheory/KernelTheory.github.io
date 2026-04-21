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

    // How We Help — scroll reveal + active step
    var hwhSteps = document.querySelectorAll(".hwh-step");
    if (hwhSteps.length && "IntersectionObserver" in window) {
        var revealObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add("is-visible");
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.25 });

        var activeObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                e.target.classList.toggle("is-active", e.isIntersecting);
            });
        }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });

        hwhSteps.forEach(function (step) {
            revealObs.observe(step);
            activeObs.observe(step);
        });
    } else if (hwhSteps.length) {
        hwhSteps.forEach(function (step) { step.classList.add("is-visible"); });
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

    // Nav email — copy to clipboard on click
    document.querySelectorAll(".nav-email").forEach(function (btn) {
        var resetTimer;
        btn.addEventListener("click", function () {
            var email = btn.getAttribute("data-email");
            if (!email) return;

            var showCopied = function () {
                btn.classList.add("copied");
                clearTimeout(resetTimer);
                resetTimer = setTimeout(function () {
                    btn.classList.remove("copied");
                }, 1800);
            };

            var fallbackCopy = function () {
                var ta = document.createElement("textarea");
                ta.value = email;
                ta.setAttribute("readonly", "");
                ta.style.position = "fixed";
                ta.style.left = "-9999px";
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand("copy"); } catch (e) {}
                document.body.removeChild(ta);
                showCopied();
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(showCopied).catch(fallbackCopy);
            } else {
                fallbackCopy();
            }
        });
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
