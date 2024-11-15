'use client'
import { useState } from "react";
import { useImmer } from "use-immer";

const charsets = [
  {
    name: "数字",
    value: "0123456789",
    checked: true,
  },
  {
    name: "小文字",
    value: "abcdefghijklmnopqrstuvwxyz",
    checked: true,
  },
  {
    name: "大文字",
    value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    checked: false,
  },
  {
    name: "記号",
    value: "!@#$%^&*()_+{}:\"<>?|[];\',./`~",
    checked: false,
  }
];

export default function Random() {
  // 文字プール
  const [pool, setPool] = useState(
    charsets.filter(cs => cs.checked).map(cs => cs.value).join("")
  );
  // 文字列長さ
  const [length, setLength] = useState(8);
  // 文字セット切り替え
  const [charToggles, updateCharToggles] = useImmer(
    charsets.map(cs => cs.checked)
  );
  // 生成文字列
  const [text, setText] = useState("");

  // 文字列を作成する
  function makeRandom() {
    const text = Array.from({ length }, (_) => {
      const index = Math.floor(Math.random() * pool.length);
      return pool[index];
    }).join("");

    return text;
  }

  // 文字セット切り替え
  function toggle(index: number) {
    const checked = charToggles[index];
    const charset = charsets[index];

    if (checked) {
      setPool(pool.replaceAll(charset.value, ""));
    } else {
      setPool(pool + charset.value);
    }
    updateCharToggles(draft => {
      draft[index] = !checked;
    });
  }

  return (
    <div className="p-5 flex flex-col gap-2 w-full max-w-2xl">
      <div className="flex">
        <input
          type="text"
          value={pool}
          onChange={() => { }}
          className="flex-grow input input-bordered input-sm focus:outline-offset-0 focus:outline-sky-300"
        />
      </div>
      <div className="flex gap-2 items-center">
        {
          charsets.map((cs, i) => (
            <div key={i}>
              <input
                type="checkbox"
                onChange={() => toggle(i)}
                checked={charToggles[i]} />
              <label>{cs.name}</label>
            </div>
          ))
        }
      </div>
      <div className="flex gap-2">
        <div>
          <label>長さ：</label>
          <input
            type="number"
            value={length}
            onChange={e => setLength(parseInt(e.target.value))}
            className="input input-bordered input-sm w-20 focus:outline-offset-0 focus:outline-sky-300"
          />
        </div>
        <button
          onClick={() => {
            if (pool.length) {
              setText(makeRandom());
            } else {
              alert("使用する文字を選択してください");
            }
          }}
          className="btn btn-primary btn-outline btn-sm"
        >文字列生成</button>
      </div>
      <div className="flex gap-2">
        <div>
          <input
            type="text"
            value={text}
            onChange={() => { }}
            className="input input-bordered input-sm focus:outline-offset-0 focus:outline-sky-300"
          />
        </div>
        <button className="btn btn-primary btn-outline btn-sm">
          コピー
        </button>
      </div>
    </div>
  );
}