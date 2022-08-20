const Timer =()=>{
    window.onload = function () {
  
        var seconds = 0; 
        var tens = 0; 
        //DOM
        var appendTens = document.getElementById("seconds")
        var appendSeconds = document.getElementById("minute")
        var buttonStart = document.getElementById('button-start');
        var buttonStop = document.getElementById('button-stop');
        var buttonReset = document.getElementById('button-reset');
        var timerWrapper = document.querySelector('.timer-wrapper');
        var Interval ;
      
        // ENTRY POINT
        buttonStart.onclick = function() {
          clearInterval(Interval);
           Interval = setInterval(startTimer, 1000);
           const imageCont = document.querySelector('.img-cont');
           imageCont.style.display = 'block';
           alert('game on');
           buttonStart.style.display='none';
           timerWrapper.style.display='block';

          //reset timer
          tens = "00";
          seconds = "00";
          appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;

          // display all side image again
          const img1= document.querySelector('#img1');
          const img2= document.querySelector('#img2');
          const img3= document.querySelector('#img3');
          img1.style.display='block';
          img2.style.display='block';
          img3.style.display='block';
          
          //remove display result time
          const resultTime = document.querySelector('.result-time');
          resultTime.style.display='none';
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
          
          if (tens > 59) {
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
      <div>
        <div class="timer-wrapper">
            <div>Time:</div>
              <p><span id="minute">00</span>:<span id="seconds">00</span></p>
        </div>
            
              <button id="button-start">Start Searching</button>
            
        </div>
    )
}

export default Timer;