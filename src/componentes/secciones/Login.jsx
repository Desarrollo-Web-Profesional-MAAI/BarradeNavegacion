import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (!email.includes("@")) {
      setError("Email inválido");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Simulación de login exitoso
    console.log("Login exitoso:", { email, password });
    setError("");
    alert("¡Login exitoso! Bienvenido a BARG Cursos");
    
    // Redirigir a home
    navigate("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >
        {/* Logo/Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
            <FaUser className="text-4xl text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Iniciar Sesión
          </h2>
          <p className="text-gray-600 mt-2">Bienvenido a BARG Cursos</p>
        </motion.div>

        {/* Mensaje de Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4"
          >
            {error}
          </motion.div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Email */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </motion.div>

          {/* Campo Contraseña */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </motion.div>

          {/* Recordar / Olvidé contraseña */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between text-sm"
          >
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              <span className="text-gray-600">Recordarme</span>
            </label>
            <a href="#" className="text-primary hover:text-secondary font-semibold">
              ¿Olvidaste tu contraseña?
            </a>
          </motion.div>

          {/* Botón Submit */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Iniciar Sesión
          </motion.button>
        </form>

        {/* Registro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600">
            ¿No tienes cuenta?{" "}
            <a href="#" className="text-primary hover:text-secondary font-bold">
              Regístrate aquí
            </a>
          </p>
        </motion.div>

        {/* Línea divisoria */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center my-6"
        >
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">O continúa con</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </motion.div>

        {/* Botones de Redes Sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4"
        >
          <button className="flex-1 border-2 border-gray-300 py-2 rounded-lg hover:border-primary hover:bg-gray-50 transition-all duration-300">
            <span className="font-semibold">Google</span>
          </button>
          <button className="flex-1 border-2 border-gray-300 py-2 rounded-lg hover:border-primary hover:bg-gray-50 transition-all duration-300">
            <span className="font-semibold">GitHub</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Login;