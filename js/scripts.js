$(document).ready(function () {

    $(".sidebar .part").hide().eq(0).show();
    var buttonClick = function (arrow) {
        $(".sidebar .part").hide();

        if (arrow == "expand") {
            $('.part.expand').show();
        } else if (arrow == "location") {
            $('.part.location').show();
            $('.part.location .button').addClass("active").siblings(".location-form").show();
        }
    }

    $('#expand-btn').click(function () {
        buttonClick("expand");
    });

    $('#location-btn').click(function () {
        buttonClick("location");
    });

    $('.check-box').live('click', function () {
        var checkStatus = $(this).find('input').prop("checked");
        if (checkStatus) {
            $(this).addClass('checked');
        } else {
            $(this).removeClass('checked');
        }
    });
});
