// jQuery document ready
$(document).ready(function () {
  // Handling the trigger in button click event
  $("body").on("click", "#trigger-btn", function (event) {
    // Call trigger event
    $("#human-btn").click();
  });
  // Handling the human in button click event
  $("body").on("click", "#human-btn", function (event) {
    /**
     * Check the event is trusted or not,
     *
     * if you have getting true value, that means the event is human click,
     * otherWise non- human event.
     */
     let isTrusted = event.originalEvent !== undefined ? event.originalEvent.isTrusted : false;
     if (isTrusted) {
       $(".set-message").text("it's Human click event...!");
     } else {
       $(".set-message").text("it's Non-Human click event...!");
     }
     console.log(event, 'event..');
  });
});
