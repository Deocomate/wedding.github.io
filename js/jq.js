$(document).ready(function () {
    let data = {
        "message": "Chuc 2 nguoi hanh phuc"
    }
    $.ajax({
        type: "post",
        url: "https://dulichghepdoan.net/wedding/post",
        data: data,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
});