import { useState } from "react";

function App() {
  const [colour, setcolour] = useState("orange");
  return (
    <>
      <div
        className={`relative w-full h-screen flex justify-center`}
        style={{ backgroundColor: colour }}
      >
        <div className="absolute flex flex-wrap gap-4 bg-amber-50 bottom-5 w-auto p-5 px-10 rounded-full">
          <button
            onClick={() => {
              setcolour("red");
            }}
            className="bg-red-700 text-white rounded-2xl px-5 py-1 text-center"
          >
            Red
          </button>

          <button
            onClick={() => {
              setcolour("green");
            }}
            className="bg-green-700 text-white rounded-2xl px-5 py-1 text-center"
          >
            Green
          </button>

          <button
            onClick={() => {
              setcolour("maroon");
            }}
            className="bg-red-900 text-white rounded-2xl px-5 py-1 text-center"
          >
            Maroon
          </button>

          <button
            onClick={() => {
              setcolour("blue");
            }}
            className="bg-blue-700 text-white rounded-2xl px-5 py-1 text-center"
          >
            Blue
          </button>

          <button
            onClick={() => {
              setcolour("navy");
            }}
            className="bg-blue-800 text-white rounded-2xl px-5 py-1 text-center"
          >
            Navy
          </button>

          <button
            onClick={() => {
              setcolour("teal");
            }}
            className="bg-teal-700 text-white rounded-2xl px-5 py-1 text-center"
          >
            Teal
          </button>

          <button
            onClick={() => {
              setcolour("lime");
            }}
            className="bg-lime-700 text-white rounded-2xl px-5 py-1 text-center"
          >
            Lime
          </button>

          <button
            onClick={() => {
              setcolour("magenta");
            }}
            className="bg-purple-600 text-white rounded-2xl px-5 py-1 text-center"
          >
            Magenta
          </button>

          <button
            onClick={() => {
              setcolour("purple");
            }}
            className="bg-purple-800 text-white rounded-2xl px-5 py-1 text-center"
          >
            Purple
          </button>


          <button
            onClick={() => {
              setcolour("yellow");
            }}
            className="bg-yellow-300 text-white rounded-2xl px-5 py-1 text-center"
          >
            Yellow
          </button>

          <button
            onClick={() => {
              setcolour("olive");
            }}
            className="bg-olive-700 text-white rounded-2xl px-5 py-1 text-center"
          >
            Olive
          </button>

        </div>
      </div>
    </>
  );
}

export default App;
