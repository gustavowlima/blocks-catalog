import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

export const Fixedbar = () => {
  const [visibled, setVisibled] = useState(true);

  return (
    <div
      className={`${
        visibled ? "animate-slideTop" : "animate-slideBottom"
      } fixed bottom-0 z-50 flex h-auto w-full flex-col items-center justify-center gap-6 space-x-5 bg-black-100 px-6 py-4 sm:top-0 sm:h-[67px] sm:flex-row sm:animate-none`}
    >
      <div
        className="flex cursor-pointer items-center justify-center gap-1 text-white-100 sm:hidden"
        onClick={() => setVisibled(false)}
      >
        <span>Fechar</span> <X />
      </div>

      <p className="text-center text-white-100">
        Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
        <strong>BRL 19,99</strong>
      </p>

      {/* Button Premium */}
      <div className="flex items-center justify-center rounded-lg bg-white-50 bg-purpleGradient p-[2px]">
        <button className="flex h-[43px] w-[235px] items-center justify-between rounded-lg bg-transparent px-4 font-semibold text-white-100 transition-colors hover:bg-black-100">
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
