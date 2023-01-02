const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,

  autoplay: {
    delay: 4000,
  },

  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        enabled: true,
      },
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: false,
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const tabIndex = Array.prototype.indexOf.call(tabs, this);
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    tab.classList.add("active");
    tabContents[tabIndex].classList.add("active");
  });
});

// Fries Menu
const friesMenu = document.getElementsByClassName("fries-menu")[0];

friesMenu.addEventListener("click", () => {
  let mobileNavContents = document.getElementsByClassName("nav-mobile-content")[0];
  mobileNavContents.classList.toggle("show");
});
