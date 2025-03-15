import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Chat from "../app/page";

jest.mock("axios");

describe("Chat Component", () => {
  it("renders the chat app correctly", () => {
    render(<Chat />);
    expect(screen.getByText("AI Career & Mindset Coach")).toBeInTheDocument();
  });

  it("allows the user to type a message", () => {
    render(<Chat />);
    const input = screen.getByPlaceholderText("Ask me anything...");
    fireEvent.change(input, { target: { value: "Hello, coach!" } });
    expect(input).toHaveValue("Hello, coach!");
  });

  it("sends a message when the send button is clicked", async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: { reply: "Hello, how can I help you?" },
    });
    render(<Chat />);
    const input = screen.getByPlaceholderText("Ask me anything...");
    const sendButton = screen.getByText("Send");

    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByRole("textbox")).toHaveValue("");
      const messages = screen.getAllByText((content) => content.length > 0);
      expect(messages.length).toBeGreaterThan(1);
    });
  });
});
