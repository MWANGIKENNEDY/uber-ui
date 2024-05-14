"use client";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { InfoCardType } from "@/utils/types";
import { getCenter } from "geolib";

const MapComponent = ({ infoCardData }: { infoCardData: InfoCardType[] }) => {
  //transform search results object in long lat props
  const coordinates = infoCardData.map((infoData: InfoCardType) => ({
    longitude: infoData.long,
    latitude: infoData.lat,
  }));

  console.log(coordinates);

  const center = getCenter(coordinates) as
    | { longitude: number; latitude: number }
    | false;

    const [popupInfo, setPopupInfo] = useState<InfoCardType | null>(null);

    const handleMarkerClick = (infoData: InfoCardType) => {
      // Set the clicked marker's info to display in the popup
      setPopupInfo(infoData);
    };

  if (center) {
    return (
      <Map
        initialViewState={{
          latitude: center.latitude,
          longitude: center.longitude,
          zoom: 12,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/kkiiru/clvz49fau01xw01o0h70ch5db"
        mapboxAccessToken={process.env.mapbox_key}
      >
        {coordinates.map((coordinate, index) => (
          <div key={index} className=" bg-yellow-500 animate-bounce">
            <Marker
              longitude={coordinate.longitude}
              latitude={coordinate.latitude}
              color="red"
              onClick={() => handleMarkerClick(infoCardData[index])}
            >
           {popupInfo && (
            <Popup
              latitude={popupInfo.lat}
              longitude={popupInfo.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setPopupInfo(null)}
            >
              {/* Popup content */}
              <div>
                <h3>"ken"</h3>
                
              </div>
            </Popup>
          )}
            </Marker>
          </div>
        ))}
      </Map>
    );
  }
};

export default MapComponent;
