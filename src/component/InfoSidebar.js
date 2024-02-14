import '../css/infoSidebar.css';
import { Context } from '../context/Context';
import { useContext, useEffect } from 'react';

function InfoSidebar() {
    const {infoSidebarOpenClose,setInfoSidebarOpenClose,lst} = useContext(Context);

    useEffect(()=>{
        infoSidebarOpenButton();
    },[infoSidebarOpenClose])


    const infoSidebarOpenButton = () => {
        const infoSidebar = document.querySelector('.infoSidebar');
        const infoSidebarClose = document.querySelector('.infoSidebarClose');
        if(infoSidebarOpenClose === "1"){
            infoSidebarClose.style.display="flex"
            infoSidebar.style.display = "block"
        }else{
            infoSidebar.style.display = "none"
            infoSidebarClose.style.display="none"
        }
    }
    return(
        <div className='infoSidebar'>
            <div className='infoSidebarCloseWrap'>
                <div className='infoSidebarClose' onClick={()=>{setInfoSidebarOpenClose()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" fill='gray'>
                        <path d="m15.854,8.854l-3.146,3.146,3.146,3.146c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-3.146-3.146-3.146,3.146c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l3.146-3.146-3.146-3.146c-.195-.195-.195-.512,0-.707s.512-.195.707,0l3.146,3.146,3.146-3.146c.195-.195.512-.195.707,0s.195.512,0,.707Zm8.146,3.146c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"/>
                    </svg>
                </div>
            </div>
            <div className='infoSidebarInfo'>
                <img src={lst&&lst.imgurl1}></img>
                <div>{lst&&lst.title}</div>
                <div dangerouslySetInnerHTML={lst&&{__html:lst.detail}}></div>
            </div>
        </div>
    )
}

export default InfoSidebar;