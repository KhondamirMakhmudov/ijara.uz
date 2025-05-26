import Image from "next/image";
import BrandIcon from "../icons/brand";

const Brand = () => {
  return (
    <div className="flex items-center gap-[2px]">
      <BrandIcon />
      <p className="text-2xl font-medium">Ijara.uz</p>
    </div>
  );
};

export default Brand;
