$(function(){
  var myVar=setInterval(function(){myTimer()},1000);

  var myTime = new Date("May 26, 2015 18:28:00");
  function myTimer() {
    var d = new Date();
    var dd = Date(myTime - d);
    var h = Math.floor(((myTime - d)/1000) / 3600);
    var m = Math.floor(((myTime - d)/(1000 * 60)) % 60);
    var s = Math.floor(((myTime - d)/1000) % 60);

    $("#clock").text(h+':'+m+':'+s);

    if (h <= 0 && m <= 0 && s <= 0){
      clearInterval(myVar);
      $('#clock').text('00:00:00');
      $('#phone-container h1').removeClass('mdi-communication-call');
      $('#phone-container h1').addClass('mdi-notification-phone-in-talk');
      $.get('/make_call');
    }

  }
});

