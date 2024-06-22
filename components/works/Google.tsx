import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Discord BOT Creator
        <span className="text-textGreen tracking-wide">@EditVerse</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Czerwiec - do teraz 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Tworzenie boty Discord dla klientów.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
