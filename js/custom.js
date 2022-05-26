 
   


$(function(){

 // color picker start 
 $('.offcanvas ul .green').click(function(){
  $('body').addClass('green').removeClass('orange').removeClass('naveblue');
})
 
 $('.offcanvas ul .orange').click(function(){
  $('body').addClass('orange').removeClass('green').removeClass('naveblue');
})
 
 $('.offcanvas ul .naveblue').click(function(){
  $('body').addClass('naveblue').removeClass('green').removeClass('orange');
})

 $('.offcanvas ul .default').click(function(){
  $('body').addClass('default').removeClass('green').removeClass('orange').removeClass('naveblue');
})
 
 
 
// color picker ends 

// =========SCROLLING BACK TO TOP START 
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 300){
      $('.bac_to_top').fadeIn();
    }else{
      $('.bac_to_top').fadeOut();
    };
// =========SCROLLING BACK TO TOP ENDS 

// ========= NAV SIXED START 
    if(scrolling > 200){
      $('.header_bg').addClass('stiky_hed')
    }else{
      $('.header_bg').removeClass('stiky_hed')

    }
// ========= NAV SIXED ENDS 

  });
  // got to top 
  $('.bac_to_top').click(function(){
    $('body,html').animate({
      scrollTop:0,
    },500);
  });

    // ===========BANNER SLIDER START =========
$('.slider_banner').slick({
    arrows:false,
    // autoplay:true,
    dots:true,
});
    // ===========BANNER SLIDER ENDS =========

    // ===========ABOUT VEDIO SLIDER ENDS =========
    new VenoBox({
        selector: '.about_vedio',
    });
    // ===========ABOUT VEDIO SLIDER ENDS =========


//===============  GALLERY VANUBOX 
 
new VenoBox({
    selector: '.gallery_venobox',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane',
    spinner:'wander',
    toolsColor:'#e23e38',
    toolsBackground:'#ddd',
    spinColor:'#e23e38',
    overlayColor:'rgba(255,255,255,0.85)',
    titleStyle:'bar',
    titlePosition:'bottom',
    // ratio:'16x9',
    numeration:'true',
    navigation:'true',
    infinigall:true
});
//==================  GALLERY VANUBOX 

    // ===========TESTIMONAIS SLIDER START =========
    $('.testi_slider').slick({
        arrows:false,
        autoplay:true,
        dots:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:false
              }
            }
          ]
    });
        // ===========TESTIMONAIS SLIDER ENDS =========

        // ===========COUNTERUP SLIDER ENDS =========
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // ===========COUNTERUP SLIDER ENDS =========

        // ===========BRAND SLIDER SLIDER ENDS =========
        $('.brand_slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow:'<i class="fa-solid fa-chevron-left prev_arrow"></i>',
            nextArrow:'<i class="fa-solid fa-chevron-right right_arrow"></i>',
            centerMode: true,
            centerPadding: '0px',
            autoplay:true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows:false
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows:false
                  }
                }
              ]
        });
        // ===========BRAND SLIDER SLIDER ENDS =========
        
        // ===========STICKEY HEADER SLIDER ENDS =========
 
        // ===========STICKEY HEADER SLIDER ENDS =========

});