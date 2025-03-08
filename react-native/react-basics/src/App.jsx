import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./heading";

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
