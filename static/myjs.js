$(function(){
  var myVar=setInterval(function(){myTimer()},1000);
  console.log(myVar);

  var myTime = new Date("May 26, 2015 13:15:00");
  function myTimer() {
      var d = new Date();
      var dd = Date(myTime - d);
      var h = Math.floor(((myTime - d)/1000) / 3600);
      var m = Math.floor(((myTime - d)/(1000 * 60)) % 60);
      var s = Math.floor(((myTime - d)/1000) % 60);
      document.getElementById("demo").innerHTML = h+':'+m+':'+s;
      if (h <= 0 && m <= 0 && s <= 0){
        clearInterval(myVar);
        $('#demo').empty();
        $.get('/make_call');
      }
  }
});

