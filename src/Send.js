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
          onKeyDown={(e) => e.key === "Enter" && sendWord()}
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
    width: "100vw",
    backgroundColor: "#f7fafc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    boxSizing: "border-box",
  },
  box: {
    backgroundColor: "#ffe4e1",
    borderRadius: 20,
    padding: "2rem 1.5rem",
    width: "95%",
    maxWidth: 400,
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  title: {
    fontSize: "1.6rem",
    fontWeight: "600",
    textAlign: "center",
    color: "#4a4a4a",
    margin: 0,
  },
  input: {
    fontSize: "1.3rem",
    padding: "0.75rem 1rem",
    borderRadius: 15,
    border: "1.5px solid #ff7f7f",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    fontSize: "1.4rem",
    backgroundColor: "#ff7f7f",
    color: "white",
    border: "none",
    borderRadius: 15,
    padding: "0.9rem 0",
    cursor: "pointer",
    fontWeight: "700",
    transition: "background-color 0.3s ease",
  },
};

export default Send;
