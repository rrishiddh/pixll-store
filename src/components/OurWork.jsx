import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import work1 from "../asset/work1.png";
import work2 from "../asset/work2.png";
import work3 from "../asset/work3.png";
import work4 from "../asset/work4.png";
import work5 from "../asset/work5.png";
import CommonHeading from "./CommonHeading";

const OurWork = () => {
  return (
    <>
      <CommonHeading heading="Our Most Recent Works" subHeading="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."></CommonHeading>

      {/* card section */}
      <div className="max-w-[1140px]  w-full mx-auto items-center mt-[150px] ">
        {/* 1st row  */}
        <div className="grid grid-cols-2 gap-[32px]">
          {/* card1  */}
          <div className="w-full max-w-[554px] p-1 rounded-[16px]">
            <Image src={work1} alt="work1" className="w-[full] h-[full]" />
            <div className="flex justify-between items-center p-6">
              <div className="space-y-4">
                <p className="font-bold text-[32px]">Alcohol Tracker</p>
                <p className=" text-[24px] text-[#D1D1D1]">
                  All-In-One (AIO) Service
                </p>
              </div>
              <button className=" flex items-center text-[24px] gap-2 py-2 px-4 rounded-full bg-[#93d1fd1d]"> Open <MdArrowOutward className="text-4xl" />
              </button>
            </div>
          </div>
          {/* card2  */}
          <div className="w-full max-w-[554px] p-1 rounded-[16px]">
            <Image src={work2} alt="work2" className="w-[full] h-[full]" />
            <div className="flex justify-between items-center p-6">
              <div className="space-y-4">
                <p className="font-bold text-[32px]">Rely</p>
                <p className=" text-[24px] text-[#D1D1D1]">
                  All-In-One (AIO) Service
                </p>
              </div>
              <button className=" flex items-center text-[24px] gap-2 py-2 px-4 rounded-full bg-[#93d1fd1d]"> Open <MdArrowOutward className="text-4xl" />
              </button>
            </div>
          </div>
        </div>

        {/* 2nd row  */}
        <div className="grid grid-cols-3 gap-[24.04px] mb-[48px]">
          {/* card1  */}
          <div className="w-full max-w-[365px] p-1 rounded-[10.54px]">
            <Image
              src={work3}
              alt="work3"
              className="w-[full] h-[full]"
            />
            <div className="flex justify-between items-center p-4">
              <div className="space-y-2">
                <p className="font-bold text-[20px]">Alcohol Tracker</p>
                <p className=" text-[14px] text-[#D1D1D1]">
                  All-In-One (AIO) Service
                </p>
              </div>
              <button className=" flex items-center text-[16px] gap-2 py-2 px-4 rounded-full bg-[#93d1fd1d]"> Open <MdArrowOutward className="text-4xl" />
              </button>
            </div>
          </div>
          {/* card2  */}
          <div className="w-full max-w-[365px] p-1 rounded-[10.54px]">
            <Image
              src={work4}
              alt="work4"
              className="w-[full] h-[full]"
            />
            <div className="flex justify-between items-center p-4">
              <div className="space-y-2">
                <p className="font-bold text-[20px]">Finance Website</p>
                <p className=" text-[14px] text-[#D1D1D1]">
                  All-In-One (AIO) Service
                </p>
              </div>
              <button className=" flex items-center text-[16px] gap-2 py-2 px-4 rounded-full bg-[#93d1fd1d]"> Open <MdArrowOutward className="text-4xl" />
              </button>
            </div>
          </div>
          {/* card3  */}
          <div className="w-full max-w-[365px] p-1 rounded-[10.54px]">
            <Image
              src={work5}
              alt="work5"
              className="w-[full] h-[full]"
            />
            <div className="flex justify-between items-center p-4">
              <div className="space-y-2">
                <p className="font-bold text-[20px]">Alcohol Tracker</p>
                <p className=" text-[14px] text-[#D1D1D1]">
                  All-In-One (AIO) Service
                </p>
              </div>
              <button className=" flex items-center text-[16px] gap-2 py-2 px-4 rounded-full bg-[#93d1fd1d]"> Open <MdArrowOutward className="text-4xl" />
              </button>
            </div>
          </div>
        </div>

        <button className="max-w-[201px] my-[48px] mx-auto flex items-center text-[20px] font-medium gap-2 py-[20px] px-[32px] rounded-full bg-linear-to-r from-[#73BFFA] to-[#3C97F5]"> View More <MdArrowOutward className="text-2xl" />
        </button>
      </div>
    </>
  );
};

export default OurWork;
