import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ address }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCx074aQXhsTd6y8m35--ufVMx30r5hDQk",
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 12,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          setMap(newMap);

          const circleOptions = {
            strokeColor: "#002b5c",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#00bfff",
            fillOpacity: 0.35,
            map: newMap,
            center: results[0].geometry.location,
            radius: 1609.34, // 1.5 miles in meters
          };
          const circle = new window.google.maps.Circle(circleOptions);
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    });
  }, [address]);

  return <div id="map" style={{ height: "300px", borderRadius: "25px" }} />;
};

export default GoogleMap;
