import { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🍦": "IcecreamS",
  "🏀": "Basketball",
  "🏉": "Rugby Football",
  "🎈": "Ballon",
  "❤": "Heart",
  "🌻": "Sunflower",
  "🌹": "Rose",
  "🐎": "Horse",
  "🐖": "Pig",
  "🐕": "Dog"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#F59E0B" }}>Guess the Emoji!</h1>
      <input
        placeholder="Enter the symbol"
        style={{ width: "50%", padding: "0.5rem" }}
        onChange={emojiInputHandler}
      ></input>
      <h2> {meaning} </h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
