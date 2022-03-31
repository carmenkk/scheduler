import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      setHistory((history) => [...history].slice(0, -1));
    }
    setHistory((history) => [...history, newMode]);
  };

  const back = () => {
    const newHistory =
      history.length > 1 ? [...history].slice(0, -1) : [...history];
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  };

  return { mode, transition, back };
}
