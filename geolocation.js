window.onload = function () {
    if (navigator.geolocation) {
        var center;
        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById("location").innerHTML =
                "<h2>Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude + "</h2>";
            center = {lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude)};
            var map = new google.maps.Map(document.getElementById('accuracy'), {
                zoom: 14,
                center: center
            });
        });

    } else {
        document.getElementById("location").innerHTML = "<h1>Your" +
            " browser does not support geolocation.</h1>";
        document.getElementById("accuracy").innerHTML = "Failed"
    }
};