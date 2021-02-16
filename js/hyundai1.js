	/* 팝업 */
	
	$(document).ready(function () {
		$(".modal .btn_close").click(function () {
			setCookieMobile( "todayCookie", "done" , 1);
			$(".modal").hide();
		});
	});
	 
	function setCookieMobile ( name, value, expiredays ) {
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
	}
	function getCookieMobile () {
		var cookiedata = document.cookie;
		if ( cookiedata.indexOf("todayCookier=done") < 0 ){
			 $(".modal").show();
		}
		else {
			$(".modal").hide();
		}
	}
	getCookieMobile();
	
	
	$(function(){
		btn = 1;
		$('#total_btn,#total_close').click(function(){
			if(btn==1){
				$('#total_menu').slideDown();
				btn=0;
			}else{
				$('#total_menu').slideUp();
				btn=1;
			}
		});
		/* 메뉴호버 */
		$("#nav li.mainmenu").hover(function(){
			$(this).find(".width100").stop().slideDown();
			$(".menu_bg").stop().css("display","block");
		},function(){
			$(this).find(".width100").stop().slideUp();
			$(".menu_bg").stop().css("display","none");
	});
	/* 좌측하단 슬라이드 */
	var openning = true;
	$('.rollingSlide > li').eq(0).siblings().hide();
	$(function(){
	    $('.control_button').on('click' , function(){
           var num = $(this).index(); 
           n = num; 
			slideMove();
       })
       var n=0;     
       function  colorFun(){
            if(n<6){ 
				n++;
			}else{
				n=0;
			} 
			$(".rollingSlide > li").eq(n).fadeIn(1000);
			$(".rollingSlide > li").eq(n).siblings().fadeOut(1000);
			$('.control_button').eq(n).addClass('on');
			$('.control_button').eq(n).siblings().removeClass('on');
           /* 0 1 2 3 4 .. 숫자가 변경되도록 하는 연산 */           
           /* num%5 은 모든 숫자를 0~4까지 숫자로 만들어 주는 연산 */
       }    
	   function slideMove(){
		$(".rollingSlide > li").eq(n).fadeIn(1000);
		$(".rollingSlide > li").eq(n).siblings().fadeOut(1000);
		$('.control_button').eq(n).addClass('on');
		$('.control_button').eq(n).siblings().removeClass('on');
		};
		
		 /* 패널이 열려 있음을 약속 */
                            /* false인경우 닫혀있음을 약속*/
        /*다음 코드가 열고 닫기를 토글처리 함 */
		if(openning){timer=setInterval( colorFun, 5000)}
		
        $('.control_panel>.stop').click(function(){
            
            if( openning ){
				clearInterval(timer);
				$(this).addClass('on');
                openning = false; 
            }else{
                timer=setInterval( colorFun, 5000) ;
				$(this).removeClass('on');
                openning = true;   
            }
        })
    });
	/* 중앙메인슬라이드 */
	var cdopenning = true;
	$('.cdSlide > li').eq(0).siblings().hide();
	$(function(){
        
       if(cdopenning){cdtimer=setInterval(cdcolorFun, 5000)}
		
        $('.cdcontrol_panel>.cdstop').click(function(){
            
            if( cdopenning ){
				clearInterval(cdtimer);
				$(this).addClass('on');
                cdopenning = false; 
            }else{
                cdtimer=setInterval( cdcolorFun, 5000) ;
				$(this).removeClass('on');
                cdopenning = true;   
            }
        })
	   
	    $('.cdcontrol_button').on('click' , function(){
           var cdnum = $(this).index(); 
           cdn = cdnum; 
			cdslideMove();
       })
       var cdn=0;     
       function  cdcolorFun(){
            if(cdn<4){ 
				cdn++;
			}else{
				cdn=0;
			} 
			$(".cdSlide > li").eq(cdn).fadeIn(1000);
			$(".cdSlide > li").eq(cdn).siblings().fadeOut(1000);
			$('.cdcontrol_button').eq(cdn).addClass('on');
			$('.cdcontrol_button').eq(cdn).siblings().removeClass('on');
           /* 0 1 2 3 4 .. 숫자가 변경되도록 하는 연산 */           
           /* num%5 은 모든 숫자를 0~4까지 숫자로 만들어 주는 연산 */
       }    
	   function cdslideMove(){
		$(".cdSlide > li").eq(cdn).fadeIn(1000);
		$(".cdSlide > li").eq(cdn).siblings().fadeOut(1000);
		$('.cdcontrol_button').eq(cdn).addClass('on');
		$('.cdcontrol_button').eq(cdn).siblings().removeClass('on');
		};
    });
	/* 중앙하단 우측 슬라이드 */
	var pjopenning = true;
	$('.pjSlide > li').eq(0).siblings().hide();
	$(function(){
        
       if(pjopenning){pjtimer=setInterval(pjcolorFun, 5000)}
		
        $('.pjcontrol_panel>.pjstop').click(function(){
            
            if( pjopenning ){
				clearInterval(pjtimer);
				$(this).addClass('on');
                pjopenning = false; 
            }else{
                pjtimer=setInterval( pjcolorFun, 5000) ;
				$(this).removeClass('on');
                pjopenning = true;   
            }
        })
	   
	    $('.pjcontrol_button').on('click' , function(){
           var pjnum = $(this).index(); 
           pjn = pjnum; 
			pjslideMove();
       })
       var pjn=0;     
       function  pjcolorFun(){
            if(pjn<6){ 
				pjn++;
			}else{
				pjn=0;
			} 
			$(".pjSlide > li").eq(pjn).fadeIn(1000);
			$(".pjSlide > li").eq(pjn).siblings().fadeOut(1000);
			$('.pjcontrol_button').eq(pjn).addClass('on');
			$('.pjcontrol_button').eq(pjn).siblings().removeClass('on');
           /* 0 1 2 3 4 .. 숫자가 변경되도록 하는 연산 */           
           /* num%5 은 모든 숫자를 0~4까지 숫자로 만들어 주는 연산 */
       }    
	   function pjslideMove(){
		$(".pjSlide > li").eq(pjn).fadeIn(1000);
		$(".pjSlide > li").eq(pjn).siblings().fadeOut(1000);
		$('.pjcontrol_button').eq(pjn).addClass('on');
		$('.pjcontrol_button').eq(pjn).siblings().removeClass('on');
	};
    });
	/* 우측 상단 박스 슬라이드 */
	var gyopenning = true;
	$('.gySlide > li').eq(0).siblings().hide();
	$(function(){
        if(gyopenning){gytimer=setInterval(gycolorFun, 5000)}
		
        $('.gycontrol_panel>.gystop').click(function(){
            
            if( gyopenning ){
				clearInterval(gytimer);
				$(this).addClass('on');
                gyopenning = false; 
            }else{
				gytimer=setInterval( gycolorFun, 5000) ;
				$(this).removeClass('on');
                gyopenning = true;   
            }
        })
	    $('.gycontrol_button').on('click' , function(){
           var gynum = $(this).index(); 
           gyn = gynum; 
			gyslideMove();
       })
        
       var gyn=0;     
       function  gycolorFun(){
            if(gyn<2){ 
				gyn++;
			}else{
				gyn=0;
			} 
			$(".gySlide > li").eq(gyn).fadeIn(1000);
			$(".gySlide > li").eq(gyn).siblings().fadeOut(1000);
			$('.gycontrol_button').eq(gyn).addClass('on');
			$('.gycontrol_button').eq(gyn).siblings().removeClass('on');
           /* 0 1 2 3 4 .. 숫자가 변경되도록 하는 연산 */           
           /* num%5 은 모든 숫자를 0~4까지 숫자로 만들어 주는 연산 */
       }    
	   function gyslideMove(){
		$(".gySlide > li").eq(gyn).fadeIn(1000);
		$(".gySlide > li").eq(gyn).siblings().fadeOut(1000);
		$('.gycontrol_button').eq(gyn).addClass('on');
		$('.gycontrol_button').eq(gyn).siblings().removeClass('on');
	};
    });
	
	/* 우측 하단 박스 슬라이드 */
	var evopenning = true;
	$('.evSlide > li').eq(0).siblings().hide();
	$(function(){
        if(evopenning){evtimer=setInterval(evcolorFun, 5000)}
		
        $('.evcontrol_panel>.evstop').click(function(){
            
            if( evopenning ){
				clearInterval(evtimer);
				$(this).addClass('on');
                evopenning = false; 
            }else{
				evtimer=setInterval(evcolorFun, 5000) ;
				$(this).removeClass('on');
                evopenning = true;   
            }
        })
	   
	    $('.evcontrol_button').on('click' , function(){
           var evnum = $(this).index(); 
           evn = evnum; 
			evslideMove();
       })
        
       /* 시간에 따른 배경색 변경 */ 
       /* 5초마다 colorFun 함수를 반복적으로 실행하시오 */
       var evn=0;     
       function  evcolorFun(){
            if(evn<3){ 
				evn++;
			}else{
				evn=0;
			} 
			$(".evSlide > li").eq(evn).fadeIn(1000);
			$(".evSlide > li").eq(evn).siblings().fadeOut(1000);
			$('.evcontrol_button').eq(evn).addClass('on');
			$('.evcontrol_button').eq(evn).siblings().removeClass('on');
           /* 0 1 2 3 4 .. 숫자가 변경되도록 하는 연산 */           
           /* num%5 은 모든 숫자를 0~4까지 숫자로 만들어 주는 연산 */
       }    
	   function evslideMove(){
		$(".evSlide > li").eq(evn).fadeIn(1000);
		$(".evSlide > li").eq(evn).siblings().fadeOut(1000);
		$('.evcontrol_button').eq(evn).addClass('on');
		$('.evcontrol_button').eq(evn).siblings().removeClass('on');
	};
    });
	/* 팝업 */
	$('.link1').click(function(){
		$(this).toggleClass('on');
		$(this).next('ul').toggle();
	});
	$('.link2').click(function(){
		$(this).toggleClass('on');
		$(this).next('ul').toggle();
	});
});