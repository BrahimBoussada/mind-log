import React from "react";

export const N = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-medium select-none">{children}</span>;
};
