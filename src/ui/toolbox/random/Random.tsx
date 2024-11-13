'use client'
import { useState } from "react";

const numbers = "0123456789";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowers = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+{}:\"<>?|[];\',./`~";

export default function Random() {
  const [pool, setPool] = useState("");
  const [length, setLength] = useState(8);
  const [text, setText] = useState("");

  function makeRandom() {
    const text = Array.from({ length }, (_) => {
      const index = Math.floor(Math.random() * pool.length);
      return pool[index];
    }).join("");

    return text;
  }

  return (
    <div className="p-5 flex flex-col gap-2 w-full max-w-2xl">
      <div className="flex">
        <input
          type="text"
          value={pool}
          onChange={(e) => setPool(e.target.value)}
          className="flex-grow input input-bordered input-sm focus:outline-offset-0 focus:outline-sky-300"
        />
      </div>
      <div className="flex gap-2">
        <div>
          <input type="checkbox" />
          <label>大文字</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>小文字</label>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            if(pool.length) {
              setText(makeRandom());
            } else {
              alert("文字がありません");
            }
          }}
          className="btn btn-primary btn-outline btn-sm"
        >作成</button>
      </div>
      <div>{text}</div>
    </div>
  );
}