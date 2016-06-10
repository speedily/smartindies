$(document).ready(function(){
$("#menu").load("menu.html"); // for menu    
$("#foot").load("footer.html"); // for menu 

//for # navigation scrolls    
$('body').scrollspy({ target: '#navbar-example' })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
});

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}