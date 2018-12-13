
function Slider(obj){
	let defaultObj={
		boxDom : null,
		width : 400,
		height : 300,
		imgs : [],
		btnColor : 'black', //按钮的原始颜色
		btnHighColor : 'white',//按钮的高亮颜色
		btnSize : 20,//按钮的大小
		isCircle : true,//按钮是否为圆的
		currIndex : 0,
		timeSpace : 16,
		myTimer : null,
		isAutoPlay:true
	};
	for(let key in defaultObj){
		obj[key]!==undefined?(this[key] = obj[key]):(this[key] = defaultObj[key]);
	}

	this.createUI();
	this.addEvent();
	if(this.isAutoPlay){
		this.autoPlay();	
	}	
}

Slider.prototype.createUI = function(){
	this.boxDom.style.overflow="hidden";
	for(let i=0;i<this.imgs.length;i++){
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;";
		if(i==0){
			imgDom.style.left = "0px";
		}else{
			imgDom.style.left = this.width+"px";
		}
		imgDom.style.width = this.width+"px";
		imgDom.style.height = this.height+"px";
		this.boxDom.appendChild(imgDom);
	}
	
	
}

	//添加事件
Slider.prototype.addEvent = function(){
	//this;//是轮播图对象
	let that = this;
	
	this.boxDom.onmouseover = function(){
		//this 是事件源（boxDom）
		//this.stop();//这样写就不对了
		that.stop();
	}
	
	this.boxDom.onmouseout = function(){
		if(that.isAutoPlay){
			that.autoPlay();	
		}	
	};
	
	let lis = this.boxDom.lastElementChild.children;
	for(var i=0;i<lis.length;i++){
		lis[i].setAttribute("index",i);//这句话是给每个li增加了一个index属性，值是下标。
		lis[i].onclick = function(){
			that.goImg(parseInt(this.getAttribute("index")));
		};
	}
}
	
	//1、自动播放
Slider.prototype.autoPlay = function(){	
	if(this.myTimer!=null){
		return;
	}
	this.myTimer = setInterval(()=>{
		//1、改变数据（图片序号）
		let outIndex = this.currIndex;//要出去的那张。
		this.currIndex=this.currIndex+1;
		//2、边界处理
		if(this.currIndex>this.imgs.length-1 || this.currIndex<0){
			this.currIndex = 0;
		}
		//3、改变外观
		this.showImg(outIndex,this.currIndex);
	},this.timeSpace);	
}

	//2、停止
Slider.prototype.stop=function(){
	if(this.myTimer!=null){
		window.clearInterval(this.myTimer);
		this.myTimer = null;
	}
}

	//3、跳转指定的图片
	//


	//
	//参数：
	//outIndex:淡出的那张图片的序号
	//inIndex:淡入的那张图片的序号
Slider.prototype.showImg=function(outIndex,inIndex){
	//3、改变外观
	//1)、改图片
	let imgs = this.boxDom.children;
	imgs[inIndex].style.left = this.width+"px";
	
	//让inIndex滑入
	linearMove03(imgs[inIndex],"left",this.width,0,300);
	//让outIndex滑出
	linearMove03(imgs[outIndex],"left",0,-1*this.width,300);
	
	//2)、改豆豆
	
}



//匀速运动(正反向都有)
//参数：
//DOM元素
//样式属性
//起始位置
//终止位置
//时长(总路程/速度=总路程/步长*时间间隔)

//推导：时长/时间间隔 = 总路程/步长

function linearMove03(domObj,attr,startValue,endValue,timeLong){
	
	//假定时间间隔
	let timeSpace = 10;
	//计算步长
	let step = Math.abs(endValue-startValue)/(timeLong/timeSpace);
	
	//给当前值赋为初始值
	let currValue = startValue;
	//方向
	let direction = startValue<endValue?1:-1;
	var myTimer = setInterval(function(){
		//1、改变数据                  //currValue = 492 + 5 = 497
		currValue = currValue+direction*step;//502
		
		//2、边界处理
		if(Math.abs((currValue-direction*step)-endValue)<=step){
			currValue = endValue;//500
			window.clearInterval(myTimer);
		}
		/*
		if(direction==1){
			if(currValue>=endValue){
				currValue=endValue;
				window.clearInterval(myTimer);
			}			
		}else{
			if(currValue<=endValue){
				currValue=endValue;
				window.clearInterval(myTimer);
			}
		}*/
		//3、改变外观
		if(attr=="opacity"){
			domObj.style[attr] = currValue;//497
		}else{
			domObj.style[attr] = currValue+"px";
		}
	},timeSpace);
}



window.onload = function(){
	//1、轮播图流程
	let s1 = new Slider({
		boxDom:$("#imageBox"),
		width:960,
		height:400,
		imgs:["img/banner-1.jpg","img/banner-2.png","img/banner-3.png","img/banner-4.jpg","img/banner-5.jpg"],
		btnColor:"white",
		btnHighColor:'red',
		btnSize:20,
		isCircle:false,
		timeSpace:2000,
		isAutoPlay:true
	});
	
	//2.显示菜单
	var moreDom=$("#more");
	var showDom=$(".twolevel")[0];
	showMenu(moreDom,showDom);
	
	//3.显示商品分类菜单
	var goodsDom=$("#goods");
	var goodsMenuDom=$(".goodsMenu")[0];
	showMenu(goodsDom,goodsMenuDom);
	
	let goodsList=$(".goodsList");
	let goodsDiv=$(".goodsDiv");
	for(var i=0;i<goodsList.length;i++){
		showMenu(goodsList[i],goodsDiv[i]);
	}
	
	//登录cookie
	//1、读取用户名
	var username = getCookie("username");
	//2、初始化界面
	initUI(username);
	
	//3、注销
	$("#btnOut").onclick= function(){
		removeCookie("username");
		location.href="login.html";
	}
}	


/*	
	$(function(){
	     $('.navLeft li').click(function(){
	         $(this).addClass('highlight');
	         $(this).siblings().removeClass('highlight');
	     });
	});
*/

	
