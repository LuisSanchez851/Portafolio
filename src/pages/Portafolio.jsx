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

// Helper para rutas robustas (respeta BASE_URL y encodea)
const asset = (p) => encodeURI(`${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`);
// Fallback genérico (existe en tu carpeta)
const FALLBACK = asset("assets/img/imagen.jpeg");

function Portafolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-800 bg-white/70 text-black dark:bg-black/70 dark:text-white backdrop-blur-md">
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

      {/* Toggle modo claro/oscuro */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full shadow-md border bg-white dark:bg-black dark:text-white dark:border-gray-700"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      <main className="pt-32 px-6 md:px-20 lg:px-40">
        {/* Hero */}
        <section className="text-center">
          <img
            src={asset("/public/assets/img/Me.jpg")}
            alt="Luis Sánchez"
            onError={(e) => (e.currentTarget.src = FALLBACK)}
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
            Mi Portafolio <br /> y Experiencia
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Soy Luis Sanchez, Desarrollador Fullstack y entusiasta de la
            tecnología. Me especializo en crear aplicaciones modernas, bases de
            datos robustas y experiencias digitales escalables.
          </p>
        </section>

        {/* Experiencia */}
        <section className="mt-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-8 text-center">
            Experiencia Laboral
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: 1,
                logo: "/public/assets/img/Logo-Brandstrat.webp",
                empresa: "Brandstrat",
                cargo: "Practicante de Tecnología",
                periodo: "Enero - Julio 2025",
                descripcion:
                  "Apoyo al equipo de desarrollo en tareas de mantenimiento, automatización de procesos, pruebas de calidad y documentación de sistemas empresariales.",
              },
              {
                id: 2,
                logo: "/public/assets/img/Logo-Koyag.png",
                empresa: "Koyag",
                cargo: "Practicante de Tecnología",
                periodo: "Enero - Julio 2024",
                descripcion:
                  "Implementación de integraciones con APIs, documentación de procesos, soporte técnico y pruebas funcionales dentro de entornos de staging.",
              },
            ].map((exp) => (
              <div
                key={exp.id}
                className="group bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition relative flex flex-col items-center text-center"
              >
                <img
                  src={asset(exp.logo)}
                  alt={exp.empresa}
                  onError={(e) => (e.currentTarget.src = FALLBACK)}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{exp.empresa}</p>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    {exp.cargo}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white/50">
                    {exp.periodo}
                  </p>
                </div>

                {/* Descripción al hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                  <p className="text-sm text-gray-600 dark:text-white/80">
                    {exp.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificaciones */}
        <section className="mt-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-8 text-center">
            Títulos y Certificaciones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                logo: "/public/assets/img/Logo-Uniempresarial.png",
                titulo: "Ingeniería de Software",
                proveedor: "Uniempresarial",
                fecha: "2026",
              },
              {
                id: 2,
                logo: "/public/assets/img/platzi-logo.png",
                titulo: "Certificación en React Developer",
                proveedor: "Platzi",
                fecha: "2023",
              },
              {
                id: 3,
                logo: "/public/assets/img/Logo-SENA.png",
                titulo: "Técnico en Mecatrónica",
                proveedor: "SENA",
                fecha: "2021",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition relative flex flex-col items-center text-center"
              >
                <img
                  src={asset(cert.logo)}
                  alt={cert.proveedor}
                  onError={(e) => (e.currentTarget.src = FALLBACK)}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{cert.proveedor}</p>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    {cert.fecha}
                  </p>
                </div>

                {/* Info visible al hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                  <p className="font-semibold">{cert.titulo}</p>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    {cert.proveedor} - {cert.fecha}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologías */}
        <section className="mt-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-8 text-center">
            Tecnologías Usadas
          </h3>
          <div className="flex flex-wrap justify-center gap-6 bg-white dark:bg-neutral-900 p-6 rounded-xl">
            {["html", "css", "javascript", "react2", "tailwind", "mysql", "docker"].map(
              (tech) => (
                <img
                  key={tech}
                  src={asset(`assets/img/${tech}.png`)}
                  alt={tech}
                  onError={(e) => (e.currentTarget.src = FALLBACK)}
                  className="w-10 h-10"
                />
              )
            )}
          </div>
        </section>

        {/* Botón Descargar CV */}
        <div className="mt-10 flex justify-center">
          <a
            href={asset("assets/LuisSanchezCV.pdf")}
            download
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            Descargar CV ↓
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 flex flex-col items-center gap-3">
        <img
          src={asset("/public/assets/img/Logo-LS.png")}
          alt="Logo Luis Sanchez"
          onError={(e) => (e.currentTarget.src = FALLBACK)}
          className="w-14 h-14"
        />
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/LuisSanchez851">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/luis-s%C3%A1nchez-c-936b901b8/">
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

export default Portafolio;
