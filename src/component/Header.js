import '../css/header.css';
import Navigation from './Navigation';
import headerLogo from '../img/logo4.png';
import { Context } from '../context/Context';
import { useContext } from 'react';

function Header(props) {
    const { setContext } = useContext(Context);

    return(
        <div className='header'>
            <div className='headerLogo'>
                <img src={headerLogo}></img>
            </div>
            <div className='headerNaviration'>
                <Navigation testState={props.testState} setTestState={props.setTestState}/>
            </div>
            <div className='headerDataOrigin'>
                <svg onMouseOver={()=>{setContext('1')}} onMouseOut={()=>{setContext('2')}} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="m17.987,2.28C16.075.575,13.507-.233,10.937.062c-3.993.458-7.293,3.675-7.846,7.647-.421,3.014.678,6.01,2.939,8.013,1.252,1.109,1.97,2.725,1.97,4.431v.348c0,1.93,1.57,3.5,3.5,3.5h1c1.93,0,3.5-1.57,3.5-3.5v-.353c0-1.686.752-3.309,2.118-4.571,1.831-1.694,2.882-4.091,2.882-6.576,0-2.563-1.098-5.012-3.013-6.72Zm-2.987,18.22c0,1.378-1.121,2.5-2.5,2.5h-1c-1.379,0-2.5-1.122-2.5-2.5v-.348c0-.389-.033-.775-.095-1.152h6.195c-.066.377-.1.76-.1,1.147v.353Zm2.439-5.658c-.987.912-1.695,1.993-2.087,3.158h-6.69c-.374-1.161-1.048-2.21-1.969-3.027-2.01-1.78-2.986-4.444-2.612-7.126.491-3.528,3.422-6.384,6.969-6.792.323-.037.644-.055.962-.055,1.968,0,3.825.703,5.311,2.027,1.701,1.518,2.678,3.695,2.678,5.973,0,2.24-.909,4.315-2.561,5.842Zm-5.939-3.342v-7c0-.276.224-.5.5-.5s.5.224.5.5v7c0,.276-.224.5-.5.5s-.5-.224-.5-.5Zm1.5,3.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
            </div>
        </div>
    )
}

export default Header;