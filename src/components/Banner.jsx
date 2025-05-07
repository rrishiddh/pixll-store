import Image from "next/image";
import hero1 from "../asset/hero1.png";
import hero2 from "../asset/hero2.png";
import hero3 from "../asset/hero3.png";
import hero4 from "../asset/hero4.png";
import hero5 from "../asset/hero5.png";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(../asset/bg.png)]  bg-no-repeat bg-cover bg-center w-full">
        <div className="max-w-[740px] text-center mx-auto pt-[186px] mb-[48px]">
          <p className="text-[64px] max-sm:text-[32px] tracking-tight font-bold text-[rgba(255, 255, 255, 0.5)]">
            We Shape Your Ideas Into Awesome Digital Experience
          </p>
          <p className="text-[24px] max-sm:text-[18px]  mt-[24px] mb-[40px] font-medium text-[rgb(214, 224, 231)]">
            Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
          </p>
            <a href="#">
                    <button  className="font-semibold cursor-pointer max-sm:text-[16px] text-[20px] px-[32px] py-[20px] rounded-[48px] hover:from-[#3C97F5] hover:to-[#73BFFA] bg-gradient-to-r from-[#73BFFA] to-[#3C97F5]">
                      {" "}
                       Book a call with us 
                    </button>
                  </a>
         
        </div>
        <div className="max-w-[1140px] grid-cols-3 grid md:grid-cols-3 lg:grid-cols-5 gap-[30px] justify-between  mx-auto items-center pb-[32px]">
          <Image src={hero1} alt="hero1" className="max-sm:w-[auto] max-sm:h-[auto]md:w-[full] md:h-[full]" />
          <Image src={hero2} alt="hero2" className="max-sm:w-[auto] max-sm:h-[auto]md:w-[full] md:h-[full]" />
          <Image src={hero3} alt="hero3" className="max-sm:w-[auto] max-sm:h-[auto]md:w-[full] md:h-[full]" />
          <Image src={hero4} alt="hero4" className="max-sm:w-[auto] max-sm:h-[auto]md:w-[full] md:h-[full]" />
          <Image src={hero5} alt="hero4" className="max-sm:w-[auto] max-sm:h-[auto]md:w-[full] md:h-[full]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
