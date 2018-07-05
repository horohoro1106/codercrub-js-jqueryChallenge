$(document).ready(function(){
  function createTable(){
    $(table).html('');  //clear table before each createTable function
    var rows = $('#table__height').val();
    var rowsWidth = $('#table__width').val();
    var tableWidth = $(table).innerWidth();
    var tableHeight = $(table).innerHeight();
   for(var i=0;i<rows;i++){   //outer cycle to create new row
     var row = $('<div></div>').attr('class','row');
     for(var j=0;j<rowsWidth;j++) {   //inner cycle to create divs in row
       var div = $('<div></div>').attr('class','table__item').css({'width': tableWidth / rowsWidth - 4 + 'px', 'height': tableHeight / rows + 'px'});
       $(row).append(div);  //attaching each div to row
     }
     $(table).append(row); //attaching each row to our table
   }
  };
//function to set random color when we hover table row divs
  function setColor(){
    var result = '#' + (Math.random().toString(16).slice(-6));
    return result;
  };
//adding event on button so we can use createTable function when we click button
  table__create.onclick = function() {
      createTable();
  };
//event handler it checks if the target is row div,if it is, he sets new background color on it
  $(table).mouseover(function(event){
    var target = event.target;
    if(target.className !='table__item'){
      return;
    }
    $(target).css('backgroundColor',setColor());  //css propertie wrote in camelCase
  });
});