import React from "react";
import { render, cleanup, fireEvent } from "../../api/test-utils";
import { screen, waitFor } from "@testing-library/dom";
import { MapPanel } from "./";

jest.mock("../../api/Google");

describe("Google Map Panel", () => {
  afterEach(() => cleanup());

  const replace = jest.fn();
  const toggleError = jest.fn();
  const destinations = [
    { id: "111", lat: 5, lng: 5, text: "first" },
    { id: "222", lat: 10, lng: 10, text: "second" },
    { id: "333", lat: 20, lng: 20, text: "third" },
  ];

  it("Renders Google Map with initial center values", async () => {
    const destinations = [];

    render(<MapPanel destinations={destinations} replace={replace} toggleError={toggleError} />);

    await waitFor(() => {
      const map = screen.queryByTestId("mock-map");
      expect(map).not.toBeNull();
      
      const center = screen.queryByTestId("center").textContent;
      const initalCoords = center.split(" ");
      const [lat, lng] = initalCoords;
      expect([+lat, +lng]).toEqual([0, 0]);
    });
  });

  
  it("Renders markers with respect to corresponding dest-items", async () => {
    render(<MapPanel destinations={destinations} replace={replace} toggleError={toggleError} />);
    
    await waitFor(() => {
      const markerElements = screen.queryAllByTestId("mock-marker");
      const markers = markerElements.map(mEl => {
        const deserialized = mEl.textContent.split(" ");
        return {
          id: deserialized[0],
          text: deserialized[1],
          lat: +deserialized[2],
          lng: +deserialized[3],
        };
      });
      
      expect(markers).toEqual(destinations);
    });
  });

  it("Renders map centered according to the last added dest-item", async () => {
    render(<MapPanel destinations={destinations} replace={replace} toggleError={toggleError} />);
  
    await waitFor(() => {
      const markerElements = screen.queryAllByTestId("mock-marker");
      const lastMarker = markerElements[markerElements.length - 1];
      const deserialized = lastMarker.textContent.split(" ");
      const coords = [+deserialized[2], +deserialized[3]];
      
      const center = screen.queryByTestId("center").textContent;
      const initalCoords = center.split(" ");
      const [lat, lng] = initalCoords;
      expect([+lat, +lng]).toEqual(coords);
    });
  });

  it("Popups a tip above the last clicked marker", async () => {
    render(<MapPanel destinations={destinations} replace={replace} toggleError={toggleError} />);
    let tips;

    await waitFor(() => {
      tips = screen.queryAllByTestId("active-tip");
      expect(tips).toHaveLength(0);
    });

    const markerElements = screen.queryAllByTestId("mock-marker");
    const firstMarker = markerElements[0];
    const secondMarker = markerElements[1];

    fireEvent.click(firstMarker);
    tips = screen.queryAllByTestId("active-tip");
    expect(tips[0].textContent).toBe(destinations[0].text);

    fireEvent.click(secondMarker);
    tips = screen.queryAllByTestId("active-tip");
    expect(tips).toHaveLength(1);
    expect(tips[0].textContent).toBe(destinations[1].text);
  });
});
