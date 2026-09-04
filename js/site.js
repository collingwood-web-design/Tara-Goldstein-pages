(function () {
  var nav = document.querySelector(".mobile-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && nav) {
    var label = toggle.querySelector(".nav-toggle-label");
    function setNavOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Menu");
      if (label) {
        label.textContent = open
          ? label.getAttribute("data-close") || "X"
          : label.getAttribute("data-open") || "Menu";
      }
    }
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });
  }

  document.querySelectorAll(".has-sub > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 980px)").matches) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  document.querySelectorAll(".readmore-wrap").forEach(function (wrap) {
    var btn = wrap.querySelector(".readmore-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var collapsed = wrap.classList.toggle("is-collapsed");
      btn.textContent = collapsed ? "Read more" : "Read less";
    });
  });

  document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
    var buttons = tabs.querySelectorAll(".content-tabs-nav button");
    var panels = tabs.querySelectorAll(".content-tab-panel");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-tab");
        buttons.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach(function (panel) {
          var on = panel.id === "tab-" + id;
          panel.classList.toggle("is-active", on);
          if (on) panel.removeAttribute("hidden");
          else panel.setAttribute("hidden", "");
        });
      });
    });
  });
})();
