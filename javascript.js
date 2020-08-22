$(document).ready(function () {

    function hourUpdate() {
        var currentHour = moment().hours(); // Number
        console.log(currentHour);
        $(".time-block").each(function () {
            var number = parseInt($(this).attr("id"));
            if (number < currentHour) {
                $(this).addClass("past")
            } else if (number === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    // refreshes and checks time every 5 seconds 
    var timeChecker = setInterval(hourUpdate, 5000);

    // looks for date - saves texts
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    $(".saveBtn").on("click", function () {
        var saveText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(time, saveText);
        localStorage.setItem(time, saveText);


    }) // saves storage after button is clicked
    $("#9 .description").val(localStorage.getItem("9"));

    $("#10 .description").val(localStorage.getItem("10"));
});

        