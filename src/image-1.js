

const Image1 = () => {


    return(
    <div  className="mainbar">
        <div className="sidebar">
            <img src={require('./assets/waldo.png')}  alt='waldo' height={100} width={110}/>
            <img src={require('./assets/odlaw.jpg')}  alt='odwal' height={100} width={100}/>
            <img src={require('./assets/wenda.png')}  alt='wenda' height={200} width={100}/>
            </div>
        <div>
        <div className="img-cont"> 
            <img src={require('./assets/waldo-space.jpg')} alt='waldo-space' 
            height={933} width={1400} className='main-img'/>
        </div>    
            
        </div>
    </div>
    )
}

export default Image1;