import { Title } from "@/icons/title";
import { TreeLog } from "@/icons/treeLog";

export const Intro = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-8 mt-4 md:my-8">
      {/*       <TreeLog className="w-16" /> */}

      <div className="flex flex-col items-center gap-2">
        <Title className="w-60 md:w-64" />
        <p className="font-mono italic text-xs">
          ~ A log for thoughts and whatever comes up ~
        </p>
      </div>
    </div>
  );
};
