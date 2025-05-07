import Image from "next/image";
import hero1 from '../asset/hero1.png';
import hero2 from '../asset/hero2.png';
import hero3 from '../asset/hero3.png';
import hero4 from '../asset/hero4.png';
import hero5 from '../asset/hero5.png';


const Banner = () => {
  return (
    <>
      <div className="bg-[url(../asset/bg.png)]  bg-no-repeat bg-cover bg-center w-full">
        <div className="max-w-[740px] text-center mx-auto pt-[186px] mb-[48px]">
          <p className="text-[64px] tracking-tight font-bold text-[rgba(255, 255, 255, 0.5)]">
            We Shape Your Ideas Into Awesome Digital Experience
          </p>
          <p className="text-[24px] mt-[24px] mb-[40px] font-medium text-[rgb(214, 224, 231)]">
            Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
          </p>
          <button className="font-semibold text-[20px] px-[32px] py-[20px] rounded-[48px] bg-gradient-to-r from-[#73BFFA] to-[#3C97F5]">
            Book a call with us
          </button>
        </div>
        <div className="max-w-[1140px] grid-cols-2 grid md:grid-cols-3 lg:grid-cols-5 gap-[30px] justify-between  mx-auto items-center pb-[32px]">
          <Image src={hero1} alt="hero1" className="w-[full] h-[full]" />
          <Image src={hero2} alt="hero1" className="w-[full] h-[full]" />
          <Image src={hero3} alt="hero1" className="w-[full] h-[full]" />
          <Image src={hero4} alt="hero1" className="w-[full] h-[full]" />
          <Image src={hero5} alt="hero1" className="w-[full] h-[full]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
