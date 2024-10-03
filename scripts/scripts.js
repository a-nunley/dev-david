$(document).ready(function() {

  $('#reset').on('click', function() {
      // Move SpongeBob back to the start 
      $("#spongebob").css('top', '90px').css('left', '500px');
      // Remove any win/lose messages
      $("h2").remove();
  });

  $("#spongebob").draggable({
      stop: function() {
          // Get current positions
          const spongebobLeft = $("#spongebob").position().left; // SpongeBob's left position
          const spongebobWidth = $("#spongebob").outerWidth(); // SpongeBob's width
          const doodlebobLeft = $("#doodlebob").position().left; // DoodleBob's left position

          // Print the current position to the console
          console.log("SpongeBob's Position - Left: " + spongebobLeft);
          console.log("DoodleBob's Position - Left: " + doodlebobLeft);

          // Win condition: if SpongeBob is at or to the left of DoodleBob
          if (spongebobLeft >= 550) {
              $("body").append("<h2>YOU WON!</h2>");
          } 
          // Lose condition: if SpongeBob is dragged too far left (e.g., < 100)
          else if (spongebobLeft < 450) { 
              $("body").append("<h2>YOU LOST!</h2>");
          }
      }
  });
});
