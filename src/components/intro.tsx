import { Title } from "@/icons/title";

export const Intro = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <div className="flex flex-col items-center gap-2">
        <Title className="w-60 md:w-64" />
        <p className="font-mono italic text-xs">
          ~ A log for thoughts and whatever comes up ~
        </p>
      </div>
    </div>
  );
};
