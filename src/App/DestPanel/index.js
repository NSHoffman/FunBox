import React from "react";
import { DestList } from "../DestList";
import { DestInput } from "./__DestInput";

import "./index.css";


export const DestPanel = ({ destinations, add, remove, reorder, find, notifyOnChange }) => {  
  
  return (
    <section className="DestPanel App__DestPanel">
      <DestInput
        add={add} 
        notifyOnChange={notifyOnChange} 
      />
      <DestList 
        destinations={destinations}
        remove={remove}
        reorder={reorder}
        find={find}
      />
    </section>
  );
}
