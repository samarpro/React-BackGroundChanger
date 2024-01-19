import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="h-screen flex flex-col md:flex-row justify-center align-bottom p-4 md:items-end items-center transition duration-1000 md:space-x-7 space-y-7"
        style={{ backgroundColor: color }}
      >
        <div className="absolute top-10">

        <h1 className="text-center text-6xl font-mono text-white">Click on Button to change Color</h1>

        </div>
        <button
          onClick={() => setColor("Green")}
          type="button"
          className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Button text
        </button>
        <button
          onClick={() => setColor("yellow")}
          type="button"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm flex-shrink-0 font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Button text
        </button>
        <button
          onClick={() => setColor("Red")}
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Button text
        </button>
      </div>
    </>
  );
}

export default App;
