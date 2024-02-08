import { useContext, useEffect, useState } from 'react';
import '../css/sidebar.css';
import SidebarCongstion from './SidebarCongestion';
import SidebarTravel from './SidebarTravel';
import sidebarLogo from '../img/logo.png';
import Navigation from './Navigation';
import { Context } from '../context/Context';

function Sidebar(props) {
    // useEffect(()=>{
    //     const sidebar = document.querySelector('.sidebar');
    //     const testSidebar = ()=>{
    //         if(props.testState == false) {
    //             sidebar.style.backgroundColor = 'blue';
    //         }
    //     }
    //     testSidebar();
    // })
    const sidebar = [];
    const sidebarBase = document.querySelector('.sidebarBase');

    const {sidebarOpenClose, setSidebarOpenClose} = useContext(Context);

    const sidebarOpenCloseButton = ()=>{
        setSidebarOpenClose('2');
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.width = '0';
        if(sidebarOpenClose==='2') {
            setSidebarOpenClose('1');
            sidebar.style.width = '20%';
        }
    }

    if(props.testState === '1') {
        sidebarBase.style.display = 'none';
        sidebar.push(
            <SidebarCongstion/>
        );
    } else if(props.testState === '2') {
        sidebarBase.style.display = 'none';
        sidebar.push(
            <SidebarTravel/>
        )
    }

    return(
        <div className='sidebar'>
            {/* <div className='sidebarLogo'> */}
                {/* <img src={sidebarLogo}></img> */}
            {/* </div> */}
            {/* <div className='sidebarContent'> */}
                {/* <div className='sidebarNavigation'> */}
                    {/* <Navigation testState={props.testState} setTestState={props.setTestState}/> */}
                {/* </div> */}
                <div className='sidebarCongestionTravel'>
                    <div className='sidebarBase'>
                        <SidebarCongstion/>
                    </div>
                    {sidebar}
                </div>
                <div className='sidebarOpenClose' onClick={()=>{sidebarOpenCloseButton()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width='28'height='28'>
                        <path d="m14.5,19c-.133,0-.267-.053-.365-.158l-4.142-4.43c-.636-.636-.993-1.496-.993-2.412s.357-1.776,1.004-2.424l4.13-4.418c.188-.203.505-.211.707-.023.202.188.212.505.024.707l-4.142,4.43c-.471.471-.723,1.08-.723,1.729s.252,1.258.711,1.717l4.154,4.441c.188.202.178.519-.024.707-.096.09-.219.135-.341.135Z"/>
                    </svg>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Sidebar;