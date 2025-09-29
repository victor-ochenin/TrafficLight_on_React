"use client"

import { useState } from "react";
import "./сomponent.css";

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState("red");

  const getNextLight = (current) => {
    if (current === "red") return "yellow";
    if (current === "yellow") return "green";
    return "red"; 
  };

  const handleSignalClick = () => {
    setActiveLight((prev) => getNextLight(prev));
  };

  const colors = ["red", "yellow", "green"];

  return (
    <div className="trflight">
      {colors.map((color) => {
        const isActive = activeLight === color;
        const className = [
          "trflight__light",
          color,
          isActive && "is-active",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={color}
            type="button"
            className={className}
            aria-pressed={isActive}
            onClick={handleSignalClick}
          />
        );
      })}
    </div>
  );
}

