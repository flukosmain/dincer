import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Python Developer
        <span className="text-textGreen tracking-wide">@K-CODE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Styczen - Czerwiec 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Tworzenie boty Discord dla klientów.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Tworzenie aplikacji statystycznych dla klientów
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
