'use client'
import { calcAll } from "@/lib/calculator";
import Button from "@/ui/Button";
import { useState } from "react";

export default function Page() {
  const [queue, setQueue] = useState<string[]>([]);
  const [answer, setAnswer] = useState(0);

  const state = queue.join(" ");

  function push(s: string) {
    const nextState = [...queue, s];
    setQueue(nextState);
  }

  function calc() {
    setAnswer(calcAll(queue));
  }

  function reset() {
    setQueue([]);
    setAnswer(0);
  }

  function button(s: string) {
    return (
      <Button handler={() => push(s)}>{s}</Button>
    );
  }

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
            {button("+")}
            {button("-")}
            {button("x")}
            {button("÷")}
          </div>
          <div className="flex gap-2">
            {button("1")}
            {button("2")}
            {button("3")}
          </div>
          <div className="flex gap-2">
            {button("4")}
            {button("5")}
            {button("6")}
          </div>
          <div className="flex gap-2">
            {button("+")}
            {button("-")}
            {button("x")}
          </div>
          <div className="flex gap-2">
            {button("0")}
            {button(".")}
            <Button handler={calc}>{"="}</Button>
            <Button handler={reset}>{"C"}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
