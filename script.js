$(document).ready(function () {

    // I want something to happen when I click on the buttons.
    // specifically, the button has to add a class to the image that makes it change color.

    $(".colorizer").on("click", function () {
        console.log("clicked a button " + $(this).val());
        if ($(this).val() === "green") {
            $("#original-bow").attr("id", "green-button");
        }
        else if ($(this).val() === "blue") {
            $("#original-bow").attr("id", "blue-button");
        }
        else if ($(this).val() === "yellow") {
            $("#original-bow").attr("id", "yellow-button");
        }
    })











});