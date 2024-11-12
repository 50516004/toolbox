'use client'

import { Consumer } from "@/lib/definitions";
import { useImmer } from "use-immer";

export default function ClipBoard() {
  const [textList, upTextList] = useImmer([""]);

  return (
    <div className="p-5 flex flex-col gap-2">
      {textList.map((text, i) => (
        <Clip
          key={i}
          text={text}
          setText={(s) => {
            upTextList(draft => {
              draft[i] = s;
            });
          }}
          removeText={() => {
            upTextList(draft => {
              draft.splice(i, 1);
            })
          }}
        />
      ))}
      <div>
        <button
          onClick={() => {
            upTextList(draft => {
              draft.push("");
            })
          }}
          className="btn btn-primary btn-outline btn-sm"
        >追加</button>
      </div>
    </div>
  );
}

export function Clip(
  {
    text,
    setText,
    removeText,
  }: {
    text: string;
    setText: Consumer<string>;
    removeText: () => void;
  }
) {

  function copy() {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input input-bordered input-sm focus:outline-offset-0 focus:outline-sky-300"
      />
      <button
        onClick={() => copy()}
        className="btn btn-primary btn-sm"
      >コピー</button>
      <button
        onClick={removeText}
        className="btn btn-primary btn-sm"
      >削除</button>
    </div>
  )
}