import { useEffect, useState } from "react";

function DisplayPage() {
  const [parole, setParole] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("wss://backendrealtimesystem.onrender.com");

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (Array.isArray(data)) {
          setParole(data);
        }
      } catch (error) {
        console.error("Errore parsing WebSocket data:", error);
      }
    };

    return () => socket.close();
  }, []);
  

  const handleClear = async () => {
    try {
      const res = await fetch("https://backendrealtimesystem.onrender.com/clear", {
        method: "POST",
      });
  
      if (res.ok) {
        setParole([]); // svuota frontend
      } else {
        console.error("Errore pulizia backend");
      }
    } catch (err) {
      console.error("Errore rete:", err);
    }
  };

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
                <span
                  style={{
                    backgroundColor: "#e53e3e",
                    color: "white",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "1rem",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                  }}
                >
                  vietata
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.downloadBox}>
        <h2 style={styles.title}>File scaricabile</h2>
        <a
          href="https://backendrealtimesystem.onrender.com/download"
          target="_blank"
          rel="noopener noreferrer"
        >
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
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "2rem",
    backgroundColor: "#fefefe",
    gap: "2rem",
  },
  listBox: {
    flex: "1 1 300px",
    backgroundColor: "#fce4ec",
    padding: "1.5rem",
    borderRadius: 15,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "600px",
  },
  downloadBox: {
    flex: "1 1 250px",
    backgroundColor: "#e3f2fd",
    padding: "1.5rem",
    borderRadius: 15,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "400px",
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
