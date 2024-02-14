import '../css/infoSidebar.css';
import { Context } from '../context/Context';
import { useContext, useEffect } from 'react';
import nullImg2 from '../img/nullImg2.png';

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
                <img src={lst&&lst.imgurl1!==null?lst.imgurl1:nullImg2}></img>
                <div className='infoSidebarInfoDiv'>
                    <div className='infoSidebarInfoDivTitle'>
                        <p dangerouslySetInnerHTML={lst&&{__html:lst.title}}></p>
                    </div>
                    <div className='infoSidebarInfoDivWrap'>
                        <div className='infoSidebarInfoDivATDP'>
                            <div className='infoSidebarInfoDivAddress'>
                                <div className='infoSidebarInfoDivAddressSvg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="13" height="13">
                                        <path d="M12,24c-1.358,0-2.642-.521-3.611-1.467l-4.152-3.818c-2.092-2.083-3.236-4.834-3.236-7.761s1.145-5.678,3.223-7.747C6.301,1.139,9.062,0,12,0s5.699,1.139,7.777,3.208h0c2.078,2.069,3.223,4.821,3.223,7.747s-1.145,5.678-3.223,7.747l-4.176,3.842c-.96,.936-2.243,1.457-3.602,1.457ZM12,1c-2.671,0-5.183,1.036-7.072,2.917-1.888,1.88-2.928,4.379-2.928,7.038s1.04,5.158,2.928,7.038l4.148,3.814c1.586,1.546,4.271,1.536,5.838,.01l4.172-3.838c1.874-1.866,2.914-4.366,2.914-7.024s-1.04-5.158-2.928-7.038h0c-1.89-1.881-4.401-2.917-7.072-2.917Zm-.441,12.563l6.293-6.207c.196-.194,.198-.51,.005-.707-.196-.197-.512-.199-.708-.005l-6.295,6.209c-.193,.195-.513,.195-.712-.005l-3.293-3.207c-.195-.191-.513-.188-.707,.01-.192,.198-.188,.514,.01,.707l3.288,3.202c.293,.293,.677,.439,1.062,.439,.383,0,.767-.146,1.058-.437Z"/>
                                    </svg>
                                </div>
                                <p dangerouslySetInnerHTML={lst&&{__html:lst.address}}></p>
                            </div>
                            <div className='infoSidebarInfoDivTel'>
                                <div className='infoSidebarInfoDivTelSvg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="13" height="13">
                                        <path d="m23.5,11c-.276,0-.5-.224-.5-.5,0-5.238-4.262-9.5-9.5-9.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c5.79,0,10.5,4.71,10.5,10.5,0,.276-.224.5-.5.5Zm-3.5-.5c0-3.584-2.916-6.5-6.5-6.5-.276,0-.5.224-.5.5s.224.5.5.5c3.033,0,5.5,2.467,5.5,5.5,0,.276.224.5.5.5s.5-.224.5-.5Zm2.234,11.771l.978-1.125c.508-.508.788-1.184.788-1.902s-.28-1.395-.837-1.945l-2.446-1.873c-1.048-1.048-2.753-1.049-3.803-.003l-1.532,1.494c-3.68-1.499-6.678-4.5-8.294-8.303l1.488-1.525c1.049-1.049,1.049-2.756.043-3.756l-1.959-2.543c-1.017-1.017-2.813-.993-3.78-.023l-1.174,1.024C.605,2.886,0,4.373,0,5.976c0,7.749,10.275,18.024,18.024,18.024,1.603,0,3.089-.605,4.21-1.729ZM5.909,1.446l1.959,2.543c.659.659.659,1.732-.004,2.396l-1.722,1.766c-.138.142-.18.352-.106.536,1.729,4.305,5.113,7.688,9.286,9.28.182.07.388.027.527-.108l1.766-1.722s.003-.003.004-.005c.639-.64,1.704-.681,2.44.043l2.446,1.873c.659.659.659,1.731-.023,2.416l-.979,1.125c-.908.91-2.144,1.411-3.479,1.411C10.864,23,1,13.136,1,5.976c0-1.335.501-2.571,1.387-3.456l1.175-1.025c.336-.336.779-.5,1.215-.5.419,0,.831.152,1.133.452Z"/>
                                    </svg>
                                </div>
                                <p dangerouslySetInnerHTML={lst&&{__html:lst.tel}}></p>
                            </div>
                            <div className='infoSidebarInfoDivDayoff'>
                                <p dangerouslySetInnerHTML={lst&&{__html:lst.dayoff}}></p>
                            </div>
                            <div className='infoSidebarInfoDivParking'>
                                <p dangerouslySetInnerHTML={lst&&{__html:lst.parking}}></p>
                            </div>
                        </div>
                        <div className='infoSidebarInfoDivStory'>
                            <p dangerouslySetInnerHTML={lst&&{__html:lst.story}}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSidebar;