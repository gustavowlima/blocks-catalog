import { Fixedbar } from "../components/Fixedbar";

import blocksWebLogo from "../assets/blocks-web-logo.png";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <header className="flex flex-col">
        <Fixedbar />

        {/*  Logo Bar */}
        <div className="box-content flex h-[60px] w-full items-center justify-center bg-white-50 py-4">
          <img src={blocksWebLogo} alt="Logo Blocks" />
        </div>
        <span className="flexw-full h-[2px] bg-purpleGradient" />
      </header>

      {/* Page title container */}
      <div className="flex h-[94px] w-full flex-col justify-center bg-white-50 px-48 pb-[8px] shadow-md">
        <h2 className="text-left text-title font-bold">Catálogo</h2>
        <span className="flex h-1 w-[34px] rounded-full bg-purpleGradient" />
      </div>

      {/* Results container */}
      <div className="mt-[34px] flex w-full flex-col space-y-4 px-48">
        <h2 className="text-left text-2xl font-normal ">Resultados</h2>

        <div className="flex flex-wrap gap-4">
          <ProductCard />
        </div>
      </div>

      <Footer />
    </>
  );
};
