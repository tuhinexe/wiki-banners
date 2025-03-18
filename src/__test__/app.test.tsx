import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("renders the app", () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i);
    expect(linkElement).toBeDefined();
  });
});
