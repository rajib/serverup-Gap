$(function () {
	$.ajax({
	  url: 'http://localhost:3000/api/v1/servers.json',
	  data: { auth_token: localStorage.getItem("auth_token") },
	  success: function (json) {
	  	console.log(json)
	  }
	});
});