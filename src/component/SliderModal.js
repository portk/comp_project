import Slider from '@mui/material/Slider';
import '../css/sliderModal.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../context/Context';

function SliderModal() {
    const [timedata,setTimedata] = useState(0);
    const {setCongestionData, isMobile, sidebarTravelChoice,mobileSidebarButton} = useContext(Context);
    useEffect(()=>{
        gettimedata();
    },[timedata])
    useEffect(()=>{
        if(isMobile&&sidebarTravelChoice==="o"||mobileSidebarButton===true){
            document.querySelector('.SliderModal').style.display = "none"
        }else{
            document.querySelector('.SliderModal').style.display = "flex"
        }
    },[sidebarTravelChoice,mobileSidebarButton])
    const gettimedata = () => {
        axios.post('http://192.168.0.53:8080/congestionChange',{
            time : timedata
        }).then((res)=>{
            setCongestionData(res.data)
        })
    }


    return(
        <div className='SliderModal'>
            <Slider 
                size='small'
                min={0}
                max={24}
                step={1}
                defaultValue={0}
                valueLabelDisplay="auto"
                valueLabelFormat={(e) => {return `${e} 시간 후`}}
                onChange={(e)=>{setTimedata(e.target.value)}}
            />
        </div>
    )
}
export default SliderModal