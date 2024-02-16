import Sidebar from './Sidebar';
import Content from './Content';
import '../css/app.css';
import { useState } from 'react';
import Header from './Header';
import DataOriginModal from './DataOriginModal';
import { Context } from '../context/Context';
import Logo from './Logo';

function App() {
    const [testState, setTestState] = useState();

    const [context, setContext] = useState();

    const [infoSidebarOpenClose, setInfoSidebarOpenClose] = useState();

    const [sigid,setSigid] = useState();
    const [tourplace,setTourPlace] = useState();
    const [festival,setFestival] = useState();
    const [accommodation, setAccommodation] = useState();
    const [sidebarclick, setSidebarClick] = useState();
    const [lst, setLst] = useState();
    const [locationName,setLocationName] = useState();
    const [locationCongest,setLocationCongest] = useState();

    const [sidebarTravelChoice, setSidebarTravelChoice] = useState();

    return(
        <Context.Provider value={{context, setContext, infoSidebarOpenClose, setInfoSidebarOpenClose, sigid, setSigid,tourplace,setTourPlace,festival,setFestival,accommodation,setAccommodation,sidebarclick,setSidebarClick,lst,setLst,sidebarTravelChoice,setSidebarTravelChoice,locationName,setLocationName,locationCongest,setLocationCongest}}>
            <div className='app'>
                <Header testState={testState} setTestState={setTestState}/>
                <DataOriginModal/>
                <div className='appSidebarContentWrap'>
                    <Sidebar testState={testState} setTestState={setTestState}/>
                    <Content testState={testState} setTestState={setTestState}/>
                </div>
                {/* <Logo/> */}
            </div>
        </Context.Provider>
    )
}

export default App;