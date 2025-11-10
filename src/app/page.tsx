import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-3xl">Главная страница / Main Page</h1>

      <Link
        href="/complex-dashboard"
        className="px-8 py-3 rounded-xl text-xl bg-cyan-700 hover:bg-cyan-600"
      >
        Панель управления
      </Link>
    </div>
  );
}
