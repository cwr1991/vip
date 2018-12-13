
$("#submit").onclick=login;
function login(){
	let xhr = new XMLHttpRequest();
		xhr.open("post","checkLogin.php",true);
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="0"){
					alert("用户名或密码错误，请重新登录");
				}else{
					//保存cookie
					addCookie("username",$("#phone").value,7);
					alert("登陆成功！");
					location.href = "index.html";
				}
			} 
		}	
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let sendStr="username="+$("#phone").value+"&userpass="+$("#password").value;
		xhr.send(sendStr);

}
