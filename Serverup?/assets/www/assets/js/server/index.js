$(document).bind('pageinit',function(e){
  if(!localStorage.getItem("srvrup_auth_token")){
    window.location.replace('index.html');    
  }
  e.preventDefault();
})

$(function () {
    Handlebars.registerHelper("status_class", function(status){
       if (status == 'up') {
            return 'label-success'
       } else {
            return 'label-important'
       };
    });

    Handlebars.registerHelper("server_status_span", function(status){
       if (status == 'up') {
            return "color:#5D7924"
       } else {
            return "color:#B42A00"
       };
    });    
   
    $.ajax({
      url: 'http://serverup.io/api/v1/servers.json',
      data: { auth_token: localStorage.getItem("srvrup_auth_token") },
      success: function (json) {
        console.log(json)
        var source = $("#listServersTemplate").html();
        var template = Handlebars.compile(source);
        $("#listServers").html(template(json));
        $("span.timeago").timeago(); // apply fuzzy time
        $("#listServersView").listview(); // apply mobile lisview
      }
    });
});

 $('#listServersView').live('click', function( e ){
     var identifier = $( e.target ).closest('.my_server').attr('data-identifier');
     window.location.replace('show.html?id='+identifier);
     e.preventDefault();
 });

 $('#refresh').click(function(e) {
    window.location.replace('servers.html');
    e.preventDefault();
});

// $('#listServers').on('click', function( e ){
//     var identifier = $( e.target ).closest('.my_server').attr('data-identifier');
//     window.location.replace('show.html?id='+identifier);
//     e.preventDefault();
// });
