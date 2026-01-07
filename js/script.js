var $prodacts = $('.all-prodac').isotope({
  // options
  originLeft: false
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $prodacts.isotope({ filter: filterValue });
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
     breakpoints: {
         576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      },
});


