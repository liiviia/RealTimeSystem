import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const socket = new WebSocket("ws://192.168.1.109:8080"); 
  
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
