import Sidebar from './Sidebar';
import Content from './Content';
import '../css/app.css';
import { useState } from 'react';
import Header from './Header';

function App() {
    const [testState, setTestState] = useState();

    return(
        <div className='app'>
            <Header testState={testState} setTestState={setTestState}/>
            <div className='AppSidebarContentWrap'>
                <Sidebar testState={testState} setTestState={setTestState}/>
                <Content testState={testState} setTestState={setTestState}/>
            </div>
        </div>
    )
}

export default App;