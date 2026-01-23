import { motion } from "motion/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonios = () => {
  const testimoniosData = [
    {
      id: 1,
      nombre: "María González",
      puesto: "Desarrolladora Frontend",
      empresa: "TechCorp México",
      imagen: "https://i.pravatar.cc/150?img=5",
      testimonio:
        "BARG Cursos transformó completamente mi carrera. Los cursos de React y Tailwind me ayudaron a conseguir mi trabajo soñado. La calidad del contenido es excepcional y los instructores están siempre disponibles para ayudar. ¡100% recomendado!",
      rating: 5,
      fecha: "Hace 2 meses",
    },
    {
      id: 2,
      nombre: "Carlos Ramírez",
      puesto: "Full Stack Developer",
      empresa: "Innovation Labs",
      imagen: "https://i.pravatar.cc/150?img=12",
      testimonio:
        "La mejor inversión que he hecho en mi educación. Los proyectos prácticos me dieron la experiencia real que necesitaba. En solo 3 meses pasé de principiante a poder crear aplicaciones profesionales. El curso de Framer Motion es simplemente increíble.",
      rating: 5,
      fecha: "Hace 1 mes",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
      <div className="container">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-primary">estudiantes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de estudiantes han transformado sus carreras con nuestros cursos.
            Lee sus experiencias.
          </p>
        </motion.div>

        {/* Estadísticas Rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">5,000+</h3>
            <p className="text-gray-600">Estudiantes Activos</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">4.9/5</h3>
            <p className="text-gray-600">Calificación Promedio</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
            <p className="text-gray-600">Tasa de Satisfacción</p>
          </div>
        </motion.div>

        {/* Tarjetas de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimoniosData.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              {/* Icono de comillas decorativo */}
              <div className="absolute top-4 right-4 text-primary/10">
                <FaQuoteLeft className="text-6xl" />
              </div>

              {/* Header con foto y datos */}
              <div className="flex items-center mb-6 relative z-10">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary shadow-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonio.nombre}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonio.puesto}</p>
                  <p className="text-sm text-primary font-semibold">
                    {testimonio.empresa}
                  </p>
                </div>
              </div>

              {/* Rating con estrellas */}
              <div className="flex items-center mb-4">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {testimonio.fecha}
                </span>
              </div>

              {/* Testimonio */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonio.testimonio}"
              </p>

              {/* Badge verificado */}
              <div className="mt-6 inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                ✓ Estudiante Verificado
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para unirte a ellos?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Comienza Hoy Gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonios;