$(function () {

    //调用百度地图接口
    var markerArray = [];
    var emergencyMarkerArray = [];
    var map = new BMap.Map("container");          // 创建地图实例  
    var point = new BMap.Point(121.479231, 31.238898);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
    map.enableScrollWheelZoom();
    function addMarker(point, index) {  // 创建图标对象   
        var myIcon = new BMap.Icon("img/traffic.png", new BMap.Size(32, 32), {
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            offset: new BMap.Size(16, 16),
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            // imageOffset: new BMap.Size(0, 0 - index * 32)   // 设置图片偏移    
        });
        // 创建标注对象并添加到地图   
        marker = new BMap.Marker(point, { icon: myIcon });
        markerArray.push(marker);
        map.addOverlay(marker);
    }
    function addMarker2(markerArray) {
        for (var item in markerArray) {
            map.addOverlay(markerArray[item]);
        }
    }
    function addEmergencyMarker2(emergencyMarkerArray) {
        for (var item in emergencyMarkerArray) {
            map.addOverlay(emergencyMarkerArray[item]);
        }
    }

    function removeMarker(markerArray) {
        for (var item in markerArray) {
            map.removeOverlay(markerArray[item]);
        }
    }
    function removeEmergencyMarker(emergencyMarkerArray) {
        for (var item in emergencyMarkerArray) {
            map.removeOverlay(emergencyMarkerArray[item]);
        }
    }
    function addEmergencyMarker(point, index) {
        var myIcon = new BMap.Icon("img/emergency.png", new BMap.Size(32, 32), {
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            offset: new BMap.Size(16, 16),
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            // imageOffset: new BMap.Size(0, 0 - index * 32)   // 设置图片偏移    
        });
        // 创建标注对象并添加到地图   
        EmergencyMarker = new BMap.Marker(point, { icon: myIcon });
        emergencyMarkerArray.push(EmergencyMarker);
        map.addOverlay(EmergencyMarker);
    }
    // 随机向地图添加10个标注    
    var bounds = map.getBounds();
    var lngSpan = bounds.ul.lng - bounds.Ll.lng;
    var latSpan = bounds.ul.lat - bounds.Ll.lat;
    for (var i = 0; i < 10; i++) {
        var point = new BMap.Point(bounds.Ll.lng + lngSpan * (Math.random() * 0.7 + 0.15),
            bounds.Ll.lat + latSpan * (Math.random() * 0.7 + 0.15));
        addMarker(point, i);
    }
    for (var i = 0; i < 10; i++) {
        var point = new BMap.Point(bounds.Ll.lng + lngSpan * (Math.random() * 0.7 + 0.15),
            bounds.Ll.lat + latSpan * (Math.random() * 0.7 + 0.15));
        addEmergencyMarker(point, i);
    }


    $(".events").change(function () {

        if ($(this).children('option:selected').val() == '所有事件') {
            addMarker2(markerArray);
            addEmergencyMarker2(emergencyMarkerArray);

        }
        else if ($(this).children('option:selected').val() == '紧急事件') {
            removeMarker(markerArray);
            addEmergencyMarker2(emergencyMarkerArray);
            $(".options").show();
            $(".button").show(10,function () {
                $(this).click(function () {
                    $(".timefly").show();
                    setTimeout(function () {
                        $(".timefly").hide(function () {
                            // $(".wrapper").hide();
                           window.location.href="display.html"
                        });
                    }, 5000);
                })
            });



        }
        else if ($(this).children('option:selected').val() == '普通事件') {
            removeEmergencyMarker(emergencyMarkerArray);
            addMarker2(markerArray);
        }
    });








})