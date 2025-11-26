import Link from "next/link";

export default function F1() {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <h1 className="p-5 text-2xl">Folder 1 Page</h1>
      <Link className="p-5 border" href="/f1/f2">
        Go to F2
      </Link>

      <Link className="p-5 border" href="/f3">
        Go to F3
      </Link>
    </div>
  );
}
