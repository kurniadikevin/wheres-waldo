import { useState } from 'react';

const Image1 = () => {

   const {state,setState} = useState([]); 

const displayDesc = (num) => {
    //alert(ev.target.alt);
    const altText = document.querySelector(`.display-char${num}`);
    altText.style.display='inline';
}

const removeDesc = (num) =>{
    const altText = document.querySelector(`.display-char${num}`);
    altText.style.display='none';
}

const displayDropdown = (num)=> {
    const dropDown = document.querySelector(`.dropdown-cont${num}`);
    dropDown.style.display='block';
}
const removeDropdown = (num) => {
    const dropDown = document.querySelector(`.dropdown-cont${num}`);
    dropDown.style.display='none';
}

// make click on every other area on image display drop down too!! 

    return(
    <div  className="main-bar">

        <div className="sidebar">
            <img src={require('./assets/waldo.png')}  alt='waldo' height={50} width={55} className='side-img' 
                onMouseOver={()=> displayDesc(1)} onMouseLeave={()=>removeDesc(1)}/>
            <p className='display-char1'>Waldo</p>

            <img src={require('./assets/odlaw.jpg')}  alt='odwal' height={50} width={50} className='side-img'
             onMouseOver={()=>displayDesc(2)} onMouseLeave={()=>removeDesc(2)}/>
              <p className='display-char2'>Odwal</p>

            <img src={require('./assets/wenda.png')}  alt='wenda' height={110} width={50} className='side-img'
             onMouseOver={()=>displayDesc(3)} onMouseLeave={()=>removeDesc(3)}/>
             <p className='display-char3'>Wenda</p>
            </div>

        <div>
        <div className="img-cont"> 
            <img src={require('./assets/waldo-space.jpg')} alt='waldo-space' 
            height={933} width={1400} className='main-img'/>
            <div id='spot-waldo' onClick={()=> displayDropdown(1)} onMouseLeave={()=> removeDropdown(1)}>
                <div className='dropdown-cont1'>
                    <div >Waldo</div>
                    <div>Odlaw</div>
                    <div>Wenda</div>
                </div>
            </div>
            <div id='spot-odlaw'onClick={()=> displayDropdown(2)} onMouseLeave={()=> removeDropdown(2)}>
            <div className='dropdown-cont2'>
                    <div>Waldo</div>
                    <div>Odlaw</div>
                    <div>Wenda</div>
                </div>
            </div>
            <div id='spot-wenda' onClick={()=> displayDropdown(3)} onMouseLeave={()=> removeDropdown(3)}>
            <div className='dropdown-cont3'>
                    <div>Waldo</div>
                    <div>Odlaw</div>
                    <div>Wenda</div>
                </div>
            </div>
        </div>    
            
        </div>
    </div>
    )
}

export default Image1;