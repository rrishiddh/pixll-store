import CommonHeading from "./CommonHeading";
import { MdArrowOutward } from "react-icons/md";

const Insights = () => {
  return (
    <>
      <CommonHeading
        heading="Featured Insights"
        subHeading="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."
      ></CommonHeading>

      <div className="mt-[40px] max-w-[1140px] p-6 w-full mx-auto items-center space-y-[24px]">
        {/* 01  */}
        <div className="list-decimal flex justify-between items-center p-[24px] text-[24px] bg-gradient-to-r from-[#73bffa34] from-0% to-[#0A0A0A] to-10% rounded-[8px]">
          <p>
            <span className="text-[#73BFFA]">01 </span> How to Protect Your
            Identity While Traveling
          </p>
          <button className="max-w-[20px]  items-center text-[20px] p-2 rounded-full">
            {" "}
            <MdArrowOutward className="text-4xl" />
          </button>
        </div>
        {/* 02  */}
        <div className="list-decimal flex justify-between items-center p-[24px] text-[24px] bg-gradient-to-r from-[#73bffa34] from-0% to-[#0A0A0A] to-10% rounded-[8px]">
          {" "}
          <p>
            <span className="text-[#73BFFA]">02 </span> How to Protect Your
            Identity While Traveling
          </p>
          <button className="max-w-[20px]  items-center text-[20px] p-2 rounded-full">
            {" "}
            <MdArrowOutward className="text-4xl" />
          </button>
        </div>
        {/* 03  */}
        <div className="list-decimal flex justify-between items-center p-[24px] text-[24px] bg-gradient-to-r from-[#73bffa34] from-0% to-[#0A0A0A] to-10% rounded-[8px]">
          {" "}
          <p>
            <span className="text-[#73BFFA]">03 </span> How to Protect Your
            Identity While Traveling
          </p>
          <button className="max-w-[20px]  items-center text-[20px] p-2 rounded-full">
            {" "}
            <MdArrowOutward className="text-4xl" />
          </button>
        </div>
        {/* 04  */}
        <div className="list-decimal flex justify-between items-center p-[24px] text-[24px] bg-gradient-to-r from-[#73bffa34] from-0% to-[#0A0A0A] to-10% rounded-[8px]">
          {" "}
          <p>
            <span className="text-[#73BFFA]">04 </span> How to Protect Your
            Identity While Traveling
          </p>
          <button className="max-w-[20px]  items-center text-[20px] p-2 rounded-full">
            {" "}
            <MdArrowOutward className="text-4xl" />
          </button>
        </div>
        {/* 05  */}
        <div className="list-decimal flex justify-between items-center p-[24px] text-[24px] bg-gradient-to-r from-[#73bffa34] from-0% to-[#0A0A0A] to-10% rounded-[8px]">
          {" "}
          <p>
            <span className="text-[#73BFFA]">05 </span> How to Protect Your
            Identity While Traveling
          </p>
          <button className="max-w-[20px]  items-center text-[20px] p-2 rounded-full">
            {" "}
            <MdArrowOutward className="text-4xl" />
          </button>
        </div>

        <button className="max-w-[201px] my-[48px] mx-auto flex items-center text-[20px] font-medium gap-2 py-[20px] px-[32px] rounded-full bg-linear-to-r from-[#73BFFA] to-[#3C97F5]"> View More <MdArrowOutward className="text-2xl" />
        </button>
      </div>
    </>
  );
};

export default Insights;
