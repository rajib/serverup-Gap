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

$('#refresh').click(function(e) {
    window.location.replace('servers.html');
    e.preventDefault();
});

$('.my_server').live('click',function(e){
    var id = $('.my_id').val();
    $.ajax({
        url: 'http://serverup.io/api/v1/servers/'+id,
        data: { auth_token: localStorage.getItem("auth_token") },
        success: function (json) {
        window.location.replace('show.html'); 
        }, 
        error: function (json) {
            var obj = jQuery.parseJSON(json.responseText);
            alert(obj.message)
        }          
    });
    e.preventDefault();
});
