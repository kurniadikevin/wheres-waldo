import { useEffect, useState } from 'react';
import { getDatabase, ref, set,child,get } from "firebase/database";
import app from './firebase.js';



const Image1 = () => {

    const [count,setCount] = useState(3); 

    // sidebar desc
    const displayDesc = (num) => {
        const altText = document.querySelector(`.display-char${num}`);
        altText.style.display='inline';
    }

    const removeDesc = (num) =>{
        const altText = document.querySelector(`.display-char${num}`);
        altText.style.display='none';
    }
    // spotted dropdown
    const displayDropdown = (num)=> {
        const dropDown = document.querySelector(`.dropdown-cont${num}`);
        dropDown.style.display='block';
    }
    const removeDropdown = (num) => {
        const dropDown = document.querySelector(`.dropdown-cont${num}`);
        dropDown.style.display='none';
    }

    // get cursor position
    const getCursorPositionDropDown= (event)=> {
        var xCursorPosition = event.clientX;
        var yCursorPosition = event.clientY;
        //console.log(`x position ${xCursorPosition}`)
        //console.log(`y position ${yCursorPosition}`)
        const dropDown = document.querySelector('.dropdown-cont0');
        dropDown.setAttribute("style", `display: block; position: fixed ; top: ${yCursorPosition}px; left: ${xCursorPosition}px;`)
    }
    const removeGetCursor = ()=>{
        const dropDown = document.querySelector('.dropdown-cont0');
        dropDown.style.display='none';
    }
    // spotted character
    const spotted = ()=>{
        setCount((prev)=> prev - 1);
        //console.log(count);
    }

    const removeChar = (num)=> {
        const sideChar = document.querySelector(`#img${num}`);
        sideChar.style.display='none';
        //alert(`${count} object left!`);
    }

    //write use database real time -- FIREBASE --
    function writeUserData(time) {
       const db = getDatabase();
        set(ref(db, 'time/play'), {
           'time-history' : time
        
         }
         )
    };

    //read data -- FIREBASE--
  const timeList = document.createElement('div');
  // const mainPage= document.querySelector('.main');
   
const dbRef = ref(getDatabase());

get(child(dbRef, `time/play`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    const data = JSON.stringify(snapshot.val());
    console.log(data);
   
   timeList.innerHTML= data;
   
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


    console.log(app);
  
    //writeUserData(30);

        // END POINT
        useEffect(()=>{
        if( count === 0 ){
            //alert('game done!')
            setCount(3);
             //alert(`your time is ${minute.textContent} : ${second.textContent}`)
            const minute = document.querySelector('.minute');
            const second = document.querySelector('.seconds');
             const imageCont = document.querySelector('.img-cont');
             imageCont.style.display = 'none';
             const resultTime = document.createElement('div');
             const timer =document.querySelector('.timer-wrapper');
             timer.style.display='none';
             resultTime.classList.add('result-time');
             resultTime.textContent=`Your Time ${minute.textContent} : ${second.textContent}`;
             resultTime.style.display='block';
             const mainPage= document.querySelector('.main');
             mainPage.appendChild(resultTime);
             mainPage.appendChild(timeList);
             const buttonStart = document.querySelector('.button-start');
             buttonStart.style.display='block'
             
             //convert to second
             const dataResultTime = (Number((minute.textContent)) * 60 ) + Number(second.textContent);
            // alert (dataResultTime);
             //storage
            writeUserData(dataResultTime);
         }
        })

        
    
    return(
    <div  className="main-bar" >

        <div className="sidebar">
            <img src={require('./assets/waldo.png')}  alt='waldo' height={50} width={55} className='side-img' id='img1'
                onMouseOver={()=> displayDesc(1)} onMouseLeave={()=>removeDesc(1)}/>
            <p className='display-char1'>Waldo</p>

            <img src={require('./assets/odlaw.jpg')}  alt='odwal' height={50} width={50} className='side-img' id='img2'
             onMouseOver={()=>displayDesc(2)} onMouseLeave={()=>removeDesc(2)}/>
              <p className='display-char2'>Odwal</p>

            <img src={require('./assets/wenda.png')}  alt='wenda' height={100} width={40} className='side-img' id='img3'
             onMouseOver={()=>displayDesc(3)} onMouseLeave={()=>removeDesc(3)}/>
             <p className='display-char3'>Wenda</p>
            </div>

        <div>
        <div className="img-cont"> 
            <img src={require('./assets/waldo-space.jpg')} alt='waldo-space' 
                height={933} width={1400} className='main-img'
                onClick={(ev)=>getCursorPositionDropDown(ev)} onMouseMove={removeGetCursor}/>
            <div className='dropdown-cont0'>
                    <div>Waldo</div>
                    <div>Odlaw</div>
                    <div>Wenda</div>
                </div>

            <div id='spot-waldo' onClick={()=> displayDropdown(1)} onMouseLeave={()=> removeDropdown(1)}>
                <div className='dropdown-cont1'>
                    <div onClick={()=>{ spotted(); removeChar(1)}}>
                        Waldo</div>
                    <div>Odlaw</div>
                    <div>Wenda</div>
                </div>
            </div>
            <div id='spot-odlaw'onClick={()=> displayDropdown(2)} onMouseLeave={()=> removeDropdown(2)}>
            <div className='dropdown-cont2'>
                    <div>Waldo</div>
                    <div onClick={()=>{ spotted(); removeChar(2)}}>Odlaw</div>
                    <div>Wenda</div>
                </div>
            </div>
            <div id='spot-wenda' onClick={()=> displayDropdown(3)} onMouseLeave={()=> removeDropdown(3)}>
            <div className='dropdown-cont3'>
                    <div>Waldo</div>
                    <div>Odlaw</div>
                    <div onClick={()=>{ spotted(); removeChar(3)}}>Wenda</div>
                </div>
            </div>
        </div>    
            
        </div>
    </div>
    )
}

export default Image1;