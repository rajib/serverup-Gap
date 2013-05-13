$(function () {
    $.ajax({
      url: 'http://serverup.io/api/v1/show.json',
      data: { auth_token: localStorage.getItem("auth_token") },
      success: function (json) {
        console.log(json)
        var source = $("#showServerTemplate").html();
        var template = Handlebars.compile(source);
        $("#listServers").html(template(json));
        $("span.timeago").timeago(); // apply fuzzy time
        $("#showServerView").listview(); // apply mobile lisview
      }
    });
});

$('#back_btn_show').click(function(e) {
    window.location.replace('servers.html');
    e.preventDefault();
});