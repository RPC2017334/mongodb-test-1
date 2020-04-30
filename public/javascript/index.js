
$(document).ready(function () {
    // inserting content into table
    var trElement, tdElement;

    contents.forEach(function(item) {

        trElement = $("<tr id='"+item._id+"'>"+"</tr>");
        tdElement = $("<td></td>").text(item.title);
        trElement.append(tdElement);

        tdElement = $("<td></td>").text(item.year);
        trElement.append(tdElement);

        tdElement = $("<td></td>").text(item.genres);
        trElement.append(tdElement);

        tdElement = $("<td></td>").text(item.director);
        trElement.append(tdElement);

      
        tdElement = $("<td></td>").html("<a href='/delete/"+item._id+"'>" +"<img src='img/delete.jpg'></a>"+"<span style='display:inline-block; width: 15px;'></span><a href='/update/"+item._id+"'>" +"<img src='img/edit.png'></a>"+"<span style='display:inline-block; width: 15px;'></span><a href='/add'>" +"<img src='img/Add-icon.png'></a>");
        trElement.append(tdElement);

        $('#movies-list1').append(trElement);
    });
   
   
    //add attribute to link to recognize which studio you are using
    $('#album').on('click',function(){
        $('#addlink').attr("href","/add?studioname='1'");
    });
    
   
    
});