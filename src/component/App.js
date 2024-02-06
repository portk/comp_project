import React, { useEffect, useState } from 'react';
import { Map, Polygon , MapMarker , CustomOverlayMap } from 'react-kakao-maps-sdk';
import sidoData from '../json/sig.json';
import axios from 'axios';
import { queryAllByAltText } from '@testing-library/react';

function App() {
    const [fillColor, setFillColor] = useState([]);
    const [path, setPath] = useState([]);
    const [markeron,SetMarkerOn] = useState([]);
    const [isOpen, setIsOpen] = useState([]);
    const [savetour, setSaveTour] = useState();
    const [maplevel , setMapLevel] = useState(11);
    const [mapcenter, setMapcenter] = useState({ lat: 37.566826, lng: 126.9786567 });
    // const [sigid,setSigid] = useState();

    useEffect(()=>{
        getMap();
    }, []);

    const test = async (Sigid) => {
        axios.post('http://localhost:8080/travelData',
        {sigid : Sigid}).then((res) => {
            console.log(res.data)
        })
    }
    
    // 백엔드로부터 받은 지역별 혼잡도 데이터
    const congestionData = {
        "고양시일산서구": "원활",
        "여수시": "조금원활",
        "고흥군": "보통",
        "충남": "조금혼잡",
        "인천": "혼잡",
        "대전": "원활"
    };

    //경계선 그리는 함수
    const getMap = () =>{
        const features = sidoData.features;
        const paths = features.map(feature => (
            feature.geometry.coordinates.map(coords => (
                coords.map(coordinate => ({
                    lat: coordinate[1],
                    lng: coordinate[0]}))
            ))
        ));
        setPath(paths);
        const colors = features.map(feature => getColor(feature.properties.SIG_KOR_NM));
        setFillColor(colors);
    }


    // 백엔드에서 받은 데이터를 기반으로 각 지역의 색상을 설정하는 함수
    const getColor = (key) => {
        const congestionLevel = congestionData[key];
        
        // 혼잡도에 따라 색상 설정
        if (congestionLevel === "원활") {
            return "green";
        } else if (congestionLevel === "조금원활") {
            return "lightgreen";
        } else if (congestionLevel === "보통") {
            return "orange";
        } else if (congestionLevel === "조금혼잡") {
            return "pink";
        } else if (congestionLevel === "혼잡") {
            return "red";
        } else {
            return "#fff";
        }
    };








    //Polygon 클릭 시 지역나오는 함수
    const polygonClick = (index,e) => {
        setMapLevel(8)
        setMapcenter({lat: e.latLng.Ma,lng: e.latLng.La})
        let Sigid = sidoData.features[index].properties.SIG_CD
        // console.log(sidoData.features[index].properties.SIG_CD)
        test(Sigid);
    }



    

    return (
        <div>
            <div className='hello' style={{ width: '100vw', height: '100vh' }}>
                <Map
                    center={mapcenter}
                    level={maplevel}
                    style={{ width: '100%', height: '100%' }}
                    onZoomChanged={()=>{setMapLevel()}}
                >
                    {path.map((coordinates, index) => (
                        <Polygon
                            key={index}
                            path={coordinates}
                            strokeWeight={2}
                            strokeColor="#004c80"
                            strokeOpacity={0.8}
                            fillColor={fillColor[index]}
                            fillOpacity={0.7}
                            onClick={(_,e)=>{polygonClick(index,e);}}
                        />
                    ))} 

                    {markeron && markeron.flat().map((i,index) => (
                        <MapMarker 
                            key={index}
                            position={{
                                lat: i.yValue,
                                lng: i.xValue
                            }}
                            onClick={()=>{console.log(i.unitCode,i.unitName);}}
                        >
                        </MapMarker>
                    ))}

                    {savetour && savetour.map((i) => (
                        <CustomOverlayMap
                        position={{ lat: i.mapy, lng: i.mapx }}

                    >
                        <div className="label" style={{backgroundColor: "yellow"}}>
                            <span>{i.title}</span>
                        </div>
                    </CustomOverlayMap>
                    ))}
                    

                </Map>
            </div>
        </div>
    );
}

export default App;