//objective: 1.get parameter and
//show 1.blank value for default page 2.404 for error page 3.valid content for valid value
$(document).ready(function()
{
    //get url parameters
    var id = GetURLParameter('id');
    /*$('.venobox').venobox();
    $('.venobox').attr("href", $('.venobox_custom').attr('href')+"?autoplay=1");*/
     
$('.venobox_custom').venobox({
        framewidth: '80%',        // default: ''
        frameheight: '80%'       // default: ''
    });

    $('.venobox_custom').attr("href", $('.venobox_custom').attr('href')+"?autoplay=1");


    function renderinall(passid)
    {
        //////alert("We are in the render in function with id:"+passid);

        //by release type or id
        if(!passid)
        { //get the "current" release id and render it by id since we didnt pass any value
           ////alert("we are in the if !passid function");

            var listItems= "";
            for (var i = 0; i < jsonList.Table.length; i++)
            {
                if(jsonList.Table[i].release === "current" )
                { ids = "true";
                //"release": "current"
                var gotid = jsonList.Table[i].stateid;
                ////alert("we had no render id but are going to 'current' release value of id:"+gotid);
                renderinall(gotid);
                break;
                }
            }
        }
        else
        {  // get values from id that we passed
            ////alert("we are in the else of passid function with id:"+passid);
            var idx = "false"; // this is for 404 page detection after end of for loop
            var listItems= "";
            for (var i = 0; i < jsonList.Table.length; i++)
            {
                if(jsonList.Table[i].stateid === passid )
                { idx = "true"; ////alert("we are in else for/if and the id you passed to us exists:"+idx+" in database");

               //set cover & its alt
                 $('[name="cover"]').attr("src",jsonList.Table[i].source); //-> used regex
                 $('[name="cover"]').attr("alt",jsonList.Table[i].alt + " " + jsonList.Table[i].stateid.replace(/-/g, " ")); //-> used regex



                //set h1
                $('h1').html(jsonList.Table[i].alt);

                $('#date').html(" Published Date: "+jsonList.Table[i].stateid.replace(/-/g, "&nbsp;"));
                //set image -> image is for front page only, for vids, readit may become see it, for app install it,
                 //for games play it

                //set html
                //$('#subdns').html(jsonList.Table[i].html);
$('#subdns').load('./htmls/'+jsonList.Table[i].stateid+'.html');
                 //$('#subdns').html('<object type="text/html" data="./htmls/'+jsonList.Table[i].stateid+'.html"></object>');

                //enlist all items in dropdown
                var listItems= "";
                for (var i = 0; i < jsonList.Table.length; i++)
                {
                listItems+= "<option value='" + jsonList.Table[i].stateid + "'>" + jsonList.Table[i].alt + " " + jsonList.Table[i].stateid.replace(/-/g, " ") + "</option>";
                }
                $("#MState").html(listItems);

                //for from param set list -> was in footer.html
                 //$(".target").val("01-07-2015").change(); -> causes loop
                 //$('select[name^="target"] option[value="01-07-2015"]').attr("selected","selected"); -> used regex
                //set select system -> got set
                $(".target option:selected").removeAttr("selected");
                $(".target option[value='"+passid+"']").attr('selected', 'selected');
                break;

                }
            }

            // the 404 because for loop above couldnt find any object matching the passed parameter id
            if(idx==="false")
            {    ////alert("this parameter id is not present in database:"+id);
                 var p = '<img src="./images/pagenotfound.png" alt="Page Not Found... Please Go Back <<<<" class="img-responsive center-block"/>';
                 ////alert(p);
                 $('h1').html(p); $('#sys').hide();
            }
            ////alert("the value of idx after for:"+idx);

        }
    } //end of renderinall() function

//call rendering
    if(!id)
    {   ////alert("you havent supplied value");
        renderinall(); // render without value
    }
    else
    {   ////alert("you have given us this parameter id:"+id);
        renderinall(id);//render  with value because we supplied value
    }

}); // end of ready function


//make for cover and read btn
    //$("[name='cover']").val(hbase.results[0].formatted_address);
                          //$("[name='Lat']").val(LatP); $("[name='readbtn']").val(LonP);

$(".target").change(function() {
  window.open("/archive.html?id="+$(".target").val(), "_self");

});
