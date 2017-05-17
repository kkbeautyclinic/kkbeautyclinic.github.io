var map = (function() {
    return {
        initialize: function () {
            var mapCanvas = document.getElementById('map-canvas');
            var position = new google.maps.LatLng(54.861265, -6.327227),
                    mapOptions = {
                    scrollwheel: false,
                    center: position,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                { "hue": "#74468c" },
                                { "lightness": -3 },
                                { "weight": 1.3 }
                            ]
                        }
                    ],
                    streetViewControl: false,
                    mapTypeControl: false
                    },
                map = new google.maps.Map(mapCanvas, mapOptions),
                marker = new google.maps.Marker({
                    position: position,
                    map: map
                });
        }
    };

}());