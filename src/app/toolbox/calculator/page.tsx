
import Calculator from "@/ui/toolbox/calculator/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '電卓',
};

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-10">
      <Calculator />
    </main>
  );
}