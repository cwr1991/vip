
function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	


//功能：获取某个DOM元素的样式属性的兼容性写法
//参数：dom元素，样式属性名
//返回值：样式属性的值

function getStyle(domObj,attr){
	if(domObj.currentStyle){//domObj.currentStyle如果能够正确获取到，那就真
		return domObj.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}

function navFixed(scroll){
	
	if(scroll>200){
		$(".navBox")[0].style.position='fixed';
		$(".navBox")[0].style.left="0";
		$(".navBox")[0].style.top="0";
		$(".navBox")[0].style.zIndex="5";
	}else{
			$(".navBox")[0].style.position='relative';
			$(".navBox")[0].style.left="0";
			$(".navBox")[0].style.top="0";

	}
}


function navLeftFixed(scroll){
	var t=$(".bigBox")[0].offsetTop;
	var h=$("section")[0].offsetHeight;
	if(scroll>t){
		$(".navLeft")[0].style.display="block";
	}else if(scroll<(t-h)){
		$(".navLeft")[0].style.display="none";
	}
}

function showMenu(domObj,showDom){
	domObj.onmouseover=function(){
		showDom.style.display="block";
	}
	domObj.onmouseout=function(){
		showDom.style.display="none";
	}
}


//登录cookie
function initUI(username){
	if(username!=null){
		
		$("#welcome").style.display = "block";
		$("#userSpan").innerHTML = username;
		$("#loginBox").style.display = "none";
	}else{
		$("#welcome").style.display = "none";
		$("#loginBox").style.display = "block";
	}
}
window.onscroll=function(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	navFixed(scroll);
	navLeftFixed(scroll);
}
window.onload = function(){
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
