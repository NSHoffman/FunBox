import React from "react";
import { render, cleanup, fireEvent } from "../api/test-utils";
import { screen, waitFor } from "@testing-library/dom";
import { App } from "./";

// Mock Setup

jest.mock("./MapPanel", () => {
  return {
    MapPanel: () => <div />
  };
});

jest.mock("../api/Google");

// Test Suit

describe("Navigator App", () => 
{
  afterEach(() => cleanup());

  it("Is empty on start", () => {
    render(<App />);
    const destinations = screen.queryAllByTestId("destination-item");
    expect(destinations).toHaveLength(0);
  });

  it("Throws an error on empty value submission", async () => {
    render(<App />);

    const input = screen.queryByPlaceholderText("Введите адрес");
    fireEvent.keyDown(input, {
      keyCode: 13,
      code: "Enter",
      key: "Enter",
    });

    await waitFor(() => {
      const error = screen.queryByTestId("error-message");
      expect(error.textContent).toBe("Пожалуйста, убедитесь в корректности введенного адреса!");
    });
  });

  it("Adds new item on submission", async () => {
    render(<App />);

    const input = screen.queryByPlaceholderText("Введите адрес");
    fireEvent.change(input, { target: { value: "Moscow" }});
    fireEvent.keyDown(input, {
      keyCode: 13,
      code: "Enter",
      key: "Enter",
    });

    await waitFor(() => {
      const destinations = screen.queryAllByTestId("destination-item");
      expect(destinations).toHaveLength(1);
    });
  });
});

