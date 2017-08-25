//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
  var upElement = $('.up-text');
  var $containerUp = $('.containerup');
  var $contentContainerUp = $('.content-containerup')
  var upWidth = upElement.width();
  var upHeight = upElement.height() + 30;
  var containerWidth = $containerUp.width() * 2;
  var containerHeight = $containerUp.height();
  var upsNeeded = Math.floor(containerWidth / upWidth) * Math.ceil(containerHeight/upHeight) * 2;
  Array(upsNeeded).fill('').map(i=>$contentContainerUp.append(upElement.clone()));
  var linesNeededUp = Math.ceil(containerHeight/upHeight);
  TweenMax.to('.content-containerup', 8, {y: - linesNeededUp * upHeight, ease: Linear.easeNone, repeat: -1});

  var downElement = $('.down-text');
  var $containerDown = $('.containerdown');
  var $contentContainerDown = $('.content-containerdown')
  var downWidth = downElement.width();
  var downHeight = downElement.height() + 30;
  var containerWidthDown = $containerDown.width() * 2;
  var containerHeightDown = $containerDown.height();
  var downsNeeded = Math.floor(containerWidthDown / downWidth) * Math.ceil(containerHeightDown/downHeight) * 2;
  Array(downsNeeded).fill('').map(i=>$contentContainerDown.append(downElement.clone()));
  var linesNeededDown = Math.ceil(containerHeightDown/downHeight);
  TweenMax.to('.content-containerdown', 8, {y: linesNeededDown * downHeight, ease: Linear.easeNone, repeat: -1});

});



