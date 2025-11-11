import Card from "@/components/card";
import Link from "next/link";

export default function NotificationSlot() {
  return (
    <div>
      <h2>Notification Slot</h2>
      <Card>
        <h3>Мои Объявления</h3>

        <Link
          href="/complex-dashboard"
          className="px-8 py-3 rounded-xl text-xl bg-cyan-700 hover:bg-cyan-600"
        >
          Активные
        </Link>

        <Link
          href="/complex-dashboard/archived"
          className="px-8 py-3 rounded-xl text-xl bg-cyan-700 hover:bg-cyan-600"
        >
          Завершенные
        </Link>
      </Card>
    </div>
  );
}
