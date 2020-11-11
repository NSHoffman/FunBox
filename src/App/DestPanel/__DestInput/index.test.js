import React from "react";
import { render, cleanup, fireEvent } from "../../../api/test-utils";
import { screen, waitFor } from "@testing-library/dom";
import { DestInput } from "./";


describe("Search Input", () => {
  afterEach(() => cleanup());

  const add = jest.fn();
  const notify = jest.fn();

  it("Is initially empty", () => {
    render(<DestInput add={add} notifyOnChange={notify} />);
    const input = screen.queryByPlaceholderText("Введите адрес");

    expect(input.value).toBe("");
  });

  it("Reacts to user's input", () => {
    render(<DestInput add={add} notifyOnChange={notify} />);
    const input = screen.queryByPlaceholderText("Введите адрес");

    fireEvent.input(input, { target: { value: "aaa" }});
    expect(input.value).toBe("aaa");
  });

  it("Clears on submission", () => {
    render(<DestInput add={add} notifyOnChange={notify} />);
    const input = screen.queryByPlaceholderText("Введите адрес");

    fireEvent.input(input, { target: { value: "aaa" }});
    expect(input.value).toBe("aaa");

    fireEvent.keyDown(input, { key: "Enter", code: "Enter", keyCode: 13 });
    expect(input.value).toBe("");
  });
});