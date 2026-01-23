import { motion } from "motion/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  const infoContacto = [
    {
      icon: <FaPhone />,
      titulo: "Teléfono",
      info: "+52 461 234 5678",
      link: "tel:+524612345678",
    },
    {
      icon: <FaEnvelope />,
      titulo: "Email",
      info: "contacto@bargcursos.com",
      link: "mailto:contacto@bargcursos.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      titulo: "Dirección",
      info: "Av. Insurgentes 1234, Col. Centro, Celaya, Gto. 38000, México",
      link: "https://maps.google.com",
    },
  ];

  const redesSociales = [
    { icon: <FaLinkedin />, link: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: <FaTwitter />, link: "https://twitter.com", color: "hover:text-blue-400" },
    { icon: <FaFacebook />, link: "https://facebook.com", color: "hover:text-blue-700" },
    { icon: <FaInstagram />, link: "https://instagram.com", color: "hover:text-pink-600" },
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
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte. Envíanos un mensaje
            y te responderemos lo antes posible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Columna Izquierda: Información de la Empresa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Sobre la Empresa */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                BARG Cursos S.A. de C.V.
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Somos la plataforma líder en educación tecnológica en México,
                comprometidos con formar a los profesionales del futuro. Desde
                2020, hemos ayudado a más de 5,000 estudiantes a alcanzar sus
                metas profesionales.
              </p>

              {/* CEO Info */}
              <div className="border-t pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    GB
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-800">
                      Gabriel Barrón Rodríguez
                    </h4>
                    <p className="text-primary font-semibold">CEO & Fundador</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  "Nuestra misión es democratizar la educación tecnológica y
                  hacer que el conocimiento de calidad sea accesible para todos."
                </p>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-4">
              {infoContacto.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="bg-white p-6 rounded-xl shadow-lg flex items-start hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="text-3xl text-primary mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      {item.titulo}
                    </h4>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h4 className="font-bold text-gray-800 mb-4 text-center">
                Síguenos en Redes Sociales
              </h4>
              <div className="flex justify-center gap-4">
                {redesSociales.map((red, index) => (
                  <motion.a
                    key={index}
                    href={red.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-3xl text-gray-600 ${red.color} transition-colors`}
                  >
                    {red.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Horario de Atención */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl shadow-lg"
            >
              <h4 className="font-bold mb-3 text-lg">Horario de Atención</h4>
              <div className="space-y-2 text-sm">
                <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábados: 10:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Enviar Mensaje
              </motion.button>
            </form>

            {/* Nota de privacidad */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              Al enviar este formulario, aceptas nuestra{" "}
              <a href="#" className="text-primary hover:underline">
                Política de Privacidad
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;