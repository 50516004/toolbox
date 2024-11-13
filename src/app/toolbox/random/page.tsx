import Random from "@/ui/toolbox/random/Random";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '乱数生成',
};

export default function Page() {
  return (
    <main className="m-4 bg-gray-50 rounded-md">
      <Random />
    </main>
  );
}