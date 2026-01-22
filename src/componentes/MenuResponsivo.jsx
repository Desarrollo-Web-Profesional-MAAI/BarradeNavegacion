import { navbarLinks } from "../data/data";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const MenuResponsivo = ({ open }) => {
  const animacion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          {...animacion}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white rounded-b-md py-7 m-6">
            <ul className="flex flex-col justify-center items-center gap-10">
              {navbarLinks.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="cursor-pointer"
                >
                  <Link to={item.url}>{item.title}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;