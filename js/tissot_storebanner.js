// monfee_test_issue.js 
(function($) {
 var proindi = $('.proindi');
 var proimg = $('.proimg');
 var proimgCopy = proimg.find('li').eq(0).clone();
 proimg.children('ul').append(proimgCopy)
 var proimgLen = proimg.find('li').length;
 var prindi = proindi.find('.proindi_01');
 var prLi =prindi.children('li');
 
 var prBox = $('.proimg_01');
 var i =0;
 var Que = function(i){
  prLi.eq(i).addClass('active');
  prLi.eq(i).siblings(prLi).removeClass('active');
  var per = i * -100 + '%';
  prBox.stop().animate({marginLeft:per});
 };
prLi.on('click',function(e){
  e.preventDefault();
  i = $(this).index();
  Que(i);
});
  var proBanner = function(i){
    // 배너의 갯수를 파악해서 최대갯수위치에 오면 처음으로 이동
    var  num = i * -100 + '%';    
    if(i < proimgLen-1){      
      proimg.children('ul').stop().animate({marginLeft:num});
    }else{
      i=0;
      proimg.children('ul').stop().animate({marginLeft:num},function(){
        $(this).css({marginLeft:0});
      });
    }
    prLi.eq(i).addClass('active');
    prLi.eq(i).siblings('li').removeClass('active');
  };
  proBanner(i);
  var timed = 2000;
  var autoStart;
  var StartSlide = function(){
       autoStart = setInterval(function(){
                  (i<proimgLen-1) ? i+=1 : i=1;
                  proBanner(i);
                }, timed);  
     };
  var StopSlide = function() {clearInterval( autoStart ); };

  StartSlide();
  
    var Go = function(e) {
      e.preventDefault(); 
      StopSlide();  
      StartSlide(); 
};
  var Stop = function(e) {
      e.preventDefault();  
      StopSlide(); 
};

   prBox.on({'mouseleave':Go, 'mouseenter':Stop});

})(jQuery);













































