import { useState } from "react";

function Send() {
  const [word, setWord] = useState("");
  const socket = new WebSocket("wss://dfd16f7eecae.ngrok-free.app"); 

  const sendWord = () => {
    if (word.trim()) {
      socket.send(word);
      setWord("");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Inserisci una parola</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Scrivi qui"
      />
      <button onClick={sendWord}>Invia</button>
    </div>
  );
}

export default Send;