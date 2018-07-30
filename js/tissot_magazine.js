// monfee_test_news.js

(function($) {
var ww = $(window).outerWidth();

  var addr = "../img/magazine/magaimg/";
var img  = ['maga16.jpg','maga17.jpg','maga18.jpg','maga20.jpg'];
var mainLink = ['stm_01.html','stm_02.html','stm_03.html','stm_04.html'];
var mainTitle = ['title1','title2','title3','title4'];

var maS = [

            {img:"maga16.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga17.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga18.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga20.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
];

 
var magazine = $('.magazine');
var magaUl = magazine.children('ul');
 //html복제해서 처리하는 방법
var i=0; 

  for(; i < img.length; i+=1){
    var magaLi = magaUl.find('li').eq(0).clone();
    magaUl.append(magaLi);
    var li = magaUl.children('li').eq(i);
    li.find('.maga_img').css({backgroundImage:'url('+ addr + img[i] +')'});
    // li.find('a').attr({href:maS[i].Link, target:'_blank', "class":'more', "data-myattr":'myname'});
    li.find('dt').text(maS[i].title);
    li.find('dd').text(maS[i].data);

  }
  $.each(magaUl, function(i, v){
    $(this).find('li').eq(-1).remove();
  });


if(ww <= 768){

}


$(window).on('resize',function() {
  var nw = $(window).outerWidth();
  if(nw !== ww){    location.reload();  }
});

})(jQuery);