import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setlength] = useState(10);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [password, setpassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "!@#$%^&*<>/.,'_*-+[]{}()";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, number, character, setpassword]);

  const CopyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, number, character, PasswordGenerator]);

  return (
    <>
      <div className="w-1/2 bg-gray-500 mx-auto my-8 text-center p-10 flex flex-col gap-8 rounded-lg">
        <p className="text-3xl font-bold text-amber-50">Password Generator</p>
        <div className="flex">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="bg-amber-50 w-full p-2 rounded-l-md outline-none"
          />
          <button
            className=" bg-blue-500 text-white text-center p-2 px-4 rounded-r-md"
            onClick={CopyPasswordtoClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex gap-10">
          <div className="flex gap-5 text-xl font-bold p-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-orange-400">Length:{length}</label>
          </div>

          <div className="flex gap-5 text-xl font-bold p-2">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-orange-400">
              Numbers
            </label>
          </div>

          <div className="flex gap-5 text-xl font-bold p-2">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setcharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-orange-400">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
