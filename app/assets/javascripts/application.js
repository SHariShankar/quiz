// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require masonry/jquery.masonry
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require cocoon
//= require_tree .

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  $.material.init();
  $('#results').imagesLoaded(function() {
    $('#results').masonry({
      itemSelector: '.bo',
      isFitWidth: true
    });
  });
});
$(document).on('turbolinks:load', function() {
  $('[data-toggle="popover"]').popover();
  $.material.init();
  $('#results').imagesLoaded(function() {
    $('#results').masonry({
      itemSelector: '.bo',
      isFitWidth: true
    });
  });
});
$(document).ready(function(){
  $(".toggle").click(function(){
      $(".text-area").toggle();
  });
  // $(window).blur(function() {
  //   alert("You can't move to next tab while writing exam!");
  // }); 
});