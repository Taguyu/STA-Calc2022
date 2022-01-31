function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "AC") {
        document.dentaku.display.value = "";
      } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        }
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "×";
        document.dentaku.div_btn.value = "÷";
      }
    }
    function set2fig(num) {
      // 桁数が1桁だったら先頭に0を加えて2桁に調整する
      var ret;
      if( num < 10 ) { ret = "0" + num; }
      else { ret = num; }
      return ret;
   }
   function showClock2() {
      var nowTime = new Date();
      var nowHour = set2fig( nowTime.getHours() );
      var nowMin  = set2fig( nowTime.getMinutes() );
      var msg = nowHour + ":" + nowMin;
      document.getElementById("RealtimeClockArea2").innerHTML = msg;
   }
   setInterval('showClock2()',60000);