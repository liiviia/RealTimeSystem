import { useState, useEffect } from "react";

function Send() {
  const [word, setWord] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("wss://backendrealtimesystem.onrender.com");
    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendWord = () => {
    if (word.trim() && socket?.readyState === WebSocket.OPEN) {
      socket.send(word);
      setWord("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Inserisci una parola o frase</h1>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Scrivi qui..."
          style={styles.input}
        />
        <button onClick={sendWord} style={styles.button}>
          Invia
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f4f8",
    padding: "1rem",
  },
  box: {
    background: "#fff8f0",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
    color: "#333",
    fontSize: "1.4rem",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  button: {
    background: "#ffa69e",
    border: "none",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    color: "#fff",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Send;
