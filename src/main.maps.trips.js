
export default function mapTrips(_baseUrl, moment, _, axios, list ) {
  "use strict";

  var map;
  var icons;
  var polyPoints;
  var markers;
  var options;
  var infoWindows
  
  // Constants:
  var fillColor = "#0000FF"; // blue fill
  var lineColor = "#FF0000"; // Red line
  var opacity = .7;
  var lineWeight = 4;
  
  
  var ICON_START = 7;
  var ICON_END = 8;
  

  debugger;

this.initializeTrips = function(list) {

    initializeTrips(list);
}


function initializeTrips(positionList) {
        var tripPoints = new Array();
        //infoWindows = new Array();
        //tripMarkers = new Array();
        createTripIcons();

        var scrollItems = [];
        var EndArray = 0;

        for (var i = 0; i <= positionList.length - 1; i++) {
            var lat = positionList[i].Latitude;
            var lon = positionList[i].Longitude;
            if ((lat == 0) || (lon == 0)) {
                // ignore this point do not push to array  
            }
            else {
                tripPoints.push(new google.maps.LatLng(lat, lon));
            }
            EndArray = i;
        }

        var StartTime = positionList[0].EventDate;
        var EndTime = positionList[EndArray].EventDate


        var myOptions =
            {
                zoom: 12,
                //center: tripPoints[0] ,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);


        plotMarker(tripPoints[0], icons[7], "Trip Start " + StartTime);
        plotMarker(tripPoints[EndArray], icons[8], "Trip End " + EndTime);


        map.setCenter(tripPoints[0], 2);
        drawCoordinatesOnPoints(map, tripPoints);
        zoomCoOrdinatesOnPoints(map, tripPoints);

        };

    // Initialise an array of Icons
    function createTripIcons() {
        try {
            var icoSize = new google.maps.Size(48, 48);
            var icoAnchor = new google.maps.Point(6, 20);
            var icoOrigin = new google.maps.Point(0, 0);
             icons = new Array();


            // Violations
            icons[0]   = new google.maps.MarkerImage(_baseUrl + '/img/exclamation.png', icoSize, icoOrigin, icoAnchor);
            icons[1]   = new google.maps.MarkerImage(_baseUrl + '/img/exclamation.png', icoSize, icoOrigin, icoAnchor);
            icons[2]   = new google.maps.MarkerImage(_baseUrl + '/img/resultset_last.png', icoSize, icoOrigin, icoAnchor);
            icons[3]   = new google.maps.MarkerImage(_baseUrl + '/img/resultset_next.png', icoSize, icoOrigin, icoAnchor);
            icons[4]   = new google.maps.MarkerImage(_baseUrl + '/img/left.png', icoSize, icoOrigin, icoAnchor);
            icons[5]   = new google.maps.MarkerImage(_baseUrl + '/img/right.png', icoSize, icoOrigin, icoAnchor);
            icons[6]   = new google.maps.MarkerImage(_baseUrl + '/img/bump.png', icoSize, icoOrigin, icoAnchor);
            icons[7]   = new google.maps.MarkerImage(_baseUrl + '/img/1dot1c.gif', icoSize, icoOrigin, icoAnchor);
            icons[8]   = new google.maps.MarkerImage(_baseUrl + '/img/1dot5c.gif', icoSize, icoOrigin, icoAnchor);
            icons[9]   = new google.maps.MarkerImage(_baseUrl + '/img/accident.png', icoSize, icoOrigin, icoAnchor);
            icons[10]  = new google.maps.MarkerImage(_baseUrl + '/img/lock.png', icoSize, icoOrigin, icoAnchor);
            icons[11]  = new google.maps.MarkerImage(_baseUrl + '/img/lock.png', icoSize, icoOrigin, icoAnchor);
            icons[12]  = new google.maps.MarkerImage(_baseUrl + '/img/lock.png', icoSize, icoOrigin, icoAnchor);
            icons[13]  = new google.maps.MarkerImage(_baseUrl + '/img/rpm.png', icoSize, icoOrigin, icoAnchor);
            icons[14]  = new google.maps.MarkerImage(_baseUrl + '/img/speed.png', icoSize, icoOrigin, icoAnchor);
            icons[15]  = new google.maps.MarkerImage(_baseUrl + '/img/engine.gif', icoSize, icoOrigin, icoAnchor);
            icons[16]  = new google.maps.MarkerImage(_baseUrl + '/img/greenBall.gif', icoSize, icoOrigin, icoAnchor);
            // Incidents                             _baseUrl + 
            //---------------------------------------_baseUrl + --------------------------------------------------------
            icons[101] = new google.maps.MarkerImage(_baseUrl + '/img/exclamation.png', icoSize, icoOrigin, icoAnchor);//Alarm Triggered
            icons[102] = new google.maps.MarkerImage(_baseUrl + '/img/exclamation.png', icoSize, icoOrigin, icoAnchor);//External battery low
            icons[103] = new google.maps.MarkerImage(_baseUrl + '/img/exclamation.png', icoSize, icoOrigin, icoAnchor);//External battery disconnected
            icons[104] = new google.maps.MarkerImage(_baseUrl + '/img/exclamation.png', icoSize, icoOrigin, icoAnchor);//Internal battery low

        }
        catch (ex) {
            alert(ex);
        }
    }        


    // plot markers
    function plotMarker(posLatLng, iconImage, titleText) {

        // Shapes define the clickable region of the icon.
        // The type defines an HTML &lt;area&gt; element 'poly' which
        // traces out a polygon as a series of X,Y points. The final
        // coordinate closes the poly by connecting to the first
        // coordinate.
        var shape = {
            coord: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
        };

        var marker = new google.maps.Marker({
            position: posLatLng,
            map: map,
            //shadow: shadow,
            icon: iconImage,
            shape: shape,
            title: titleText,
            zIndex: 50
            //zIndex: beach[3]
        });
    }


    function drawCoordinatesOnPoints(Map, Points) {
        try {
            var polyShape = new google.maps.Polyline({
                path: Points,
                strokeColor: lineColor,
                strokeWeight: lineWeight,
                strokeOpacity: opacity,
                zIndex: 500
            });
            polyShape.setMap(Map);
        }
        catch (ex) {
            alert(ex)
        }
    }    



// zooms to the bounds in the global variable: polyPoints
function zoomCoOrdinatesOnPoints(Map, Points) {
    try {

        //  Create a new viewpoint bound
        var bounds = new google.maps.LatLngBounds();
        //  Go through each...
        var PointsLen = Points.length;
        for (var i = 0; i < PointsLen; i++) {
            //  And increase the bounds to take this point
            bounds.extend(Points[i]);
        }
        //  Fit these bounds to the map
        Map.fitBounds(bounds);

    }
    catch (ex) {
        alert(ex);
    }
}    


}