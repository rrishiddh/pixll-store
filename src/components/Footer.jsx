const Footer = () => {
  return (
    <>
      <div className="bg-[url(../asset/footerBg.png)]  bg-no-repeat bg-cover bg-center w-full">
        <div className="max-w-[1140px]  w-full mx-auto items-center py-[39px]">
          {/* 1st div  */}
          <div className=" flex justify-between items-center">
            <div className="text-left">
              <p className="text-[24px] text-[#F6F6F6]">
                Have a project in mind?
              </p>
              <p className="text-[64px] font-bold text-[#93D1FD]">
                {" "}
                Let's Talk
              </p>
            </div>
            <div className="text-right flex flex-col underline space-y-4">
              <a href="https://www.linkedin.com/">Linkedin</a>
              <a href="https://github.com/">Github</a>
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://www.instagram.com/">Instagram</a>
              <a href="https://x.com/">Twitter</a>
            </div>
          </div>
          {/* 2nd div  */}
          <div className="flex justify-between items-center mt-[32px]">
            <a
              href="mailto:hey@pixll.com"
              className=" font-medium text-[64px] underline"
            >
              hey@pixll.com
            </a>
            <div className="text-[#888888] flex gap-[13px] text-right ">
              <a href="#" className=" underline">
                Privacy
              </a>
              <a href="#" className=" underline">
                Terms
              </a>
            </div>

            <p className="text-[#888888]">© 2017 - 2025 Pixll</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
