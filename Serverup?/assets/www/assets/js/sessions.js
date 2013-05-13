$().ready(function(){
	$.ajaxSetup({
		beforeSend: function() { $.mobile.loading('show') },
		complete: function(jqXHR, textStatus) { $.mobile.loading('hide'); }
	});
});

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
	  url: 'http://serverup.io/api/v1/sessions.json?auth_token='+localStorage.getItem("auth_token"),
	  type: "DELETE",
	  // data: { auth_token: localStorage.getItem("auth_token") },
	  success: function (json) {
	  	window.location.replace('index.html');
	  }
	});

	e.preventDefault();
});