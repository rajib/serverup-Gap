$().ready(function(){
	$.ajaxSetup({
		// error:function(x,e){
		// 	if(x.status==0){
		// 	alert('You are offline!!n Please Check Your Network.');
		// 	}else if(x.status==404){
		// 	alert('Requested URL not found.');
		// 	}else if(x.status==500){
		// 	alert('Internel Server Error.');
		// 	}else if(e=='parsererror'){
		// 	alert('Error.nParsing JSON Request failed.');
		// 	}else if(e=='timeout'){
		// 	alert('Request Time out.');
		// 	}else {
		// 	alert('Unknow Error.n'+x.responseText);
		// 	}
		// }
	});
});

$('#signinForm').submit(function(e) {
	var email = $('#email').val();
	var password = $('#password').val();

	$.ajax({
	  type: "POST",
	  url: 'http://localhost:3000/api/v1/sessions.json',
	  data: { email: email, password: password },
	  dataType: 'json',
	  success: function (json) {  	
	  	console.log(json)
	  	console.log('s')
	  	console.log(json.auth_token)
	  	localStorage.setItem("auth_token", json.auth_token);
	  	window.location.replace('servers.html');
	  },
	  error: function (json) {
	  	var obj = jQuery.parseJSON(json.responseText);
		alert(obj.message)
	  }
	});

	e.preventDefault();
});

$('#logout').click(function(e) {
	$.ajax({
	  url: 'http://localhost:3000/api/v1/sessions.json?auth_token='+localStorage.getItem("auth_token"),
	  type: "DELETE",
	  // data: { auth_token: localStorage.getItem("auth_token") },
	  success: function (json) {
	  	window.location.replace('index.html');
	  }
	});

	e.preventDefault();
});