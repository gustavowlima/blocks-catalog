import { ReactComponent as ArrowUpRight } from "../../assets/arrow-up-right.svg";
import { FamilyProps } from "./types";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProductCard: React.FC<FamilyProps> = ({ family }) => {
  const getFamilyImageURL = (id: string) => {
    return `https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${id}.jpg`;
  };

  return (
    <div className="flex h-[234px] w-44 flex-col items-center rounded-lg border-2 border-solid border-gray-100">
      <div className="flex flex-1 items-center justify-center">
        {family === undefined ? (
          <Skeleton height={100} width={100} />
        ) : (
          <img
            className="w-36"
            src={getFamilyImageURL(family.id)}
            alt="Produto"
          />
        )}

      </div>
      <div className="flex h-9 w-full items-center justify-center border-t-2 border-solid border-gray-100">
        {family === undefined ? (
          <Skeleton height={20} width={152} />
        ) : (
          <div className="flex h-full w-full py-2">
            <p className="flex h-full flex-1 items-center pl-[6px] text-productTitle font-semibold leading-3">
              {family.details.name}
            </p>
            <span className="flex h-full w-[2px] rounded-full bg-gray-100" />
            <span className="flex px-1">
              <ArrowUpRight width={20} height={20} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
