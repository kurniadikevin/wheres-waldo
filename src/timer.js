const Timer =()=>{
    window.onload = ()=>{
  
        let minute = 0; 
        let seconds = 0; 
        //DOM
        let appendSeconds = document.querySelector(".seconds");
        let appendMinute = document.querySelector(".minute");
        let btnStart = document.querySelector('.button-start');
        let timerWrapper = document.querySelector('.timer-wrapper');
        let Interval ;
    
        // ENTRY POINT
        
       btnStart.onclick = function() {
           clearInterval(Interval);
           Interval = setInterval(startTimer, 1000);
           const imageCont = document.querySelector('.img-cont');
           imageCont.style.display = 'flex';
           alert('game on');
          btnStart.style.display='none';
           timerWrapper.style.display='block';

          //reset timer
          seconds = "00";
          minute = "00";
          appendSeconds.innerHTML = seconds;
            appendMinute.innerHTML = minute;

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
        
        function startTimer () {
          seconds++; 
          
          if(seconds <= 9){
            appendSeconds.innerHTML = "0" + seconds;
          }
          
          if (seconds > 9){
            appendSeconds.innerHTML = seconds;
            
          } 
          
          if (seconds > 59) {
            minute++;
            appendMinute.innerHTML = "0" + minute;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
          }
          
          if (minute > 9){
            appendMinute.innerHTML = minute;
          }
        
        }}
      
      
   

    return(
      <div>
        <div class="timer-wrapper">
            <div>Time:</div>
              <p><span className="minute">00</span>:<span className="seconds">00</span></p>
        </div>
            
              <button className="button-start" >Start Searching</button>
            
        </div>
    )
}

export default Timer;