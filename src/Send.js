import { useState } from "react";
import "./Send.css";

function Send() {
  const [word, setWord] = useState("");
  const socket = new WebSocket("wss://backendrealtimesystem.onrender.com"); 

  const sendWord = () => {
    if (word.trim()) {
      socket.send(word);
      setWord("");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Inserisci una parola o frase</h1>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Scrivi qui..."
          className="input"
          onKeyDown={(e) => e.key === "Enter" && sendWord()}
        />
        <button onClick={sendWord} className="button">
          Invia
        </button>
      </div>
    </div>
  );
}

export default Send;



