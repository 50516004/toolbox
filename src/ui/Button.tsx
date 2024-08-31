import { ReactNode } from "react";

export default function Button(
  {
    children,
    handler,
  }: {
    children: ReactNode;
    handler: () => void;
  }
) {
  return (
    <button
      onClick={handler}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
      {children}
    </button>
  );
}