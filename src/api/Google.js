import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import {
  GoogleMap, 
  InfoWindow, 
  Marker,
  Polyline, 
  withGoogleMap, 
  withScriptjs 
} from "react-google-maps";

// Google geocoding functionality
export const GeocodeAPI = ((apikey) => 
{
  apikey && Geocode.setApiKey(apikey);
  Geocode.setLanguage("ru");
  Geocode.setRegion("ru");

  return {
    async getClientGeolocation() {
      const { coords } = await new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(
          pos => res(pos), 
          err => rej(err)
        );
      });

      return coords;
    },

    async getAddressFromCoords(lat, lng) {
      try {
        const res = await Geocode.fromLatLng(lat, lng);
        return res.results[0].formatted_address;
      }
      catch (e) {
        throw new Error(`Couldn't retrieve the address using external Google API: ${e}`);
      }

    },
    
    async getCoordsFromAddress(address) {
      try {
        const res = await Geocode.fromAddress(address);
        return {
          lat: res.results[0].geometry.location.lat,
          lng: res.results[0].geometry.location.lng,
          text: res.results[0].formatted_address,
        };
      }
      catch (e) {
        throw new Error(`Couldn't retrieve the coordinates using external Google API: ${e}`);
      }
    },
  };
})("AIzaSyAHP1Twa5SARLW8B01KUEOb5jIiaubsIuE");


// Google Maps component
export const CustomGoogleMap = withScriptjs(withGoogleMap(
  ({ initial, destinations, replace }) => {

    // State and Event Management
    const [center, setCenter] = useState(initial);
    useEffect(() => {
      if (destinations.length) {
        setCenter(destinations[destinations.length-1]);
      }
    }, [destinations]);

    const [activeTip, setActiveTip] = useState(null);
    const showTip = dest => setActiveTip(dest);
    const hideTip = () => setActiveTip(null);

    const onMarkerMove = async (pos, id) => {
      const coords = { lat: pos.latLng.lat(), lng: pos.latLng.lng() };
      const address = await GeocodeAPI.getAddressFromCoords(
        coords.lat, coords.lng
      );

      const newDest = {
        id,
        text: address,
        lat: coords.lat,
        lng: coords.lng,
      };

      replace(newDest);
    };

    // Render
    return (
      <GoogleMap
        defaultZoom={12}
        center={center}
      >
        {
          destinations.map(dest => (
            <Marker key={dest.id} draggable
              position={{ lat: dest.lat, lng: dest.lng }}
              onClick={() => showTip(dest)}
              onDragEnd={(pos) => onMarkerMove(pos, dest.id)}
            >
              { activeTip === dest ? <InfoWindow onCloseClick={hideTip}>
                <span>{ dest.text }</span>
              </InfoWindow> : null}
            </Marker>
          ))
        }
        <Polyline path={destinations} />
      </GoogleMap>
    );
  }
));