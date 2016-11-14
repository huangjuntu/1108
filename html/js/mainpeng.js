//右下角时间日期开始
var timerID = null
var timerRunning = false
var winhref = window.location.href;
var localIp = winhref.split('/');
    
window.nodeIp = "http://"+ localIp[2] + ":10002";
var socket = io.connect(window.nodeIp);

function MakeArray(size) 
{
	this.length = size;
	for(var i = 1; i <= size; i++){
		this[i] = "";
	}
	return this;
}
function stopclock (){
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false
}
function showtime () {
	  var now = new Date();
	  var year = now.getFullYear();
	  var month = now.getMonth() + 1;
	  var date = now.getDate();
	  var hours = now.getHours();
	  var minutes = now.getMinutes();
	  var seconds = now.getSeconds();
	  var day = now.getDay();
	  Day = new MakeArray(7);
	  Day[0]="星期天";
	  Day[1]="星期一";
	  Day[2]="星期二";
	  Day[3]="星期三";
	  Day[4]="星期四";
	  Day[5]="星期五";
	  Day[6]="星期六";
	  var timeValue = "";
	  timeValue += year + "年";
	  timeValue += ((month < 10) ? "0" : "") + month + "月";
	  timeValue += date + "日  ";
	  timeValue += (Day[day]) + "  ";
	  timeValue += ((hours <= 12) ? hours : hours - 12);
	  timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
	  timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
	  timeValue += (hours < 12) ? "上午" : "下午";
	 $("#time").html(timeValue);
	  timerID = setTimeout("showtime()",1000);
	  timerRunning = true
}
function startclock () {
	  stopclock();
	  showtime()
}
//时间日期结束

//公司名称开始
var  comNames=[
	["上海南洋万邦软件技术有限公司"],
	["上海南洋万邦软件技术有限公司"],
	["上海科技网络通信有限公司","上海南洋万邦软件技术有限公司","上海华冠电子设备有限责任公司"],
	["上海南洋万邦软件技术有限公司"],
//公司修改
	["云赛信息（集团）有限公司"],

	["上海仪电（集团）有限公司"],
	["上海仪电物联技术股份有限公司","上海南洋万邦软件技术有限公司"],
	["上海南洋万邦软件技术有限公司"],
	["上海南洋万邦软件技术有限公司"],
	["上海仪电（集团）有限公司"],
//公司修改
	["上海飞乐音响股份有限公司"],

	["上海仪电物联技术股份有限公司"],
	["上海索广电子有限公司"],
	["上海南洋万邦软件技术有限公司"],
//公司修改
	["上海仪电（集团）有限公司"],
//公司修改
	["上海赛嘉电子科技有限公司"],
	//国内

	
];
var jianz = [];

$(document).ready(function() {
    //$('#digiclock').jdigiclock({
    //    // Configuration goes here
    //});
	startclock();
	function closeall(){
		  $(".first").fadeOut();
		$(".secondclose ").hide();
		$(".test").hide();
		$(".menucom").hide();
		$(".menu4").hide();
		$(".smartbox").find("li").each(function(){
			$(this).removeClass("active")//小红图
			$(this).removeClass("active2")
		});
		
		$(".smartbox").find("span").each(function(){
			$(this).removeClass("trihover");
			
			$(this).removeClass("trion");
		});
		//menu fuyuan
		$(".inesainside li").removeClass("active1");
		$(".inesainside li").find("span").empty();
		
		
		 $("iframe").css({"z-index":"7"});
		 $(".img").css({"z-index":"8"});
		 $("#TaskBarSoftware").hide();
		 $("#TaskBarSoftwareFrame").hide();
		 $("#TaskBarSoftwareArrow").hide();
	}
	
//		$(".clitrigger").click(function(){
//			$(".first").toggle();
//		});//不能直接用这个，因为点击第二次的时候，需要把之前打开的全部关闭掉，但是没有定义。closeall();
	
//用下面方法代替了	
//$(".clitrigger").toggle(
//		function() {
//    $(".first").fadeIn();
//		
//    //$("div:not(.nenu)").click(function () {//对document绑定一个影藏Div方法
//    //    $('.first').fadeOut();
//    //});
//    //event.stopPropagation();//阻止事件向上冒泡
//		},
//	    function() {
//	      $(".first").fadeIn();
//	      closeall();
//	        //$("div:not(.nenu)").click(function () {//对document绑定一个影藏Div方法
//	        //    $('.first').fadeOut();
//	        //});
//	        //event.stopPropagation();//阻止事件向上冒泡
//	    	}
//	);
	
//	点击左下角的菜单
	var show1=1;
	$(".clitrigger").click(function(){
		if(show1==1){
			$(".first").fadeIn();
			show1=0;
		}else{
			$(".first").fadeOut();
	      	closeall();
	      	show1=1;
		}
	});
	
	//数据整合页面链接iframe置顶
	$(".istack").click(function(){
		closeall();
	})
    var $span = "<span>+</span>";
   /* $(".inesainside li").mouseenter(function() {
        $(this).addClass("active1");
        $(this).append($span);
    }).mouseleave(function() {
        $(this).removeClass("active1");
        $(this).find("span").empty();
    });*/
	$(".inesainside li").click(function() {
//        $(this).addClass("active1").siblings().removeClass("active1");
//			$(this).find('span').remove();
//        $(this).append($span).siblings().find("span").empty();
   })
	  
    $(".smartbox").find("li").click(function() {
        var myindex = $(this).index();
        $(".second").find("div").eq(myindex).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
        if (myindex == 0) {
            $(this).addClass("active2").siblings().removeClass("active");
            $(this).find(".tri").addClass("trion2");
            $(this).siblings().find(".tri").removeClass("trion");

        } else {
            $(this).addClass("active").siblings().removeClass("active").removeClass("active2");
            $(this).find(".tri").addClass("trion");
            $(this).siblings().find(".tri").removeClass("trion").removeClass("trion2");
				$(".menucom").hide();
				$(".menu4").hide();

        }
        $(this).find(".tri").addClass("trihover");
        $(this).siblings().find(".tri").removeClass("trihover");
    }).mouseover(function() {
        $(this).find(".tri").addClass("trihover");
        $(this).siblings().find(".tri").removeClass("trihover");
    });
//  $(".toframe").on("click",function(){//这里用的都是.live
//    $("iframe").css({"display":"block"});
//    $(".img").css({"display":"block"});
//	  //$("iframe").css({"z-index":"99"});
//	  var url = $(this).attr("src");
//	  $("iframe").attr("src",url);
//	  //$("#allframe").reload();
//  }
//	);

	
	$(".top").on("click",function(){
     
	  $("iframe").css({"z-index":"102"});
	  $(".img").css({"z-index":"103"});
    });
    $(".img3").click(function(){
        $("iframe").css({"display":"none"});
        $(".img").css({"display":"none"});
    });
	$(".img1").click(function(){
     history.go(-1);  
    })
	//3rd menu
	 $(".inesainside").find("li").click(function() {
        var myindex = $(this).index();
		$(".menu4").hide();
		 $(this).addClass("active1");
		 $(".child li").css('color','black');
        $(".commenu").find("div").eq(myindex).css({
            "display": "block"
        }).siblings().css({
            "display": "none"
        });
	 });
	 
	 //4th menu crete
	 $(".detail").click(function(){
		var product = $(this).data("product"); 
		var info = $(this).data("info");
		var url = $(this).data("url");
		var html = '';
		$(".box").attr("src",url);
		$("#info").text(info);
		for (var i in product){
			html += '<li class="toframe top" src="'+product[i][1]+'">'+product[i][0]+'<li>';
		}
		$("#pros").html(html);
		$(".menu4").fadeIn();
		//添加选中提示
		$(".child li").css('color','black');
		 $(this).css('color','red');
	 });
	 $(".biancheng").click(function(){
		$("#window_biancheng").css("display","block");
	 });
	 //app market b
//开始 li:not(.appl) span
 $(".imghvr-shutter-out-diag-2").mouseover(function(){
 				
	   var index = $(this).attr('order');
	   if(parseInt(index)>=0){
		var html = '';
		
		switch (parseInt(index))
			  {//合作伙伴是3个的样式设置
			  case 2:
			  for (var i in comNames[index]) {
			   html +='<li style=" height:14px; line-height:15px; margin-top:2px;font-size:12px">'+ comNames[index][i]+'</li>';
		   		}
			   $("figcaption p").css("margin-top","3px").css("font-size","8px");
			    break;
			  case 6://合作伙伴是2个的样式设置
			  for (var i in comNames[index]) {
			   html +='<li style=" height:14px; line-height:15px; margin-top:3px">'+ comNames[index][i]+'</li>';
		   		}
			   $("figcaption p").css("margin-top","10px");
			    break;
			 default://合作伙伴是1个的样式设置
			 for (var i in comNames[index]) {
			   html +='<li style=" height:14px; line-height:15px; margin-top:3px;font-size:14px">'+ comNames[index][i]+'</li>';
		   		}
			 $("figcaption p").css("margin-top","20px");
			 break;
			  }
		$("figcaption p").html(html);
	   }
	});
//结束

   /*热插拔监控开始
   var show = 0;
    $(function(){
        $(".close").click(function(){
            $(".san").removeClass("selected");
            $(".dialog").animate({bottom:"-300px",opacity:"0.1"},500); 
            show = 0;
        });
    })
   
//  function showalert(){
//      $(".alert").animate({opacity:'0.9',left:"44%"},1000,function(){
//          setTimeout(function(){
//              $(".alert").animate({opacity:'0',left:"50%"},1000);
//          },5500);
//      });
//		$('.san').addClass("selected");
//      
//  }
//	$(".d_content li").on('click',function(){
//		$(this).remove();
//		});
	$('.san').click(function(){
		 if(show==0){
            $(this).addClass("selected");
            $(".dialog").animate({bottom:"6%",opacity:"1"},500);
            show =1;
        }else{
            $(this).removeClass("selected");
            $(".dialog").animate({bottom:"-300px",opacity:"0.1"},500); 
            show =0;
        }
	});
	var transf = ['摄像头','音箱','LED屏','充电桩'];
	//var statusCode = {'Cammer':0,'Speaker':0,"LedScreen":0,"ChargingPile":0};
	var statusCode = [0,0,0,0];
	//nodejs
	var num = 0;
	 socket.on("STATUS", function(data) {
		 console.log(data);
		num++;
		 var device = data.device ;var type=data.type; var online=data.online;var index;var status;
		 if(device == 'Cammer')
			 index = 0;
		 if(device == 'Speaker')
			 index = 1;
		 if(device == 'LedScreen')
			 index = 2;
		 if(device == 'ChargingPile')
			 index = 3;
		 if(online == 'True')
		 {online = 1;status='上线了';}	 
		 if(online == 'False')
			 {online = 0;status='下线了';}	 
		 if(online != statusCode[index]){
			 statusCode[index] = online;
			 $(".alert h1").text(transf[index]+type+status);
			if(num>4){
			 showalert();
			 $(".d_content ul").append(' <li><a>研究院1号灯上的'+transf[index]+type+status+'</a></li>');
			}
		 }

		 
	});
  热插拔监控结束*/ 
  //同步信息到其他屏
  	
  	$('body').on('click', '.zhguangboIcon', function(){ //云计算
		socket.emit('exe',{"no":6});
	});
  	$('body').on('click', '.leixingIcon', function(){ //云计算
		socket.emit('exe',{"no":6});
	});

	$('body').on('click', '#leap1', function(){ //云计算
		socket.emit('exe',{"no":1});
	});

	$('body').on('click', '#leap2', function(){ // 智慧制造
		socket.emit('exe',{"no":0});
	});

	$('body').on('click', '#leap3', function(){ // 商业不动产
		socket.emit('exe',{"no":14});
	});
		    
    $('body').on('click', '#leap4', function(){ //非银行金融
		socket.emit('exe',{"no":15});
	});

	$('body').on('click', '#leap5', function(){ //智慧建筑
		socket.emit('exe',{"no":0});
	});

	$('body').on('click', '#leap6', function(){ // 智慧交通
		socket.emit('exe',{"no":6});
	});

	$('body').on('click', '#leap7', function(){ //智慧政务
		socket.emit('exe',{"no":7});
	});

	$('body').on('click', '#leap8', function(){ //智慧医疗
		socket.emit('exe',{"no":0});
	});

	$('body').on('click', '#leap9', function(){ //平安城市
		socket.emit('exe',{"no":0});
	});

	$('body').on('click', '#leap10', function(){ // 食品溯源
		socket.emit('exe',{"no":5});
	});

	$('body').on('click', '#leap11', function(){ //智慧教育
		socket.emit('exe',{"no":9});
	});

	$('body').on('click', '#leap12', function(){ //智慧水务
		socket.emit('exe',{"no":12});
	});

	$('body').on('click', '.btn13', function(){
		socket.emit('exe',{"no":13});
	});

	$('body').on('click', '.btn14', function(){
		socket.emit('exe',{"no":14});
	});

	$('body').on('click', '.btn15', function(){
		socket.emit('exe',{"no":15});
	});

	$('body').on('click', '.btn16', function(){
		socket.emit('exe',{"no":16});
	});

	$('body').on('click', '.btn17', function(){
		socket.emit('exe',{"no":17});
	});

	$('body').on('click', '.btn18', function(){
		socket.emit('exe',{"no":18});
	});

	$('body').on('click', '.btn19', function(){
		socket.emit('exe',{"no":19});
	});
		//end 同步
});
