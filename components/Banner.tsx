import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-4 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Czesc! jestem...
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl ] font-titleFont font-semibold flex flex-col"
      >
        dincer
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Jestem 15-letnim programistą z zajawką. Głownie pisze boty na platforme Discord, oraz swoje programy do raidowania serwerów. Sprawia mi przyjemnośc niszczenie serwerów discord tzw. pseudo developerom. Boty discord pisze na zamówienie, więc zapraszam.{" "}
        <a href="#about" target="">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Dowiedz się więcej
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
    </section>
  );
};

export default Banner;
