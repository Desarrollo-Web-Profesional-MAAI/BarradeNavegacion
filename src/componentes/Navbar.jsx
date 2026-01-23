import { useState } from "react";
import { navbarLinks } from "../data/data";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuResponsivo from "./MenuResponsivo";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="shadow-md"
      >
        <div className="container flex justify-between font-bold items-center py-8">
          {/* Sección de Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl flex items-center gap-2 uppercase cursor-pointer"
          >
            <ImBooks className="text-primary" />
            <p>El sitio de BARG</p>
            <p className="text-secondary">Cursos</p>
          </motion.div>

          {/* Sección de Menú */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.url}
                    className="inline-block py-1 px-3 hover:text-primary transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Sección de Iconos */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
            >
              <CiSearch />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
            >
              <PiShoppingCartLight />
            </motion.button>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block"
              >
                Ingresar
              </motion.button>
            </Link>
          </div>

          {/* Sección móvil */}
          <div className="md:hidden">
            <MdMenu
              onClick={() => setAbierto(!abierto)}
              className="text-4xl cursor-pointer hover:text-primary transition-colors"
            />
          </div>
        </div>
      </motion.nav>

      {/* Menú Responsivo */}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  );
};

export default Navbar;