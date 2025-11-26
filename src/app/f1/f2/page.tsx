import Link from "next/link";

export default function F2() {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <h1 className="p-5 text-2xl">Folder 2 Page</h1>
      <Link className="p-5 border" href="/f4">
        Go to F4
      </Link>
    </div>
  );
}
