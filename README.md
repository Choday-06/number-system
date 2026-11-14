# Digital Number System Website – Free Local Study Assistant

## Run the website on Mac

1. Extract this ZIP file.
2. Open the extracted folder in VS Code.
3. In VS Code, choose **Terminal → New Terminal**.
4. Run:

   ```bash
   python3 -m http.server 8000
   ```

5. Open Chrome and visit **http://localhost:8000**.

Keep the terminal open while using the website. To stop the local website, press **Control + C** in the terminal.

## Free Study Assistant

The AI Study Assistant has been changed to a local, rule-based educational helper:
- No OpenAI API key is required.
- No API credits or payment are required.
- No Flask server or Python packages are required.
- The chatbot works offline once the website files are on your computer.
- It answers common questions about Binary, Decimal, Octal, Hexadecimal, place value, bits and bytes, and selected number conversions.

**Important limitation:** This is not a generative AI model like ChatGPT. It uses built-in explanations and programmed patterns. Questions outside its supported topics may receive a request to rephrase or ask about number systems.

## Privacy

Chat messages are processed in the browser by the local JavaScript file. They are not sent to OpenAI or another AI API.

## Existing website features

The homepage, navigation, learning materials, videos, conversion calculator, practice activities, progressive quizzes, team information, and history features are retained.
