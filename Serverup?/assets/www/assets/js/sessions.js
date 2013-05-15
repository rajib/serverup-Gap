// $( document ).bind( "pagebeforeload", function( e, data ){
// 	if(localStorage.getItem("auth_token") != ''){
// 		console.log(localStorage.getItem("auth_token"));
// 		window.location.replace('servers.html');	
// 	}	
// 	e.preventDefault();	
// });

$(document).bind('pageinit',function(e){
	if(!(!localStorage.getItem("srvrup_auth_token"))){
		window.location.replace('servers.html');		
	}
	e.preventDefault();
})

$('#signinForm').submit(function(e) {
	var email = $('#email').val();
	var password = $('#password').val();

	$.ajax({
	  type: "POST",
	  url: 'http://serverup.io/api/v1/sessions.json',
	  data: { email: email, password: password },
	  dataType: 'json',
	  success: function (json) {  	
	  	console.log(json)
	  	console.log('s')
	  	console.log(json.auth_token)
	  	localStorage.setItem("srvrup_auth_token", json.auth_token);
	  	window.location.replace('servers.html');
	  },
	  error: function (json) {
	  	var obj = jQuery.parseJSON(json.responseText);
		alert(obj.message)
	  }
	});

	e.preventDefault();
});

