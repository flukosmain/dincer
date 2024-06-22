import { useRef } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  }
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky bg-transparent backdrop-blur top-0 z-50 bg- px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <p className="text-3xl">&lt;dincer /&gt;</p>
          </motion.div>
        </Link>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Strona głowna
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textGreen"></span>
                O mnie
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen"></span>
                Moje doświadczenie
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen"></span>
                Kontakt
              </motion.li>
            </Link>
          </ul>
        </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Strona główna
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textGreen"></span>
                      O mnie
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textGreen"></span>
                      Moje doświadczenie
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textGreen"></span>
                      Kontakt
                    </motion.li>
                  </Link>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
