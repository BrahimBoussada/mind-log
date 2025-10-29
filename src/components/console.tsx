"use client";

import { useEffect } from "react";

export const Consolee = () => {
  useEffect(() => {
    console.log(
      `%cHello there 🕵️‍♂️
Curious about the code?
You can check out the source code here: https://github.com/BrahimBoussada/mind-log`,
      "color: #000000; background: #F2F2F2; font-size: 16px; padding: 8px; line-height: 1.5;"
    );
  }, []);
  return null;
};
