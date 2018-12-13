
function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

window.onload=function(){
	checkPhone();
	checkPassword();
	//if(checkPhone()==true&&checkPassword()==true){
		
		$("#submit").onclick=register;
	//}
	
}
function checkPhone(){
	$("#phone").onblur = function(){
		//1、手机号码的规则：1开头，第二位是3-9，9位数字
		let reg = /^1[3-9]\d{9}$/i;
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√ 号码合法";
			this.nextElementSibling.style.color="green";
			this.nextElementSibling.style.fontSize="14px";
			this.style.border="1px solid #e0e0e0";
			return true;
		}else{
			this.nextElementSibling.innerHTML = "请输入正确的手机号码";
			this.nextElementSibling.style.color="red";
			this.style.border="1px solid red";
			this.nextElementSibling.style.fontSize="14px";
			return false;
		}
	}
}

function checkPassword(){
	$("#password").onblur = function(){
		//密码由6-20位数字,字母和符号组成
		let reg = /\w{6,20}/;	

		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√  密码合法";
			this.nextElementSibling.style.color="green";
			this.nextElementSibling.style.fontSize="14px";
			this.style.border="1px solid #e0e0e0";
			return true;
		}else{
			this.nextElementSibling.innerHTML = "请输入正确的密码";
			this.style.border="1px solid red";
			this.nextElementSibling.style.color="red";
			this.nextElementSibling.style.fontSize="14px";
			return false;
		}
	}
}

/*
ajax180803({
	url:"t.php",
	param:"a=1&b=2",
	func:function(){}
});
*/
function ajax180803(obj){
	let defaultObj= {
		url:"#",
		method:"get",
		param:"",
		isAsync:true,
		func:null
	};
	/*
	for(let key in obj){  // "url"
		defaultObj[key] = obj[key];
	}	
	*/
	for(let key in defaultObj){  // "url"
		//obj[key]&&(defaultObj[key]=obj[key]);
		if(obj[key]){
			defaultObj[key]=obj[key];
		}
	}
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
		urlAndParam +="?"+defaultObj.param;
	}	
	//2、
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}
}

function register(){
	ajax180803({
		url:"checkRegister.php",
		method:"post",
		param:"username="+$("#phone").value+"&userpass="+$("#password").value,
		func:function(str){
			if(str=="0"){
				alert("注册成功！");
				location.href = "login.html";
			}else if(str=="1"){
				alert("注册失败！");
				location.href = "register.html";
			}else if(str=="2"){
				$("#phone").nextElementSibling.innerHTML="用户名已存在！换一个吧";
				$("#phone").nextElementSibling.style.color="red";
				$("#phone").style.border="1px solid red";
				$("#phone").nextElementSibling.style.fontSize="14px";
			}
		}
	});
}
