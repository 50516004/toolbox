'use client'
import { calcAll, isOP } from "@/lib/calculator";
import Button from "@/ui/Button";
import { useState } from "react";

export default function Page() {
  const [queue, setQueue] = useState<string[]>([]);
  const [answer, setAnswer] = useState(0);

  // 更新用キュー
  const updater = [...queue];

  // 数字の入力
  function inputNumber(num: string) {
    const tail = updater.at(-1);
    if(tail == undefined || isOP(tail)) {
      updater.push(num);
    } else {
      updater.pop();
      updater.push(tail + num);
    }
    setQueue(updater);
  }

  // 演算子の入力
  function inputOP(op: string) {
    const tail = updater.at(-1);
    if (tail == undefined) {
      updater.push("0");
      updater.push(op);
    } else if (isOP(tail)) {
      updater.pop();
      updater.push(op);
    } else {
      updater.push(op);
    }
    setQueue(updater);
  }

  // 計算
  function enter() {
    setAnswer(calcAll(queue));
  }

  // リセット
  function reset() {
    setQueue([]);
    setAnswer(0);
  }

  // 数字ボタン
  function btnNumber(s: string) {
    return (
      <Button handler={() => inputNumber(s)}>{s}</Button>
    );
  }

  // 演算子ボタン
  function btnOperator(s: string) {
    return (
      <Button handler={() => inputOP(s)}>{s}</Button>
    );
  }

  // 計算式の表示
  const state = queue.join(" ");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="bg-white p-5 flex flex-col gap-2 w-60">
        <div className="flex justify-end">
          {state}
        </div>
        <div className="border border-gray-500 flex justify-end p-2">
          {answer}
        </div>
        <div className="flex flex-wrap flex-col gap-2">
          <div className="flex gap-2">
            {btnOperator("+")}
            {btnOperator("-")}
            {btnOperator("x")}
            {btnOperator("÷")}
          </div>
          <div className="flex gap-2">
            {btnNumber("1")}
            {btnNumber("2")}
            {btnNumber("3")}
          </div>
          <div className="flex gap-2">
            {btnNumber("4")}
            {btnNumber("5")}
            {btnNumber("6")}
          </div>
          <div className="flex gap-2">
            {btnNumber("7")}
            {btnNumber("8")}
            {btnNumber("9")}
          </div>
          <div className="flex gap-2">
            {btnNumber("0")}
            {btnNumber(".")}
            <Button handler={enter}>{"="}</Button>
            <Button handler={reset}>{"C"}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
