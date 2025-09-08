import React from "react";

interface NoteProps {
  children: React.ReactNode;
}

export const NoteWrapper = ({ children }: NoteProps) => {
  return (
    <div className="text-sm font-mono flex flex-col gap-3">{children}</div>
  );
};

export const Note = ({ children }: NoteProps) => {
  return <div className="flex gap-1">{children}</div>;
};

export const N = ({ children }: NoteProps) => {
  return <span className="font-medium select-none">{children}</span>;
};

export const Text = ({ children }: NoteProps) => {
  return <p className="">{children}</p>;
};

export const Key = ({ children }: NoteProps) => {
  return (
    <span className=" bg-black/5 px-1 py-0.5 rounded font-mono font-semibold ">
      {children}
    </span>
  );
};
