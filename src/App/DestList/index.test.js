import React from "react";
import { render, cleanup, fireEvent } from "../../api/test-utils";
import { screen } from "@testing-library/dom";
import { DestList } from "./";


describe("Destinations List", () => {
  afterEach(() => cleanup());

  it("Initially renders empty list", () => {
    const find = jest.fn();
    const remove = jest.fn();
    const reorder = jest.fn();

    render(<DestList destinations={[]} find={find} remove={remove} reorder={reorder} />);
    const items = screen.queryAllByTestId("destination-item");

    expect(items).toHaveLength(0);
  });

  it("Renders destination items when those are provided", () => {
    let destinations = [
      { id: "1", lat: 0, lng: 0, text: "text" },
      { id: "2", lat: 0, lng: 0, text: "text" },
    ];

    const find = jest.fn();
    const reorder = jest.fn();
    const remove = jest.fn();

    render(<DestList destinations={destinations} find={find} remove={remove} reorder={reorder} />);
    const items = screen.queryAllByTestId("destination-item");
    expect(items).toHaveLength(2);
  });

  it("Deletes items when the X button is clicked", () => {
    const destinations = [
      { id: "1", lat: 0, lng: 0, text: "text" },
      { id: "2", lat: 0, lng: 0, text: "text" },
    ];

    const find = jest.fn();
    const reorder = jest.fn();
    const remove = jest.fn(() => {
      destinations.splice(0,1);
    });

    const { rerender } = render(<DestList destinations={destinations} find={find} remove={remove} reorder={reorder} />);
    const itemsBefore = screen.queryAllByTestId("destination-item");
    expect(itemsBefore).toHaveLength(2);

    const xbutton = screen.queryAllByTestId("delete-button")[0];
    fireEvent.click(xbutton);

    rerender(<DestList destinations={destinations} find={find} remove={remove} reorder={reorder} />);
    const itemsAfter = screen.queryAllByTestId("destination-item");

    expect(itemsAfter).toHaveLength(1);
  });

  it("Reorders items on drag-and-drop", () => {
    const destinations = [
      { id: "1", lat: 0, lng: 0, text: "text1" },
      { id: "2", lat: 0, lng: 0, text: "text2" },
    ];

    const remove = jest.fn();
    const find = jest.fn();
    const reorder = jest.fn(() => {
      const drag = destinations[0];
      destinations.splice(0, 1);
      destinations.splice(1, 0, drag);
    });

    const { rerender } = render(<DestList destinations={destinations} find={find} remove={remove} reorder={reorder} />);
    const itemsBefore = screen.queryAllByTestId("destination-item");
    const firstTextBefore = itemsBefore[0].firstElementChild.textContent;
    const secondTextBefore = itemsBefore[1].firstElementChild.textContent;

    expect([firstTextBefore, secondTextBefore]).toEqual(["text1", "text2"]);

    fireEvent.dragStart(itemsBefore[0]);
    fireEvent.dragEnter(itemsBefore[1]);
    fireEvent.dragOver(itemsBefore[1]);
    fireEvent.drop(itemsBefore[1]);

    rerender(<DestList destinations={destinations} find={find} remove={remove} reorder={reorder} />);
    const itemsAfter = screen.queryAllByTestId("destination-item");
    const firstTextAfter = itemsAfter[0].firstElementChild.textContent;
    const secondTextAfter = itemsAfter[1].firstElementChild.textContent;

    expect([firstTextAfter, secondTextAfter]).toEqual(["text2", "text1"]);
  });
});