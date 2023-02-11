const swiper = new Swiper('.swiper', {

    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    
    pagination: {
        clickable:true,
        el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });