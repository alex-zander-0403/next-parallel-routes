import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    padding: 50,
    margin: 10,

    fontSize: 20,
    border: "1px solid #cdcdcd",
    boxShadow: "0 5px 10px 0 rgba(0,0,0,0.2)",
  };

  return <div style={cardStyle}>{children}</div>;
}
