window.onclick = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById("location").innerHTML =
                "<h2>Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude + "</h2>";
        });
        document.getElementById("accuracy").innerHTML = "sdasdasd"
    } else {
        document.getElementById("location").innerHTML = "<h1>Your" +
            " browser does not support geolocation.</h1>"
    }
};