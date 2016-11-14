	
// 左下角菜单：鼠标点击其他区域消失
document.getElementById('clitrigger').onclick = function(e) {
		document.getElementById('menu').style.display = 'block';
		e = e || window.event;
		if(e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	}
	// var odiv = document.getElementById('menu');
	// document.onclick = function (e) {
	//     e = e || window.event;
	//     var s = e.target || e.srcElement ;
	//     if (e.srcElement) { //ie
	//         if (!(s == odiv || odiv.contains(s))) {
	//             odiv.style.display = 'none';
	//         }
	//     } else {
	//         var res = odiv.compareDocumentPosition(s);
	//         if (!(s == odiv || res == 20 || res == 0)) {
	//             odiv.style.display = 'none';
	//         }
	//     }
	// }
	
	
//	menu
	


// 右键切换模式（管理者，仪表盘）
$(function() {
	var imageMenuData = [
		[{
			text: "仪表盘模式",
			func: function() {
				$(".panel").show();
			}
		}],
		[{
			text: "管理者模式",
			func: function() {
				$(".panel").hide();
			}
		}]
	];
	var bodyMenuData = [
		[{
			text: "页面空白处点击是否冲突测试"
		}]
	];
	//    $("body").smartMenu(imageMenuData, {
	//        name: "body"
	//    });

	$(".toggle-icon").click(function() {
		if(!$(this).parent(".pad").find(".specific-details").is(":animated"))
			$(this).parent(".pad").find(".specific-details").slideToggle();
	})
});

//右侧按钮点击事件
$(".desktop-two-button").click(function() {
	
			$(".desktop-two-button").addClass("white_bd");
			setTimeout(function() {
				$(".desktop-two-button").removeClass("white_bd");
			}, 100);
			
			$(".desktop-two-center-one .news").css("display", "none");
			$(".desktop-two-center-two .news").css("display", "none");
			$(".desktop-two-center-three .news").css("display", "none");
			$(".desktop-two-center-four .news").css("display", "none");
			$(".desktop-two-center-five .news").css("display", "none");
			
			
			$(".shalou").css("display", "block");
			$(".show-pic").css("display", "none");
			setTimeout(function() {
				$(".shalou").css("display", "none");
				$(".show-pic").fadeIn(3000);
			}, 5000);
			clearTimeout();
			
		})
//右侧下拉框事件
$('#mySelect').change(function() {
	var select_value = $(this).children('option:selected').val()
	if(select_value == 1) {
		$('.desktop-two-button').removeAttr("disabled");
		$('.desktop-two-center-one').css("display", "block");
		$('.desktop-two-center-two').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");
		$('.desktop-two-center-four').css("display", "none");
		$('.desktop-two-center-five').css("display", "none");
		$('.desktop-two-center-one .show-pic').css("display","none");
		$(".desktop-two-button").removeClass("white_bd1");

	} else if(select_value == 2) {
		$('.desktop-two-center-two').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");
		$('.desktop-two-center-four').css("display", "none");
		$('.desktop-two-center-five').css("display", "none");
		$('.desktop-two-button').attr("disabled","disabled");
		$(".desktop-two-center .news").css("display","block");
		$(".desktop-two-button").addClass("white_bd1");
		
		
	} else if(select_value == 3) {
		$('.desktop-two-center-three').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-two').css("display", "none");
		$('.desktop-two-center-four').css("display", "none");
		$('.desktop-two-center-fvie').css("display", "none");
		$(".desktop-two-button").addClass("white_bd1");
	} else if(select_value == 4) {
		$('.desktop-two-center-four').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-two').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");
		$('.desktop-two-center-five').css("display", "none");
		$(".desktop-two-button").addClass("white_bd1");
	} else if(select_value == 5) {
		$('.desktop-two-center-five').css("display", "block");
		$('.desktop-two-center-one').css("display", "none");
		$('.desktop-two-center-two').css("display", "none");
		$('.desktop-two-center-three').css("display", "none");
		$('.desktop-two-center-four').css("display", "none");
		$(".desktop-two-button").addClass("white_bd1");
	} else {}
})

//黑色区域
var timer2 = 0;
var imgs = ['img/zhbc.gif', 'img/zhbc1.gif', 'img/zhbc2.gif']; //注意：换成三张名称一样的不行
var len = imgs.length;
var current = 0;
$(".shalou").live('mouseover', function() {
	current = ++current; //等同于下面注释部分
	if(current == len) {
		current = 0;
	} else {
		current = current;
	}
	//current = ++current == len ? 0: current;
	$("#target").attr("src", imgs[current]);
	$(".code-img").css("display", "block");
	if(!timer2) {
		timer2 = setTimeout(function() {
			$(".code-img").css("display", "none");
		}, 5000);
	}

}).mouseleave(function() {
	clearTimeout(timer2); //最好有这一句
	timer2 = null;
	$(".code-img").css("display", "none");
});

//

// 开关数据整合按钮点击
$(".jq22").css("display","none");
//$(".button-icon").toggle(
//	function() {
//		$(".jq22").css("display","block");
//		$("#desktop .icon").not(".icon_not").css("display", "none");
//		$("#button-icon").text("关闭整合模式");
//		$("#button-icon").removeClass("button-icon");
//		$("#button-icon").addClass("button-icon1");
//		$(".copy5").css("display", "block");
//		$(".copy7").css("display", "block");
//		$(".copy1").css("display", "block");
//		$(".copy8").css("display", "block");
//
//	},
//	function() {
//		$(".jq22").css("display","none");
//		$("#desktop .icon").not(".icon_not").css("display", "block");
//		$("#button-icon").text("开启整合模式");
//		$("#button-icon").removeClass("button-icon1");
//		$("#button-icon").addClass("button-icon");
//
//		$("#leap5-1").css("display", "none");
//		$("#leap1-1").css("display", "none");
//		$("#leap7-1").css("display", "none");
//		$("#leap8-1").css("display", "none");
//
//		$(".copy5").css("display", "none");
//		$(".copy1").css("display", "none");
//		$(".copy7").css("display", "none");
//		$(".copy8").css("display", "none");
//	}
//
//);

// $(".copy1").draggable({
//     helper: "clone",
//     revert: "invalid"
// });

// copy图标的ui的拖拽
$('.yy_hide').hide();

$(function() {
	var d = $('.jq22').dad();
	var target = $('.dropzone');
	d.addDropzone(target, function(e){
		e.find('span').show().appendTo(target);
		e.remove();
		
	});
	
});

//      左侧js左侧菜单开始
$(".show-hide1").hide();
$(".mouseover-show1").mouseover(function() {
	//				$(this).parent().next().slideDown();  
	$(this).parent().next().stop(true, true).slideDown();
}).mouseout(function() {
	$(this).parent().next().stop(true, true).slideUp();
});
//			js左侧菜单加入结束

// pnp涉及到了theme-popover-mask标签
jQuery(document).ready(function($) {
	$('.theme-popover-mask').fadeIn(100);
	$('.theme-popover').slideDown(200);
	$('.theme-poptit .close').click(function() {
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
	})
})

//前面的效果加进来了：放上去两秒开始（把注释去掉，效果可以出来）
//			$(function(){
//			//方法二：整合了上述，简单了，但是疑问还是没有解决(ppt上面有叙述)
//					
//					 var timer;
//					 $("a.icon").live('mouseenter',function(){
//					 	$(this).attr('name',"yes-svg.html");
//					 	var x = $(this).attr('href');
//						var y = $(x).find('a').attr('href');
//						var z=$(this).attr('id');
//						document.getElementById("test_lep").innerHTML=x+z;
//						
//					 	$("#iframebb").css("display","block");
//					 var name= $(this).attr("name");
//					$("#iframebb").attr("src",name).ready();
//						 if(!timer){
//							  timer=setTimeout(function(){
////									   document.getElementById("leap1").click();
//							   //应用到每一个都起到效果开始
////										 	var x = $("a.icon").attr('href');
////											var y = $(x).find('a').attr('href');
////											var z=$("a.icon").attr('id');
//									document.getElementById("test_lep").innerHTML="新的为"+x+z;
//									
//									for(var i=1,j=0;i<=8;i++,j++){
//											$(".if"+i).attr("src",comNamess[j]);
//										}
//									// Show the taskbar button.
//									if ($(x).is(':hidden')){
//										$(x).remove().appendTo('#dock');
//										$(x).show('fast');
//									}
//									// Bring window to front.
//									JQD.util.window_flat();
//									$(y).addClass('window_stack').show();
//									$("#iframebb").css("display","none");
//							  //应用到每一个都起到效果结束
//							  },2000);
//						  }
//					 }).mouseleave(function(){
//					 	clearTimeout(timer);//最好有这一句
//						timer=null;
//						$("#iframebb").css("display","none");
//					 })
//				 });
//放上去两秒结束

//  var uid = $("#hidecode").val();
// 	        //var uid = 'f77b5b45e5e01ca657d496be90461f48';
// 	        var t = 0;
// 	        function timedCount()
// 	        {
// 	            $.ajax({
// 	                type: 'post',
// 	                url: 'http://10.200.46.37/smartparkOS/auth/checkqrcode.php',
// 	                data: {
// 	                    uid: uid
// 	                },
// 	                cache: false,
// 	                dataType: 'json',
// 	                success: function (data) {
// 	                    if (data.msg == "right") {
// 	                        //alert(data.msg);
// 	                        stopCount();
// 	                        location.href = 'http://10.200.46.37/smartparkOS';
// 	                    }
// 	                },
// 	                error: function (XMLHttpRequest, textStatus, errorThrown) {
// 	                    //alert( XMLHttpRequest.error());
// 	                    //alert(textStatus);
// 	                    //stopCount();
// 	                    //location.href = 'http://10.200.46.37/smartparkOS';
// 	                }
// 	            });
// 	            t=setTimeout("timedCount()",2000);
// 	        }
// 	        timedCount();
// 	        function stopCount() {
// 	            clearTimeout(t)
// 	        }