//  G-CSE
(function() {
  var cx = '004238779387046477302:dcuo03rinow';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

  window.onload = function() { 
  var searchBox =  document.getElementById("gsc-i-id1");
  searchBox.placeholder="Search freebies picture";
  searchBox.title="Search freebies picture"; 
}

//  HEADER SCROLL SHADOW
var $document = $(document),
  $element = $('header'),
  className = 'shadow';
  $document.scroll(function() {
  if ($document.scrollTop() >0){
      $element.addClass(className); 
  } else {
      $element.removeClass(className); 
  }
});

//  SEARCH
//  => Search icon click fucntion active search bar
$('#search-btn').click(function(e) {
  e.stopPropagation();
  $('#search').toggleClass('hide');    
});
//  => Search icon animate X
$('.search-icon').on('click', function() {
  return $(this).toggleClass('active');
});
//  => Option icon click fucntion active menu category
$('#option-icon').click(function(e){
  e.stopPropagation();
  $('#menu').toggleClass('hide');
});

// SIDE MENU
//  => Icon burger click fucntion active sidebar menu
$("#burger").click(function() {
  $("#overlay").toggle();
  $("#menu-sidenav").toggleClass("active");
});
//  => Icon burger click fucntion active menu sidebar
$("#overlay").click(function() {
  $('#overlay').hide('200');
  $("#menu-sidenav").removeClass("active");
});

//  MASONRY IMAGE
//  => Set max row to 300px
$('#fbp300').flexImages({
  rowHeight: 300
});

$('#fbp350').flexImages({
  rowHeight: 350
});

//  => Set max row and truncate
$('#fbp120').flexImages({
  rowHeight: 150, truncate: 1, maxRows: 3
});

$('#fbp122').flexImages({
  rowHeight: 150, truncate: 1, maxRows: 2
});