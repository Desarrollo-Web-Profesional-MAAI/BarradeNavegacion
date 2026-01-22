import { motion } from "motion/react";

const Home = () => {
  return (
    <section
      id="/"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-orange-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bienvenido a <span className="text-primary">BARG Cursos</span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Tu plataforma de aprendizaje profesional
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Home;