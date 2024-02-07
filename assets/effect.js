$(window).load(function() {
    $('.loading').fadeOut('fast', function() {
        $('.container').fadeIn('fast', function() {
            initPage();
        });
    });
});

function initPage() {
    setupResize();
    turnOnLights();
}

function setupResize() {
	// 这里保留您原始代码中的 $(window).resize() 逻辑
	var vw = $(window).width()/2;
	$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
	$('#b11').animate({top:240, left: vw-350},500);
	$('#b22').animate({top:240, left: vw-250},500);
	$('#b33').animate({top:240, left: vw-150},500);
	$('#b44').animate({top:240, left: vw-50},500);
	$('#b55').animate({top:240, left: vw+50},500);
	$('#b66').animate({top:240, left: vw+150},500);
	$('#b77').animate({top:240, left: vw+250},500);
}

function turnOnLights() {
    // 实现 #turn_on 的点击事件逻辑
	// 添加类、改变样式等
	$('#bulb_yellow').addClass('bulb-glow-yellow');
	$('#bulb_red').addClass('bulb-glow-red');
	$('#bulb_blue').addClass('bulb-glow-blue');
	$('#bulb_green').addClass('bulb-glow-green');
	$('#bulb_pink').addClass('bulb-glow-pink');
	$('#bulb_orange').addClass('bulb-glow-orange');
	$('body').addClass('peach');
	$(this).fadeOut('slow').delay(5000).promise().done(function(){
		$('#play').fadeIn('slow');
	});
    // 在最后调用 playMusic()
    playMusic();
}

function playMusic() {
	// 实现 #play 的点击事件逻辑
	var audio = $('.song')[0];
	audio.play();
	$('#bulb_yellow').addClass('bulb-glow-yellow-after');
	$('#bulb_red').addClass('bulb-glow-red-after');
	$('#bulb_blue').addClass('bulb-glow-blue-after');
	$('#bulb_green').addClass('bulb-glow-green-after');
	$('#bulb_pink').addClass('bulb-glow-pink-after');
	$('#bulb_orange').addClass('bulb-glow-orange-after');
	$('body').css('backgroud-color','#FFF');
	$('body').addClass('peach-after');
	$(this).fadeOut('slow').delay(6000).promise().done(function(){
		$('#bannar_coming').fadeIn('slow');
	});
    // 在最后调用 bannerComing()
    bannerComing();
}

function bannerComing() {
	// 实现 #bannar_coming 的点击事件逻辑
	$('.bannar').addClass('bannar-come');
	$(this).fadeOut('slow').delay(6000).promise().done(function(){
		$('#balloons_flying').fadeIn('slow');
	});
    // 在最后调用 balloonsFlying()
    balloonsFlying();
}

function loopOne() {
	var randleft = 1000*Math.random();
	var randtop = 500*Math.random();
	$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
		loopOne();
	});
}

function loopTwo() {
	var randleft = 1000*Math.random();
	var randtop = 500*Math.random();
	$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
		loopTwo();
	});
}

function loopThree() {
	var randleft = 1000*Math.random();
	var randtop = 500*Math.random();
	$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
		loopThree();
	});
}

function loopFour() {
	var randleft = 1000*Math.random();
	var randtop = 500*Math.random();
	$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
		loopFour();
	});
}

function loopFive() {
	var randleft = 1000*Math.random();
	var randtop = 500*Math.random();
	$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
		loopFive();
	});
}

function loopSix() {
	var randleft = 1000*Math.random();
	var randtop = 500*Math.random();
	$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
		loopSix();
	});
}
function loopSeven() {
	var randleft = 1000*Math.random();
	var randtop = 500*Math.random();
	$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
		loopSeven();
	});
}
	
function balloonsFlying() {
	// 实现 #balloons_flying 的点击事件逻辑
	$('.balloon-border').animate({top:-500},8000);
	$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
	$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
	// $('#b3').addClass('balloons-rotate-behaviour-two');
	// $('#b4').addClass('balloons-rotate-behaviour-one');
	// $('#b5').addClass('balloons-rotate-behaviour-one');
	// $('#b6').addClass('balloons-rotate-behaviour-two');
	// $('#b7').addClass('balloons-rotate-behaviour-one');
	loopOne();
	loopTwo();
	loopThree();
	loopFour();
	loopFive();
	loopSix();
	loopSeven();
	
	$(this).fadeOut('slow').delay(5000).promise().done(function(){
		$('#cake_fadein').fadeIn('slow');
	});
    // 在最后调用 cakeFadeIn()
    cakeFadeIn();
}

function cakeFadeIn() {
	// 实现 #cake_fadein 的点击事件逻辑
	$('.cake').fadeIn('slow');
	$(this).fadeOut('slow').delay(3000).promise().done(function(){
		$('#light_candle').fadeIn('slow');
	});
    // 在最后调用 lightCandle()
    lightCandle();
}

function lightCandle() {
	// 实现 #light_candle 的点击事件逻辑
	$('.fuego').fadeIn('slow');
	$(this).fadeOut('slow').promise().done(function(){
		$('#wish_message').fadeIn('slow');
	});
    // 在最后调用 wishMessage()
    wishMessage();
}

function wishMessage() {
	// 实现 #wish_message 的点击事件逻辑
	vw = $(window).width()/2;

	$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
	$('#b1').attr('id','b11');
	$('#b2').attr('id','b22')
	$('#b3').attr('id','b33')
	$('#b4').attr('id','b44')
	$('#b5').attr('id','b55')
	$('#b6').attr('id','b66')
	$('#b7').attr('id','b77')
	$('#b11').animate({top:240, left: vw-350},500);
	$('#b22').animate({top:240, left: vw-250},500);
	$('#b33').animate({top:240, left: vw-150},500);
	$('#b44').animate({top:240, left: vw-50},500);
	$('#b55').animate({top:240, left: vw+50},500);
	$('#b66').animate({top:240, left: vw+150},500);
	$('#b77').animate({top:240, left: vw+250},500);
	$('.balloons').css('opacity','0.9');
	$('.balloons h2').fadeIn(3000);
	$(this).fadeOut('slow').delay(3000).promise().done(function(){
		$('#story').fadeIn('slow');
	});
    // 在最后调用 story()
    story();
}

function story() {
	// 实现 #story 的点击事件逻辑
	$(this).fadeOut('slow');
	$('.cake').fadeOut('fast').promise().done(function(){
		$('.message').fadeIn('slow');
	});
	
	var i;

	function msgLoop (i) {
		$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
		i=i+1;
		$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
		if(i==50){
			$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
				$('.cake').fadeIn('fast');
			});
			
		}
		else{
			msgLoop(i);
		}			

	});
		// body...
	}
	
	msgLoop(0);
    // 这是自动化流程的最后一步
    // 你可以在这里结束或者开始一个新的循环/逻辑
}

$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
		playMusic();
	});

	function playMusic() {
		// 实现 #play 的点击事件逻辑
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
		// 在最后调用 bannerComing()
		bannerComing();
	}

	function bannerComing() {
		// 实现 #bannar_coming 的点击事件逻辑
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
		// 在最后调用 balloonsFlying()
		balloonsFlying();
	}

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}

	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}

	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}

	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}

	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
		
	function balloonsFlying() {
		// 实现 #balloons_flying 的点击事件逻辑
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
		// 在最后调用 cakeFadeIn()
		cakeFadeIn();
	}

	function cakeFadeIn() {
		// 实现 #cake_fadein 的点击事件逻辑
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
		// 在最后调用 lightCandle()
		lightCandle();
	}

	function lightCandle() {
		// 实现 #light_candle 的点击事件逻辑
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
		// 在最后调用 wishMessage()
		wishMessage();
	}

	function wishMessage() {
		// 实现 #wish_message 的点击事件逻辑
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
		// 在最后调用 story()
		story();
	}

	function story() {
		// 实现 #story 的点击事件逻辑
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		// 这是自动化流程的最后一步
		// 你可以在这里结束或者开始一个新的循环/逻辑
	}
// 	$('#play').click(function(){
// 		var audio = $('.song')[0];
//         audio.play();
//         $('#bulb_yellow').addClass('bulb-glow-yellow-after');
// 		$('#bulb_red').addClass('bulb-glow-red-after');
// 		$('#bulb_blue').addClass('bulb-glow-blue-after');
// 		$('#bulb_green').addClass('bulb-glow-green-after');
// 		$('#bulb_pink').addClass('bulb-glow-pink-after');
// 		$('#bulb_orange').addClass('bulb-glow-orange-after');
// 		$('body').css('backgroud-color','#FFF');
// 		$('body').addClass('peach-after');
// 		$(this).fadeOut('slow').delay(6000).promise().done(function(){
// 			$('#bannar_coming').fadeIn('slow');
// 		});
// 	});

// 	$('#bannar_coming').click(function(){
// 		$('.bannar').addClass('bannar-come');
// 		$(this).fadeOut('slow').delay(6000).promise().done(function(){
// 			$('#balloons_flying').fadeIn('slow');
// 		});
// 	});

// 	function loopOne() {
// 		var randleft = 1000*Math.random();
// 		var randtop = 500*Math.random();
// 		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
// 			loopOne();
// 		});
// 	}
// 	function loopTwo() {
// 		var randleft = 1000*Math.random();
// 		var randtop = 500*Math.random();
// 		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
// 			loopTwo();
// 		});
// 	}
// 	function loopThree() {
// 		var randleft = 1000*Math.random();
// 		var randtop = 500*Math.random();
// 		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
// 			loopThree();
// 		});
// 	}
// 	function loopFour() {
// 		var randleft = 1000*Math.random();
// 		var randtop = 500*Math.random();
// 		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
// 			loopFour();
// 		});
// 	}
// 	function loopFive() {
// 		var randleft = 1000*Math.random();
// 		var randtop = 500*Math.random();
// 		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
// 			loopFive();
// 		});
// 	}

// 	function loopSix() {
// 		var randleft = 1000*Math.random();
// 		var randtop = 500*Math.random();
// 		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
// 			loopSix();
// 		});
// 	}
// 	function loopSeven() {
// 		var randleft = 1000*Math.random();
// 		var randtop = 500*Math.random();
// 		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
// 			loopSeven();
// 		});
// 	}

// 	$('#balloons_flying').click(function(){
// 		$('.balloon-border').animate({top:-500},8000);
// 		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
// 		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
// 		// $('#b3').addClass('balloons-rotate-behaviour-two');
// 		// $('#b4').addClass('balloons-rotate-behaviour-one');
// 		// $('#b5').addClass('balloons-rotate-behaviour-one');
// 		// $('#b6').addClass('balloons-rotate-behaviour-two');
// 		// $('#b7').addClass('balloons-rotate-behaviour-one');
// 		loopOne();
// 		loopTwo();
// 		loopThree();
// 		loopFour();
// 		loopFive();
// 		loopSix();
// 		loopSeven();
		
// 		$(this).fadeOut('slow').delay(5000).promise().done(function(){
// 			$('#cake_fadein').fadeIn('slow');
// 		});
// 	});	

// 	$('#cake_fadein').click(function(){
// 		$('.cake').fadeIn('slow');
// 		$(this).fadeOut('slow').delay(3000).promise().done(function(){
// 			$('#light_candle').fadeIn('slow');
// 		});
// 	});

// 	$('#light_candle').click(function(){
// 		$('.fuego').fadeIn('slow');
// 		$(this).fadeOut('slow').promise().done(function(){
// 			$('#wish_message').fadeIn('slow');
// 		});
// 	});

		
// 	$('#wish_message').click(function(){
// 		 vw = $(window).width()/2;

// 		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
// 		$('#b1').attr('id','b11');
// 		$('#b2').attr('id','b22')
// 		$('#b3').attr('id','b33')
// 		$('#b4').attr('id','b44')
// 		$('#b5').attr('id','b55')
// 		$('#b6').attr('id','b66')
// 		$('#b7').attr('id','b77')
// 		$('#b11').animate({top:240, left: vw-350},500);
// 		$('#b22').animate({top:240, left: vw-250},500);
// 		$('#b33').animate({top:240, left: vw-150},500);
// 		$('#b44').animate({top:240, left: vw-50},500);
// 		$('#b55').animate({top:240, left: vw+50},500);
// 		$('#b66').animate({top:240, left: vw+150},500);
// 		$('#b77').animate({top:240, left: vw+250},500);
// 		$('.balloons').css('opacity','0.9');
// 		$('.balloons h2').fadeIn(3000);
// 		$(this).fadeOut('slow').delay(3000).promise().done(function(){
// 			$('#story').fadeIn('slow');
// 		});
// 	});
	
// 	$('#story').click(function(){
// 		$(this).fadeOut('slow');
// 		$('.cake').fadeOut('fast').promise().done(function(){
// 			$('.message').fadeIn('slow');
// 		});
		
// 		var i;

// 		function msgLoop (i) {
// 			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
// 			i=i+1;
// 			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
// 			if(i==50){
// 				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
// 					$('.cake').fadeIn('fast');
// 				});
				
// 			}
// 			else{
// 				msgLoop(i);
// 			}			

// 		});
// 			// body...
// 		}
		
// 		msgLoop(0);
		
// 	});
});




//alert('hello');