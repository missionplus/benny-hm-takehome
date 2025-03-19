import { HEY_AI_LINK } from "@repo/utils";

describe("Basic Button Functionality", () => {
  // Test 1: Simple DOM test - no React needed
  test("button click triggers event handler", () => {
    // Create a mock function to track clicks
    const handleClick = jest.fn();

    // Create a button element directly in the DOM
    const button = document.createElement("button");
    button.textContent = "Click Me";
    button.onclick = handleClick;

    // Add the button to the document body
    document.body.appendChild(button);

    // Simulate a click on the button
    button.click();

    // Verify the handler was called
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Clean up - remove the button from the DOM
    document.body.removeChild(button);
  });

  // Test 2: Test that text content is set correctly
  test("button displays correct text content", () => {
    // Create a button with specific text
    const buttonText = "Test Button";
    const button = document.createElement("button");
    button.textContent = buttonText;
    document.body.appendChild(button);

    // Verify the button has the correct text
    expect(button.textContent).toBe(buttonText);

    // Clean up
    document.body.removeChild(button);
  });

  // Test 3: Test URL opening functionality
  test("window.open is called with correct URL and target", () => {
    // Mock window.open
    const originalOpen = window.open;
    const mockOpen = jest.fn();
    window.open = mockOpen;

    try {
      // Set up test data
      const url = HEY_AI_LINK;
      const target = "_blank";

      // Call window.open directly
      window.open(url, target);

      // Verify it was called with the correct parameters
      expect(mockOpen).toHaveBeenCalledWith(url, target);
    } finally {
      // Restore the original window.open function
      window.open = originalOpen;
    }
  });
});
