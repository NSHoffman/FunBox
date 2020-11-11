import React, { useState } from "react";
import { GeocodeAPI } from "../api/Google";
import { MapPanel } from "./MapPanel";
import { DestPanel } from "./DestPanel";
import { Error } from "./Error";
import { v4 as uuidv4 } from "uuid";
import "./index.css";


export const App = () => 
{
  // State Management
  const [ destinations, setDestinations ] = useState([]);
  const [ input, setInput ] = useState("");
  const [ error, setError ] = useState({ title: "", message: "" });

  // API
  const addDestination = async () => 
  {
    try {
      const coords = await GeocodeAPI.getCoordsFromAddress(input);
      setDestinations([
        ...destinations, 
        { 
          id: uuidv4(),
          text: coords.text,
          lat: coords.lat,
          lng: coords.lng,
        }]
      );
    }

    catch (e) {
      toggleError("По вашему запросу ничего не найдено :(", "Пожалуйста, убедитесь в корректности введенного адреса!");
    }
  };

  const removeDestination = id => setDestinations(
    destinations.filter(dest => dest.id !== id)
  );

  const replaceDestination = newDest => {
    setDestinations(destinations.map(oldDest => {
      return oldDest.id === newDest.id ? newDest : oldDest; 
    }));
  };

  const findDestination = id => destinations.findIndex(dest => dest.id === id);

  const reorderDestinations = (dragId, toIndex) => 
  {    
    const dragIndex = findDestination(dragId);
    const reordered = [...destinations];
    reordered.splice(dragIndex, 1);
    reordered.splice(
      toIndex, 0, 
      destinations[dragIndex]
    );

    setDestinations(reordered);
  };

  const notifyOnInputChange = newValue => setInput(newValue);

  const toggleError = (title, message) => {
    setError({ title, message });
  };

  // Render  
  return (
    <main className="App" data-testid="app">
      <DestPanel
        destinations={destinations}
        add={addDestination} 
        remove={removeDestination}
        find={findDestination}
        reorder={reorderDestinations}
        notifyOnChange={notifyOnInputChange} 
      />
      <MapPanel destinations={destinations} replace={replaceDestination} toggleError={toggleError} />
      <Error title={error.title} message={error.message} isShown={!!error.message} toggle={toggleError} />
    </main>
  );
}


export const DraggableTypes = {
  DESTINATION: 'destination',
};
