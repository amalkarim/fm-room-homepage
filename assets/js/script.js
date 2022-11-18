$(document).ready(function() {
  const data = [
    {
      src: "./images/desktop-image-hero-1.jpg",
      srcMobile: "./images/mobile-image-hero-1.jpg",
      alt: "Futuristic set of chairs around a table with a nice bonsai tree on top of it",
      h2: "Discover innovative ways to decorate",
      p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
      src: './images/desktop-image-hero-2.jpg',
      srcMobile: "./images/mobile-image-hero-2.jpg",
      alt: 'Three different colored simple chairs',
      h2: 'We are available all across the globe',
      p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      src: "./images/desktop-image-hero-3.jpg",
      srcMobile: "./images/mobile-image-hero-3.jpg",
      alt: "A black colored foldable chair",
      h2: "Manufactured with the best materials",
      p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
  ];
  
  const sliderImg = $('.slider-img > img');
  const sliderContent = $('.slider-content');
  const sliderTitle = $('.slider-content h2');
  const sliderBody = $('.slider-body');
  let idx = 0;
  
  sliderImg.attr('src', ($(window).width() > 425) ? data[idx].src : data[idx].srcMobile);
  sliderImg.attr('alt', data[idx].alt);
  sliderTitle.text(data[idx].h2);
  sliderBody.text(data[idx].p);
  
  if ($(window).width() < 426) {
    $('nav a').attr('tabindex', "-1");
  }
  
  $('.slider-nav button').click(function() {
    let direction = ($(this).attr('id') == 'arrowLeft') ? -1 : 1;
    idx = idx + direction;
    
    if (idx > data.length - 1) idx = 0;
    if (idx < 0) idx = data.length - 1;
  
    let src = ($(window).width() > 425) ? data[idx].src : data[idx].srcMobile;
  
    sliderImg.fadeOut(300, function() {
      sliderImg.attr('src', src);
      sliderImg.attr('alt', data[idx].alt);
    }).fadeIn(300);
  
    sliderTitle.fadeOut(300, function() {
      sliderTitle.text(data[idx].h2);
    }).fadeIn(300);
  
    sliderBody.fadeOut(300, function() {
      sliderBody.text(data[idx].p);
    }).fadeIn(300);
  })
  
  $('#hamburgerMenu').click(function() {
    $('#nav').css("transform", "none");
    $('nav a, #closeMenu').attr('tabindex', "0");
    $('.logo, #hamburgerMenu').attr('tabindex', "-1");
    $('#overlay').fadeIn(300);
  });

  $('#closeMenu').click(function() {
    $('#nav').css("transform", "translateY(-100%");
    $('nav a, #closeMenu').attr('tabindex', "-1");
    $('.logo, #hamburgerMenu').attr('tabindex', "0");
    $('#overlay').fadeOut(300);
  });
})