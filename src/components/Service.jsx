import Image from "next/image";
import service1 from "../asset/service1.png";
import { MdArrowOutward } from "react-icons/md";
import service2 from "../asset/service2.png";
import service3 from "../asset/service3.png";
import service4 from "../asset/service4.png";


const Service = () => {
  return (
<div className="max-w-[1140px] bg-[url(../asset/serviceBg.png)]  bg-no-repeat bg-cover bg-center w-full mx-auto items-center my-[88px]">
      <p className="font-medium text-[40px] text-left text-[#6D6D6D]">
        We are a full-service studio creating transformative{" "}
        <span className="text-[#FFFFFF]">
          digital experiences and solutions.{" "}
        </span>
        specializing in{" "}
        <span className="text-[#FFFFFF]"> websites and web</span> applications.
      </p>

      <div className="grid grid-cols-4 ">
        {/* card1  */}
        <div className="relative top-[49px] left-0 bg-[url(../asset/serviceCard1.png)]  bg-no-repeat bg-cover bg-center w-full max-w-[290.5px] px-[26px] py-[30px] rounded-[16px]">
          <Image src={service1} alt="service1" className="w-[full] h-[full]" />
          <div className="flex justify-between items-center mt-[64px] mb-[16px]">
            <p className="font-bold text-[24px]">All-In-One (AIO) Service</p>
            <MdArrowOutward className="text-4xl" />
          </div>
          <p className="text-[#D1D1D1]">
            Our AIO solution tailors to your unique vision, crafting a website
            that truly reflects...
          </p>
        </div>
        {/* card2  */}
        <div className="relative top-[113px] left-0 bg-[url(../asset/serviceCard2.png)]  bg-no-repeat bg-cover bg-center w-full max-w-[290.5px] px-[26px] py-[30px] rounded-[16px]">
          <Image src={service2} alt="service1" className="w-[full] h-[full]" />
          <div className="flex justify-between items-center mt-[64px] mb-[16px]">
            <p className="font-bold text-[24px]">Project-Based Development</p>
            <MdArrowOutward className="text-4xl" />
          </div>
          <p className="text-[#D1D1D1]">
          Ideal for agencies with ready designs, our service focuses on bringing...
          </p>
        </div>
        {/* card3 */}
        <div className="relative top-[66px] left-0 bg-[url(../asset/serviceCard3.png)]  bg-no-repeat bg-cover bg-center w-full max-w-[290.5px] px-[26px] py-[30px] rounded-[16px]">
          <Image src={service3} alt="service1" className="w-[full] h-[full]" />
          <div className="flex justify-between items-center mt-[64px] mb-[16px]">
            <p className="font-bold text-[24px]">Scalable Dev Partnership</p>
            <MdArrowOutward className="text-4xl" />
          </div>
          <p className="text-[#D1D1D1]">
          Our partnership is designed for businesses needing consistent development support...
          </p>
        </div>
        {/* card4 */}
        <div className=" relative top-0 left-0 bg-[url(../asset/serviceCard3.png)]  bg-no-repeat bg-cover bg-center w-full max-w-[290.5px] px-[26px] py-[30px] rounded-[16px]">
          <Image src={service4} alt="service1" className="w-[full] h-[full]" />
          <div className="flex justify-between items-center mt-[64px] mb-[16px]">
            <p className="font-bold text-[24px]">End-to-End Consulting</p>
            <MdArrowOutward className="text-4xl" />
          </div>
          <p className="text-[#D1D1D1]">
          Our partnership is designed for businesses needing consistent development support...
          </p>
        </div>
      </div>
      
    </div>
    
  );
};

export default Service;
