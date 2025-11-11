import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div>
      <h2>Notification Slot / Archived Notifications</h2>
      <Card>
        <h3>Архив</h3>

        <Link
          href="/complex-dashboard"
          className="px-8 py-3 rounded-xl text-xl bg-cyan-700 hover:bg-cyan-600"
        >
          Назад
        </Link>
      </Card>
    </div>
  );
}
