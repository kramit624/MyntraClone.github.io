let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", ()=>{
    mobileNav.style.left = "0px";
});

close.addEventListener("click", ()=>{
    mobileNav.style.left = "-100%";
});


var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
       slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
       centeredSlides: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
    });


document.getElementById('men').addEventListener('click', function() {
  var icon = document.getElementById('icon1');
  icon.classList.toggle('rotate-90');
});
document.getElementById('women').addEventListener('click', function() {
  var icon = document.getElementById('icon2');
  icon.classList.toggle('rotate-90');
});
document.getElementById('kids').addEventListener('click', function() {
  var icon = document.getElementById('icon3');
  icon.classList.toggle('rotate-90');
});
document.getElementById('home').addEventListener('click', function() {
  var icon = document.getElementById('icon4');
  icon.classList.toggle('rotate-90');
});
document.getElementById('beauty').addEventListener('click', function() {
  var icon = document.getElementById('icon5');
  icon.classList.toggle('rotate-90');
});





var swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 6, // Default value
      spaceBetween: 0, // No space between slides
      freeMode: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
      breakpoints: {
        1024: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 5,
        },
        600: {
          slidesPerView: 4,
        },
        450: {
          slidesPerView: 3,
        },
        100:{
            slidesPerView: 2,
        }
      },
    });




    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 6, // Default value
      spaceBetween: 0, // No space between slides
      freeMode: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
      breakpoints: {
        1024: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 5,
        },
        600: {
          slidesPerView: 4,
        },
        450: {
          slidesPerView: 3,
        },
        100:{
            slidesPerView: 2,
        }
      },
    });




document.getElementById('footClick').addEventListener('click', function() {
  var icon = document.getElementById('icon6');
  icon.classList.toggle('rotate-180');
});

document.getElementById('footClick').addEventListener('click', function () {
      var mobFoot = document.getElementById('mobFoot');
      mobFoot.classList.toggle('hidden');
    });