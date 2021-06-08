(function($) {
   console.log("d2");
   $.fn.visible = function(partial) {
      console.log("d8");
      var $t            = $(this),
         $w            = $(window),
         viewTop       = $w.scrollTop(),
         viewBottom    = viewTop + $w.height(),
         _top          = $t.offset().top,
         _bottom       = _top + $t.height(),
         compareTop    = partial === true ? _bottom : _top,
         compareBottom = partial === true ? _top : _bottom;
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
   };
})(jQuery);

var win = $(window);
var allMods = $("header");
console.log("d10");

console.log("info is:"+Object.keys(allMods).length);



allMods.each(function(i, el) {
   console.log("d13");
  var el = $(el);
  if (el.visible(true)) {
     console.log("d7");
    el.addClass("already-visible"); 
  } 
});

console.log("d11");

win.scroll(function(event) {
   console.log("d5");
   allMods.each(function(i, el) {
    console.log("d6");
    var el = $(el);
    if (el.visible(true)) {
      console.log("d1");
      el.addClass("come-in"); 
    } 
  });
  
});