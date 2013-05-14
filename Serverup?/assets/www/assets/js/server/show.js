$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

$(function () {
    var id = $.getUrlVar('id');
    console.log(id);
    $.ajax({
      type: 'GET',  
      url: 'http://serverup.io/api/v1/servers/'+id,
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

$('#home').click(function(e) {
    window.location.replace('servers.html');
    e.preventDefault();
});