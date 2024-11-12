import ClipBoard from "@/ui/toolbox/clipboard/Clipboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'クリップボード',
};

export default function Page() {
  return (
    <main className="m-4 bg-gray-50 rounded-md">
      <ClipBoard />
    </main>
  );
}