// monfee_test_news.js
 
(function($) {
var ww = $(window).outerWidth();

  var addr = "../img/magazine/magaimg/";
var img  = ['maga12.jpg','maga13.jpg','maga14.jpg','maga1.jpg','maga16.jpg','maga17.jpg','maga18.jpg','maga19.jpg','maga20.jpg'];
var mainLink = ['mainS_01.html','mainS_02.html','mainS_03.html','mainS_04.html','mainS_05.html','mainS_06.html','mainS_07.html','mainS_08.html','mainS_09.html'];
var mainTitle = ['title1','title2','title3','title4','title5','title6','title7'];

var mainS = [

            {img:"wc1.png",link:"mainS_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc2.png",link:"mainS_02.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc3.png",link:"mainS_03.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc4.png",link:"mainS_04.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc5.png",link:"mainS_05.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc6.png",link:"mainS_06.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc7.png",link:"mainS_07.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc8.png",link:"mainS_08.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"},
            {img:"wc9.png",link:"mainS_09.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet"}

];


var mainStore = $('#mainStore');
var mainUl = mainStore.find('ul');
 //html복제해서 처리하는 방법
var i=0; 

  for(; i < img.length; i+=1){
    var mainLi = mainUl.find('li').eq(0).clone();
    mainUl.append(mainLi);
    var li = mainUl.children('li').eq(i);
    li.find('.mainS_img').css({backgroundImage:'url('+ addr + img[i] +')'});
    // li.find('a').attr({href:mainS[i].Link, target:'_blank', "class":'more', "data-myattr":'myname'});
    li.find('dt').text(mainS[i].title);
    li.find('dd').text(mainS[i].data);

  }
    mainUl.children('li').eq(img.length).remove();



if(ww <= 768){

}


$(window).on('resize',function() {
  var nw = $(window).outerWidth();
  if(nw !== ww){    location.reload();  }
});

})(jQuery);