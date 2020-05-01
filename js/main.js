var countDate = new Date('jan 1, 2021 00:00:00').getTime();

function newYear() {
  
  var now = new Date().getTime();
      gap = countDate - now ;

      var second = 1000 ;
      var minute = second * 60;
      var hour   = minute * 60 ;
      var day    = hour * 24 ;

      var d = Math.floor(gap / (day));

      if(d < 10){

        d = "0" + d ;
      }
      var h = Math.floor((gap % (day)) / (hour));

      if(h< 10){

        h = "0" + h ;
      }
      var m = Math.floor((gap % (hour)) / (minute));

      if(m < 10){

        m = "0" + m ;
      }
      var s = Math.floor((gap % (minute)) / (second));

      if(s < 10){

        s = "0" + s ;
      }
      

      document.getElementById('day').innerText = d;
      document.getElementById('hour').innerText = h;
      document.getElementById('minute').innerText = m;
      document.getElementById('second').innerText = s;
      
  }

  setInterval(function(){
    
    newYear();
    

  }, 1000);