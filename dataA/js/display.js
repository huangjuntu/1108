$(function () {
    var geoCoordMap = {
        //福喜事件
        '锦江麦XXXX有限公司': [121.478304, 31.2399],
        '上海XX国际农产品交易': [121.271335, 31.389956],
        '上海特XXX有限公司上南路分公司': [121.733355, 30.854781],
        '上海世XXXX超市有限公司': [121.490586, 31.08296],
        '上海XX绿色食品有限公司': [121.23454, 31.15397],
        '浙江XX兄弟食品有限公司': [121.234924, 30.856513],
        //链家事件
        '链家地产(上海梦轩商务中心东)': [121.478304, 31.2399],
        '上海链家(新天地店)': [121.733355, 30.854781],
        '上海链家绿地总店': [121.490586, 31.08296],
        '上海链家(杨浦店)': [121.344924, 30.856513]

    };
    var SHDataFirst = [
        [{ name: '锦江麦XXXX有限公司' }, { name: '锦江麦XXXX有限公司', value: 250, color: 'red' }],
        [{ name: '上海XX绿色食品有限公司' }, { name: '上海XX绿色食品有限公司', value: 250, color: 'red' }]];
    var SHDataSecond = [
        [{ name: '锦江麦XXXX有限公司' }, { name: '锦江麦XXXX有限公司', value: 250, color: 'red' }],
        [{ name: '上海XX绿色食品有限公司' }, { name: '上海XX绿色食品有限公司', value: 250, color: 'red' }],
        [{ name: '上海XX绿色食品有限公司' }, { name: '上海XX国际农产品交易', value: 150, color: '#46bee9' }],
        [{ name: '上海XX绿色食品有限公司' }, { name: '上海世XXXX超市有限公司', value: 150, color: '#46bee9' }],
        [{ name: '锦江麦XXXX有限公司' }, { name: '上海XX国际农产品交易', value: 150, color: '#46bee9' }],
        [{ name: '锦江麦XXXX有限公司' }, { name: '上海世XXXX超市有限公司', value: 150, color: '#46bee9' }]];
    var SHData = [
        [{ name: '锦江麦XXXX有限公司' }, { name: '锦江麦XXXX有限公司', value: 250, color: 'red' }],
        [{ name: '上海XX绿色食品有限公司' }, { name: '上海XX绿色食品有限公司', value: 250, color: 'red' }],

        [{ name: '上海XX绿色食品有限公司' }, { name: '上海XX国际农产品交易', value: 150, color: '#46bee9' }],
        [{ name: '上海XX绿色食品有限公司' }, { name: '上海世XXXX超市有限公司', value: 150, color: '#46bee9' }],
        //      
        [{ name: '锦江麦XXXX有限公司' }, { name: '上海XX国际农产品交易', value: 150, color: '#46bee9' }],
        [{ name: '锦江麦XXXX有限公司' }, { name: '上海世XXXX超市有限公司', value: 150, color: '#46bee9' }],
        [{ name: '上海世XXXX超市有限公司' }, { name: '上海特XXX有限公司上南路分公司', value: 100, color: '#46bee9' }],
        [{ name: '上海世XXXX超市有限公司' }, { name: '浙江XX兄弟食品有限公司', value: 100, color: '#46bee9' }]];
    var LJData = [
        [{ name: '上海链家绿地总店' }, { name: '上海链家绿地总店', value: 120 }],
        [{ name: '链家地产(上海梦轩商务中心东)' }, { name: '链家地产(上海梦轩商务中心东)', value: 120 }],
        [{ name: '链家地产(上海梦轩商务中心东)' }, { name: '上海链家(新天地店)', value: 115 }],
        // [{ name: '上海链家(新天地店)' }, { name: '上海链家绿地总店', value: 115 }],
        [{ name: '上海链家绿地总店' }, { name: '上海链家(杨浦店)', value: 115 }]];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    // var color = ['red', '#46bee9', '#ffa022', '#ffa022', '#46bee9', '#46bee9', '#46bee9'];
    var color1 = ['red', '#46bee9'];
    // var color2 = ['red', 'red', '#ffa022', '#ffa022'];
    // var color3 = ['red', 'red', '#ffa022', '#ffa022', '#46bee9', '#46bee9', '#46bee9'];

    var colors = ['#ff4401', '#009999', '#ffa022'];
    var series_FX_First = [];
    var series_FX_Second = [];
    var series_FX = [];
    var series_LJ = [];
    var series_name = [];
    function SetSeries(series_name, series) {
        if (series.length < 1)
            [series_name].forEach(function (item, i) {
                series.push(
                    {
                        type: 'lines', //特效线配置1， 主要是用于设置航线//系列使用的图类型
                        zlevel: 1, //第一层，图表是有分层的，用于更好展示图表
                        effect: {
                            show: true, //开启特效，即为图中白色飞点
                            //show: false, //开启特效，即为图中白色飞点
                            period: 3, //动画特效点飞行的时间
                            trailLength: 0.7, //特效点尾部长度
                            color: 'white', //特效颜色，图中为白色
                            symbolSize: 3, //特效点的大小
                        },
                        lineStyle: {
                            normal: {
                                color: function (val) {
                                    if (val.dataIndex <= 1)
                                        return colors[0];
                                    else if (val.dataIndex <= 5)
                                        return colors[0];
                                    else if (val.dataIndex <= 7)
                                        return colors[1];
                                },//特效路径的颜色，如果width为0,则不显示
                                width: 0.8, //路径宽度，0则没有显示画出路径
                                curveness: 0.2 //特效点路径的曲率，值越大，越弯曲
                            }
                        },
                        data: convertData(item[1]) //利用函数求出航线起点和终点的坐标，当绘制北京迁徙图时，item[1]即为BJData，
                    },

                    {
                        type: 'lines', ////特效线配置2， 主要是用于设置航线
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 3,
                            trailLength: 0,
                            // symbol: planePath,
                            symbolSize: 8,
                        },
                        lineStyle: {
                            normal: {
                                color: function (val) {
                                    if (val.dataIndex <= 1)
                                        return colors[0];
                                    else if (val.dataIndex <= 5)
                                        return colors[0];
                                    else if (val.dataIndex <= 7)
                                        return colors[1];
                                },//特效路径的颜色，如果width为0,则不显示
                                width: 1, //飞机航线的宽度
                                //							opacity: 0.4, //飞机航线透明度，为0时，则不绘制航线
                                opacity: 0, //飞机航线透明度，为0时，则不绘制航线
                                curveness: 0.2 //飞机航线额弯曲程度
                            }
                        },
                        data: convertData(item[1]) //数据，即航线的起点和终点的坐标
                    },

                    {
                        // name: item[0],
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
                        data: item[1].map(function (dataItem) {
                            return {
                                name: dataItem[1].name,
                                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                            };
                        }),
                        itemStyle: {
                            normal: {
                                color: function (val) {
                                    if (val.dataIndex <= 1)
                                        return colors[0];
                                    else if (val.dataIndex <= 5)
                                        return colors[1];
                                    else if (val.dataIndex <= 7)
                                        return colors[2];
                                }
                            }
                        },
                        animationDelayUpdate: function (idx) {
                            // 越往后的数据延迟越大
                            return idx * 100;
                        }
                    });
            });
        return series;
    };
    function SetOption(series) {
        var option_temp = {
            backgroundColor: '#404a59',
            title: {
                text: '最新事件',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                center: [121.422954, 31.099354],
                zoom: 50,
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
        return option_temp;
    }


	//地图
	var myChart = echarts.init(document.getElementById('container'));

	myChart.setOption(SetOption(SetSeries(['福喜事件', SHDataFirst], series_FX_First)));
	window.onresize = myChart.resize;

	//切换不同事件
	var show=0;
	$(".right-one").click(function() {
		// if(show==0){
		// 	$(".news1").show();
		// 	show=1;
		// }else{
		// 	$(".news1").hide();
		// 	show=0;
		// }
	});
	$(".right-two").click(function() {
		myChart.setOption(SetOption(SetSeries(['链家事件', LJData], series_LJ)));
		// if(show==0){
		// 	$(".news2").show();
		// 	show=1;
		// }else{
		// 	$(".news2").hide();
		// 	show=0;
		// }
	});
	$(".right-three").click(function() {
		myChart.setOption(SetOption(SetSeries(['福喜事件', SHDataFirst], series_FX_First)));
		// if(show==0){
		// 	$(".news3").show();
		// 	show=1;
		// }else{
		// 	$(".news3").hide();
		// 	show=0;
		// }
	})

	//单点点击出现detailWindow
	myChart.on('click', function(params) {
		console.log(params);
		// $(".details").hide();
		if(params.componentType === 'series') {
			var name = params.name;
			$('[data-value=' + name + ']').siblings(".details").hide();
			$('[data-value=' + name + ']').show();
			if(name == '锦江麦XXXX有限公司' || name == '上海XX绿色食品有限公司') {
				myChart.setOption(SetOption(SetSeries(['福喜事件', SHDataSecond], series_FX_Second)));
			} else if(name == '上海世XXXX超市有限公司') {
				myChart.setOption(SetOption(SetSeries(['福喜事件', SHData], series_FX)));
			} else if(name == '浙江XX兄弟食品有限公司' || name == '上海特XXX有限公司上南路分公司') {
				//          	myChart.setOption(SetOption(SetSeries(['福喜事件', SHDataSecond], series_FX_Second)));
			} else {

			}

		}
	});
//从右边向左边出现效果，开始设置透明度为0
	$('.right-one,.right-two,.right-three').css("opacity","0");

	$(".details").find(".close").click(function() {
		$(this).parents(".details").hide();
	});
	$(".sub-button").click(function() {
		$(".popwindow").hide();
		$(".timefly").show();
		
		
		setTimeout(function() {
			$(".timefly").hide(function() {
				//				$('.right-one,.right-two,.right-three').addClass("animated bounceInRight");
				setTimeout(function() {
					$('.right-one').css("opacity","1");
					$('.right-one').addClass("animated bounceInDown");
					setTimeout(function() {
						$('.right-two').css("opacity","1");
						$('.right-two').addClass("animated bounceInDown");
						setTimeout(function() {
							$('.right-three').css("opacity","1");
							$('.right-three').addClass("animated bounceInDown");
						}, 1000);
					}, 1000);
				}, 100);

				$(".mask").hide();
				$(".popwindow").hide();
				$(".three-page").removeClass("blur");
			});
		}, 3000);

	});

	$(".check_label").checkbox();

})