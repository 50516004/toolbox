'use client'
import { isOperator, resolveAll } from "@/lib/calculation";
import { Operator, Point } from "@/lib/difinitions";
import Button from "@/ui/Button";
import { useState } from "react";

// 入力配列初期状態
const initInput = ["0"];

export default function Calculator() {
  // 入力配列
  const [input, setInput] = useState(initInput);

  // 入力配列のコピー
  const draft = [...input];
  // 入力末尾
  const tail = input.at(-1);
  // 計算式
  const state = input.join(" ");
  // 計算結果
  const answer = resolveAll(input);

  // 入力配列のクリア
  function clear() {
    setInput(initInput);
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
  function ButtonNumber(num: number) {
    return (
      <Button onClick={() => addNumber(num)}>
        {num}
      </Button>
    );
  }

  return (
    <div className="bg-white p-5 flex flex-col gap-2 w-full max-w-96 rounded-md text-2xl">
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
          {ButtonNumber(7)}
          {ButtonNumber(8)}
          {ButtonNumber(9)}
          {ButtonNumber(0)}
        </div>
        <div className="flex gap-2">
          {ButtonNumber(4)}
          {ButtonNumber(5)}
          {ButtonNumber(6)}
          <Button onClick={addPoint}>{"."}</Button>
        </div>
        <div className="flex gap-2">
          {ButtonNumber(1)}
          {ButtonNumber(2)}
          {ButtonNumber(3)}
          <Button onClick={clear}>{"C"}</Button>
        </div>
      </div>
    </div>
  );
}