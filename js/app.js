$('.test').counterUp({delay: 10,
    time: 2000,
});
$('.banner_slide').slick({
    prevArrow:'<i class="fa-solid fa-arrow-left banner_slick_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right banner_slick_arrow"></i>',
    dots:true,
    dotsClass:'banner_slider_dots',
   /* fade: true,
    autoplay: true,
    autoplaySpeed:1000,
    speed:1000,*/
 });

 var typed = new Typed('.type', {
    strings: [
       'Graphics Design', 
       'Web Term',
       'Digital Marketing ',
       'Web Design',
     ],
       typeSpeed:100,
       loop:true,
  });
  $('.gallary_filter_menu li').on('click', function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  })
  $('.gallary_filter_item').filterizr()

  new VenoBox({
    spinner: 'plane',
    spinColor: 'red',
    titleattr: 'data-title',
    toolsColor : 'pink',
 });
 
  $(".count_down").countdown("2023/09/13", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          "<div class='count_down_item'><span class='discount'>%D</span><div class='during'><span>days</span></div></div>" +
          "<div class='count_down_item'><span class='discount'>%H</span><div class='during'><span>hr</span></div></div>" +
          "<div class='count_down_item'><span class='discount'>%M</span><div class='during'><span>min</span></div></div>" +
          "<div class='count_down_item'><span class='discount'>%S</span><div class='during'><span>sec</span></div></div>"
      )
    );
  });