(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  var track = document.getElementById("carouselTrack");
  var slides = track.querySelectorAll(".carousel-slide");
  var prevBtn = document.getElementById("carPrev");
  var nextBtn = document.getElementById("carNext");
  var dotsWrap = document.getElementById("carouselDots");
  var index = 0;
  var total = slides.length;
  var dotButtons = [];

  slides.forEach(function (_, i) {
    var d = document.createElement("button");
    d.setAttribute("type", "button");
    d.setAttribute("role", "tab");
    d.setAttribute("aria-label", "Imagen " + (i + 1) + " de " + total);
    if (i === 0) d.classList.add("active");
    d.addEventListener("click", function () {
      goTo(i);
    });
    dotsWrap.appendChild(d);
    dotButtons.push(d);
  });

  function goTo(i) {
    index = (i + total) % total;
    track.style.transform = "translateX(-" + index * 100 + "%)";
    dotButtons.forEach(function (d, j) {
      d.classList.toggle("active", j === index);
    });
  }

  prevBtn.addEventListener("click", function () { goTo(index - 1); });
  nextBtn.addEventListener("click", function () { goTo(index + 1); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  });

  var startX = null;
  var carousel = document.getElementById("galleryCarousel");
  carousel.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  carousel.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      goTo(dx < 0 ? index + 1 : index - 1);
    }
    startX = null;
  }, { passive: true });

  var autoTimer = null;
  var AUTO_MS = 4200;

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(function () { goTo(index + 1); }, AUTO_MS);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  [prevBtn, nextBtn].forEach(function (b) {
    b.addEventListener("click", function () {
      stopAuto();
      startAutoDelay();
    });
  });

  var pauseTimer = null;
  function startAutoDelay() {
    if (pauseTimer) clearTimeout(pauseTimer);
    pauseTimer = setTimeout(startAuto, AUTO_MS * 2);
  }

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);
  carousel.addEventListener("focusin", stopAuto);
  carousel.addEventListener("focusout", startAuto);

  goTo(0);
  startAuto();
})();
