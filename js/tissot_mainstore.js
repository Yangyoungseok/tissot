// monfee_test_news.js

(function($) {
var ww = $(window).outerWidth();

  var addr = "../img/store/men1/";
var img  = ['wc1.png','wc2.png','wc3.png','wc4.png','wc5.png','wc6.png','wc7.png','wc8.png'];
var mainLink = ['stm_01.html','stm_02.html','stm_03.html','stm_04.html','stm_05.html','stm_06.html','stm_07.html','stm_08.html']
var mainTitle = ['title1','title2','title3','title4','title5','title6','title7'];

var stS = [

            {img:"wc1.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"wc2.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"wc3.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"wc4.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"wc5.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"wc6.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"wc7.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"wc8.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}

];


var stBox = $('.stBox');
var stUl = stBox.find('ul');
 //html복제해서 처리하는 방법
var i=0; 

  for(; i < img.length; i+=1){
    var stLi = stUl.find('li').eq(0).clone();
    stUl.append(stLi);
    var li = stUl.children('li').eq(i);
    li.find('.st_Img').css({backgroundImage:'url('+ addr + img[i] +')'});
    // li.find('a').attr({href:stS[i].Link, target:'_blank', "class":'more', "data-myattr":'myname'});
    li.find('dt').text(stS[i].title);
    li.find('dd').text(stS[i].data);

  }
  $.each(stUl, function(i, v){
    $(this).find('li').eq(-1).remove();
  });



if(ww <= 768){

}


$(window).on('resize',function() {
  var nw = $(window).outerWidth();
  if(nw !== ww){    location.reload();  }
});

})(jQuery);