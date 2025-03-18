import { render, screen, fireEvent } from "@testing-library/react";
import EditBannerForm from "../components/EditBannerForm";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

describe("EditBannerForm", () => {
  const mockProps = {
    text: "Test Banner",
    backgroundColor: "#3b82f6",
    imageUrl: "",
    textColor: "#ffffff",
    onTextColorChange: vi.fn(),
    onTextChange: vi.fn(),
    onBackgroundColorChange: vi.fn(),
    onImageUrlChange: vi.fn(),
  };

  it("renders all input fields correctly", () => {
    render(<EditBannerForm {...mockProps} />);

    expect(screen.getByLabelText(/banner text/i)).toBeDefined();
    expect(screen.getByLabelText(/background color/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/banner image/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/banner text/i)).toHaveValue("Test Banner");
    expect(screen.getByLabelText(/background color/i)).toHaveValue("#3b82f6");
  });

  it("calls change handlers when inputs change", () => {
    render(<EditBannerForm {...mockProps} />);

    const textInput = screen.getByLabelText(/banner text/i);
    fireEvent.change(textInput, { target: { value: "New Banner Text" } });
    expect(mockProps.onTextChange).toHaveBeenCalledWith("New Banner Text");

    const colorInput = screen.getByLabelText(/background color/i);
    fireEvent.change(colorInput, { target: { value: "#ff0000" } });
    expect(mockProps.onBackgroundColorChange).toHaveBeenCalledWith("#ff0000");
  });

  it("displays image preview when imageUrl is provided", () => {
    const propsWithImage = {
      ...mockProps,
      imageUrl: "data:image/png;base64,fakeImageData",
    };

    render(<EditBannerForm {...propsWithImage} />);

    const imagePreview = screen.getByAltText("Banner preview");
    expect(imagePreview).toBeInTheDocument();
    expect(imagePreview).toHaveAttribute("src", propsWithImage.imageUrl);
  });
});
