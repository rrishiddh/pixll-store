const CommonHeading = ({ heading, subHeading }) => {
  return (
    <>
      <div className="max-w-[700px] bg-[url(../asset/serviceBg.png)]   bg-no-repeat bg-cover bg-center w-full mx-auto items-center mt-[150px]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-bold text-[48px] max-sm:text-[32px]   text-[#ffffffe7] mb-1">
            {heading}
          </p>
          <p className=" max-w-[372px]   mx-auto text-[20px] max-sm:text-[16px]  text-[#D6E0E7] mb-1.5">
            {subHeading}
          </p>
        </div>
      </div>
    </>
  );
};

export default CommonHeading;
