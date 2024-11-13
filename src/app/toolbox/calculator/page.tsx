
import Calculator from "@/ui/toolbox/calculator/Calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '電卓',
};

export default function Page() {
  return (
    <main className="m-4 rounded-md p-4 bg-white">
      <div>
        <Calculator />
      </div>
    </main>
  );
}