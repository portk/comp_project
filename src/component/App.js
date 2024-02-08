import Sidebar from './Sidebar';
import Content from './Content';
import '../css/app.css';
import { useState } from 'react';
import Header from './Header';
import { TourContext } from '../context/Tourcontext';
import {React} from 'react'

function App() {
    const [testState, setTestState] = useState();

    const [sigid,setSigid] = useState();
    const [tourplace,setTourPlace] = useState();
    const [festival,setFestival] = useState();
    const [accommodation, setAccommodation] = useState();
    const [sidebarclick, setSidebarClick] = useState();

    return(
        <TourContext.Provider value={{sigid,setSigid,tourplace,setTourPlace,festival,setFestival,accommodation,setAccommodation,sidebarclick,setSidebarClick}}>
            <div className='app'>
                <Header testState={testState} setTestState={setTestState}/>
                <div className='AppSidebarContentWrap'>
                    <Sidebar testState={testState} setTestState={setTestState}/>
                    <Content testState={testState} setTestState={setTestState}/>
                </div>
            </div>
        </TourContext.Provider>
    )
}

export default App;