import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
  render(<Counter />);

  // Step 1: Get the button by its role and text
  const button = screen.getByRole("button", { name: /count is 0/i });

  // Step 2: Click the button
  fireEvent.click(button);

  // Step 3: Assert the updated button text
  expect(button).toHaveTextContent("count is 1");
});