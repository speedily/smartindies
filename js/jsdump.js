// because menu is not floating thus, there is possibility of top button but do not put # in menu
//we arent changing to hash menu, but only setting active tabs here
//$("#faqs").attr('href', 'http://www.live.com/');
                //$('.nav > li.active').removeClass('active');
                               //$('#activea').addClass( "yourClass" );
                //alert($('.nav > li.active').val);

               //.removeClass('active in');
              // e.stopImmediatePropagation();
 //  $('.nav li').removeClass('active');//or $('.active').removeClass('active');
//});
               //$("li").removeClass("active");
               //$('li#activea').removeClass('active');
                //$('.nav a:contains("FAQs")').parent().addClass('active');
               //$("a[href='./faqs.html']").parent().addClass('active');
               //setInterval(function(){
  //$("a[href='./faqs.html']").parent().addClass('active'),5000);
/*
  $('.nav a:').on('shown.bs.nav', function(e) {
      alert('shown - after the tab has been shown');

      $('.nav > li.active').removeClass('active');
      $('.nav a:contains("FAQs")').parent().addClass('active');
  });
*/

/*
var active_link = $('.nav li a[href~="/faqs.html"]');
    if(active_link.size() > 0) active_link.parent().parent().addClass('active');
*/
 //$('.nav').find('a[href=".' + location.pathname + '"]').closest('li').addClass('active');
   // $( li['1'] ).addClass("active");
//$('#navbar-example > div.navbar-collapse.collapse > ul > li:nth-child(1) > a').addClass('active');
if( $('li a:contains("/faqs.html")').length ){
  alert("element(s) found")
}else{
  alert("nothing found")
}
 /*
 #navbar-example > div.navbar-collapse.collapse > ul > li:nth-child(1) > a

 #navbar-example > div.navbar-collapse.collapse > ul > li:nth-child(1)
    //*[@id="navbar-example"]/div[2]/ul/li[1]
*/

 $('.nav').find('a[href=".' + location.pathname + '"]').closest('li').addClass('active');

menulinks(); //hash or not

function menulinks()
{
       var topLoc = window.location.pathname;

       switch(topLoc)
       {
               case "/faqs.html":

               //alert($("#faqslink").text());
               //$("#faqslink").removeClass('faqslink');
               //$('a[href=".' + this.location.pathname + '"]').parent().addClass('active');

               alert("faqs value changed")
               break;
               default:

       }

}

/*javascript*/
    var jsonList = {"Table" : [{"stateid" : "2","statename" : "Tamilnadu"},
                {"stateid" : "3","statename" : "Karnataka"},
                {"stateid" : "4","statename" : "Andaman and Nicobar"},
                 {"stateid" : "5","statename" : "Andhra Pradesh"},
                 {"stateid" : "6","statename" : "Arunachal Pradesh"}]}

   // $(document).ready(function(){
      var listItems= "";
      for (var i = 0; i < jsonList.Table.length; i++){
        listItems+= "<option value='" + jsonList.Table[i].stateid + "'>" + jsonList.Table[i].statename + "</option>";
      }
      $("#DLState").html(listItems);
    //});
<select id="DLState"></select>

//note: change works when current is set from param as in page, click works everytime same or not

/*
$(".target").click(function() {
  //$(".target").change();
    //$(".target").val();
    window.open("/archive.html?id="+$(".target").val(), "_self");

    //alert( "Handlers for .change() called." );
});
    */

//----selector--------------------------
/*
$.getJSON( "./allindex.json")
 .done(function( firebase ) { console.log( "Request Succeeded: ");
      var listItems= "";
      for (var i = 0; i < firebase.Table.length; i++){
        listItems+= "<option value='" + firebase.Table[i].stateid + "'>" + firebase.Table[i].alt + "</option>";
      }
      $("#MState").html(listItems);

  })
  .fail(function( jqxhr, textStatus, error ) { var err = textStatus + ", " + error; console.log( "Request Failed: " + err ); });
  */

/*function renderblank()
{
 //get the current id and render it by id
        // get values from id
$.getJSON( "./allindex.json")
 .done(function( firebase ) { console.log( "Request Succeeded: ");
      var listItems= "";
      for (var i = 0; i < firebase.Table.length; i++){
        if(firebase.Table[i].release === "current" ) { ids = "true"; //alert("the id you mentioned exists:"+ids);
              //"release": "current"
      var gotid = firebase.Table[i].stateid;
      renderinall(gotid);

      }
  }})
  .fail(function( jqxhr, textStatus, error ) { var err = textStatus + ", " + error; console.log( "Request Failed: " + err ); })

}*/



/////////----------------
function renderinall(passid)
{

alert("You have told me to work on:"+passid);
//by release type or id
/*    if(!passid)
   // {

        //get the current id and render it by id
        // get values from id
$.getJSON( "./allindex.json")
 .done(function( firebase ) { console.log( "Request Succeeded: ");
      var listItems= "";
      for (var i = 0; i < firebase.Table.length; i++){
        if(firebase.Table[i].release === "current" ) { ids = "true"; //alert("the id you mentioned exists:"+ids);
              //"release": "current"
      var gotid = firebase.Table[i].stateid;
      renderinall(gotid);

      }
  }})
  .fail(function( jqxhr, textStatus, error ) { var err = textStatus + ", " + error; console.log( "Request Failed: " + err ); })

    }
    else*/
//    {

// get values from id
$.getJSON( "./allindex.json")
 .done(function( firebase ) { console.log( "Request Succeeded: ");
      var listItems= "";
      for (var i = 0; i < firebase.Table.length; i++){
        if(firebase.Table[i].stateid === id ) { ids = "true"; //alert("the id you mentioned exists:"+ids);
      //set h1
      $('h1').html(firebase.Table[i].alt);
      //set image -> image is for front page only, for vids, readit may become see it, for app install it, for games play it
      //set html
//for from param set list -> was in footer.html
//$(".target").val("01-07-2015").change(); -> causes loop
//$('select[name^="target"] option[value="01-07-2015"]').attr("selected","selected"); -> used regex
      //set select system -> got set
      $(".target option:selected").removeAttr("selected");
      $(".target option[value='"+passid+"']").attr('selected', 'selected')

      }
  }})
  .fail(function( jqxhr, textStatus, error ) { var err = textStatus + ", " + error; console.log( "Request Failed: " + err ); })

//}
}

//----- if else
if(!id) {
    //alert("you havent supplied value");
    //goto default page without reloading
    //renderinall(renderblank());
    //renderblank();

    $.getJSON( "./allindex.json")
 .done(function( firebase ) { console.log( "Request Succeeded: ");
      var listItems= "";
      for (var i = 0; i < firebase.Table.length; i++){
        if(firebase.Table[i].release === "current" ) { ids = "true"; //alert("the id you mentioned exists:"+ids);
              //"release": "current"
      renderinall(firebase.Table[i].stateid);

      }
  }})
  .fail(function( jqxhr, textStatus, error ) { var err = textStatus + ", " + error; console.log( "Request Failed: " + err ); })

}
else
{

//alert("we are scanning this id:"+id);
var ids = "blank";
$.getJSON( "./allindex.json")
 .done(function( firebase ) { console.log( "Request Succeeded: ");
      var listItems= "";       //alert("the value of ids before for:"+ids);

      for (var i = 0; i < firebase.Table.length; i++){
        if(firebase.Table[i].stateid === id ) { ids = "true"; //alert("the id you mentioned exists:"+ids);
        renderinall(id);
      } //alert("for"+i+"times" );
      }

      if(ids==="blank") {    //alert("this id is not present in database:"+ids);
          var p = '<img src="./images/pagenotfound.png" alt="Page Not Found... Please Go Back <<<<" class="img-responsive center-block"/>'; $('h1').html(p); $('#sys').hide(); }
      //alert("the value of ids after for:"+ids);

  })
  .fail(function( jqxhr, textStatus, error ) { var err = textStatus + ", " + error; console.log( "Request Failed: " + err ); });
}






/*    var ids = "blank";

    var listItems= "";

alert("the value of ids before for:"+ids);

for (var i = 0; i < jsonList.Table.length; i++)
{
    if(jsonList.Table[i].stateid === id )
    { ids = "true"; alert("the id you mentioned exists:"+ids+" in database");
    renderinall(id);
    break;
    }
    alert("for"+i+"times" );
}*/

//goto default page without reloading
//renderinall(renderblank());
//renderblank();

/*var gv = "";
var listItems= "";
for (var i = 0; i < jsonList.Table.length; i++)
{
    if(jsonList.Table[i].release === "current" )
    { ids = "true"; alert("the id you mentioned exists:"+ids);
      //"release": "current"
      gv =jsonList.Table[i].stateid;
      //renderinall(jsonList.Table[i].stateid);
     break;
    }
}*/
