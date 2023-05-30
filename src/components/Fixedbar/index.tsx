import { ArrowRight } from "lucide-react";

export const Fixedbar = () => {
  return (
    <div className="flex h-[67px] w-full items-center justify-center space-x-5 bg-black-100">
      <span className="text-white-100">
        Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
        <strong>BRL 19,99</strong>
      </span>

      <div className="flex items-center justify-center rounded-lg bg-white-50 bg-purpleGradient p-[2px]">
        <button className="flex h-[43px] w-[235px] items-center justify-between rounded-lg bg-transparent px-4 text-white-100 transition-colors hover:bg-black-100">
          Quero ser Premium
          <div className="flex items-center justify-center space-x-2 ">
            <span className="flex h-[27px] w-[2px] bg-white-50" />
            <ArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};
