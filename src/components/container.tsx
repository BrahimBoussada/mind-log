export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center max-w-3xl relative">
      <main className="flex flex-col  relative ">{children}</main>

      {/* Overlay Experiment */}
      {/*       <div className="h-1/12 w-full fixed left-0 right-0 bottom-0  bg-white/100 blur-3xl  " /> */}
    </div>
  );
};
