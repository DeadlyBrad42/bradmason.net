// 
var secondsToWait = 1500;
var animationLength = 1000;
var timer;
var complete;

$(document).ready(function () {
  complete = false;
  
  /* IE can't have nice things.
  if($.browser.msie)
  {
    complete = true;
  }*/
  
  // Create the image that holds the specs
  $("<img />", {
    id: "specs",
    src: "img/specs.png"
  }).css({
    display: "none",
    position: "absolute",
    top: "-100px",
    left: ($("div#me").offset().left + 55),
    "rotation": 0
  }).appendTo("body");
  
  //create the image that holds the text
  $("<img />", {
    id: "dwi",
    src: "img/dwi.png"
  }).css({
    display: "none",
    position: "absolute",
    top: ($("div#me").offset().top + 360),
    left: ($("div#me").offset().left + ($("div#me").width()/2) - 150)
  }).appendTo("body");
  
  // Hover functions
  $("div#me").hover(
  function () {
    // On hover-in
    if(!complete) startTimer();
  },
  function () {
    // On hover-out
    if(!complete) stopTimer();
  });
});

function startTimer(){
  timer = setTimeout("timerTick()", secondsToWait);
}

function stopTimer(){
  clearTimeout(timer);
}

function timerTick(){
  
  $("#specs").css("display", "inline");
    
  $("#specs").animate({
    top: ($("div#me").offset().top + 100),
    "rotation": 13.5,
  }, {
    duration: animationLength,
    complete: function () {
      // Animation complete
      $("#dwi").css("display", "inline");
      complete = true;
    },
    step: function (now, fx) {
      if (fx.prop == "rotation") {
        $(this).css({
          "-webkit-transform": "rotate(" + now + "deg)",
          "-moz-transform": "rotate(" + now + "deg)",
          "-ms-transform": "rotate(" + now + "deg)",
          "transform": "rotate(" + now + "deg)"
        });
      }
    }
  });
  
}