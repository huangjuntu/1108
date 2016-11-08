$(function(){
		var alldata = new Array("image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg","image/10.jpg","image/11.jpg","image/12.jpg","image/13.jpg","image/14.jpg","image/15.jpg","image/16.jpg","image/17.jpg","image/18.jpg","image/19.jpg","image/20.jpg","image/21.jpg","image/22.jpg","image/23.jpg","image/24.jpg","image/25.jpg","image/26.jpg","image/27.jpg","image/28.jpg","image/29.jpg","image/30.jpg","image/31.jpg","image/32.jpg","image/33.jpg","image/34.jpg","image/35.jpg","image/36.jpg","image/37.jpg","image/38.jpg","image/39.jpg","image/40.jpg","image/41.jpg","image/42.jpg","image/43.jpg","image/44.jpg","image/45.jpg","image/46.jpg","image/47.jpg","image/48.jpg","image/49.jpg","image/50.jpg","image/51.jpg","image/52.jpg","image/53.jpg","image/54.jpg","image/55.jpg","image/56.jpg","image/57.jpg","image/58.jpg","image/59.jpg","image/60.jpg","image/61.jpg","image/62.jpg","image/63.jpg","image/64.jpg","image/65.jpg","image/66.jpg","image/67.jpg","image/68.jpg","image/69.jpg","image/70.jpg","image/71.jpg","image/72.jpg","image/73.jpg","image/74.jpg","image/75.jpg","image/76.jpg","image/77.jpg","image/78.jpg","image/79.jpg","image/80.jpg");

		var imageName = new Array("#img1","#img2","#img3","#img4","#img5","#img6");
		var prizeArray = new Array("image/2.jpg","image/7.jpg","image/16.jpg","image/31.jpg","image/33.jpg","image/35.jpg","image/37.jpg","image/44.jpg","image/49.jpg","image/54.jpg","image/58.jpg","image/60.jpg");
		//name.substring(name.indexOf('/')+1, name.indexOf('.'))
		var nameNum = imageName.length - 1;
		var num = alldata.length - 1;
		var show = $("#image");
		var btn = $("#btn");
		var open = false;
			
		function change(){
			var randomVal = Math.round(Math.random() * num);
			var prizeName = alldata[randomVal];
			//show.text(prizeName);
			show.attr("src",prizeName);
		}
		
		Array.prototype.indexOf = function(val) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] == val) return i;
				}
					return -1;
			};

		Array.prototype.remove = function(val) {
			var index = this.indexOf(val);
				if (index > -1) {
					this.splice(index, 1);
				}
			};

		function run(){
			if(!open){
				<!-- 指定函数出现的速度，以毫秒计算-->
				timer=setInterval(change,20);
				$("#myaudio").attr("src","mp3/fail.mp3"); 
				$("#myaudio")[0].play();
				//btn.removeClass('start').addClass('stop').text('停止');
				open = true;
			}else{
				var height = $(imageName[nameNum]).css("height");
				var width = $(imageName[nameNum]).css("width");
				
				var name = $("#image").attr("src");
				var imgClone = $("#image").clone(true).css("opacity",'0.7');
				alldata.remove(name);

				if($.inArray(name, prizeArray) != -1){
					$("#myaudio")[0].pause();
					$("#myaudio").attr("src","mp3/win.mp3"); 
					$("#myaudio")[0].play();
					prizeArray.remove(name);
					console.log(prizeArray.length);
					$("span.up").html(prizeArray.length);
					console.log("win");

				}else{
					$("#myaudio")[0].pause();
					$("span.up").html("未中奖");
					console.log("fail");
				}
				if(prizeArray.length == 0){
					alert("抽奖结束！");
				}
//				 imgClone.css({ "position": "absolute", "top": "50px", "left": "50px"});
//				 $("#imgDiv").parent().append(imgClone);
//				 imgClone.animate({height:"150px",width:"150px"},400);
//				 imgClone.animate({left:$(imageName[nameNum]).offset().left,top:$(imageName[nameNum]).offset().top},600);
//				 imgClone.animate({height:height,width:width},350,function(){
//				 		$(imageName[nameNum]).attr("src",name);
//				 		nameNum = nameNum - 1;
//				 	});
				clearInterval(timer);
				//btn.removeClass('stop').addClass('start').text('开始抽奖');
				open = false;
			}
		}
		//btn.click(function(){run();})
		$(document).keyup(function(e){
			if(!e) var e = window.event; 
			if(e.keyCode==32){
					run();
				}
			});
				 
	})