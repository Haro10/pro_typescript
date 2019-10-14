"use strict";
exports.__esModule = true;
var CustomMap = /** @class */ (function () {
    function CustomMap(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    CustomMap.prototype.addMaker = function (mappable) {
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', function () {
            var infowindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infowindow.open(this.googleMap, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
