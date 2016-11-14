		$(document).ready(function(){
			var winhref = window.location.href;
			var localIp = winhref.split('/');
    
				window.nodeIp = "http://"+ localIp[2] + ":10002";
			var socket = io.connect(window.nodeIp);
			socket.on('page', function(data){
				console.log(data);
				console.log(data.no);
				switch(data.no)
				{
				case 0:
					window.location = "http://127.0.0.1/html/left.html";
					break;
				case 1:
					window.location = "http://127.0.0.1/test/1014/shkjw_left.html"; // 仪电云	
				  	break;
				case 2:
					window.location = "http://127.0.0.1/test/1014/zhzz_left.html"; //智慧制造
				  	break;
				case 3:
					window.location = "http://127.0.0.1/test/1014/zhld_left.html"; //智慧路灯
				  	break;
				case 4:
					window.location = "http://127.0.0.1/test/1014/yyy_left.html"; //云应用
				  	break;
				case 5:
					window.location = "http://127.0.0.1/test/1014/spsy_left.html"; //食品溯源
				  	break;
				case 6:
					window.location = "http://127.0.0.1/test/1014/lxsh_left.html"; //智慧交通-乐行上海
				  	break;
				case 7:
					window.location = "http://127.0.0.1/test/1014/gdjt_left.html"; //智慧交通-地铁
				  	break;
				case 8:
					window.location = "http://127.0.0.1/test/1014/ld.html"; //智慧交通-雷达
					break;
				case 9:
					window.location = "http://127.0.0.1/test/1014/ydxs_left.html"; //智慧教育
				  	break;
				case 10:
					window.location = "http://127.0.0.1/test/1014/zhsw_left.html"; //智慧水务
				  	break;
				case 11:
					//window.location = "http://127.0.0.1/dataA"; //社区广播
					window.location = "#"; //社区广播
				  	break;
				case 12:
					window.location = "http://127.0.0.1/test/1014/zhsw2_left.html"; //智慧园区水质管理
				  	break;
				case 13:
					window.location = "http://127.0.0.1/test/1014/13.html"; //智慧建筑
				  	break;
				case 14:
					window.location = "http://127.0.0.1/test/1014/hxgf_left.html"; //商业不动产
				  	break;
				case 15:
					window.location = "http://127.0.0.1/test/1014/hxzq_left.html"; //华鑫证券
				  	break;
				case 16:
					window.location = "http://127.0.0.1/test/1014/ZhiHuiJiaoTong/ZHJT-left.html"; //智慧交通-雷达
				  	break;
				case 17:
					window.location = "http://127.0.0.1/test/1014/17.html";
				  	break;
				case 18:
					window.location = "http://127.0.0.1/test/1014/18.html";
				  	break;
				case 19:
					window.location = "#";
				  	break;
				default:
					window.location = "http://127.0.0.1/html/left.html";
					break;
				}
			});
		    
        
	 
		});