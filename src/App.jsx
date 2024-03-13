import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [click, setClick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1; // Increment progress if it's less than 100
        } else {
          clearInterval(interval); // Clear the interval when progress reaches 100
          return prev; // Return current progress if it's already 100
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <progress min="0" max="100" value={progress} />
      <p>{progress} %</p>

      <div className="progress">
        <span className="bar-length" style={{ width: `${progress}%` }}></span>
        <span>{progress} %</span>
      </div>
      <hr />
      <h3>{click}</h3>

      <button onClick={() => setClick(click + 1)} disabled={click === 5}>
        Add
      </button>
      <button onClick={() => setClick(click - 1)} disabled={click === 0}>
        Remove
      </button>
    </>
  );
}

export default App;
