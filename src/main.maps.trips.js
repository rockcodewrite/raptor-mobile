
export default function mapTrips(_baseUrl, moment, _, axios, list ) {
  "use strict";


this.initializeTrips = function(list) {

    initializeTrips(list);
}


function initializeTrips(positionList) {
  tripPoints = new Array();
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



}