// Click effect
document.addEventListener("click", function(event) {
   let effect = document.createElement("div");
   effect.classList.add("click-effect");
   effect.style.left = `${event.clientX - 10}px`;
   effect.style.top = `${event.clientY - 10}px`;
   document.body.appendChild(effect);
   setTimeout(() => {
       effect.remove();
   }, 500);
});

$(document).ready(function(){
   var $sm = 480;
   var $md = 768;

   function resizeThis() {
       $imgH = $('.middle img').width();
       if ($(window).width() >= $sm) {
           $('.left,.right,.section').css('height', $imgH);
       } else {
           $('.left,.right,.section').css('height', 'auto');
       }
   }

   resizeThis();

   $(window).resize(function(){
       resizeThis();
   });

   $(window).scroll(function() {
       $('.section').each(function(){
           var $elementPos = $(this).offset().top;
           var $scrollPos = $(window).scrollTop();
           var $sectionH = $(this).height();
           var $h = $(window).height();
           var $sectionVert = (($h / 2) - ($sectionH / 4));

           if (($elementPos - $sectionVert) <= $scrollPos && 
               ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
               $(this).addClass('animate');
           } else {
               $(this).removeClass('animate');
           }
       });
   });
});

// Smooth scrolling
$(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
       if (
           location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
           location.hostname == this.hostname
       ) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
               $('html, body').animate({
                   scrollTop: target.offset().top
               }, 1000);
               return false;
           }
       }
   });
});
