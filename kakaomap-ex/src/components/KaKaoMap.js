import { useEffect } from "react";
const { kakao } = window; // kakaoMap API script를 window 객체


function KaKaoMap() {

    console.log(window);

    const style = {
        width : '500px',
        height : '400px',
        boarder : '1px solid black',
        margin : '50px auto'
    };

    useEffect(() => {
        
      
    var container = document.getElementById('map');
	var options = {
		center: new kakao.maps.LatLng(37.555899, 126.972328),
		level: 3
	};

	var map = new kakao.maps.Map(container, options);
    },[]);
    return (
        <div id="map" style={style}></div>
    )
    
}

export default KaKaoMap;