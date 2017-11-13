window.onload = function () {
    if (navigator.geolocation) {
        var center;
        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById("location").innerHTML =
                "<h2>Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude + "</h2>";
        });
        document.getElementById("accuracy").innerHTML = "<p>Succeed</p>"



    } else {
        document.getElementById("location").innerHTML = "<h1>Your" +
            " browser does not support geolocation.</h1>";
        document.getElementById("accuracy").innerHTML = "<p>Failed</p>"
    }
};