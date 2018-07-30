// monfee_test_adbox_slide.js
 
(function($){
 var stindi = $('#stindi');
 
 var indi = stindi.find('.stindi_01');
 var indiLi =indi.children('li');
 var indiLiLengh = indiLi.length;
 

 var stBox = $('.st_01');

 var i =0;
 var Que = function(i){
  indiLi.eq(i).addClass('active');
  indiLi.eq(i).siblings(indiLi).removeClass('active');
  var per = i * -100 + '%';
  stBox.stop().animate({marginLeft:per});

 };
// indicator
indiLi.on('click',function(e){
  e.preventDefault();
  i = $(this).index();
  Que(i);

});

})(jQuery);

















// slideBtn.find('button').on('click',function(e){
//   e.preventDefault();
//   var j = $(this)[0];

//   if(j === pre && i > 0){
//       i-=1;
//   }else if(j === next && i < indiLiLengh - 1){ i+=1; }
//  Que(i);

// });

// indiLi.find('a').on('focus',function(e){
//  $(window).scrollTop(0);
// });
//  slideBtn.find('button').on('focus',function(){
//   $(window).scrollTop(0);
//  });
