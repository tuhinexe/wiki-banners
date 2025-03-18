import { render, screen } from "@testing-library/react";
import Banner from "../components/Banner";
import { describe, it, expect } from "vitest";

describe("Banner", () => {
  it("renders with default background color and no content", () => {
    const { container } = render(<Banner />);
    const banner = container.firstChild as HTMLElement;
    expect(banner).toHaveStyle("background-color: #3b82f6");
  });

  it("renders with provided text", () => {
    render(<Banner text="Welcome to Wiki" />);
    expect(screen.getByText("Welcome to Wiki")).toBeInTheDocument();
  });

  it("renders with custom background color", () => {
    const { container } = render(<Banner backgroundColor="#FF0000" />);
    const banner = container.firstChild as HTMLElement;
    expect(banner).toHaveStyle("background-color: #FF0000");
  });

  it("renders with image when imageUrl is provided", () => {
    const testImageUrl = "https://example.com/image.jpg";
    render(<Banner imageUrl={testImageUrl} />);
    const image = screen.getByAltText("Banner background");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", testImageUrl);
  });

  it("applies custom text color", () => {
    render(<Banner text="Colored Text" textColor="#FF0000" />);
    const textElement = screen.getByText("Colored Text");
    expect(textElement).toHaveStyle("color: #FF0000");
  });
});
