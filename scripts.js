$(document).ready(function(){
  
    $('#reset').on('click', function(){
        //move my doge back to the start 
        $("#spongebob").css( 'top', '20px').css('left', '500px');
        //https://jqueryui.com/position/
      })
      
    
    $("#spongebob").draggable( 
    {
        stop: function() {
         // alert('dragged'); 
          
          if ( $("#spongebob").position().left > 100)
            {
              //they won
              $("body").append("<h2>YOU WON</h2> ") 
            }
          // alert( $("spongebob").position().left ); 
          if ( $("#spongebob").position().right > 300)
            {
              //they won
              $("body").append("<h2>YOU LOST!!</h2> ") 
            }
   
        }
    });  
   
    //TODO: if position is on the far rihgt side, tell user they won 
    
    
   
    
    
    
  });
  
  