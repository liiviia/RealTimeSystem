import { useEffect, useState } from "react";

function DisplayPage() {
  const [latestWord, setLatestWord] = useState("In attesa...");

  useEffect(() => {
    const socket = new WebSocket("wss://dfd16f7eecae.ngrok-free.app");
    
    socket.onmessage = (event) => {
      setLatestWord(event.data);
    };

    return () => socket.close();
  }, []);

  return (
    <div style={{ fontSize: "5rem", textAlign: "center", marginTop: "20vh" }}>
      {latestWord}
    </div>
  );
}

export default DisplayPage;
