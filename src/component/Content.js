import { useContext, useEffect, useState } from 'react';
import '../css/content.css';
import Sidebar from './Sidebar';
import Travel from './Travel';
import InfoSidebar from './InfoSidebar';
import { Context } from '../context/Context';

function Content(/*props*/) {
    const { isMobile } = useContext(Context);
    useEffect(()=>{
        if(isMobile){
            document.querySelector(".content").style.width = "100%";
        }
    },[])
    // const content = [];
    // const contentBase = document.querySelector('.contentBase');



    // if(props.testState === '1') {
    //     contentBase.style.display = 'none';
    //     content.push(
    //         <Congestion/>
    //     );
    // } else if(props.testState === '2') {
    //     contentBase.style.display = 'none';
    //     content.push(
    //         <Travel/>
    //     );
    // }

    return(
        <div className='content'>
            {isMobile?
                <div className='mobileContent'>
                    <Sidebar/>
                    <InfoSidebar/>
                    <Travel/>
                </div>:
                <div>
                    <InfoSidebar/>
                    <Travel/>
                </div>
            }
        </div>
    )
}

export default Content;