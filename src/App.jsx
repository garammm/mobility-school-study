import React, { useState } from "react";

function App() {
  const [sentence, setSentence] = useState("");
  const [emotion, setEmotion] = useState("");

  const handleInputChange = (e) => {
    setSentence(e.target.value);
  };

  const analyzeEmotion = () => {
    fetch(
      "ngrok config add-authtoken 2QXsokoe3lmdR5spJ8vuJqA12X1_55Cxxc33vE3ChirkvcvVV/analysis",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sentence }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setEmotion(data.emotion);
      })
      .catch((error) => {
        console.error("Error:yarn", error);
      });
  };

  return (
    <div>
      <input type="text" value={sentence} onChange={handleInputChange} />
      <button onClick={analyzeEmotion}>Analyze Emotion</button>
      <p>Emotion: {emotion}</p>
    </div>
  );
}

export default App;
