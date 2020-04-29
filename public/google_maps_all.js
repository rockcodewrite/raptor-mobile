//--------------------------------------------------------------------------------------------------------
//  Versoin 0.0.2
//       added ability to plot fixed assets
//  Version  0.0.1
//--------------------------------------------------------------------------------------------------------

function google_maps_all() {
  "use strict";

  var TIME_AMBER_MOVING = 30; //mins
  var TIME_AMBER_STATIONARY = 30 * 60; //mins

  var map;
  var icons;
  var polyPoints;
  var markers;
  var options;
  var infoWindows;
  var lookup;

  var icoOrigin;
  var icoAnchor;
  var icoSize;

  var fillColor = "#0000FF"; // blue fill
  var lineColor = "#FF0000"; // Red line
  var opacity = 0.7;
  var lineWeight = 4;

  var ICON_START = 7;
  var ICON_END = 8;

  var _ID;
  var _UnitID;
  var _mapByUnitID;
  var _AssetsArray;

  polyPoints = new Array();
  infoWindows = new Array();
  markers = new Array();
  lookup = new Array();

  this.initialise = function(unitID) {
    //debugger;
    var myOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    createIcons();
    getVehicles(panTo, unitID);
  };

  this.displayByUnitID = function(UnitID) {
    displayByUnitID(UnitID);
  };

  function displayByUnitID(UnitID) {
    try {
      if (typeof UnitID !== "undefined") {
        closeInfoWindows();
        //debugger;
        var iSelect = _mapByUnitID[UnitID].id;
        infoWindows[iSelect].open(map, markers[iSelect]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function getVehicles(callback, param1) {
    var url = _baseUrl + "/api5/V5_view_VehiclePositions_";
    return $.ajax({
      url: url,
      type: "GET",
      success: function(result) {
        var assets = result.$values;
        //debugger
        _AssetsArray = _.indexBy(assets, "UnitID");
        plotVehicles(result.$values);

        if (typeof callback !== "undefined") {
          callback(param1);
        }
        //callback(param1);
      }
    });
  }

  function panTo(unitID) {
    try {
      if (typeof unitID !== "undefined") {
        closeInfoWindows();
        var asset = _AssetsArray[unitID];
        var lat = checkNull(asset.Latitude, "dd");
        var lon = checkNull(asset.Longitude, "dd");
        var latlng = new google.maps.LatLng(lat, lon);
        map.setZoom(18);
        map.panTo(latlng);
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Initialise an array of Icons
  function createIcons() {
    //debugger
    try {
      icoSize = new google.maps.Size(48, 48);
      icoAnchor = new google.maps.Point(6, 20);
      icoOrigin = new google.maps.Point(0, 0);

      icons = new Array();
      icons[0] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/blueCar2.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );
      icons[1] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/redCar2.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );
      icons[2] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/amberCar3.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );
      icons[3] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/magentaCar2.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );

      icons[4] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/accesdenied.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );
      icons[5] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/accesdenied2.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );

      icons[6] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/home.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );
      icons[7] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/home-red.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );

      icons[8] = new google.maps.MarkerImage(
        _baseUrl + "/img/map/factory.png",
        icoSize,
        icoOrigin,
        icoAnchor
      );
    } catch (ex) {
      alert(ex);
    }
  }

  // plot markers and create an array
  function plotMarkerArray(i, posLatLng, iconImage, titleText, markerType) {
    // Shapes define the clickable region of the icon.
    // The type defines an HTML &lt;area&gt; element 'poly' which
    // traces out a polygon as a series of X,Y points. The final
    // coordinate closes the poly by connecting to the first
    // coordinate.
    var shape = {
      coord: [1, 1, 48, 48],
      type: "circle"
    };

    var zIndex = 50;

    if (markerType > 5) {
      zIndex = 150;
    }

    markers[i] = new google.maps.Marker({
      position: posLatLng,
      map: map,
      //shadow: shadow,
      icon: iconImage,
      shape: shape,
      title: titleText,
      zIndex: zIndex
    });
  }

  function UpdateTimeOut(LastUpdateTime, CurrTime, period) {
    if (moment(LastUpdateTime).add(period, "m") >= CurrTime) {
      return false;
    }
    return true;
  }

  function CheckForAmber(IgnStatus, LastUpdateTime) {
    switch (IgnStatus) {
      case 0:
        return UpdateTimeOut(LastUpdateTime, Date.now(), TIME_AMBER_STATIONARY);
      case 1:
        return UpdateTimeOut(LastUpdateTime, Date.now(), TIME_AMBER_STATIONARY);
      default:
        break;
    }
    return true;
  }

  function checkNull(val, type) {
    switch (type) {
      case "txt":
        if (val === "undefined") return "";
        else return val;
      case "date":
        if (val === "undefined") return "1970/01/01 00:00:01";
        else return moment(val).format("MMMM Do YYYY, h:mm:ss a");
      case "dd":
        if (val === "undefined" || val === null) return 0.0;
        else return val;
      case "i":
        if (val === "undefined") return -1;
        else return val;
      default:
        if (val === "undefined") return null;
        else return val;
    }
  }

  // close any information that may be open
  function closeInfoWindows() {
    var len = infoWindows.length;
    if (len > 0) {
      try {
        for (i = 0; i < len; i++) {
          infoWindows[i].close();
        }
      } catch (ex) {
        //alert(ex)
      }
    }
  }

  // draw all markers contained in array:markers
  function drawMarkers() {
    for (var i = 0; i < markers.length; i++) {
      //debugger
      map.addOverlay(markers[i]);
    }
  }

  // zooms to the bounds in the global variable: polyPoints
  function zoomToUnitID(unitID) {
    try {
      //  Create a new viewpoint bound
      var bounds = new google.maps.LatLngBounds();
      //  Go through each...
      for (var i = 0, LtLgLen = polyPoints.length; i < LtLgLen; i++) {
        //  And increase the bounds to take this point
        bounds.extend(polyPoints[i]);
      }
      //  Fit these bounds to the map
      map.fitBounds(bounds);
    } catch (ex) {
      alert(ex);
    }
  }

  // zooms to the bounds in the global variable: polyPoints
  function zoomCoOrdinates() {
    try {
      //  Create a new viewpoint bound
      var bounds = new google.maps.LatLngBounds();
      //  Go through each...
      for (var i = 0, LtLgLen = polyPoints.length; i < LtLgLen; i++) {
        //  And increase the bounds to take this point
        bounds.extend(polyPoints[i]);
      }
      //  Fit these bounds to the map
      map.fitBounds(bounds);
    } catch (ex) {
      alert(ex);
    }
  }

  function displaySelect(iSelect) {
    // so how
    try {
      if (iSelect >= 0) {
        if (iSelect < infoWindows.length) {
          closeInfoWindows();
          infoWindows[iSelect].open(map, markers[iSelect]);
        } else {
          alert("No position information for selected vehicle");
        }
      }
    } catch (ex) {
      alert(ex);
    }
  }

  function plotVehicles(vehicles) {
    polyPoints = new Array();
    infoWindows = new Array();
    markers = new Array();
    lookup = new Array();

    var infoDate = "";
    var inclon = 0.001;

    for (var i = 0; i < vehicles.length; i++) {
      var lat = 0.0;
      var lon = 0.0;
      var iconID = 0;
      var ignition = -1; // or null
      var violationTitle = "";
      var info = "";
      var infoSpeed = "";
      infoDate = "";
      var vehicleReg = "";
      var unitID = "";
      var driverName = "";
      var lastUpdateTime;
      var unitModel2ID = 0;

      unitModel2ID = checkNull(vehicles[i].UnitModel2ID, "i");
      lat = checkNull(vehicles[i].Latitude, "dd");
      lon = checkNull(vehicles[i].Longitude, "dd");
      ignition = checkNull(vehicles[i].IgnitionStatus, "i");
      infoDate = checkNull(vehicles[i].LastUpdateTime, "date");
      infoSpeed = checkNull(vehicles[i].Speed, "i");
      vehicleReg = checkNull(vehicles[i].RegNumber, "txt");
      driverName = checkNull(vehicles[i].DriverName, "txt");
      lastUpdateTime = checkNull(vehicles[i].LastUpdateTime);
      unitID = checkNull(vehicles[i].UnitID);

      info = "Registration : " + vehicleReg + " <br/>";
      info += "      Driver : " + driverName + " <br/>";
      info += "         Lat : " + lat + " Long: " + lon + "<br/>";
      info += "        Date : " + infoDate + " <br/>";
      info += "       Speed : " + infoSpeed + " <br/>";

      if (lat === 0.0 || lon === 0.0) {
        //  Plot all faulty lat and long at Raptors old headquarters
        lat = -25.9864;
        lon = 28.138 + inclon;
        inclon += 0.001;
        polyPoints.push(new google.maps.LatLng(lat, lon));

        info += "No GPS data!  <br/>";

        if (CheckForAmber(ignition, lastUpdateTime)) {
          iconID = 2;
        } else {
          iconID = 0;
        }

        if (unitModel2ID === 35) {
          if (ignition === 3) {
            iconID = 7;
          } else {
            iconID = 6; // greenhouse
          }
        }

        plotMarkerArray(i, polyPoints[i], icons[iconID], unitID, iconID);
        var obj = new google.maps.InfoWindow({ content: info });
        infoWindows.push(obj);
        var mark = markers[i];
        google.maps.event.addListener(mark, "click", function(val, val2) {
          closeInfoWindows();
          var id = this.title;
          if (_debug) {
            console.log(id);
          }
          displayByUnitID(id);
        });
        lookup.push({ id: i, val: vehicles[i].UnitID });
      } else {
        polyPoints.push(new google.maps.LatLng(lat, lon));
        info += "Violation:  " + violationTitle;

        if (ignition == 0) {
          iconID = 0;
          if (CheckForAmber(ignition, lastUpdateTime)) {
            iconID = 2;
          }
        } else {
          iconID = 1;
          if (CheckForAmber(ignition, lastUpdateTime)) {
            iconID = 2;
          }
        }

        if (unitModel2ID === 35) {
          if (ignition === 3) {
            iconID = 7;
          } else {
            iconID = 6; // greenhouse
          }
        }

        plotMarkerArray(i, polyPoints[i], icons[iconID], unitID, iconID);
        var obj = new google.maps.InfoWindow({ content: info });
        infoWindows.push(obj);
        var mark = markers[i];
        google.maps.event.addListener(mark, "click", function(val, val2) {
          closeInfoWindows();
          var id = this.title;
          if (_debug) {
            console.log(id);
          }
          displayByUnitID(id);
        });
        lookup.push({ id: i, val: vehicles[i].UnitID });
      }
      /// Log info for each if in debug mode.
      if (_debug) {
        console.log(info);
      }
    }

    map.setCenter(polyPoints[0], 2);
    zoomCoOrdinates();

    displaySelect(_ID - 1);

    _mapByUnitID = _.indexBy(lookup, "val");
  }
}
