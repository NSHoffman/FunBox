import React, { useState, useEffect } from "react";

export const GeocodeAPI = {
  getClientGeolocation: async () => ({ latitude: 0, longitude: 0 }),
  getAddressFromCoords: async (lat, lng) => "formatted-address",
  getCoordsFromAddress: async (address) => {
    if (!address) throw new Error();
    return { lat: 10, lng: 10, text: "formatted-address" };
  },
};

export const CustomGoogleMap = ({ initial, destinations }) => 
{
  const [center, setCenter] = useState({ lat: initial.lat, lng: initial.lng });
  const [activeTip, setActiveTip] = useState(null);

  const showTip = dest => setActiveTip(dest);
  const hideTip = () => setActiveTip(null);

  useEffect(() => {
    if (destinations.length) {
      setCenter(destinations[destinations.length-1]);
    }
  }, [destinations]);

  return <section data-testid="mock-map" className="MapPanel App__MapPanel">
    <span data-testid="center">{`${center.lat} ${center.lng}`}</span>
    { 
      destinations.map(dest => 
        <div key={dest.id} 
          data-testid="mock-marker"
          onClick={() => showTip(dest)}
        >
          {`${dest.id} ${dest.text} ${dest.lat} ${dest.lng}`}
          { activeTip === dest ? <span data-testid="active-tip">{ dest.text }</span> : null }
        </div>
      ) 
    }
  </section>
};