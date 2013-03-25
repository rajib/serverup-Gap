$(function () {
	Handlebars.registerHelper("status_class", function(status){
	   if (status == 'up') {
	   		return 'label-success'
	   } else {
	   		return 'label-important'
	   };
	});

	$.ajax({
	  url: 'http://dev7.indusnettechnologies.com:8888/api/v1/servers.json',
	  data: { auth_token: localStorage.getItem("auth_token") },
	  success: function (json) {
	  	console.log(json)
	  	var source = $("#listServersTemplate").html();
	  	var template = Handlebars.compile(source);
	  	$("#listServers").html(template(json));
	  	$("span.timeago").timeago(); // apply fuzzy time
	  }
	});
});

$('#refresh').click(function(e) {
	window.location.replace('servers.html');
	e.preventDefault();
});