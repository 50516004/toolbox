
export default function NumberButton(
  { value }: { value: number }
) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
      {value}
    </button>
  );
}