$(function() {
	var exposition = $('.exposition-img img');//展示图
	var lis = $('.head-ul li');
	var colorLi = $('.head-ColorUl li');
	var language = $(".head-language").find('a');
	var gotop = $('.gotop');
	var note = $('.head-h4');
	var noteText = $('.head-ul');
	var update = $(".update");
	
	var colorObj = {
		'Brike':'img/zhanshi/huamu.jpg',
		'WeiB':'img/zhanshi/white.jpg',
		'Grau':'img/zhanshi/huise.jpg',
		'Schwarz':'img/zhanshi/black.jpg',
		'Blue':'img/zhanshi/blue.jpg',
		'Pink':'img/zhanshi/fense.jpg'
	}
	var gotopObj = {
		'Brike':'#e1c3ab',
		'WeiB':'#217983',
		'Grau':'#b0a9ac',
		'Schwarz':'#747373',
		'Blue':'#8fbcda',
		'Pink':'#efa7b6'
	}
	var updateObj = {
		'Brike':'#e1c3ab',
		'WeiB':'#ffffff',
		'Grau':'#b0a9ac',
		'Schwarz':'#747373',
		'Blue':'#8fbcda',
		'Pink':'#efa7b6'
	}
	
	
	language.on('click',function(){
		language.removeClass('languageCss');
		$(this).addClass('languageCss');
	})
	
	lis.each(function(i,ele){
		$(ele).on('mouseenter',function(){
			colorLi.eq($(this).index()).css("width","0px")
			colorLi.eq($(this).index()).show();
			colorLi.eq($(this).index()).stop().animate({width:169});
		})
		$(ele).on('mouseleave',function(){
			colorLi.eq($(this).index()).stop().animate({width:0},function(){
				colorLi.eq($(this).index()).hide();
			});
		})
	})
	
	noteText.on('mouseenter',function(){
		note.show();
	})
	noteText.on('mouseleave',function(){
		note.hide();
	})
	
	var txonoff = true;  //文字 运动的控制开关；
	var moveText = $(".welcome span");
	var time = null;
	var timer1 = null;
	var timer2 = null;
	var lastsi = moveText.eq(0);
	var colorArr = ['#e1c3ab','#ffffff','#b0a9ac','#747373','#8fbcda','#efa7b6'];
	
	
	
	var tans = $(".foot-conter span");  //弹弹弹
	var tan = tans.eq(0);
	var deg = 0;
	var i = -1;
	var tantime = null;
	var tantime2 = null;
	var tantime3 = null;
	var show = $(".show");
	var jj =0;
	var tanonoff = true;
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		var n = parseInt(scrollTop/70);
		console.log(scrollTop)
		if(n<7){
			exposition.css({
				top:-(n*538)
			})
		}else{
			exposition.css({
				top:-(6*538)
			})
		}
		
		if(scrollTop>=100){
			gotop.show();
		}else{
			gotop.hide();
		}
		
		
		if(scrollTop>=1900){			//文字运动部分
			if(txonoff){
				moveText.each(function(i,ele){
					$(ele).css({
						top:30,
						left:-32
					})
					$(ele).removeClass("move");
				})
				
				timer1 =setInterval(function(){
					var sjnum = Math.floor(Math.random()*6);
					lastsi.css({
						color:colorArr[sjnum]
					});
					lastsi.addClass("move");
					lastsi = lastsi.next("span");
				},300)
				time = 300*moveText.size()+5000

				timer2 =setTimeout(function(i,ele){
					moveText.each(function(i,ele){
						$(ele).removeClass("move");
						$(ele).css({
						    color:"white"
					    });
						$(ele).css({
							top:30,
							left:(i*32)+300
						})
					})
				},time)
				txonoff = false;
			}
		}
		if(scrollTop<=1600){
			clearInterval(timer1)
			clearTimeout(timer2)
			txonoff = true;
			lastsi = moveText.eq(0);
			moveText.each(function(i,ele){
				$(ele).css({
					top:30,
					left:-32
				})
				$(ele).removeClass("move");
			})
		}
		
		/*        尾部弹弹弹  部分         */
		if(scrollTop>=2900){
			if(tanonoff){
				show.html('');
				show.hide();
				jj = 0;
				tans.each(function(i,ele){
					$(ele).css({
						bottom:-60,
						background:'#217983',
						transition:"none",
						transform:'rotate(0deg)'
					})
					$(ele).removeClass("bound")
					$(ele).fadeIn();
				})
				tantime = setInterval(function(){
					var sjback = Math.floor(Math.random()*6);
					i = i*(-1);
					deg = Math.ceil(Math.random()*120*i);
					tan.css({
						transition:"2s",
						transform:'rotate('+deg+'deg)',
						background:colorArr[sjback]
					})
					
					tan.addClass("bound");
					tan = tan.next("span");
				},800)
			
				tantime2 = setTimeout(function(){
					clearInterval(tantime);
					show.show();
					tantime3 = setInterval(function(){
						show.html(show.html()+tans.eq(jj).html())
						tans.eq(jj).fadeOut();
						jj++;
						if(jj>=tans.size()){
							clearInterval(tantime3)
						}			
					},300)
				},tans.size()*800+6000)
				tanonoff = false;
			}
			
			
		}
		
		if(scrollTop<=2500){
			clearInterval(tantime)
			clearTimeout(tantime2)
			clearInterval(tantime3)
			tanonoff = true;
			tan = tans.eq(0);
			show.html('');
			show.hide();
			jj = 0;
			tans.each(function(i,ele){
				$(ele).css({
					bottom:-60,
					background:'#217983',
					transition:"none",
					transform:'rotate(0deg)'
				})
				$(ele).removeClass("bound")
				$(ele).fadeIn();
			})
		}
		
		srcollY = exposition.position().top;
	})
	
	/*     桌子细节展示部分          */
	
	var detailsImg = $('.detailsImg img');
	var detailsObj = {
		'Brike':["img/huamu/teaser1.jpg","img/huamu/teaser2.jpg","img/huamu/teaser3.jpg","img/huamu/teaser4.jpg"],
		'WeiB':["img/white/teaser1.jpg","img/white/teaser2.jpg","img/white/teaser3.jpg","img/white/teaser4.jpg"],
		'Grau':["img/huise/teaser1.jpg","img/huise/teaser2.jpg","img/huise/teaser3.jpg","img/huise/teaser4.jpg"],
		'Schwarz':["img/black/teaser1.jpg","img/black/teaser2.jpg","img/black/teaser3.jpg","img/black/teaser4.jpg"],
		'Blue':["img/blue/teaser1.jpg","img/blue/teaser2.jpg","img/blue/teaser3.jpg","img/blue/teaser4.jpg"],
		'Pink':["img/pink/teaser1.jpg","img/pink/teaser2.jpg","img/pink/teaser3.jpg","img/pink/teaser4.jpg"]
	}

	/*      食物展示部分             */
	var foodImg = $('.food-img img');
	var foodObj = {
		'Brike':'img/food/huamu.jpg',
		'WeiB':'img/food/white.jpg',
		'Grau':'img/food/huise.jpg',
		'Schwarz':'img/food/black.jpg',
		'Blue':'img/food/blue.jpg',
		'Pink':'img/food/pink.jpg'
	}
	
	
	
	
	
	
	lis.each(function(i,ele){
		$(ele).on('click',function(){							//展示
			var color = $(this).attr('color');
			exposition.attr('src',colorObj[color]);
			
			var detailsArr = detailsObj[color];					//细节
			detailsImg.each(function(i,ele){
				$(ele).attr("src",detailsArr[i]);
			
			})
			
			foodImg.attr('src',foodObj[color]);					//食物
			
			gotop.css("background-color",gotopObj[color])		//回到顶部 背景颜色；
			
			update.css("border-color",updateObj[color])			//刷新下边框颜色；
			
		})
	})
	
	
	/*     回到部分        */
	
	gotop.on('click',function(){
		var scrTimer = null;
		scrTimer = setInterval(function(){
			var scTop = $(window).scrollTop();
			scTop-=30;
			window.scrollTo(0,scTop)
			if(scTop<=0){
				clearInterval(scrTimer);
			}
		},5)
	})
	
	
	
	
	
	
	
	/***     商品部分         *  */
	
	var productObj = {
		0:[{
			"imgsrc":"img/json/1.jpg",
			"money":"149.00",
			"name":"Wee J Phil computer desk desktop simple modern home desk with simple bookshelf"
		},{
			"imgsrc":"img/json/2.jpg",
			"money":"299.00",
			"name":"Desk table household mobile folding bedside table with simple lazy Bai Ze simple notebook..."
		},{
			"imgsrc":"img/json/3.jpg",
			"money":"99.00",
			"name":"Simple portable folding desk with movable folding desk on simple desk top household bed..."
		},{
			"imgsrc":"img/json/4.jpg",
			"money":"119.00",
			"name":"Simple folding table table table table small portable folding folding small table household balcony"
		},{
			"imgsrc":"img/json/5.jpg",
			"money":"399.00",
			"name":"Large notebook computer desk on bed with folding simple dormitory artifact lazy children table learning a small desk."
		},{
			"imgsrc":"img/json/6.jpg",
			"money":"119.00",
			"name":"Thinking off simple modern conference table folding bar table training long table table table chairs"
		},{
			"imgsrc":"img/json/7.jpg",
			"money":"175.00",
			"name":"Ouyi Lang computer desk table home simple modern office desk desk desk desk"
		},{
			"imgsrc":"img/json/8.jpg",
			"money":"559.00",
			"name":"The folding table table table Lou outdoor stall table simple and portable simple"
		}],
		1:[{
			"imgsrc":"img/json/9.jpg",
			"money":"339.00",
			"name":"The folding table table table Lou outdoor stall table simple and portable simple"
		},{
			"imgsrc":"img/json/10.jpg",
			"money":"499.00",
			"name":"Ouyi Lang computer desk table home simple modern office desk desk desk desk"
		},{
			"imgsrc":"img/json/11.jpg",
			"money":"298.00",
			"name":"Thinking off simple modern conference table folding bar table training long table table table chairs"
		},{
			"imgsrc":"img/json/12.jpg",
			"money":"339.00",
			"name":"Large notebook computer desk on bed with folding simple dormitory artifact lazy children table learning a small desk."
		},{
			"imgsrc":"img/json/13.jpg",
			"money":"439.00",
			"name":"Simple folding table table table table small portable folding folding small table household balcony"
		},{
			"imgsrc":"img/json/14.jpg",
			"money":"288.00",
			"name":"Simple portable folding desk with movable folding desk on simple desk top household bed..."
		},{
			"imgsrc":"img/json/15.jpg",
			"money":"889.00",
			"name":"Desk table household mobile folding bedside table with simple lazy Bai Ze simple notebook..."
		},{
			"imgsrc":"img/json/16.jpg",
			"money":"299.00",
			"name":"Wee J Phil computer desk desktop simple modern home desk with simple bookshelf"
		}],
		2:[{
			"imgsrc":"img/json/17.jpg",
			"money":"449.00",
			"name":"Desk table household mobile folding bedside table with simple lazy Bai Ze simple notebook..."
		},{
			"imgsrc":"img/json/18.jpg",
			"money":"59.00",
			"name":"Wee J Phil computer desk desktop simple modern home desk with simple bookshelf"
		},{
			"imgsrc":"img/json/19.jpg",
			"money":"89.00",
			"name":"Ouyi Lang computer desk table home simple modern office desk desk desk desk"
		},{
			"imgsrc":"img/json/20.jpg",
			"money":"79.00",
			"name":"The folding table table table Lou outdoor stall table simple and portable simple"
		},{
			"imgsrc":"img/json/21.jpg",
			"money":"99.00",
			"name":"Large notebook computer desk on bed with folding simple dormitory artifact lazy children table learning a small desk."
		},{
			"imgsrc":"img/json/22.jpg",
			"money":"299.00",
			"name":"Desk table household mobile folding bedside table with simple lazy Bai Ze simple notebook..."
		},{
			"imgsrc":"img/json/23.jpg",
			"money":"339.00",
			"name":"Wee J Phil computer desk desktop simple modern home desk with simple bookshelf"
		},{
			"imgsrc":"img/json/24.jpg",
			"money":"119.00",
			"name":"Ouyi Lang computer desk table home simple modern office desk desk desk desk"
		}]
	}
	
	
	
	/*     点击刷新         */
	
	var seach = $(".seach");
	var sconoff = true;
	var num = 0;
	seach.on('click',function(){
		var that  = this;
		if(sconoff){
			num++;
			$(this).css({
				transition:"1s",
				transform:"rotate(-360deg)"
			})
			setTimeout(function(){
				$(that).css({
					transition:"none",
				    transform:"rotate(0deg)"
				})
			},1000)
			
			if(num>2){
				num = 0;
			}
			
			setTimeout(function(){
				sconoff = true;
				seachFn(num);   //调用数据渲染函数；
			},1000)
		}
		sconoff = false;
		
	})
	
	seachFn(0); //一刚开始就调用一次；
	function seachFn(n){							//封装 数据渲染函数；
		var browseOdd = $(".browse-odd");
		var conterArr = productObj[n];
		
		browseOdd.each(function(i,ele){
			var obj = conterArr[i];
			for(var j in obj){
				$(ele).find('img').attr("src",obj.imgsrc);
				$(ele).find(".rmb").html(obj.money);
				$(ele).find(".browse-odd-p").html(obj.name);
			}
		})
	}
	/*       尾部背景动起来            Thank you  */
	var footback = document.getElementsByClassName("foot")[0];
	var w = 0;
	setInterval(function(){
		footback.style.backgroundPositionX = -w+'px';
		w+=0.1;
	},1)
})