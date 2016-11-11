$(function () {
	$(".button").click(function () {
		$(".choujiang").hide();
		$(".show").show();

		//  全部的图片数量
		var allnum = 80;

		// 一等奖数量
		var FirstPrice = 2;

		// 二等奖数量
		var SecondPrice = 3;

		// 三等奖数量
		var ThirdPrize = 4;

		//	alldata：储存所有图片
		var alldata = new Array();

		for (var i = 1; i <= allnum; i++) {

			alldata.push("image/" + i + ".jpg");
		}

		//  prizeArray ：储存中奖图片(包含一等奖，二等奖，三等奖)

		// 所有一等奖图片相同，所有二等奖图片相同，所有三等奖图片相同
		// var prizeArray = new Array();
		// for(var p1 = 1; p1 <=FirstPrice; p1++){
		// 	prizeArray.push("image/58.jpg");
		// }
		// for(var p2 = 1; p2<=SecondPrice;p2++){
		// 	prizeArray.push("image/37.jpg");
		// }
		// for(var p3 = 1; p3<=ThirdPrize;p3++){
		// 	prizeArray.push("image/7.jpg");
		// }

		// 每种奖项相片不同的情况
		var prizeArray = new Array(
			"image/2.jpg", "image/7.jpg", "image/16.jpg",
			"image/31.jpg", "image/33.jpg", "image/35.jpg",
			"image/37.jpg", "image/44.jpg", "image/49.jpg",
			"image/54.jpg", "image/58.jpg", "image/60.jpg"
		);

		$(".buttom").show();
		$(".error").hide();
		$(".win").hide();
		var num = alldata.length - 1;
		var show = $("#image");
		//		var btn = $("#btn");
		var open = false;

		function change() {
			var randomVal = Math.round(Math.random() * num);//数字舍入为最接近的整数。如：0.49为0
			var prizeName = alldata[randomVal];
			console.log("prizeName:" + prizeName);
			show.attr("src", prizeName);
		}

		Array.prototype.indexOf = function (val) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] == val) return i;
			}
			return -1;
		};

		Array.prototype.remove = function (val) {
			var index = this.indexOf(val);
			if (index > -1) {
				this.splice(index, 1);
			}
		};

		function run() {
			if (!open) {
				//				指定函数出现的速度，以毫秒计算
				timer = setInterval(change, 30);
				$("#myaudio").attr("src", "mp3/fail.mp3");
				$("#myaudio")[0].play();
				open = true;
			} else {
				var name = $("#image").attr("src");
				var imgClone = $("#image").clone(true).css("opacity", '0.7');
				alldata.remove(name);

				if ($.inArray(name, prizeArray) != -1) {
					$("#myaudio")[0].pause();
					$("#myaudio").attr("src", "mp3/win.mp3");
					$("#myaudio")[0].play();
					prizeArray.remove(name);
					console.log(prizeArray.length);
					$("span.up").html("恭喜您");
					$(".win").show();
					$(".error").hide();
					
					$(".buttom").html(prizeArray.length);
					$("span.up").css("color","red");
					console.log("win");

				} else {
					$("#myaudio")[0].pause();
					$("span.up").html("遗憾");
					$(".error").show();
					$(".win").hide();
					$(".buttom").html(prizeArray.length);
					$("span.up").css("color","black");
					console.log("fail");
				}
				if (prizeArray.length == 0) {
					alert("抽奖结束！");
				}
				clearInterval(timer);
				open = false;
			}
		}

		$(document).keyup(function(e) {
			$(".error").hide();
			$(".win").hide();
			$("span.up").html("");
			if (!e) var e = window.event;
			if (e.keyCode == 32) {
				run();
			}
		});

		//end
	})

})