

(function($){
 var prmodal_box = $('.prmodal_box');
 var prmodal_close = $('.prmodal_box').find('.close');
 var modal_img = $('.modal_img');
 var prbg = $('.prbg');
 var list = $('.proimg_01').children('li');
 var show_btn = $('.show_btn');
 var before = show_btn.children('button').eq(0);
 var after = show_btn.children('button').eq(-1);

 prmodal_box.hide();
 prbg.hide();


var url = "../img/store/";
var imgList = ['s1.jpg','s2.jpg','s3.jpg','s4.jpg','s5.jpg','s6.jpg',
's7.jpg','s8.jpg','s9.jpg','s10.jpg','s11.jpg','s12.jpg','s13.jpg',
's14.jpg','s15.jpg','s16.jpg',];

// list클릭시 모달창 띄워서 처리
var thisI;
list.on('click',['a'],function(e){
  e.preventDefault()
  thisI = $(this).index();

  modal_img.css({backgroundImage:'url("'+ url + imgList[thisI] +'")',
 backgroundRepeat:'no-repeat', backgroundPosition:'center center'});
  prmodal_box.fadeIn();
});

prmodal_close.on('click',function(){
  prmodal_box.fadeOut();
});

before.on('click',function(e) {
  e.preventDefault();
  if(thisI <= 0){
      thisI = imgList.length-1;
  }else{
    thisI-=1;
  }
  modal_img.css({backgroundImage:'url("'+ url + imgList[thisI] +'")',
  backgroundRepeat:'no-repeat', backgroundPosition:'center center'});
});

after.on('click',function(e) {
  e.preventDefault();

  if(thisI >= imgList.length-1){
    thisI = 0;
  }else{
    thisI += 1;
  }

  modal_img.css({backgroundImage:'url("'+ url + imgList[thisI] +'")',
  backgroundRepeat:'no-repeat', backgroundPosition:'center center'});
})
setInterval(function() {
  after.trigger('click');
},200);

})(jQuery);