
var doc = $(document);
var main = $("main");
var img_intro = $(".img_intro");
var text_intro = $(".text-intro");
var text_intro2 = $(".text-intro2");
var img_d1 = $(".img-donut1");
var img_d2 = $(".img-donut2");
var img_d3 = $(".img-donut3");
var intro = $(".intro");
var footer = $("footer");
var about = $("#about");

doc.ready(function(){
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    $(".sidenav").sideNav();
    main.css("display", "none");
    footer.css("display", "none");
  });

  img_intro.css("opacity", 1);
  img_intro.css("transform", "scale(1)");
  text_intro.css("opacity", 1);
  text_intro2.css("opacity", 1);
  text_intro.css("transform", "scale(1)");
  text_intro2.css("transform", "scale(1)");
  img_d1.css("left", "100%");
  img_d2.css("right", "100%");
  img_d3.css("left", "100%");

  setTimeout(function(){
    img_d1.css("opacity", "1");
  },500)
  setTimeout(function(){
    img_d3.css("opacity", "1");
  },200)
  setTimeout(function(){
    img_d2.css("opacity", "1");
  },300)
  setTimeout(function(){
    intro.css("opacity", 0);
    intro.css("transition", "2s ease-out");
  },4300)
  setTimeout(function(){
    intro.css("display", "none");
    main.css("display", "block");
    footer.css("display", "block");
    main.css("opacity", 1);
    footer.css("opacity", 1);
  },6000);

doc.scroll(function(){
  if ($(window).scrollY > $("#about").offset().top - window.innerHeight / 2) {
    $(".head").css("opacity", 0);
    $(".head").css("left", "-100px");
    $(".head").css("transition", ".5s");
  }
})