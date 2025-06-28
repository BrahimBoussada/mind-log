import React from "react";

interface NoteProps {
  children: React.ReactNode;
}

export const NoteWrapper = ({ children }: NoteProps) => {
  return <ol className="list-inside text-sm/6 font-mono">{children}</ol>;
};

export const Note = ({ children }: NoteProps) => {
  return (
    <li className="pl-6 -indent-6 mb-2.5 tracking-[-.01em]">{children}</li>
  );
};

export const Key = ({ children }: NoteProps) => {
  return (
    <span className=" bg-black/5 px-1.5 py-0.5 rounded font-mono font-semibold">
      {children}
    </span>
  );
};
