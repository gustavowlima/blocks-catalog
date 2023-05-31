import { Fixedbar } from "../components/Fixedbar";
import blocksWebLogo from "../assets/blocks-web-logo.png";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";
import api from "../services/api";
import { useEffect, useState } from "react";
import { FamiliesProps, SearchParamsProps } from "./types";
import { ReactComponent as LoadingSpinner } from "../assets/loading-spinner.svg";

export const Home = () => {
  const [familiesData, setFamiliesData] = useState<FamiliesProps[]>(
    [] as FamiliesProps[]
  );
  const [searchParams, setSearchParams] = useState<SearchParamsProps>({
    skip: 0,
    take: 21,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const getFamilies = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `/families?skip=${searchParams.skip}&take=${searchParams.take}`
      );
      setFamiliesData((previousFamilies) => [...previousFamilies, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFamilies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) =>
      entries.some(
        (entry) =>
          entry.isIntersecting &&
          setSearchParams((previousParams) => ({
            skip: previousParams.take,
            take: previousParams.take + 21,
          }))
      )
    );

    intersectionObserver.observe(
      document.getElementById("loading-point") as HTMLElement
    );

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-36">
      <Fixedbar />

      <header className="flex flex-col sm:pt-[67px]">
        
        {/*  Logo Bar */}
        <div className="box-content flex h-[60px] w-full items-center justify-center bg-white-50 py-4">
          <img src={blocksWebLogo} alt="Logo Blocks" />
        </div>
        <span className="flexw-full h-[2px] bg-purpleGradient" />
      </header>

      {/* Page title container */}
      <div className="md:px-15 flex h-[94px] w-full flex-col items-center justify-center bg-white-50 px-4 pb-[8px] shadow-md sm:px-24">
        <div className="items-left flex w-full max-w-[1328px] flex-col">
          <h2 className="w-full text-left text-title font-bold">Catálogo</h2>
          <span className="flex h-1 w-[34px] rounded-full bg-purpleGradient" />
        </div>
      </div>

      {/* Results container */}
      <div className="md:px-15 mt-[34px] flex w-full flex-col items-center px-4 sm:px-24">
        <div className="flex max-w-[1328px] flex-col space-y-4">
          <h2 className="text-left text-2xl font-normal">Resultados</h2>

          <div className="flex flex-wrap gap-2">
            {familiesData.map((item, index) => (
              <ProductCard key={index} family={item} />
            ))}
          </div>
        </div>
      </div>

      <span id="loading-point" />

      {/* Loading spinner */}
      {loading && (
        <div className="flex w-full justify-center py-5">
          <LoadingSpinner className="animate-spin" />
        </div>
      )}

      <Footer />
    </div>
  );
};
