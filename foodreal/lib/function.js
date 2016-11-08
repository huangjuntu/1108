function dataFormatter(obj) {
    var pList = ["松江区","闸北区","黄浦区","长宁区","闵行区","静安区","虹口区","宝山区","浦东新区","徐汇区","金山区","嘉定区","杨浦区","普陀区"];
    var temp;
    for (var year = 2002; year <= 2007; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}


function line_1(){
	var line_1 = echarts.init(document.getElementById("line-1"),'dark');
	line_1.showLoading();
	var dataMap = {};
	
	dataMap.dataretailer = dataFormatter({
	    //max : 60000,
	    2002:[3,12,16,7,20,0,5,26,23,20,13,19,29,],
	    2003:[4,12,12,8,23,0,4,20,20,14,10,15,30],
	    2004:[7,25,1,6,22,26,14,7,15,18,41,22,15],
	    2005:[6,15,12,5,23,1,5,22,19,20,14,12,30],
	    2006:[4,14,10,6,20,0,1,21,21,25,14,11,26],
	    2007:[5,14,8,5,18,0,2,18,20,13,10,10,24]
	});
	
	dataMap.datacatering = dataFormatter({
	    //max : 4000,
	    2002:[12,17,15,8,36,11,21,87,48,12,15,17,41],
	    2003:[13,15,18,10,37,11,28,90,43,15,12,19,43],
	    2004:[11,48,14,32,19,109,18,18,24,24,33,55,20],
	    2005:[13,19,19,9,41,10,19,84,47,13,12,11,50],
	    2006:[9,17,15,9,33,10,15,64,43,11,10,9,41],
	    2007:[10,19,11,7,27,9,10,49,33,11,13,9,28]
	});
	
	dataMap.datamanufacturer = dataFormatter({
	    //max : 26600,
	    2002:[6,1,3,0,5,0,1,6,5,9,4,0,5],
	    2003:[6,1,3,0,6,0,1,9,5,11,2,0,4],
	    2004:[0,8,0,1,14,9,5,5,1,4,30,5,0],
	    2005:[6,1,4,0,6,0,1,10,6,14,5,0,5],
	    2006:[7,1,4,0,5,0,1,8,6,9,4,0,4],
	    2007:[4,1,3,0,0,0,1,4,3,7,3,0,3]
	});
	
	dataMap.datawholesaler = dataFormatter({
	    //max : 25000,
	    2002:[1,0,1,0,12,1,0,3,1,1,4,2,4],
	    2003:[1,0,2,0,9,1,0,4,2,0,3,2,4],
	    2004:[0,14,1,0,1,5,3,1,0,2,8,3,2],
	    2005:[1,0,2,0,11,2,0,2,3,2,1,2,3],
	    2006:[1,0,3,0,8,1,0,1,3,1,0,1,4],
	    2007:[1,0,1,0,6,2,0,1,1,0,2,1,3]
	});

	dataMap.datafarmer = dataFormatter({
	    //max : 26600,
	    2002:[1,0,0,0,0,0,0,1,1,0,2,0,0],
	    2003:[1,0,0,0,0,0,0,2,1,1,2,0,0],
	    2004:[0,0,0,0,1,2,2,3,0,0,2,1,0],
	    2005:[2,0,0,0,0,0,0,1,1,1,2,0,0],
	    2006:[1,0,0,0,0,0,0,1,1,1,2,0,0],
	    2007:[0,0,0,0,0,0,0,1,1,1,0,0,0]
	});
	
	
	
	option = {
	    baseOption: {
	        timeline: {
	            // y: 0,
	            axisType: 'category',
	            // realtime: false,
	            // loop: false,
	            autoPlay: true,
	            // currentIndex: 2,
	            playInterval: 1000,
	            controlStyle: {
	                 position: 'left'
	             },
	            data: [
	                '2016-03','2016-04',
	                {
	                    value: '2016-05',
	                    tooltip: {
	                        formatter: '{b} 贸易量达到新高'
	                    },
	                    symbol: 'diamond',
	                    symbolSize: 16
	                },
	                '2016-06','2016-07', '2016-08'
	            ],
	            label: {
		                formatter: function (value, index) {
	                    // 格式化成月/日，只在第一个刻度显示年份
	                    var date = new Date(value);
	                    var texts = [(date.getMonth() + 1), date.getDate()];
	                    return texts[0]+"月";
	                }
	            }
	        },
	        title: {
	            
	        },
	        tooltip: {},
	        legend: {

	            data: ['零售', '餐饮', '制造商', '批发商', '农场'],

	        },
	        calculable : true,
	        grid: {
	            top: 80,
	            bottom: 100
	        },
	        xAxis: [
	            {
	                'type':'category',
	                'axisLabel':{'interval':0},
	                'data':[
	                    "松江区","\n闸北区","黄浦区","\n长宁区","闵行区","\n静安区","虹口区","\n宝山区","浦东新区","\n徐汇区","金山区","\n嘉定区","杨浦区","\n普陀区"],
	                splitLine: {show: false}
	            }
	        ],
	        yAxis: [
	            {
	                type: 'value',
	                name: '企业数量'
	            }
	        ],
	        series: [
	            {name: '零售', type: 'bar'},
	            {name: '餐饮', type: 'bar'},
	            {name: '制造商', type: 'bar'},
	            {name: '批发商', type: 'bar'},
	            {name: '农场', type: 'bar'},
	            {
	                name: '企业占比',
	                type: 'pie',
	                center: ['75%', '25%'],
	                radius: '28%'
	            }
	        ]
	    },
	    options: [
	        {
	            title: {text: '3月数据',bottom:'7px',subtext: '数据来自上海食药监局'},
	            series: [
	                {data: dataMap.dataretailer['2002']},
	                {data: dataMap.datacatering['2002']},
	                {data: dataMap.datamanufacturer['2002']},
	                {data: dataMap.datawholesaler['2002']},
	                {data: dataMap.datafarmer['2002']},
	                {data: [
	                    {name: '零售', value: dataMap.dataretailer['2002sum']},
	                    {name: '餐饮', value: dataMap.datacatering['2002sum']},
	                    {name: '制造商', value: dataMap.datamanufacturer['2002sum']},
	                    {name: '农场', value: dataMap.datafarmer['2002sum']},
	                    {name: '批发商', value: dataMap.datawholesaler['2002sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '4月数据',bottom:'7px',subtext: '数据来自上海食药监局'},
	            series : [
	                {data: dataMap.dataretailer['2003']},
	                {data: dataMap.datacatering['2003']},
	                {data: dataMap.datamanufacturer['2003']},
	                {data: dataMap.datawholesaler['2003']},
	                {data: dataMap.datafarmer['2003']},
	                {data: [
	                    {name: '零售', value: dataMap.dataretailer['2003sum']},
	                    {name: '餐饮', value: dataMap.datacatering['2003sum']},
	                    {name: '制造商', value: dataMap.datamanufacturer['2003sum']},
	                    {name: '农场', value: dataMap.datafarmer['2003sum']},
	                    {name: '批发商', value: dataMap.datawholesaler['2003sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '5月数据',bottom:'7px',subtext: '数据来自上海食药监局'},
	            series : [
	                {data: dataMap.dataretailer['2004']},
	                {data: dataMap.datacatering['2004']},
	                {data: dataMap.datamanufacturer['2004']},
	                {data: dataMap.datawholesaler['2004']},
	                {data: dataMap.datafarmer['2004']},
	                {data: [
	                    {name: '零售', value: dataMap.dataretailer['2004sum']},
	                    {name: '餐饮', value: dataMap.datacatering['2004sum']},
	                    {name: '制造商', value: dataMap.datamanufacturer['2004sum']},
	                    {name: '农场', value: dataMap.datafarmer['2004sum']},
	                    {name: '批发商', value: dataMap.datawholesaler['2004sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '6月数据',bottom:'7px',subtext: '数据来自上海食药监局'},
	            series : [
	                {data: dataMap.dataretailer['2005']},
	                {data: dataMap.datacatering['2005']},
	                {data: dataMap.datamanufacturer['2005']},
	                {data: dataMap.datawholesaler['2005']},
	                {data: dataMap.datafarmer['2005']},

	                {data: [
	                    {name: '零售', value: dataMap.dataretailer['2005sum']},
	                    {name: '餐饮', value: dataMap.datacatering['2005sum']},
	                    {name: '制造商', value: dataMap.datamanufacturer['2005sum']},
	                    {name: '农场', value: dataMap.datafarmer['2005sum']},
	                    {name: '批发商', value: dataMap.datawholesaler['2005sum']},

	                ]}
	            ]
	        },
	        {
	            title : {text: '7月数据',bottom:'7px',subtext: '数据来自上海食药监局'},
	            series : [
	                {data: dataMap.dataretailer['2006']},
	                {data: dataMap.datacatering['2006']},
	                {data: dataMap.datamanufacturer['2006']},
	                {data: dataMap.datawholesaler['2006']},
	                {data: dataMap.datafarmer['2006']},

	                {data: [
	                    {name: '零售', value: dataMap.dataretailer['2006sum']},
	                    {name: '餐饮', value: dataMap.datacatering['2006sum']},
	                    {name: '制造商', value: dataMap.datamanufacturer['2006sum']},
	                    {name: '农场', value: dataMap.datafarmer['2006sum']},
	                    {name: '批发商', value: dataMap.datawholesaler['2006sum']},

	                ]}
	            ]
	        },
	        {
	            title : {text: '8月数据',bottom:'7px',subtext: '数据来自上海食药监局'},
	            series : [
	                {data: dataMap.dataretailer['2007']},
	                {data: dataMap.datacatering['2007']},
	                {data: dataMap.datamanufacturer['2007']},
	                {data: dataMap.datawholesaler['2007']},
	                {data: dataMap.datafarmer['2007']},

                	{data: [
                    {name: '零售', value: dataMap.dataretailer['2007sum']},
                    {name: '餐饮', value: dataMap.datacatering['2007sum']},
                    {name: '制造商', value: dataMap.datamanufacturer['2007sum']},
	                    {name: '农场', value: dataMap.datafarmer['2007sum']},
	                    {name: '批发商', value: dataMap.datawholesaler['2007sum']},

                ]}
            ]
        },
	    ]
	};
	line_1.hideLoading();
	line_1.setOption(option);
	window.addEventListener("resize", function () {
        line_1.resize(); 
    });
}

//\u8fde\u7ebf\u56fe
function map_2(){
	var map_2 = echarts.init(document.getElementById("map-2"),'dark');
	map_2.showLoading();
	$.get('data/map-2-demo.json', function(content) {
		var geoCoordMap = {};
		var Data = [];
		for (var i=0;i<content.length;i++){
			var tmp=[];
			for(var key in content[i]){
				geoCoordMap[key] = content[i][key];
				tmp.push(key);
			}
			Data.push([{'name':tmp[0]},{'name':tmp[1],value:1}]);
		};
		var QMData = [
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u9f99\u4e3455(\u4f0d\u7f18\u6298\u6263\u8d85\u5e02)',value:95}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u7f57\u57ce56(\u4f0d\u7f18\u6298\u6263\u8d85\u5e02)',value:90}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u9c81\u73ed\u5e97\uff08\u6c38\u8f89\u8d85\u5e02\uff09',value:80}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u83ca\u56ed\u4e50\u8d2d',value:70}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u6c83\u5c14\u739b\u534e\u4e1c\u767e\u8d27\u6709\u9650\u516c\u53f8\u4e0a\u6d77\u6d66\u6c5f\u5206\u5e97',value:60}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u91d1\u9ad8\u5927\u5356\u573a338(\u519c\u5de5\u5546)',value:50}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u9526\u6c5f\u9ea6\u5fb7\u9f99\u73b0\u8d2d\u81ea\u8fd0\u6709\u9650\u516c\u53f8\u6d66\u4e1c\u5546\u573a',value:40}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u9c81\u6c47191(\u519c\u5de5\u5546)',value:30}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u4e0a\u6d77\u8054\u5bb6\u8d85\u5e02\u6709\u9650\u516c\u53f8\u8363\u4e50\u8def\u5e97',value:20}],
		    [{name:'\u4e0a\u6d77\u6e05\u7f8e\u7eff\u8272\u98df\u54c1\u6709\u9650\u516c\u53f8'}, {name:'\u4e39\u5f92188(\u4f0d\u7f18\u6298\u6263\u8d85\u5e02)',value:10}]
		];

		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
		var convertData = function (data) {
	        var res = [];
	        for (var i = 0; i < data.length; i++) {
	            var dataItem = data[i];
	            var fromCoord = geoCoordMap[dataItem[0].name];
	            var toCoord = geoCoordMap[dataItem[1].name];
	            //console.log([fromCoord,toCoord]);
	            if (fromCoord && toCoord) {
	                res.push({
	                    fromName: dataItem[0].name,
	                    toName: dataItem[1].name,
	                    coords: [fromCoord,toCoord]
	                });
	            }
	        }
	        return res;
	    };
		var color = ['#46bee9','#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[['ALL',Data]].forEach(function (item, i) {
		    if(i!=0){
	            var data1 = item[1].map(function (dataItem) {
	                    return {
	                        name: dataItem[1].name,
	                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	                    };
	                });
	            data1.push({name:item[0],value:geoCoordMap[item[0]].concat([100])})
	            series.push({
	                name: item[0] + ' Top10',
	                type: 'lines',
	                zlevel: 1,
	                effect: {
	                    show: true,
	                    period: 6,
	                    trailLength: 0.7,
	                    color: '#fff',
	                    symbolSize: 3
	                },
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 0,
	                        curveness: 0.2
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0] + ' Top10',
	                type: 'lines',
	                zlevel: 2,
	                effect: {
	                    show: true,
	                    period: 6,
	                    trailLength: 0,
	                    symbol: planePath,
	                    symbolSize: 15
	                },
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 1,
	                        opacity: 0.4,
	                        curveness: 0.2
	                    },
	                    emphasis:{
	                        width:2,
	                        color:color[i+1]
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0] + ' Top10',
	                type: 'effectScatter',
	                coordinateSystem: 'geo',
	                zlevel: 2,
	                rippleEffect: {
	                    brushType: 'stroke'
	                },
	                label: {
	                    normal: {
	                        show: true,
	                        position: 'right',
	                        formatter: '{b}'
	                    }
	                },
	                symbolSize: function (val) {
	                    return val[2] / 8;
	                },
	                itemStyle: {
	                    normal: {
	                        color: color[i]
	                    }
	                },
	                data: data1,
	            });}
	        else{
	            var data1=item[1].map(function (dataItem) {
	                    //console.log(geoCoordMap[dataItem[1].name]);
	                    //console.log(dataItem[1].name);
	                    //console.log(dataItem[1]);
	                    return {
	                        name: dataItem[1].name,
	                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	                    };
	                });
	            var data2=item[1].map(function (dataItem) {
	                if(dataItem[0].value){
	                    return {
	                        name: dataItem[0].name,
	                        value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
	                    };
	                }
	                else{
	                    return {
	                        name: dataItem[0].name,
	                        value: geoCoordMap[dataItem[0].name].concat([10])
	                    };
	                }
	                });
	            var datax=data1.concat(data2);
	            series.push({
	                name: item[0],
	                type: 'lines',
	                zlevel: 1,
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 0,
	                        curveness: 0.2
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0],
	                type: 'lines',
	                zlevel: 2,
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 1,
	                        opacity: 0.4,
	                        curveness: 0.2
	                    },
	                    emphasis:{
	                        width:2,
	                        color:color[1]
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0],
	                type: 'effectScatter',
	                coordinateSystem: 'geo',
	                zlevel: 2,
	                rippleEffect: {
	                    brushType: 'stroke'
	                },
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'right',
	                        formatter: '{b}'
	                    },
	                    emphasis: {
	                        show: false,
	                        position: 'right',
	                        formatter: '{b}'
	                    }
	                },
	                symbolSize: function (val) {
	                    return val[2] / 8;
	                },
	                itemStyle: {
	                    normal: {
	                        color: color[i]
	                    }
	                },
	                data: datax,
	            });
	        }
	    });
		
		map_2_option = {
		    backgroundColor: 'rgba(255,255,255,0.1)',
		    title : {
		        text: '\u98df\u54c1\u4f01\u4e1a\u8d38\u6613\u5f80\u6765\u56fe',
		        subtext: '\u771f\u5b9e\u6570\u636e',
		        left: 'center',
		        textStyle : {
		            color: '#fff'
		        }
		    },
		    tooltip : {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        top: 'bottom',
		        left: 'right',
		        data:['ALL'],
		        textStyle: {
		            color: '#fff'
		        },
		        selectedMode: 'single'
		    },
		    geo: {
		        map: 'china',
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        roam: true,
		        itemStyle: {
		            normal: {
		                areaColor: '#323c48',
		                borderColor: '#404a59'
		            },
		            emphasis: {
		                areaColor: '#2a333d'
		            }
		        }
		    },
		    series: series
		};
		
		map_2.hideLoading();
		map_2.setOption(map_2_option);
		
		window.addEventListener("resize", function () {
	        map_2.resize(); 
	    });
	});
}

//\u70ed\u529b\u56fe
function map_1(){
	var map_1 = echarts.init(document.getElementById("map-1"),'dark');
	$.get('data/map-1.json', function (data) {
	    var points = [].concat.apply([], data.map(function (track) {
	        return track.map(function (seg) {
	            return seg.coord.concat([1]);
	        });
	    }));
	    map_1.setOption(map_1_option = {
	    	title: {
	            text: '\u98df\u54c1\u6eaf\u6e90\u9879\u76ee',
	            subtext: '\u4f01\u4e1a\u5730\u7406\u5206\u5e03\u70ed\u529b\u56fe',
	            top: 'top',
	            left: 'right'
	        },
	        animation: false,
	        bmap: {
            	center: [121.470999,31.226422],
	            zoom: 11,
	            roam: true,
	            mapStyle: {
	              'styleJson': [
	                {
	                  'featureType': 'water',
	                  'elementType': 'all',
	                  'stylers': {
	                    'color': '#031628'
	                  }
	                },
	                {
	                  'featureType': 'land',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#000102'
	                  }
	                },
	                {
	                  'featureType': 'highway',
	                  'elementType': 'all',
	                  'stylers': {
	                    'visibility': 'off'
	                  }
	                },
	                {
	                  'featureType': 'arterial',
	                  'elementType': 'geometry.fill',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'arterial',
	                  'elementType': 'geometry.stroke',
	                  'stylers': {
	                    'color': '#0b3d51'
	                  }
	                },
	                {
	                  'featureType': 'local',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'railway',
	                  'elementType': 'geometry.fill',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'railway',
	                  'elementType': 'geometry.stroke',
	                  'stylers': {
	                    'color': '#08304b'
	                  }
	                },
	                {
	                  'featureType': 'subway',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'lightness': -70
	                  }
	                },
	                {
	                  'featureType': 'building',
	                  'elementType': 'geometry.fill',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'all',
	                  'elementType': 'labels.text.fill',
	                  'stylers': {
	                    'color': '#857f7f'
	                  }
	                },
	                {
	                  'featureType': 'all',
	                  'elementType': 'labels.text.stroke',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'building',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#022338'
	                  }
	                },
	                {
	                  'featureType': 'green',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#062032'
	                  }
	                },
	                {
	                  'featureType': 'boundary',
	                  'elementType': 'all',
	                  'stylers': {
	                    'color': '#465b6c'
	                  }
	                },
	                {
	                  'featureType': 'manmade',
	                  'elementType': 'all',
	                  'stylers': {
	                    'color': '#022338'
	                  }
	                },
	                {
	                  'featureType': 'label',
	                  'elementType': 'all',
	                  'stylers': {
	                    'visibility': 'off'
	                  }
	                }
	              ]
	            }
        	},
	        visualMap: {
	        	type:'piecewise',
	            show: true,
	            top: 'bottom',
	            right:'0',
	            min: 0,
	            max: 3,
	            seriesIndex: 0,
	            calculable: true,
	            inRange: {
	                color: ['blue',  'green', 'yellow', 'orange','red']
	            },
	            z:2,
	        },
	        series: [{
	            type: 'heatmap',
	            coordinateSystem: 'bmap',
	            data: points,
	            pointSize: 5,
	            blurSize: 6,
	        }]
	    });
	});
	window.addEventListener("resize", function () {
            map_1.resize(); 
        });
}

function force_graph(){
	force_graph = echarts.init(document.getElementById("force-graph"),'dark');
	force_graph.showLoading();
	$.get('data/aug.gexf', function (xml) {
	    force_graph.hideLoading();
	
	    var graph = echarts.dataTool.gexf.parse(xml);
	    var categories = [];
	    for (var i = 0; i < 11; i++) {
	        categories[i] = {
	            name: '\u7c7b\u76ee' + i
	        };
	    }
	    graph.nodes.forEach(function (node) {
	        node.itemStyle = null;
	        node.symbolSize = 3;
	        node.value = node.weight;
	        node.category = parseInt(node.attributes.modularity_class)%10;
	        //node.symbolSize = node.weight;
	        node.draggable = true;
                node.label={
	            normal: {
	            	show:false,
	                position: 'top',
	                formatter: '{b}' //a为系列名，b为数据名，c为数据值
	            },
	            emphasis:{
	            	show: node.attributes.degree > 33,
	                position: 'top',
	                formatter: '{b}'
	            }
            };           
	    });
	    force_graph_option = {
	        title: {
	            text: '\u98df\u54c1\u6eaf\u6e90\u9879\u76ee',
	            subtext: '\u4f01\u4e1a\u5173\u8054\u56fe',
	            top: 'bottom',
	            left: 'right'
	        },
	        tooltip: {
	        	formatter:function (params) {
                    if (params.value) {
                        return '\u4f01\u4e1a\u540d\u79f0: '+ params.name + ' </br>'
                           + '\u4ea7\u54c1\u7c7b\u76ee:' + params.data.category+'</br>'
                           + '\u8d38\u6613\u6570\u91cf:' + params.data.attributes.degree+'</br>';
                    }
                },
	        },
	        legend: [{
	            // selectedMode: 'single',
	            data: categories.map(function (a) {
	                return a.name;
	            }),
		     show:false,
	        }],
	        animation: false,
	        series : [
	            {
	                name: '\u98df\u54c1\u6eaf\u6e90',
	                type: 'graph',
	                layout: 'none',
	                data: graph.nodes,
	                links: graph.links,
	                categories: categories,
	                legendHoverLink: true,
	                focusNodeAdjacency: false,
	                roam: true,
	                lineStyle:{
                        normal:{
			    color:'source',
                            width:1,
                        },
                        emphasis:{
                            width:3,
                            color:'#FFD700'
                        }
                    },
	            }
	        ]
	    };
	
	    force_graph.setOption(force_graph_option);
	    window.addEventListener("resize", function () {
            force_graph.resize(); 
        });
	}, 'xml');
	
}

function update_table(){
	$.get('data/table.json', function(content) {
		var table_content=new Array();
	    for(var i=0;i<content.length;i++){
	        table_content.push([i,content[i]['label'],content[i]['indegree'],content[i]['outdegree'],content[i]['class']]);
	    }
	    $(document).ready(function () {
	        $('#dataTables-example').dataTable({
	            bDestroy:true,
	            data:table_content,
	            sPaginationType : "full_numbers",
	            bProcessing: true,
	        });
	    });	
	});
}
