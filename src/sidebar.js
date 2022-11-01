import './index.css'


function Sidebar(){

       // sidebar desc
       const displayDesc = (num) => {
        const altText = document.querySelector(`.display-char${num}`);
        altText.style.display='inline';
    }

    const removeDesc = (num) =>{
        const altText = document.querySelector(`.display-char${num}`);
        altText.style.display='none';
    }


    return(
        <div className="sidebar-new">
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
    )
}

export default Sidebar;