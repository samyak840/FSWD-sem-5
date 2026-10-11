import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const time =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(remainingSeconds).padStart(2, "0")}`;

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setSeconds(0);
  }

  return (
    <main className="stopwatch">
      <h1>Stopwatch</h1>

      <div className="timer">{time}</div>

      <div className="controls">
        <button
          className="start"
          onClick={start}
          disabled={isRunning}
        >
          Start
        </button>

        <button
          className="pause"
          onClick={pause}
          disabled={!isRunning}
        >
          Pause
        </button>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </main>
  );
}

export default App;