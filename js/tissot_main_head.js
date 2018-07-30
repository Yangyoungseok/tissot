
(function($) {

var headBox = $('#headBox');
var headWrap = headBox.children('.headBox_wrap');
var nvBox = headWrap.children('#nvBox');
var hdnav = nvBox.children('#hdnav');
var hdOl = hdnav.find('ol');
var hdLi = hdOl.find('li');




// hdnav.find('ol').hide();

// var slideShow = function(){
//   hdnav.find('ol').stop().slideDown();
//   hdnav.stop().slideDown();
// };

// var slideHide = function(){
//   hdnav.find('ol').stop().slideUp();

// };

// hdnav.on('mouseenter',function() {slideShow();})
//        .on('mouseleave',function() {slideHide();});

var allUd = $('.all_ud');
var allA = allUd.children('li').children('a');
var allLastA = allUd.find('ol').find('li').eq(-1).find('a');


allA.on('click',function(e){
  e.preventDefault();
  $(this).next('ol').addClass('active');
});


allA.on('focus',function() { slideShow();});
allLastA.on('blur',function() {slideHide();});





})(jQuery);
















// headBox.find('ol').hide();

// headBox.on('mouseenter',function() {
//           $(this).find('ol').stop().slideDown();
//           navBg.stop().slideDown();
//         })
//         .on('mouseleave',function() {
//           $(this).find('ol').stop().slideUp();
//           navBg.stop().slideUp();
//         });

// headBox.find('#all_ud')
//        .children('ul')
//        .children('li')
//        .children('a').on('focus',function() {
//          headBox.find('ol').stop().slideDown();
//          navBg.stop().slideDown();
//         });

// headBox.find('ol')
//        .find('li') 
//        .eq(-1)
//        .find('a')
//        .on('blur',function(){
//         headBox.find('ol').stop().slideUp();
//         navBg.stop().slideUp();
//        });



