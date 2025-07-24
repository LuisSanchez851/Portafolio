import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaCode,
  FaBriefcase,
  FaBlog,
} from "react-icons/fa";

function Proyectos() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-800 bg-white/70 dark:bg-black/70 backdrop-blur-md">
        <a href="/" className="hover:text-purple-400">
          <FaHome />
        </a>
        <a href="/proyectos" className="hover:text-purple-400">
          <FaCode />
        </a>
        <a
          href="/home"
          className="font-bold px-3 hover:text-purple-400 transition-transform duration-200 hover:scale-110"
        >
          Luis Sánchez <span className="text-purple-400">dev</span>
        </a>
        <a href="/portafolio" className="hover:text-purple-400">
          <FaBriefcase />
        </a>
        <a href="/blog" className="hover:text-purple-400">
          <FaBlog />
        </a>
      </div>

      {/* Botón modo oscuro */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full shadow-md border bg-white dark:bg-black dark:border-gray-700"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      <main className="pt-32 px-6 md:px-20 lg:px-40">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Mis Proyectos <br />
            <span className="text-purple-500">y Experimentos</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Aquí te muestro algunos de los proyectos en los que he trabajado,
            desde desarrollos freelance, colaboraciones hasta proyectos propios
            donde aplico nuevas tecnologías y metodologías.
          </p>
        </section>

        {/* Grid de proyectos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              nombre: "Sistema de Gestión Empresarial",
              descripcion:
                "Desarrollo fullstack para control de inventarios, ventas y clientes. Incluye autenticación, API REST y dashboards.",
              imagen: "/src/assets/img/imagen.jpeg",
              tecnologias: ["React", "Node.js", "MySQL", "Tailwind"],
              enlace: "https://github.com/",
            },
            {
              nombre: "Plataforma E-learning",
              descripcion:
                "Plataforma educativa con control de cursos, usuarios, pagos y backend escalable con Node y MongoDB.",
              imagen: "/src/assets/img/ImagenRefeKoyag.png",
              tecnologias: ["React", "MongoDB", "Express", "Docker"],
              enlace: "https://github.com/",
            },
            {
              nombre: "Web para agencia creativa",
              descripcion:
                "Sitio web responsive, rápido y accesible para una agencia de diseño. Animaciones con Framer Motion.",
              imagen: "/src/assets/img/imagen.jpeg",
              tecnologias: ["Next.js", "Tailwind", "Framer Motion"],
              enlace: "https://github.com/",
            },
          ].map((proyecto, index) => (
            <a
              href={proyecto.enlace}
              key={index}
              target="_blank"
              className="group bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="w-full h-48 object-cover group-hover:brightness-110 group-hover:scale-105 transition"
              />
              <div className="p-5">
                <h4 className="text-xl font-bold mb-2 group-hover:text-purple-500">
                  {proyecto.nombre}
                </h4>
                <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
                  {proyecto.descripcion}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-500 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/portafolio"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Ver más en mi portafolio →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 flex flex-col items-center gap-3">
        <img
          src="/src/assets/img/Logo LS.png"
          alt="Logo Luis Sanchez"
          className="w-14 h-14"
        />
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/LuisSanchez851">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/luis-sánchez-c-936b901b8/">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 Luis Sánchez. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Proyectos;
