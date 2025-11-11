import React from "react";

export default function ComplexDashboardLayout({
  children,
  advertising,
  menu,
  notifications,
  login,
}: {
  children: React.ReactNode;
  advertising: React.ReactNode;
  menu: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return (
    <div>
      <div>{children}</div>
      {isLoggedIn ? (
        <>
          <div>{advertising}</div>
          <div>{menu}</div>
          <div>{notifications}</div>
        </>
      ) : (
        login
      )}
    </div>
  );
}
