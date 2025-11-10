import React from "react";

export default function ComplexDashboardLayout({
  children,
  advertising,
  menu,
  notifications,
}: {
  children: React.ReactNode;
  advertising: React.ReactNode;
  menu: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>{advertising}</div>
      <div>{menu}</div> 
      <div>{notifications}</div>
    </div>
  );
}
