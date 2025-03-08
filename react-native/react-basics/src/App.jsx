import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Heading() {
  return <h1>Vite + React - This is an h1 heading</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Heading />
        <img src={reactLogo} alt="react logo" className="logo" />
        <img src={viteLogo} alt="vite logo" className="logo" />
        <button onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </div>
    </>
  );
}

export default App;
