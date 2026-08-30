(function () {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll("[data-nav]").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });

  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll("main section, .cta-band, .product").forEach((el, i) => {
    el.style.animationDelay = `${Math.min(i * 0.06, 0.3)}s`;
    el.classList.add("reveal");
  });

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.className = "form-status";
    status.textContent = "Sending…";

    const data = new FormData(form);
    if (data.get("_honey")) {
      status.textContent = "Thanks. We’ll be in touch.";
      status.classList.add("ok");
      form.reset();
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@quaxarm.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        status.textContent =
          "Message sent. If this is the first enquiry, please confirm FormSubmit from contact@quaxarm.com so future messages arrive automatically.";
        status.classList.add("ok");
        form.reset();
        return;
      }

      throw new Error(result.message || "Could not send the message.");
    } catch (error) {
      status.textContent =
        "We could not send the form just now. Please email contact@quaxarm.com directly.";
      status.classList.add("err");
    }
  });
})();
