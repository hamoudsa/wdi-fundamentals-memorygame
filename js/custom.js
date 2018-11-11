//start script of go to the div or id
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
//End script of go to the div or id


//start script of load gif

 document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
      },1000);
  }
}
//End script of load gif

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 200) {
        var yourImg = document.getElementById('yourImgId');
        if(yourImg && yourImg.style) {
            yourImg.style.height = '83px';
            yourImg.style.width = '130px';
        }
      
   
    } else {
       var yourImg = document.getElementById('yourImgId');
              if(yourImg && yourImg.style) {
                  yourImg.style.height = '130px';
                  yourImg.style.width = '100%';
              }
        
              

    }
});



///slider duration

$('#carousel-example-2').carousel({
  interval: 80000
})

///owl carousel
jQuery(document).ready(function ($) {

  var $sync1 = $(".big-images"),
    $sync2 = $(".thumbs"),
    flag = false,
    duration = 300;

  $sync1
    .owlCarousel({
      items: 1,
      margin: 10,
      nav: true,
      dots: true
    })
    .on('changed.owl.carousel', function (e) {
      if (!flag) {
        flag = true;
        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
        flag = false;
      }
    });

  $sync2
    .owlCarousel({
      margin: 20,
      items: 6,
      nav: true,
      center: true,
      dots: true
    })
    .on('click', '.owl-item', function () {
      $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    })
    .on('changed.owl.carousel', function (e) {
      if (!flag) {
        flag = true;    
        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
        flag = false;
      }
    });
});


   
  
//owl carousel
   $(document).ready(function () {

        var owl = $("#owl-demo1");

        owl.owlCarousel({
            items: 4, //10 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 2], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: true,
            navigation:false
        })

    });





