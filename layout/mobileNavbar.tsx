import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { RiCloseLine, RiSunFill } from "react-icons/ri";
import { BsFillMoonFill } from "react-icons/bs";

import { BlogContext } from "../contextApi/blogContext";
import { NavbarData, Navbar } from "../constants";

const MobileNavbar: React.FC = () => {
  const { dark, setDark } = useContext(BlogContext);
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="md:hidden z-20 sticky top-0 flex items-center justify-end h-[10vh] p-8 bg-[#ccf2f6] dark:bg-black">
        <button className="" onClick={() => setMenu(!menu)}>
          <SlMenu color={dark ? "#07d0e5" : "#c72c6c"} size={22} />
        </button>
      </div>
      <div
        className={`dark:bg-[rgba(53,34,34,0.28)] z-20 md:hidden w-screen block bg-[rgba(255,255,255,0.28)] h-screen fixed top-0 left-0 ${
          menu ? "" : "hidden"
        }`}
        onClick={() => setMenu(!menu)}
      >
        <div
          className={`w-[40vh] h-screen bg-[#ccf2f6] dark:bg-black z-20 ${
            menu ? "translate-x-0" : "translate-x-[100%]"
          } `}
        >
          <div className="flex items-center justify-end h-[12vh] p-8 dark:bg-black">
            <button className="" onClick={() => setMenu(!menu)}>
              <RiCloseLine color={dark ? "#07d0e5" : "#c72c6c"} size={30} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {NavbarData.map((item: Navbar) => (
              <div key={item.name}>
                <Link
                  className="navLinksMobile"
                  href={item.link}
                  onClick={() => setMenu(!menu)}
                >
                  {React.createElement(item.icon)} {item.name}
                </Link>
              </div>
            ))}

            <div className="fixed bottom-32 flex justify-center w-[40vh] left-0">
              <button
                onClick={() => {
                  setDark(!dark);
                  setMenu(!menu);
                }}
              >
                {dark ? (
                  <RiSunFill color="#c72c6c" size={22} />
                ) : (
                  <BsFillMoonFill color="#07d0e5" size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavbar;