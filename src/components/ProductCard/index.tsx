import product from "../../assets/product.png";
import { ReactComponent as ArrowUpRight } from "../../assets/arrow-up-right.svg";

export const ProductCard = () => {
  return (
    <div className="flex h-[234px] w-44 flex-col items-center rounded-lg border-2 border-solid border-gray-100">
      <div className="flex flex-1 items-center justify-center">
        <img className="max-w-[5rem]" src={product} alt="Produto" />
      </div>
      <div className="flex h-9 w-full items-center border-t-2 border-solid border-gray-100 py-2">
        <p className="flex-1 pl-[6px] text-productTitle font-semibold leading-3">
          Lorem Ipsum is sLorem Ipsum is simply ....
        </p>
        <span className="flex h-full w-[2px] rounded-full bg-gray-100" />
        <span className="flex px-1">
          <ArrowUpRight width={20} height={20} />
        </span>
      </div>
    </div>
  );
};
