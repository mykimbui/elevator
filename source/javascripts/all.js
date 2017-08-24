//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
  TweenMax.allTo('.up', {y:100, x: 100, ease: Linear.easeNone});
  TweenMax.allTo('.down', {y:100, x: 100, ease: Linear.easeNone});
});
