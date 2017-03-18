$(document).ready(function() {
  console.log("jquery loaded");

  $("form").on("submit", function(event) {
    event.preventDefault();
    var equation = {};
    equation.value1 = $("#value1").val(); //convert string to number
    //add button selection
    equation.value2 = $("#value2").val();//convert string to number

    $.ajax({
      type: "POST",
      url: "/equationSolver",
      data: equation,
      success: function(response) {
        console.log("New equation received!");
      }
    }); //ends ajax request

  });//ends event listener/handler

}); //document ready ends
