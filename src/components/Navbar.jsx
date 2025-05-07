import Image from "next/image";
import logo from '../asset/logo.png';
import menu from '../asset/menu.png';

const Navbar = () => {
  return (
    <>
<div className="fixed top-[32px] left-1/2 transform -translate-x-1/2 z-10 p-[24px] text-center box-border rounded-[80px] backdrop-blur-[30px] bg-[rgba(10, 10, 10, 0.1)] border-2 border-[rgba(255,255,255,0.1)] fill-[#0A0A0A1A] flex justify-between w-full max-w-[1063px]">
<Image
          src={logo}
          alt='logo'
          className="w-[39px] h-[36px]"
        />
        <div className="flex gap-[37.33px] items-center">
            <p>Work</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <Image
          src={menu}
          alt='menu'
          className="w-[32px] h-[32px]"
        />
        </div>
      </div>
    </>
  );
};

export default Navbar;
