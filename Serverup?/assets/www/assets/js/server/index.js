$(function () {
    Handlebars.registerHelper("status_class", function(status){
       if (status == 'up') {
            return 'label-success'
       } else {
            return 'label-important'
       };
    });

    $.ajax({
      url: 'http://serverup.io/api/v1/servers.json',
      data: { auth_token: localStorage.getItem("auth_token") },
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

$( document ).on('click', function( e ){
    var identifier = $( e.target ).closest('.my_server').attr('data-identifier');
    window.location.replace('show.html?id='+identifier);
    e.preventDefault();
});
