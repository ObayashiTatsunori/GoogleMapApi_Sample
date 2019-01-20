document.addEventListener('DOMContentLoaded', function() {
document.getElementById('submit').addEventListener('click',function(){
    //出発場所を取得
    var departure_lat = document.getElementById('departure_lat').value;
    var departure_lon = document.getElementById('departure_lon').value;
    //到着場所を取得
    var arrival_lat = document.getElementById('arrival_lat').value;
    var arrival_lon = document.getElementById('arrival_lon').value;
    //経由地１を取得
    var stopover1_lat = document.getElementById('stopover1_lat').value;
    var stopover1_lon = document.getElementById('stopover1_lon').value;
    //経由地２を取得
    var stopover2_lat = document.getElementById('stopover2_lat').value;
    var stopover2_lon = document.getElementById('stopover2_lon').value;    
    // ルート検索の条件
    var request = {
        origin: new google.maps.LatLng(departure_lat,departure_lon), // 出発場所
        destination: new google.maps.LatLng(arrival_lat,arrival_lon), // 目的場所
        waypoints: [ // 経由地点(指定なしでも可)
            { location: new google.maps.LatLng(stopover1_lat,stopover1_lon) },//経由地１
            { location: new google.maps.LatLng(stopover2_lat,stopover2_lon) },//経由地２
        ],
        travelMode: google.maps.DirectionsTravelMode.DRIVING, // 交通手段(歩行。DRIVINGの場合は車)
    };

    // マップの生成
    var map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(departure_lat,departure_lon), // マップの中心
        zoom: 15 // ズームレベル
    });

    var d = new google.maps.DirectionsService(); // ルート検索オブジェクト
    var r = new google.maps.DirectionsRenderer({ // ルート描画オブジェクト
        map: map, // 描画先の地図
        preserveViewport: true, // 描画後に中心点をずらさない
    });
    // ルート検索
    d.route(request, function(result, status){
        // OKの場合ルート描画
        if (status == google.maps.DirectionsStatus.OK) {
            r.setDirections(result);
        }
    });
});
});

function initMap() {


}
