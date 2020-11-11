import React from "react";
import { useDrop } from "react-dnd";
import { DraggableTypes } from "..";
import { DestItem } from "./__DestItem";
import "./index.css";

export const DestList = ({ destinations, remove, reorder, find }) => 
{
  const [, drop] = useDrop({ accept: DraggableTypes.DESTINATION });

  return (
    <ul className="DestList" ref={drop}>
    {
      destinations.map(dest => 
        <DestItem key={dest.id} item={dest} remove={remove} reorder={reorder} find={find}
      />)
    }
    </ul>
  );
}
