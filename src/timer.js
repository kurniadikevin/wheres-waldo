const Timer =()=>{
    window.onload = function () {
  
        var seconds = 0; 
        var tens = 0; 
        var appendTens = document.getElementById("tens")
        var appendSeconds = document.getElementById("seconds")
        var buttonStart = document.getElementById('button-start');
        var buttonStop = document.getElementById('button-stop');
        var buttonReset = document.getElementById('button-reset');
        var Interval ;
      
        buttonStart.onclick = function() {
          
          clearInterval(Interval);
           Interval = setInterval(startTimer, 10);
        }
        
          buttonStop.onclick = function() {
             clearInterval(Interval);
        }
        
      
        buttonReset.onclick = function() {
           clearInterval(Interval);
          tens = "00";
            seconds = "00";
          appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
        }
        
         
        
        function startTimer () {
          tens++; 
          
          if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
          }
          
          if (tens > 9){
            appendTens.innerHTML = tens;
            
          } 
          
          if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
          }
          
          if (seconds > 9){
            appendSeconds.innerHTML = seconds;
          }
        
        }
        
      
      }
   

    return(
        <div class="timer-wrapper">
            <div>Time</div>
            <p><span id="seconds">00</span>:<span id="tens">00</span></p>
            <button id="button-start">Start</button>
            <button id="button-stop">Stop</button>
            <button id="button-reset">Reset</button>
    </div> 

    )
}

export default Timer;