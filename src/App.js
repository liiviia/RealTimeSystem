import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const socket = new WebSocket("wss://110241b214e8.ngrok-free.app"); 

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

export default App;