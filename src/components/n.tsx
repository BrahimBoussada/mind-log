import React from "react";

export const N = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-semibold select-none">{children}</span>;
};
