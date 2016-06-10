$(function() {
//$('li a[href="' + location.pathname + '"]').closest('li').addClass('active');
//$('#navbar-example > div.navbar-collapse.collapse > ul > li a[href="' + window.location.pathname + '"]').closest('li').addClass('active');
$('#navbar-example > div.navbar-collapse.collapse > ul > li a[href="' + location.pathname + '"]').closest('li').attr("class", "active");
       
$('#navbar-example > div.navbar-collapse.collapse > ul > li a[href="' + location.pathname + '"]').attr("href", "#");
    
     });