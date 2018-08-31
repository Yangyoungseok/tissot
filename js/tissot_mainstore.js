// monfee_test_news.js
 
(function($) {
var ww = $(window).outerWidth();

  var addr = "../img/store/men1/";
// var img  = ['wc1.png','wc2.png','wc3.png','wc4.png','wc5.png','wc6.png','wc7.png','wc8.png'];
var mainLink = ['stm_01.html','stm_02.html','stm_03.html','stm_04.html','stm_05.html','stm_06.html','stm_07.html','stm_08.html'];
var mainTitle = ['title1','title2','title3','title4','title5','title6','title7'];

var stS = [ 
  [
    {img:"wc1.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc2.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc3.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc4.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc5.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc6.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc7.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc8.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}

  ], [
    {img:"wc9.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc10.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc11.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc12.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc13.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc14.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc15.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc16.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
  ], [
    {img:"wc17.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc18.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc19.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc20.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc21.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc22.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc23.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc24.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
  ], [
    {img:"wc17.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc18.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc19.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc20.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc21.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc22.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc23.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc24.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
  ], [
    {img:"wc17.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc18.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc19.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc20.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc21.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc22.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc23.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"},
    {img:"wc24.png",link:"stm_01.html", title:"Lorem ipsum dolor", data:"Lorem ipsum dolor sit amet,"}
  ]
];


var stBox = $('.stBox');
var storeChild = stBox.children('div');
var stUl = storeChild.find('ul');
 //html복제해서 처리하는 방법
var i=0,j=0; 

  for(; i < 8; i+=1){
    var stLi = stUl.find('li').eq(0).clone(true);
    stUl.append(stLi);
  }

  for(; j < 4; j+=1){
   var copyUl = stUl.eq(0).clone(true);
    storeChild.append(copyUl);
  }
//---------------------------

//----------------------------
  stUl = storeChild.find('ul');
  $.each(stUl, function(i, v){
    $(this).find('li').eq(-1).remove();
    // console.log(stUl.eq(i).children('li'));

    var liLen = stUl.eq(i).children('li').length;
    // console.log(liLen);
    var j = 0;
    // console.log(i);
    for(; j < liLen; j += 1){
    // console.log(stS[i][j].img);
      var li = stUl.eq(i).children('li').eq(j);
       li.find('.st_Img').css({backgroundImage:'url('+ addr + stS[i][j].img +')'});
      // li.find('a').attr({href:stS[i].Link, target:'_blank', "class":'more', "data-myattr":'myname'});
       li.find('dt').text(stS[i][j].title);
       li.find('dd').text(stS[i][j].data);
    }
  });



if(ww <= 768){

}


$(window).on('resize',function() {
  var nw = $(window).outerWidth();
  if(nw !== ww){    location.reload();  }
});

})(jQuery);