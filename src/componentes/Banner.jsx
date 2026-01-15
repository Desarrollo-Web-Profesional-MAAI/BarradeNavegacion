import { motion } from "motion/react";
import { FaBookOpen, FaGraduationCap, FaCertificate } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bienvenido a BARG Cursos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Aprende las mejores tecnologías con expertos de la industria.
            Cursos prácticos y certificaciones reconocidas.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Explorar Cursos
          </motion.button>
        </motion.div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
          >
            <FaBookOpen className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100+ Cursos</h3>
            <p className="text-white/90">
              Contenido actualizado y relevante para el mercado actual
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
          >
            <FaGraduationCap className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Instructores Expertos</h3>
            <p className="text-white/90">
              Aprende de profesionales con años de experiencia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
          >
            <FaCertificate className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Certificaciones</h3>
            <p className="text-white/90">
              Obtén certificados reconocidos por la industria
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;