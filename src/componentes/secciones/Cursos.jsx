import { motion } from "motion/react";

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      nombre: "Curso de React",
      descripcion: "Aprende React desde cero hasta avanzado",
    },
    {
      id: 2,
      nombre: "Curso de Tailwind",
      descripcion: "Domina Tailwind CSS para diseños modernos",
    },
    {
      id: 3,
      nombre: "Curso de Framer Motion",
      descripcion: "Crea animaciones increíbles en React",
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Nuestros Cursos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cursos.map((curso, index) => (
            <motion.div
              key={curso.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-6 shadow-lg rounded-xl bg-orange-50 cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-2 text-primary">
                {curso.nombre}
              </h3>
              <p className="text-gray-600">{curso.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;