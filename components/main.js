$( document ).ready(function(){
  $(".button-collapse").sideNav();
});

$( document ).ready(function(){
  $('.parallax').parallax();
});

//
$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});

$(function(){
      $("#texttyped").typed({
        strings: ["a high school student.", "a hacker.", "an award-winning artist.", "a programmer.", "a painter", "a photographer.", "a web designer.", "a robotics programming lead.", "a kungfu black belt.", "an AR and VR enthusiast."],
        typeSpeed: 20,
        loop: true
      });
  });
