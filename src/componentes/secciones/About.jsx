import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          Sobre Nosotros
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          BARG Cursos es una plataforma educativa dedicada a ofrecer los mejores
          cursos de tecnología y desarrollo web. Nuestro objetivo es ayudarte a
          alcanzar tus metas profesionales con contenido de calidad y
          actualizado.
        </motion.p>
      </div>
    </section>
  );
};

export default About;