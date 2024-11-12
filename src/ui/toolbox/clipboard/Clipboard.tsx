'use client'

import { useState } from "react";

export default function ClipBoard() {
  return (
    <div className="p-5 flex flex-col gap-2">
      <Clip></Clip>
      <div>
        <button
          onClick={() => alert()}
          className="btn btn-primary btn-outline btn-sm"
        >追加</button>
      </div>
    </div>
  );
}

export function Clip() {
  const [text, setText] = useState('');

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input input-bordered input-sm focus:outline-offset-0 focus:outline-sky-300"
      />
      <button
        onClick={() => alert()}
        className="btn btn-primary btn-sm"
      >コピー</button>
      <button
        onClick={() => alert()}
        className="btn btn-primary btn-sm"
      >削除</button>
    </div>
  )
}