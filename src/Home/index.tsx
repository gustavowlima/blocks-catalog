import { Fixedbar } from "../components/Fixedbar";

import blocksWebLogo from "../assets/blocks-web-logo.png";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";
import api from "../services/api";
import { useEffect, useState } from "react";
import { FamiliesProps } from "./types";

export const Home = () => {
  const [familiesData, setFamiliesData] = useState<FamiliesProps[]>(
    [] as FamiliesProps[]
  );

  const getFamilies = async () => {
    try {
      const { data } = await api.get("/families?skip=0&take=20");
      setFamiliesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFamilies();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col h-full pb-36">
      <Fixedbar />

      <header className="flex flex-col sm:pt-[67px]">
        {/*  Logo Bar */}
        <div className="box-content flex h-[60px] w-full items-center justify-center bg-white-50 py-4">
          <img src={blocksWebLogo} alt="Logo Blocks" />
        </div>
        <span className="flexw-full h-[2px] bg-purpleGradient" />
      </header>

      {/* Page title container */}
      <div className="flex h-[94px] w-full flex-col items-center justify-center bg-white-50 px-6 pb-[8px] shadow-md">
        <div className="items-left flex w-full max-w-[1328px] flex-col">
          <h2 className="w-full text-left text-title font-bold">Catálogo</h2>
          <span className="flex h-1 w-[34px] rounded-full bg-purpleGradient" />
        </div>
      </div>

      {/* Results container */}
      <div className="mt-[34px] flex w-full flex-col items-center px-6">
        <div className="flex w-full max-w-[1328px] flex-col space-y-4">
          <h2 className="text-left text-2xl font-normal">Resultados</h2>

          <div className="flex flex-wrap gap-4">
            {familiesData.map((item) => (
              <ProductCard family={item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
