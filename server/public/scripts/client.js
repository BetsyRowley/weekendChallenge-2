$(document).ready(function() {
  console.log("jquery loaded");

  var operator = "";

  $("form").on("click", "#adds", function(){
        operator = "+";
        return operator;
        });//ends on click for adds
  $("form").on("click", "#subtracts", function(){
      operator = "-";
      return operator;
    });
  $("form").on("click", "#multiplies", function(){
    operator = "*";
    return operator;
  });
  $("form").on("click", "#divides", function(){
      operator = "/";
      return operator;
    });

  $("form").on("submit", function(event) {
    event.preventDefault();
    var equation = {};
    equation.value1 = $("#value1").val(); //convert string to number
    equation.value2 = $("#value2").val();//convert string to number
    equation.operation = operator;

    $.ajax({
      type: "POST",
      url: "/equationSolver",
      data: equation,
      success: function(response) {
        console.log("New equation received!");
        // console.log(equation);
        $("#output").append("<p>" + response + "</p>");
        }
    }); //ends ajax request

  });//ends event listener/handler

  //clears form and empties result div
  $("form").on("click","#clear", function() {
    $("#output").empty();
  });

}); //document ready ends
