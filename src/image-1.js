

const Image1 = () => {


    return(
    <div  className="mainbar">
        <div className="sidebar">
            <img src={require('./assets/waldo.png')}  alt='waldo' height={50} width={55} className='side-img'/>
            <img src={require('./assets/odlaw.jpg')}  alt='odwal' height={50} width={50} className='side-img'/>
            <img src={require('./assets/wenda.png')}  alt='wenda' height={110} width={50} className='side-img'/>
            </div>
        <div>
        <div className="img-cont"> 
            <img src={require('./assets/waldo-space.jpg')} alt='waldo-space' 
            height={933} width={1400} className='main-img'/>
            <div id='spot-waldo'></div>
            <div id='spot-odlaw'></div>
            <div id='spot-wenda'></div>
        </div>    
            
        </div>
    </div>
    )
}

export default Image1;