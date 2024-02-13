import { useEffect, useState } from 'react';
import '../css/content.css';
import Congestion from './Congestion';
import Navigation from './Navigation';
import Travel from './Travel';
import InfoSidebar from './InfoSidebar';

function Content(props) {
    const content = [];
    const contentBase = document.querySelector('.contentBase');



    if(props.testState === '1') {
        contentBase.style.display = 'none';
        content.push(
            <Congestion/>
        );
    } else if(props.testState === '2') {
        contentBase.style.display = 'none';
        content.push(
            <Travel/>
        );
    }

    return(
        <div className='content'>
            <InfoSidebar/>
            <div className='contentBase'>
                <Congestion/>
            </div>
            {content}
        </div>
    )
}

export default Content;