# typing-speed-project
# Typing Speed Test

This is a simple web-based typing speed test application. It allows users to measure their typing speed by typing a randomly generated sentence while a timer records the duration. The application provides real-time validation of typed text and displays the results in a modal window.

## Features
- **Random Sentence Generation**: A random text is displayed for typing.
- **Typing Accuracy Feedback**: The input box changes color based on correctness.
- **Timer Functionality**: Tracks typing time with millisecond precision.
- **Result Modal**: Displays the number of words typed and time taken.
- **Reset Functionality**: Allows users to restart the test with a new sentence.
- **Responsive Design**: Works well on different screen sizes.
- **Navigation Menu**: Includes a menu with options (some features under development).

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and responsive design
- **JavaScript**: Logic for text validation, timer, and user interactions

## How to Use
1. Open the application in a web browser.
2. Start typing in the input box; the timer starts automatically.
3. The border of the input box changes color to indicate correctness:
   - Yellow: Correct typing in progress
   - Red: Incorrect typing
   - Green: Successfully completed
4. When you finish typing the given text, a result modal will display your typing speed.
5. Click the **Reset** button to start a new test.

## File Structure
```
project-root/
│── index.html        # Main HTML file
│── styles/
│   ├── grids.css    # Grid-based styling
│   ├── style.css    # Main styles
│── script/
│   ├── script.js    # JavaScript functionality
```

## License
This project is open-source and free to use and modify.
