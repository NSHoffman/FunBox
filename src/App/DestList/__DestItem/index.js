import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { DraggableTypes } from "../..";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export const DestItem = ({ item, remove, reorder, find }) => 
{
  // Drag'n'Drop functionality
  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableTypes.DESTINATION, id: item.id, originalIndex: find(item.id) },

    collect: (monitor) => 
    ({
      isDragging: monitor.isDragging(),
    }),

    end: (_, monitor) => 
    {
      const { id: dragId, originalIndex } = monitor.getItem();
      if (!monitor.didDrop()) {
        reorder(dragId, originalIndex);
      }
    },
  });

  const [, drop] = useDrop({
    accept: DraggableTypes.DESTINATION,
    canDrop: () => false,
    hover: (dragItem) => {
      if (dragItem.id !== item.id) {
        reorder(dragItem.id, find(item.id));
      }
    },
  });

  // CSS Conditional Classes
  const cssIsDragging = isDragging ? "DestList__Item_isDragging" : "";
  
  // Render
  return (
    <li data-testid="destination-item" className={`DestList__Item ${cssIsDragging}`} ref={node => drag(drop(node))}>
      <span className="DestList__Text">{ item.text }</span>
      <button data-testid="delete-button" className="DestList__DeleteButton"
        type="button" 
        onClick={() => remove(item.id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
}
