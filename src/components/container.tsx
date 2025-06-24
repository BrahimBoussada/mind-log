export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" container mx-auto p-4 min-h-screen flex items-center justify-center">
      <main className="flex flex-col gap-8">{children}</main>
    </div>
  );
};
