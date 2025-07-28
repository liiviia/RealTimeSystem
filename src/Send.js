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
    <div style={styles.wrapper}>
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
  wrapper: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f0f4f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    boxSizing: "border-box",
  },
  box: {
    backgroundColor: "#fff8f0",
    borderRadius: "25px",
    padding: "2rem 1.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "2rem",
    textAlign: "center",
  },
  input: {
    fontSize: "1.2rem",
    padding: "0.8rem",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "1.5rem",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#ffa69e",
    color: "#fff",
    border: "none",
    padding: "0.9rem",
    fontSize: "1.1rem",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Send;
