import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { render } from "@testing-library/react";

const withProviders = ({ children }) => {
  return (
    <DndProvider backend={ HTML5Backend }>
      { children }
    </DndProvider>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: withProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };