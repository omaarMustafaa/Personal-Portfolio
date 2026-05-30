// ^ Write your JavaScript code here

// Start NavBar
var darkMode = document.querySelector("html");
var darkModeBtn = document.querySelector("#theme-toggle-button");

if (localStorage.getItem("mode") == "dark") {
  darkMode.classList.replace("white", "dark");
} else {
  darkMode.classList.replace("dark", "white");
}

darkModeBtn.addEventListener("click", function (e) {
  // console.log('hello');
  // console.log(e.key);
  if (darkMode.classList.contains("dark")) {
    darkMode.classList.replace("dark", "white");
    localStorage.setItem("mode", "white");
  } else {
    darkMode.classList.replace("white", "dark");
    localStorage.setItem("mode", "dark");
  }
  e.stopPropagation();
});

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-link");
navLinks[0].classList.add("active");

window.addEventListener("scroll", function (e) {
  // console.log('ddd');

  var currentSection = "";
  sections.forEach(function (eventInfo) {
    var sectionTop = eventInfo.offsetTop;
    var sectionHeight = eventInfo.offsetHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = eventInfo.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") == "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

var menuToggleBtn = document.querySelector("#menueToggleBtn");
var navMenu = document.querySelector("#navMenue");

function dispalyMenue() {
  if (window.innerWidth < 1024) {
    navMenu.style.display = "none";

    navMenu.style.position = "fixed";
    navMenu.style.top = "80px";
    navMenu.style.left = "0";
    navMenu.style.left = "0";
    navMenu.style.transform = "none";
    navMenu.style.width = "100vw";

    navMenu.style.borderRadius = "1rem";
    navMenu.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    navMenu.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.5)";
    navMenu.style.backdropFilter = "blur(12px)";
    navMenu.style.webkitBackdropFilter = "blur(12px)";

    navMenu.style.flexDirection = "column";
    navMenu.style.alignItems = "center";
    navMenu.style.justifyContent = "center";
    navMenu.style.gap = "1.8rem";
    navMenu.style.padding = "2.5rem 1.5rem";
    navMenu.style.zIndex = "9999";
  } else {
    navMenu.style.display = "flex";
    navMenu.style.position = "";
    navMenu.style.top = "";
    navMenu.style.left = "";
    navMenu.style.transform = "";
    navMenu.style.width = "";
    navMenu.style.maxWidth = "";
    navMenu.style.borderRadius = "";
    navMenu.style.border = "";
    navMenu.style.boxShadow = "";
    navMenu.style.backdropFilter = "";
    navMenu.style.flexDirection = "row";
    navMenu.style.gap = "";
    navMenu.style.padding = "";
    navMenu.style.backgroundColor = "transparent";
  }
}

dispalyMenue();
window.addEventListener("resize", dispalyMenue);

if (menuToggleBtn && navMenu) {
  menuToggleBtn.addEventListener("click", function (e) {
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
      navMenu.style.display = "flex";
      navMenu.classList.add(
        "animate__animated",
        "animate__fadeInRight",
        "animate__faster",
      );
    } else {
      navMenu.style.display = "none";
      navMenu.classList.remove(
        "animate__animated",
        "animate__fadeInRight",
        "animate__faster",
      );
    }
    e.stopPropagation();
  });
}

navLinks.forEach(function (e) {
  e.addEventListener("click", function () {
    if (window.innerWidth < 1024) {
      navMenu.style.display = "none";
    }
  });
});

// End NavBar

// Start My Projects \\

var tabBtn = document.querySelectorAll(".tab-btn");
var contents = document.querySelectorAll(".tab-content");

tabBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    tabBtn.forEach(function (e) {
      e.classList.add(
        "dark:text-slate-300",
        "dark:bg-slate-800",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      e.classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
    });

    btn.classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
    );
    btn.classList.remove(
      "dark:text-slate-300",
      "dark:bg-slate-800",
      "border",
      "border-slate-300",
      "dark:border-slate-700",
    );

    contents.forEach(function (e) {
      e.classList.add("hidden");
      e.classList.remove(
        "animate__animated",
        "animate__zoomIn",
        "animate__faster",
        "animate__delay-0.5s",
      );
    });

    var targetSelector = btn.getAttribute("data-bs-target");
    var targetContent = document.querySelector(targetSelector);

    targetContent.classList.remove("hidden");
    targetContent.classList.add(
      "animate__animated",
      "animate__zoomIn",
      "animate__faster",
      "animate__delay-0.5s",
    );
  });
});

// End My Projects \\

// Start testimonials \\

document.addEventListener("DOMContentLoaded", () => {
  var carousel = document.getElementById("testimonials-carousel");
  var indicators = document.querySelectorAll(".carousel-indicator");
  var nextBtn = document.getElementById("next-testimonial");
  var prevBtn = document.getElementById("prev-testimonial");

  var currentIndex = 0;
  var totalSlides = indicators.length;

  var isRTL =
    document.documentElement.dir === "rtl" ||
    document.body.style.direction === "rtl";

  function updateCarousel() {
    var visibleCards = 1;
    if (window.innerWidth >= 1024) {
      visibleCards = 3;
    } else if (window.innerWidth >= 640) {
      visibleCards = 2;
    }

    var cardWidthPercent = 100 / visibleCards;
    var displacement = currentIndex * cardWidthPercent;

    var transformValue = isRTL ? displacement : -displacement;
    carousel.style.transform = `translateX(${transformValue}%)`;

    indicators.forEach((indicator, idx) => {
      if (idx === currentIndex) {
        indicator.classList.add("bg-accent");
        indicator.classList.remove("dark:bg-slate-600", "bg-slate-400");
        indicator.setAttribute("aria-selected", "true");
      } else {
        indicator.classList.remove("bg-accent");
        indicator.classList.add("dark:bg-slate-600", "bg-slate-400");
        indicator.setAttribute("aria-selected", "false");
      }
    });
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      currentIndex = parseInt(indicator.getAttribute("data-index"));
      updateCarousel();
    });
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateCarousel();
  });

  // chat
  window.addEventListener("resize", updateCarousel);
  updateCarousel();
});

// End testimonials \\

// Start scrrollToTopBtn
var scrrollToTop = document.querySelector("#scroll-to-top");

window.addEventListener("scroll", function (e) {
  if (window.scrollY > 400) {
    scrrollToTop.classList.remove("opacity-0", "invisible");
    scrrollToTop.classList.add("opacity-100", "visible");
  } else {
    scrrollToTop.classList.add("opacity-0", "invisible");
    scrrollToTop.classList.remove("opacity-100", "visible");
  }
});

scrrollToTop.addEventListener("click", function (e) {
  e.stopPropagation();
  // console.log('done');
  window.scrollTo({
    top: 0,
  });
});

// End scrrollToTopBtn

// start SettingSection

var settings = document.querySelector("#settings-toggle");
var settingSidebar = document.querySelector("#settings-sidebar");
var closeBtn = document.getElementById("close-settings");
var resetBtn = document.getElementById("reset-settings");

settings.addEventListener("click", function (e) {
  settingSidebar.classList.remove("translate-x-full");
  settingSidebar.classList.add("translate-x-0");
  e.stopPropagation();
  settings.style.right = "20rem";
});

closeBtn.addEventListener("click", function (e) {
  settingSidebar.classList.add("translate-x-full");
  settingSidebar.classList.remove("translate-x-0");
  settings.style.right = "0px";
});

resetBtn.addEventListener("click", function (e) {
  settingSidebar.classList.add("translate-x-full");
  settingSidebar.classList.remove("translate-x-0");
  settings.style.right = "0px";
  body.classList.remove("font-alexandria", "font-cairo");
  body.classList.add("font-tajawal");
  resetButtons();
  fontTajawal.classList.remove("border-slate-200", "dark:border-slate-700");
  fontTajawal.classList.add("border-primary", "dark:border-primary", "active");
  localStorage.setItem("Font", "font-tajawal");

  const firstColorBtn = document.querySelector("#theme-colors-grid button");
  if (firstColorBtn) {
    firstColorBtn.click();
  }
});

settingSidebar.addEventListener("click", function (e) {
  e.stopPropagation();
});

window.addEventListener("click", function (e) {
  settingSidebar.classList.add("translate-x-full");
  settingSidebar.classList.remove("translate-x-0");
  settings.style.right = "0px";
});

// Fonts Btns
var body = document.querySelector("body");
var fontAlexandria = document.querySelector("#fontAlexandria");
var fontTajawal = document.querySelector("#fontTajawal");
var fontCairo = document.querySelector("#fontCairo");

var allFontBtns = document.querySelectorAll(".font-option");

function resetButtons() {
  allFontBtns.forEach(function (e) {
    e.classList.remove("border-primary", "dark:border-primary", "active");
    e.classList.add("border-slate-200", "dark:border-slate-700");
  });
}

fontAlexandria.addEventListener("click", function (e) {
  // console.log('FontAlexandria');
  body.classList.remove("font-tajawal", "font-cairo");
  body.classList.add("font-alexandria");
  resetButtons();
  fontAlexandria.classList.remove("border-slate-200", "dark:border-slate-700");
  fontAlexandria.classList.add(
    "border-primary",
    "dark:border-primary",
    "active",
  );
  localStorage.setItem("Font", "font-alexandria");
});

fontTajawal.addEventListener("click", function (e) {
  // console.log('fontTajawal');
  body.classList.remove("font-alexandria", "font-cairo");
  body.classList.add("font-tajawal");
  resetButtons();
  fontTajawal.classList.remove("border-slate-200", "dark:border-slate-700");
  fontTajawal.classList.add("border-primary", "dark:border-primary", "active");
  localStorage.setItem("Font", "font-tajawal");
});

fontCairo.addEventListener("click", function (e) {
  // console.log('fontCairo');
  body.classList.remove("font-alexandria", "font-tajawal");
  body.classList.add("font-cairo");
  resetButtons();
  fontCairo.classList.remove("border-slate-200", "dark:border-slate-700");
  fontCairo.classList.add("border-primary", "dark:border-primary", "active");
  localStorage.setItem("Font", "font-cairo");
});

window.addEventListener("DOMContentLoaded", function (e) {
  var activeFont = localStorage.getItem("Font") || "font-tajawal";
  body.classList.remove("font-alexandria", "font-tajawal", "font-cairo");
  body.classList.add(activeFont);
  resetButtons();
  if (activeFont === "font-alexandria") {
    fontAlexandria.classList.remove(
      "border-slate-200",
      "dark:border-slate-700",
    );
    fontAlexandria.classList.add(
      "border-primary",
      "dark:border-primary",
      "active",
    );
  } else if (activeFont === "font-cairo") {
    fontCairo.classList.remove("border-slate-200", "dark:border-slate-700");
    fontCairo.classList.add("border-primary", "dark:border-primary", "active");
  } else {
    fontTajawal.classList.remove("border-slate-200", "dark:border-slate-700");
    fontTajawal.classList.add(
      "border-primary",
      "dark:border-primary",
      "active",
    );
  }
});

// colors Btns

var themeColors = document.querySelector("#theme-colors-grid");

var savedPrimary = localStorage.getItem("sitePrimary") || "#6366f1";
var savedSecondary = localStorage.getItem("siteSecondary") || "#8b5cf6";

function applyTheme(primary, secondary) {
  document.documentElement.style.setProperty("--color-primary", primary);
  document.documentElement.style.setProperty("--color-secondary", secondary);
}
applyTheme(savedPrimary, savedSecondary);

const colorButtons = themeColors.querySelectorAll("button");

colorButtons.forEach(function (btn) {
  if (btn.getAttribute("data-primary") === savedPrimary) {
    activateButtonVisuals(btn);
  }

  btn.onclick = function () {
    const primaryColor = btn.getAttribute("data-primary");
    const secondaryColor = btn.getAttribute("data-secondary");

    applyTheme(primaryColor, secondaryColor);

    localStorage.setItem("sitePrimary", primaryColor);
    localStorage.setItem("siteSecondary", secondaryColor);

    activateButtonVisuals(btn);
  };
});

function activateButtonVisuals(activeBtn) {
  colorButtons.forEach((b) => {
    b.classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );
  });

  activeBtn.classList.add(
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900",
  );
}

// End SettingSection

// Form

var customSelect = document.querySelectorAll(".custom-select");

customSelect.forEach(function (e) {
  e.addEventListener("click", function (event) {
    event.stopPropagation();

    var optionsMenu = e.nextElementSibling;
    optionsMenu.classList.toggle("hidden");

    var arrow = e.querySelector(".fa-chevron-down");
    if (arrow) {
      arrow.classList.toggle("rotate-180");
    }
  });

  var optionsMenu = e.nextElementSibling;
  var allOptions = optionsMenu.querySelectorAll(".custom-option");

  allOptions.forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.stopPropagation();

      var chosenValue = option.getAttribute("data-value");
      var textSpan = e.querySelector(".selected-text");

      textSpan.textContent = chosenValue;

      textSpan.classList.remove("text-slate-500", "dark:text-slate-400");

      e.setAttribute("data-value", chosenValue);

      optionsMenu.classList.add("hidden");
      var arrow = e.querySelector(".fa-chevron-down");
      if (arrow) {
        arrow.classList.remove("rotate-180");
      }
    });
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll(".custom-options").forEach(function (menu) {
    menu.classList.add("hidden");
  });
  document.querySelectorAll(".fa-chevron-down").forEach(function (arrow) {
    arrow.classList.remove("rotate-180");
  });
});

var fullNameInput = document.getElementById("fullName");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var projectDetailsInput = document.getElementById("projectDetails");

function validationForm(element) {
  var regex = {
    fullName: /^[A-Za-z]{3,15}( [A-Za-z]{3,10})?$/,
    email: /(^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$)/,
    phone: /^(\+201|01)[1205][0-9]{8}$/,
    projectDetails: /^[a-zA-Z0-9\s,!-]{10,}$/,
  };

  if (element && regex[element.id] && regex[element.id].test(element.value)) {
    if (element.nextElementSibling) {
      element.nextElementSibling.classList.add("hidden");
    }
    return true;
  } else {
    if (element && element.nextElementSibling) {
      element.nextElementSibling.classList.remove("hidden");
    }
    return false;
  }
}

var btnForm = document.getElementById("btnForm");

btnForm.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  if (
    validationForm(fullNameInput) &&
    validationForm(emailInput) &&
    validationForm(phoneInput) &&
    validationForm(projectDetailsInput)
  ) {
    Swal.fire({
      title: "! تم إرسال رسالتك بنجاح",
      text: "شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن.",
      icon: "success",
      draggable: true,
      confirmButtonText: "حسناً",

      background: "#1e2230",
      color: "#ffffff",
      iconColor: "#4cd137",
    });
    clearForm();
  }
});

var allInputs = [fullNameInput, emailInput, phoneInput, projectDetailsInput];

allInputs.forEach(function (e) {
  e.addEventListener("input", function () {
    validationForm(e.target);
  });
});

function clearForm() {
  fullNameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  projectDetailsInput.value = "";
}
