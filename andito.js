// ===== Navbar Toggle =====
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// ===== Search Form Toggle =====
const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const closeBtn = document.querySelector('#close');

searchIcon.onclick = () => {
  searchForm.classList.toggle('active');
};

closeBtn.onclick = () => {
  searchForm.classList.remove('active');
};

// ===== Swiper Slider =====
const swiper = new Swiper(".home-slider", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// ===== Star Rating =====
const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');

allStar.forEach((item, idx) => {
  item.addEventListener('click', () => {
    ratingValue.value = idx + 1;

    allStar.forEach(i => {
      i.classList.replace('bxs-star', 'bx-star');
      i.classList.remove('active');
    });

    for (let i = 0; i <= idx; i++) {
      allStar[i].classList.replace('bx-star', 'bxs-star');
      allStar[i].classList.add('active');
    }
  });
});
