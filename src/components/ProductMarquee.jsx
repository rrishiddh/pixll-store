import Marquee from "react-fast-marquee";
import Image from "next/image";
import marquee1 from "../asset/marquee1.png";
import marquee2 from "../asset/marquee2.png";
import marquee3 from "../asset/marquee3.png";

const ProductMarquee = () => {
  return (
    <>
      <Marquee pauseOnClick autoFill className="my-[32px]">
        {/* 1st */}
        <div className="rounded-[24px] mr-[36px] ">
          <Image
            src={marquee1}
            alt="marquee1"
            
            className="max-sm:w-[auto] max-sm:h-[auto] md:w-[457px] md:h-[306px]"
          />
        </div>
        {/* 2nd */}
        <div className="rounded-[24px] mr-[36px] ">
          <Image
            src={marquee2}
            alt="marquee2"
            className="max-sm:w-[auto] max-sm:h-[auto] md:w-[457px] md:h-[306px]"
          />
        </div>
        {/* 3rd */}
        <div className="rounded-[24px] mr-[36px]">
          <Image
            src={marquee3}
            alt="marquee2"
            className="max-sm:w-[auto] max-sm:h-[auto] md:w-[457px] md:h-[306px]"
          />
        </div>
      </Marquee>
    </>
  );
};

export default ProductMarquee;
