import { useContext, useEffect, useState } from 'react';
import '../css/sidebar.css';
import SidebarCongstion from './SidebarCongestion';
import SidebarTravel from './SidebarTravel';
import sidebarLogo from '../img/logo.png';
import Navigation from './Navigation';

function Sidebar(/*props*/) {
    // useEffect(()=>{
    //     const sidebar = document.querySelector('.sidebar');
    //     const testSidebar = ()=>{
    //         if(props.testState == false) {
    //             sidebar.style.backgroundColor = 'blue';
    //         }
    //     }
    //     testSidebar();
    // })

    // const sidebar = [];
    // const sidebarBase = document.querySelector('.sidebarBase');

    

    // if(props.testState === '1') {
    //     sidebarBase.style.display = 'none';
    //     sidebar.push(
    //         <SidebarCongstion/>
    //     );
    // } else if(props.testState === '2') {
    //     sidebarBase.style.display = 'none';
    //     sidebar.push(
    //         <SidebarTravel/>
    //     )
    // }

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
                    {/* <div className='sidebarBase'>
                        <SidebarCongstion/>
                    </div>
                    {sidebar} */}
                    <SidebarTravel/>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Sidebar;