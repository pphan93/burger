
$(document).ready(function () {
    // Capture the form inputs
    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("hello")
        // Form validation
        function validateForm() {
            var isValid = true;
            if ($("#name").val() === "") {
                isValid = false;
            }
            return isValid;
        }

        // If all required fields are filled
        if (validateForm()) {
            // Create an object for the user"s data
            var userData = {
                name: $("#name").val(),
            };

            // AJAX post the data to the burger API.
            $.post("/api/burger", userData, function (data) {
                console.log(data)
                location.reload();

            });
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });

    $(".devourThis").on("click", function (event) {
        event.preventDefault();
        console.log("devour")
        // Form validation
        // Create an object for the user"s data
        var id = $(this).attr('data-id')

        console.log(id)

        // AJAX post the data to the friends API.
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("updated");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});