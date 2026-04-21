📘 Wordly Dictionary SPA
🌐 Live Demo

👉 https://preciousrodenyi-ctrl.github.io/WORDLY/

📖 Overview

Wordly Dictionary is a Single Page Application (SPA) that allows users to search for English words and instantly view their meanings, pronunciation, and related linguistic details without refreshing the page.

The application integrates with a public dictionary API to provide real-time word data and delivers a smooth, interactive user experience.

🚀 Features
🔍 Search Functionality
Users can search for any English word using the input field.
📖 Word Definitions
Displays meanings clearly with part of speech (noun, verb, etc.).
🔊 Pronunciation
Shows phonetic spelling and provides audio playback.
💬 Example Sentences
Displays usage examples when available.
🔤 Synonyms
Shows related words to improve vocabulary.
❌ Error Handling
Displays messages for invalid or unavailable words.
⭐ Save Words (Optional Feature)
Users can save words using local storage.
📱 Responsive Design
Works across mobile and desktop devices.
🛠 Technologies Used
HTML5 – Structure of the application
CSS3 – Styling and responsive design
JavaScript (ES6) – Functionality and interactivity
Fetch API – Retrieving data from an external API
Local Storage – Saving user data (favorites)
📡 API Used

This project uses the:

Free Dictionary API

The API provides:

Definitions
Phonetics and audio
Parts of speech
Example sentences
Synonyms (when available)
🧠 How It Works
User enters a word into the search bar
JavaScript sends a request to the dictionary API
API returns word data in JSON format
The app dynamically updates the page (SPA behavior)
Results are displayed instantly without page reload
⚠️ Error Handling

The application handles:

Empty input fields
Invalid words (not found)
Missing pronunciation or synonyms
📂 Project Structure
WORDLY/
│
├── index.html      # Main structure
├── style.css       # Styling
├── script.js       # Logic and API handling
└── README.md       # Documentation
⚙️ How to Run Locally
Clone the repository:
git clone https://github.com/preciousrodenyi-ctrl/WORDLY.git
Open the folder:
cd WORDLY
Open index.html in your browser
(or use Live Server in VS Code)
🧪 Testing

Test the following:

✅ Valid words (e.g., run, happy)
❌ Invalid words (e.g., asdfgh)
⚠️ Words without synonyms/audio
🧩 Future Improvements
🌙 Dark mode toggle
🗂 Search history
🖱 Clickable synonyms
🎤 Voice search
📚 Word of the day
👨‍💻 Author

Precious Rodenyi
Student Developer – Wordly SPA Project

📜 License

This project is for educational purposes.
