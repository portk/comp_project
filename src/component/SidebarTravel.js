import '../css/sidebarTravel.css';
import { Context } from '../context/Context';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
function SidebarTravel() {
    const {sigid,setTourPlace,setFestival,setAccommodation,setSidebarClick,sidebarclick,tourplace,festival,accommodation,setLst} = useContext(Context)

    const tourdata = () => {
        axios.post('http://192.168.0.53:8080/travelData', {
            sigid : sigid
        }).then((res)=>{
            setTourPlace(res.data)
            setSidebarClick("1")
        })
    }
    const festivaldata = () => {
        axios.post('http://192.168.0.53:8080/festivalData', {
            sigid : sigid
        }).then((res)=>{
            setFestival(res.data)
            setSidebarClick("2")
        })
    }

    const accommodationdata = () => {
        axios.post('http://192.168.0.53:8080/accommodationData', {
            sigid : sigid
        }).then((res)=>{
            setAccommodation(res.data)
            setSidebarClick("3")
        })
    }

    const sidebarTravelChoice1WrapSvgColor = ()=>{
        const sidebarTravelChoice1WrapSvg = document.querySelector('.sidebarTravelChoice1Wrap svg');
        const sidebarTravelChoice2WrapSvg = document.querySelector('.sidebarTravelChoice2Wrap svg');
        const sidebarTravelChoice3WrapSvg = document.querySelector('.sidebarTravelChoice3Wrap svg');

        sidebarTravelChoice1WrapSvg.style.fill = '#F3B664';
        sidebarTravelChoice2WrapSvg.style.fill = 'black';
        sidebarTravelChoice3WrapSvg.style.fill = 'black';
    }
    const sidebarTravelChoice2WrapSvgColor = ()=>{
        const sidebarTravelChoice1WrapSvg = document.querySelector('.sidebarTravelChoice1Wrap svg');
        const sidebarTravelChoice2WrapSvg = document.querySelector('.sidebarTravelChoice2Wrap svg');
        const sidebarTravelChoice3WrapSvg = document.querySelector('.sidebarTravelChoice3Wrap svg');

        sidebarTravelChoice1WrapSvg.style.fill = 'black';
        sidebarTravelChoice2WrapSvg.style.fill = '#F6D860';
        sidebarTravelChoice3WrapSvg.style.fill = 'black';
    }
    const sidebarTravelChoice3WrapSvgColor = ()=>{
        const sidebarTravelChoice1WrapSvg = document.querySelector('.sidebarTravelChoice1Wrap svg');
        const sidebarTravelChoice2WrapSvg = document.querySelector('.sidebarTravelChoice2Wrap svg');
        const sidebarTravelChoice3WrapSvg = document.querySelector('.sidebarTravelChoice3Wrap svg');

        sidebarTravelChoice1WrapSvg.style.fill = 'black';
        sidebarTravelChoice2WrapSvg.style.fill = 'black';
        sidebarTravelChoice3WrapSvg.style.fill = '#64CCDA';
    }

    return(
        <div className='sidebarTravel'>
            <div className='sidebarTravelChoice'>
                <div className='sidebarTravelChoiceX'>
                    지도에서 지역을 선택해주세요.
                </div>
                <div className='sidebarTravelChoiceO'>
                    <div className='sidebarTravelChoice1'>
                        <div className='sidebarTravelChoice1Wrap' onClick={()=>{sidebarTravelChoice1WrapSvgColor();tourdata();setLst();}}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width='23' height='23'>
                                <path d="m20,8c2.206,0,4-1.794,4-4s-1.794-4-4-4-4,1.794-4,4,1.794,4,4,4Zm0-7c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-.839,10.87c-.433-.812-1.241-1.297-2.161-1.297s-1.729.485-2.161,1.297l-4.548,8.528c-.408.766-.387,1.667.061,2.411.446.745,1.231,1.19,2.101,1.19h9.096c.869,0,1.654-.445,2.101-1.19.447-.744.469-1.646.061-2.411l-4.548-8.528Zm3.63,10.426c-.265.44-.729.704-1.243.704h-9.096c-.515,0-.979-.264-1.243-.704s-.277-.974-.035-1.427l4.548-8.528c.256-.48.733-.768,1.278-.768s1.022.287,1.278.768l4.548,8.528c.242.453.229.986-.035,1.427ZM9.976,6c-.534,0-1.002.281-1.253.752L1.17,20.912c-.237.444-.224.968.035,1.399.259.431.714.688,1.217.688h5.078c.276,0,.5.224.5.5s-.224.5-.5.5H2.422c-.857,0-1.633-.438-2.074-1.174s-.464-1.627-.061-2.385L7.84,6.281c.428-.802,1.227-1.281,2.136-1.281s1.707.479,2.135,1.281l1.591,2.983c.13.244.037.547-.206.677-.244.128-.547.038-.677-.206l-1.591-2.983c-.251-.471-.719-.752-1.252-.752Z"/>
                            </svg>
                            <p><nobr>관광지</nobr></p>
                        </div>
                    </div>
                    <div className='sidebarTravelChoice2'>
                        <div className='sidebarTravelChoice2Wrap' onClick={()=>{sidebarTravelChoice2WrapSvgColor();festivaldata();setLst();}}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width='23' height='23'>
                                <path d="m19.076,11.234c.46-.734.924-1.864.924-2.734,0-.276.224-.5.5-.5s.5.224.5.5c0,1.142-.58,2.473-1.076,3.266-.095.151-.258.234-.424.234-.091,0-.183-.024-.266-.076-.233-.146-.305-.455-.158-.689Zm-9.576-3.234c-.276,0-.5.224-.5.5,0,.87-.464,2-.924,2.734-.146.234-.075.543.158.689.083.052.175.076.266.076.166,0,.329-.083.424-.234.496-.793,1.076-2.124,1.076-3.266,0-.276-.224-.5-.5-.5Zm12.5,14c0,1.294-1.225,1.921-1.276,1.947-.072.036-.148.053-.224.053-.183,0-.359-.101-.447-.276-.123-.247-.023-.547.224-.671.005-.002.724-.382.724-1.053,0-.746-.646-1.16-1.712-1.752-.908-.505-1.938-1.078-2.217-2.158-.164-.636-.044-1.358.367-2.194-2.009-.515-3.65-2.887-4.436-5.597-1.003,3.524-3.413,6.695-6.243,6.702-.402.584-.742,1.195-.759,1.378,0,.566.678.926,1.712,1.409,1.072.501,2.288,1.07,2.288,2.323,0,1.186-1.225,1.812-1.276,1.838-.072.036-.148.053-.224.053-.183,0-.359-.101-.447-.276-.123-.247-.023-.547.224-.671.005-.002.724-.387.724-.943,0-.574-.678-.934-1.712-1.417-1.072-.501-2.288-1.07-2.288-2.323,0-.391.339-1.018.662-1.527C2.444,15.914,0,11.021,0,6.9,0,3.095,3.028,0,6.75,0c2.833,0,5.263,1.793,6.263,4.327.879-2.021,2.817-3.327,5.237-3.327,3.332,0,5.75,2.475,5.75,5.885,0,4.096-2.372,8.838-5.477,9.103-.441.764-.604,1.386-.484,1.852.172.665.932,1.087,1.735,1.534,1.043.58,2.226,1.238,2.226,2.626ZM12.5,6.9c0-3.253-2.579-5.9-5.75-5.9S1,3.646,1,6.9c0,4.096,2.653,9.1,5.75,9.1s5.75-5.004,5.75-9.1Zm5.75,8.1c2.631,0,4.75-4.439,4.75-8.115,0-2.876-1.953-4.885-4.75-4.885s-4.75,2.009-4.75,4.885c0,3.676,2.119,8.115,4.75,8.115Z"/>
                            </svg>
                            <p><nobr>행사</nobr></p>
                        </div>
                    </div>
                    <div className='sidebarTravelChoice3'>
                        <div className='sidebarTravelChoice3Wrap' onClick={()=>{sidebarTravelChoice3WrapSvgColor();accommodationdata();setLst();}}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="23" height="23"><path d="M18,13.5c0-.276,.224-.5,.5-.5h1c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-1c-.276,0-.5-.224-.5-.5Zm.5,4.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5ZM14.5,6h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm4,0h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm0,4h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5Zm-3-1h-1c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM19.5,0h-5c-2.481,0-4.5,2.019-4.5,4.5v3c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-3c0-1.93,1.57-3.5,3.5-3.5h5c1.93,0,3.5,1.57,3.5,3.5v15c0,1.93-1.57,3.5-3.5,3.5h-3c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm-4.5,15.848v4.152c0,2.206-1.794,4-4,4H4c-2.206,0-4-1.794-4-4v-4.152c0-1.393,.63-2.685,1.727-3.544l3-2.348c1.633-1.277,3.915-1.277,5.546,0l3.001,2.348c1.097,.859,1.727,2.151,1.727,3.544Zm-1,0c0-1.083-.489-2.088-1.344-2.757l-3-2.348c-.635-.496-1.396-.745-2.156-.745s-1.521,.249-2.157,.745l-2.999,2.348c-.854,.669-1.344,1.674-1.344,2.757v4.152c0,1.654,1.346,3,3,3h7c1.654,0,3-1.346,3-3v-4.152Zm-4,.652v2c0,.827-.673,1.5-1.5,1.5h-2c-.827,0-1.5-.673-1.5-1.5v-2c0-.827,.673-1.5,1.5-1.5h2c.827,0,1.5,.673,1.5,1.5Zm-1,0c0-.275-.225-.5-.5-.5h-2c-.275,0-.5,.225-.5,.5v2c0,.275,.225,.5,.5,.5h2c.275,0,.5-.225,.5-.5v-2Z"/></svg>
                            <p><nobr>숙소</nobr></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sidebarTravelList'>
                {sidebarclick==="1" && tourplace && tourplace.map((lst)=>(
                    <ul key={lst.index} onClick={()=>{setLst(lst)}}>
                        <div>{lst.title}</div>
                    </ul>
                ))}
                {sidebarclick==="2" && festival && festival.map((lst)=>(
                    <ul key={lst.index} onClick={()=>{setLst(lst)}}>
                        <div>{lst.title}</div>
                    </ul>
                ))}
                {sidebarclick==="3" && accommodation && accommodation.map((lst)=>(
                    <ul key={lst.index} onClick={()=>{setLst(lst)}}>
                        <div>{lst.title}</div>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default SidebarTravel;