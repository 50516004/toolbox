'use client'
import { isOperator, resolveAll } from "@/lib/calculator";
import { Operator, Point } from "@/lib/difinitions";
import Button from "@/ui/Button";
import { useState } from "react";

export default function Page() {
  // 入力配列
  const [input, setInput] = useState(["0"]);
  // 入力配列のコピー
  const draft = [...input];
  // 入力末尾
  const tail = draft.at(-1);

  // 入力配列のクリア
  function clear() {
    setInput(["0"]);
  }

  // 演算子を追加
  function addOperator(op: string) {
    if (tail == undefined) {
      draft.push(op);
    } else if (isOperator(tail)) {
      draft.splice(-1, 1, op);
    } else {
      draft.push(op);
    }
    setInput(draft);
  }

  // 数字を追加
  function addNumber(num: number) {
    const numStr = num.toString();
    if (tail == undefined || isOperator(tail)) {
      draft.push(numStr);
    } else if (tail == "0") {
      draft.splice(-1, 1, numStr);
    } else {
      draft.splice(-1, 1, tail + numStr);
    }
    setInput(draft);
  }

  // 小数点を追加
  function addPoint() {
    if (tail == undefined || isOperator(tail) || tail.includes(Point)) {
      return;
    } else {
      draft.splice(-1, 1, tail + Point);
    }
    setInput(draft);
  }

  // 数字ボタン
  function btnNumber(num: number) {
    return (
      <Button onClick={() => addNumber(num)}>
        {num}
      </Button>
    );
  }

  // 計算式
  const state = input.join(" ");
  // 計算結果
  const answer = resolveAll(input);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 text-xl">
      <div className="bg-white p-5 flex flex-col gap-2 w-full max-w-96 rounded-md">
        <div className="border border-gray-500 flex justify-end p-2">
          {state + " = " + answer}
        </div>
        <div className="flex flex-wrap flex-col gap-2">
          <div className="flex gap-2">
            <Button onClick={() => addOperator(Operator.Plus)}>&#0043;</Button>
            <Button onClick={() => addOperator(Operator.Minus)}>&#8722;</Button>
            <Button onClick={() => addOperator(Operator.Multi)}>&#0215;</Button>
            <Button onClick={() => addOperator(Operator.Divid)}>&#0247;</Button>
          </div>
          <div className="flex gap-2">
            {btnNumber(7)}
            {btnNumber(8)}
            {btnNumber(9)}
            {btnNumber(0)}
          </div>
          <div className="flex gap-2">
            {btnNumber(4)}
            {btnNumber(5)}
            {btnNumber(6)}
            <Button onClick={addPoint}>{"."}</Button>
          </div>
          <div className="flex gap-2">
            {btnNumber(1)}
            {btnNumber(2)}
            {btnNumber(3)}
            <Button onClick={clear}>{"C"}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
