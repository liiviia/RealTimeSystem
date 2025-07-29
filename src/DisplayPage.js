import { useEffect, useState } from "react";

function DisplayPage() {
  const [parole, setParole] = useState([]);

  useEffect(() => {
    fetch("https://backendrealtimesystem.onrender.com/download")
      .finally(() => {
        const socket = new WebSocket("wss://backendrealtimesystem.onrender.com");
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setParole(data);
        };
      });
  }, []);
  

  return (
    <div style={styles.container}>
      <div style={styles.listBox}>
        <h2 style={styles.title}>Parole ricevute:</h2>
        <ul style={styles.list}>
          {parole.map((wordObj, index) => (
            <li
              key={index}
              style={{
                ...styles.item,
                color: wordObj.offensive ? "#c53030" : "#1a202c",
                textDecoration: wordObj.offensive ? "underline" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {wordObj.text}
              {wordObj.offensive && (
                <span style={{
                  backgroundColor: "#e53e3e",
                  color: "white",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "1rem",
                  fontSize: "0.7rem",
                  fontWeight: "bold"
                }}>
                  vietata
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.downloadBox}>
        <h2 style={styles.title}>File scaricabile</h2>
        <a href="https://backendrealtimesystem.onrender.com/download" target="_blank" rel="noopener noreferrer">
          <button style={styles.button}>Scarica parole.txt</button>
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    padding: "2rem",
    boxSizing: "border-box",
    backgroundColor: "#fefefe",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  listBox: {
    flex: 1,
    minWidth: 300,
    maxWidth: 500,
    backgroundColor: "#fce4ec",
    padding: "1.5rem",
    borderRadius: 15,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "1rem",
  },
  downloadBox: {
    flex: 1,
    minWidth: 250,
    maxWidth: 400,
    backgroundColor: "#e3f2fd",
    padding: "1.5rem",
    borderRadius: 15,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "1rem",
    textAlign: "center",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  list: {
    listStyleType: "decimal",
    paddingLeft: "1.5rem",
    fontSize: "1.2rem",
    color: "#444",
  },
  item: {
    marginBottom: "0.5rem",
  },
  button: {
    backgroundColor: "#1976d2",
    color: "white",
    fontSize: "1.2rem",
    padding: "0.8rem 1.5rem",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
};

export default DisplayPage;
