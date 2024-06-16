"use client";

import { TypeAnimation } from "react-type-animation";

export function CustomTyping() {
  return (
    <TypeAnimation
      sequence={["Franzua Plasencia", 1500, "Full-Stack Developer", 1500]}
      wrapper="span"
      cursor
      repeat={Infinity}
      className="whitespace-nowrap text-yellow-600 h-8"
    />
  );
}
