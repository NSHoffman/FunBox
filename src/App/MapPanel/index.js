import React, { useState, useEffect, useCallback } from "react";
import { CustomGoogleMap, GeocodeAPI } from "../../api/Google";
import "./index.css";


export const MapPanel = ({ destinations, replace, toggleError }) => {
  // Hook Management
  const [loading, setLoading] = useState(true);
  const [initialCoords, setInitialCoords] = useState({ lat: 0, lng: 0 });

  const getInitialCoords = useCallback(
    async () => {
      try {
        const coords = await GeocodeAPI.getClientGeolocation();
        setInitialCoords({ lat: coords.latitude, lng: coords.longitude });
        setLoading(false);
      }
      catch (e) {
        toggleError(
          "Не удалось получить данные о вашем местоположении :(",
          "Пожалуйста, разрешите определение местоположения на этой странице"
        );
      }
    }, [],
  );

  useEffect(() => {
    getInitialCoords();
  }, []);

  // Render

  if (loading) {
    return <section className="App__MapPanel MapPanel_isLoading" />;
  }

  return <CustomGoogleMap
    destinations={destinations}
    initial={initialCoords}
    replace={replace}
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAHP1Twa5SARLW8B01KUEOb5jIiaubsIuE&region=RU&language=ru"
    containerElement={<section className="MapPanel App__MapPanel" />}
    loadingElement={<div style={{ height: "100%" }}/>}
    mapElement={<div style={{ height: "100%" }}/>}
  />
}
