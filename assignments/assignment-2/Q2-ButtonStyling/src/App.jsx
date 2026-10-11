import "./App.css";

function Button({ variant = "primary", children }) {
  const styles = {
    primary: {
      backgroundColor: "#0d6efd",
      color: "white"
    },
    success: {
      backgroundColor: "#198754",
      color: "white"
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "white"
    }
  };

  return (
    <button
      className={`custom-button ${variant}`}
      style={styles[variant] || styles.primary}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <main className="app">
      <h1>React Button Styling</h1>
      <p>Demonstrating inline styles and external CSS</p>

      <div className="button-container">
        <Button variant="primary">Primary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </main>
  );
}

export default App;