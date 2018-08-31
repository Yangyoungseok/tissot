// monfee_test_news.js

(function($) {
var ww = $(window).outerWidth();

  var addr = "../img/magazine/magaimg/";

var maS = [
[
            {img:"maga16.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga17.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga18.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga20.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
],[
            {img:"maga1.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga2.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga3.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga4.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
],[
            {img:"maga5.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga6.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga7.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga8.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
],[
            {img:"maga9.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga9.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga9.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga9.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
],[
            {img:"maga16.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga17.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga18.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
            {img:"maga20.jpg",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
]
];

  //html복제해서 처리하는 방법
var magazine = $('#magazine');
var magaUl = magazine.find('#magaF').find('ul');

var i=0; 

  for(; i < maS[0].length; i+=1){
    var magaLi = magaUl.find('li').eq(0).clone(true);
    magaUl.append(magaLi);
    var li = magaUl.children('li').eq(i);
    li.find('.maga_img').css({backgroundImage:'url('+ addr + maS[i].img +')'});
    // li.find('a').attr({href:maS[i].Link, target:'_blank', "class":'more', "data-myattr":'myname'});
    li.find('dt').text(maS[i].title);
    li.find('dd').text(maS[i].data);

  }

  for(var j = 0; j < maS.length -1; j+=1){
    var magaUlcopy = magaUl.eq(0).clone(true);
    magaUl.parent().append(magaUlcopy);
  }
  magaUl = magazine.find('#magaF').find('ul');


  $.each(magaUl, function(i, v){
    $(this).find('li').eq(-1).remove();
        var liLen = magaUl.eq(i).children('li').length;
    // console.log(liLen);
    var j = 0;
    // console.log(i);
    for(; j < liLen; j += 1){
    // console.log(maS[i][j].img);
      var li = magaUl.eq(i).children('li').eq(j);
       li.find('.maga_img').css({backgroundImage:'url('+ addr + maS[i][j].img +')'});
      // li.find('a').attr({href:maS[i].Link, target:'_blank', "class":'more', "data-myattr":'myname'});
       li.find('dt').text(maS[i][j].title);
       li.find('dd').text(maS[i][j].data);
    }
  });


if(ww <= 768){

}


$(window).on('resize',function() {
  var nw = $(window).outerWidth();
  if(nw !== ww){    location.reload();  }
});

})(jQuery);