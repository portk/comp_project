import React, { useEffect, useState } from 'react';
import { Map, Polygon , MapMarker } from 'react-kakao-maps-sdk';
import sidoData from '../json/sig.json';
import axios from 'axios';

function App() {
    const [fillColor, setFillColor] = useState([]);
    const [path, setPath] = useState([]);
    const [markeron,SetMarkerOn] = useState([]);
    const [isOpen, setIsOpen] = useState([]);

    useEffect(()=>{
        getMap();
        markers();
        toursearch();
    }, []);
    
    // 백엔드로부터 받은 지역별 혼잡도 데이터
    const congestionData = {
        "고양시일산서구": "원활",
        "경기": "조금원활",
        "충북": "보통",
        "충남": "조금혼잡",
        "인천": "혼잡",
        "대전": "원활"
    };

    //경계선 그리는 함수
    const getMap = () =>{
        console.log(sidoData)
        const features = sidoData.features;
        const paths = features.map(feature => (
            feature.geometry.coordinates[0].map(coordinate => ({
                lat: coordinate[1],
                lng: coordinate[0]
            }))
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


    const toursearch = async () => {
        const baseurl = "http://apis.data.go.kr/B551011/KorService1"
        const endurl = "/locationBasedList1"
        const key = ''
        axios.get(baseurl+endurl,{
            params:{ serviceKey : encodeURI(key), numOfRows:9999, MobileOS : 'ETC' , MobileApp :"jeogi", mapX:"129.34639641222327", mapY:"35.4649617499976" ,radius:"4000", _type:"json"}
        }).then((res) =>{
            console.log(res.data)
        })
    }


    const markers = async () => {
        let datalist = [];
        for(let i=1; i<7; i++){
            const url = `https://data.ex.co.kr/openapi/locationinfo/locationinfoUnit?key=8156177600&type=json&numOfRows=99&pageNo=${i}`
            axios.get(url).then((res)=>{
                datalist = [...datalist,...res.data.list];
                SetMarkerOn(datalist)
            })

        }
        
    }
    const markerClick = (index) => {
        const newIsOpen = [...isOpen]; 
        newIsOpen[index] = !newIsOpen[index]; 
        setIsOpen(newIsOpen); 
    };

    


    return (
        <div>
            <div className='hello' style={{ width: '100vw', height: '100vh' }}>
                <Map
                    center={{ lat: 37.566826, lng: 126.9786567 }}
                    level={9}
                    style={{ width: '100%', height: '100%' }}
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
                        />
                    ))}
                    
                    {markeron && markeron.flat().map((i,index) => (
                        <MapMarker 
                            key={index}
                            position={{
                                lat: i.yValue,
                                lng: i.xValue
                            }}
                            onClick={()=>{console.log(i.unitCode,i.unitName); markerClick(index)}}
                        >
                            {isOpen[index] && (
                                <div style={{ minWidth: "150px" }}>
                                  <img
                                    alt="close"
                                    width="14"
                                    height="13"
                                    src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                                    style={{
                                      position: "absolute",
                                      right: "5px",
                                      top: "5px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => markerClick(false)}
                                  />
                                  <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
                                </div>
                              )}
                        </MapMarker>
                    ))}
                </Map>
            </div>
        </div>
    );
}

export default App;