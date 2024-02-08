import '../css/sidebarTravel.css';
import { TourContext } from '../context/Tourcontext';
import { useContext } from 'react';
import axios from 'axios';
function SidebarTravel() {
    const {sigid,setTourPlace,setFestival,setAccommodation,setSidebarClick} = useContext(TourContext)

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

    return(
        <div className='sidebarTravel'>
            <div className='sidebarTravelChoice'>
                <div className='sidebarTravelChoiceX'>
                    지도에서 지역을 선택해주세요.
                </div>
                <div className='sidebarTravelChoiceO'>
                    <div className='sidebarTravelChoice1' onClick={()=>{tourdata();}}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M20,8a4,4,0,0,1,0-8A4,4,0,0,1,20,8Zm1.452,16H12.589a2.548,2.548,0,0,1-2.221-1.26,2.463,2.463,0,0,1-.029-2.471l4.436-7.959a2.6,2.6,0,0,1,4.5,0L23.7,20.263a2.468,2.468,0,0,1-.028,2.475A2.551,2.551,0,0,1,21.452,24ZM8.644,23.754A4.45,4.45,0,0,1,8.591,19.3l4.437-7.96a4.519,4.519,0,0,1,1.507-1.605L12.944,6.755a3.344,3.344,0,0,0-5.885,0L.406,19.055A3.351,3.351,0,0,0,3.35,24H8.8C8.745,23.92,8.693,23.838,8.644,23.754Z"/></svg>
                        <p><nobr>관광지</nobr></p>
                    </div>
                    <div className='sidebarTravelChoice2' onClick={()=>{festivaldata();}}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M7,0A7.008,7.008,0,0,0,0,7c0,4.257,2.875,9,7,9s7-4.743,7-9A7.008,7.008,0,0,0,7,0Zm3.617,11.646-1.7-1.062A6.546,6.546,0,0,0,9.977,8h2A8.184,8.184,0,0,1,10.617,11.646ZM18,1a6.151,6.151,0,0,0-3.5,1.036A8.942,8.942,0,0,1,16,7a12.808,12.808,0,0,1-1.7,6.287A5.121,5.121,0,0,0,18,15c3.309,0,6-3.589,6-8A5.8,5.8,0,0,0,18,1Zm2.312,10.752L19,10.248A4.038,4.038,0,0,0,19.977,8h2A5.847,5.847,0,0,1,20.312,11.752Zm1.1,12.31-1.762-.945c.714-1.33.358-1.605-1.116-2.447a4.348,4.348,0,0,1-2.46-2.563,3.142,3.142,0,0,1,.017-1.406A6.483,6.483,0,0,0,18,17c.025,0,.048,0,.073,0a1.348,1.348,0,0,0-.051.655c.115.49.79.875,1.505,1.284C20.855,19.692,23.078,20.961,21.413,24.062ZM11,22a4.092,4.092,0,0,1-.729,2L8.557,22.973A2.518,2.518,0,0,0,9,22c0-.354-.6-.682-1.447-1.105C6.476,20.356,5,19.618,5,18a1.854,1.854,0,0,1,.041-.264A7.37,7.37,0,0,0,7,18l.024,0c-.008.023-.026.06-.03.077.006.279.606.607,1.453,1.03C9.524,19.644,11,20.382,11,22Z"/></svg>
                        <p><nobr>행사</nobr></p>
                    </div>
                    <div className='sidebarTravelChoice3' onClick={()=>{accommodationdata();}}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25"><path d="M14.081,11.41l-3-2.349c-1.814-1.418-4.348-1.419-6.162,0l-3,2.348c-1.22,.955-1.919,2.39-1.919,3.938v4.152c0,2.481,2.019,4.5,4.5,4.5h7c2.481,0,4.5-2.019,4.5-4.5v-4.152c0-1.548-.699-2.982-1.919-3.938Zm-4.081,6.59c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-2c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1v2ZM19,0h-4c-2.757,0-5,2.243-5,5v1.306c.819,.245,1.606,.627,2.312,1.179l3.002,2.351c1.707,1.336,2.686,3.346,2.686,5.512v2.652c0-.553,.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1h-1c-.553,0-1-.447-1-1v1.5c0,1.746-.696,3.331-1.821,4.5h2.821c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-4,7h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1Zm5,8h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1Zm0-4h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1Zm0-4h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1Z"/></svg>
                        <p><nobr>숙소</nobr></p>
                    </div>
                </div>
            </div>
            <div className='sidebarTravelList'></div>
        </div>
    )
}

export default SidebarTravel;