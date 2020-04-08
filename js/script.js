  // fix menu
    $(window).scroll(function(){
        if($(document).width()<992){
          if($(window).scrollTop()>100)
          {$(".navbar-fixed").addClass("fix-top") } else {$(".navbar-fixed").removeClass("fix-top")}
        }
    });

    $(window).scroll(function(){
        
          if($(window).scrollTop()>100)
          {$(".navbar-fixed").addClass("fix-top") } else {$(".navbar-fixed").removeClass("fix-top")}
        
    });
// fix menu end

// mobile menu btn
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  this.classList.toggle('mobile-menu-btn-active');
  document.querySelector('.navbar-fixed').classList.toggle('mobile-menu-open');
});

document.querySelectorAll('.menu-item').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelector('.mobile-menu-btn').classList.remove('mobile-menu-btn-active');
    document.querySelector('.navbar-fixed').classList.remove('mobile-menu-open');
  });
});

// owl carousel customers
$(document).ready(function(){
  $(".carousel-customers").owlCarousel({
    items: 1,
    loop:true,
		nav:false,
		autoplay:true,
		autoplayTimeout:4000,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		autoplayHoverPause: true
  });
});

// owl carousel team
$(document).ready(function(){
  $(".carousel-team").owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplayHoverPause: true,
    responsive:{      
      0:{items:1},
      400:{items:2},
      600:{items:3},
      800:{items:4},
      950:{items:5},
      1100:{
        items:6,
        nav:false,
        loop: false,
        autoplay: false,
        mouseDrag: false
      }
    },
    autoplay:true,
    autoplayTimeout:2500
  });
});



// owl carousel events
$(document).ready(function(){
    $(".carousel-events").owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        mouseDrag: false
    });
  });

  // footer map open	
  $(document).on("click",".open-map",function(){
    $(".footer-content").toggleClass( "active" );
  });

