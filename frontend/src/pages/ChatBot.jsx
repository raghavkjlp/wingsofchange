import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await fetch("https://sksjt.org/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      const botMsg = {
        sender: "bot",
        text: data.reply
      };

      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      setMessages(prev => [...prev, {
        sender: "bot",
        text: "Error connecting to chatbot."
      }]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>NGO AI Assistant</h3>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={
              msg.sender === "user"
                ? styles.userMessage
                : styles.botMessage
            }
          >
            {msg.text}
          </div>
        ))}

        {loading && <div style={styles.botMessage}>Typing...</div>}
      </div>

      <div style={styles.inputArea}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about NGO..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    background: "#1e1e1e",
    color: "white",
    borderRadius: "12px",
    padding: "10px",
    fontFamily: "Arial"
  },
  title: {
    textAlign: "center"
  },
  chatBox: {
    height: "300px",
    overflowY: "auto",
    background: "#2a2a2a",
    padding: "10px",
    borderRadius: "8px"
  },
  userMessage: {
    background: "#4caf50",
    padding: "8px",
    borderRadius: "8px",
    margin: "5px 0",
    textAlign: "right"
  },
  botMessage: {
    background: "#333",
    padding: "8px",
    borderRadius: "8px",
    margin: "5px 0"
  },
  inputArea: {
    display: "flex",
    marginTop: "10px"
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "none"
  },
  button: {
    marginLeft: "8px",
    padding: "8px 12px",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default ChatBot;
