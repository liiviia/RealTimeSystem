/*import { useState } from "react";

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

export default App;*/

/*import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);
  const [word, setWord] = useState("");
  const [status, setStatus] = useState(" Connessione in corso...");

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.1.109:8080");

    ws.onopen = () => {
      console.log("Connessione WebSocket stabilita");
      setSocket(ws);
      setStatus("Connesso al server");
    };

    ws.onerror = (err) => {
      console.error("Errore nella connessione WebSocket:", err);
      setStatus(" Connessione fallita. Controlla la rete o il server.");
    };

    ws.onclose = () => {
      setStatus("Connessione chiusa");
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendWord = () => {
    if (socket && socket.readyState === WebSocket.OPEN && word.trim()) {
      socket.send(word);
      setWord("");
    } else {
      alert("Connessione non disponibile");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Invia una parola</h1>
      <p>{status}</p>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Scrivi qui"
        style={{ fontSize: "1.2rem", padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={sendWord} style={{ fontSize: "1.2rem", padding: "0.5rem" }}>
        Invia
      </button>
    </div>
  );
}

export default App;*/

function App() {
return (
<h1>Ciao, funziona!</h1>
); 
}
export default App;