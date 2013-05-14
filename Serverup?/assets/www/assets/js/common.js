$().ready(function(){
	$.ajaxSetup({
		beforeSend: function() { $.mobile.loading('show') },
		complete: function(jqXHR, textStatus) { $.mobile.loading('hide'); }
	});
});

$('#home').click(function(e) {
    window.location.replace('servers.html');
    e.preventDefault();
});

$('#refresh').click(function(e) {
	console.log("refresh");
    window.location.replace('servers.html');
    e.preventDefault();
});

$('#logout').click(function(e) {
	console.log("logout");
	$.ajax({
	  url: 'http://serverup.io/api/v1/sessions.json?auth_token='+localStorage.getItem("auth_token"),
	  type: "DELETE",
	  success: function (json) {
	  	window.location.replace('index.html');
	  }
	});

	e.preventDefault();
});