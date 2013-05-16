$().ready(function(){
	$.ajaxSetup({
		beforeSend: function() { $.mobile.loading('show', {
        	text: 'Loading...',
        	textVisible: true,
        	theme: 'a',
        	html: ""
		});
		},
		complete: function(jqXHR, textStatus) { $.mobile.loading('hide'); }
	});
});

$('#home').click(function(e) {
    window.location.replace('servers.html');
    e.preventDefault();
});

// $('#refresh').click(function(e) {
//     window.location.replace('servers.html');
//     e.preventDefault();
// });

$('#logout').click(function(e) {
	$.ajax({
	  url: 'http://serverup.io/api/v1/sessions.json?auth_token='+localStorage.getItem("srvrup_auth_token"),
	  type: "DELETE",
	  success: function (json) {
	  	localStorage.removeItem("srvrup_auth_token");
	  	console.log(localStorage.getItem("srvrup_auth_token"));
	  	window.location.replace('index.html');
	  }
	});

	e.preventDefault();
});