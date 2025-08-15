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

function Home() {
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

      {/* Botón modo claro/oscuro */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full shadow-md border bg-white dark:bg-black dark:text-white dark:border-gray-700"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      <main className="pt-32 px-6 md:px-20 lg:px-40">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Columna izquierda - texto */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
              Soy Luis Sánchez. <br />
              Vivo en Bogotá, Colombia, donde desarrollo el futuro.
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Siempre me ha apasionado entender cómo funcionan las cosas.
              Escribí mi primer programa a los 8 años, mientras experimentaba
              con una vieja computadora que había en casa. Desde ese momento
              supe que la tecnología sería parte de mi vida.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Me encanta crear soluciones que impacten, desde aplicaciones web
              robustas hasta bases de datos escalables, backend eficientes y
              experiencias visuales atractivas.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Actualmente trabajo como desarrollador fullstack, combinando
              proyectos freelance con formación continua en áreas como
              arquitectura de software, cloud computing y diseño de interfaces.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Fuera del código, me apasiona aprender sobre innovación, leer
              sobre tecnología, jugar videojuegos y compartir conocimiento.
            </p>
          </div>

          {/* Columna derecha - imagen y redes */}
          <div className="flex flex-col items-center gap-6">
            <img
              src="/public/assets/img/Me.jpg"
              alt="Luis Sánchez"
              className="w-64 h-64 rounded-2xl object-cover"
            />

            <div className="space-y-3 w-full">
              <a
                href="https://github.com/LuisSanchez851"
                target="_blank"
                className="flex items-center gap-3 hover:text-purple-500"
              >
                <FaGithub /> <span>Follow on GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/luis-sánchez-c-936b901b8/"
                target="_blank"
                className="flex items-center gap-3 hover:text-purple-500"
              >
                <FaLinkedin /> <span>Follow on LinkedIn</span>
              </a>
            </div>

            <div className="border-t border-gray-700 w-full pt-4">
              <a
                href="mailto:luisdev@example.com"
                className="flex items-center gap-3 hover:text-purple-500"
              >
                <FaEnvelope /> <span>luisdev@example.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Galería horizontal */}
        <section className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <div className="flex gap-4 overflow-x-auto px-4 py-4">
            {[
              "/public/assets/img/Avion-2.jpg",
              "/public/assets/img/paisaje-2.jpg",
              "/public/assets/img/ME-2.jpg",
              "/public/assets/img/Paisaje.jpg",
              "/public/assets/img/Mar.jpg",
              "/public/assets/img/Castillo.jpg",
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Galería ${idx}`}
                className="h-80 w-60 rounded-3xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </section>

        {/* Sobre mí */}
        <section className="mt-16 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 text-center">
            Sobre mí
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p>🚀 Soy alguien que disfruta aprender y experimentar.</p>
              <p>✈️ Amante de los viajes y la naturaleza.</p>
              <p>💡 Me encanta compartir conocimiento.</p>
              <p>🎯 Siempre estoy buscando nuevos retos.</p>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-500">
                Intereses personales
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Inteligencia Artificial y Machine Learning</li>
                <li>Desarrollo Web & Backend</li>
                <li>Automatización y DevOps</li>
                <li>Cine, fotografía y exploración</li>
                <li>Viajar y conocer otras culturas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 text-center">
            Mis valores y filosofía
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                titulo: "Aprender Siempre",
                texto: "El aprendizaje constante es clave.",
              },
              {
                titulo: "Compromiso",
                texto: "Enfocado siempre en calidad e impacto.",
              },
              { titulo: "Compartir", texto: "El conocimiento es para todos." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold mb-2 text-purple-500">
                  {item.titulo}
                </h4>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Línea de tiempo */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-10 text-center">
            Mi trayectoria
          </h2>
          <div className="relative border-l-4 border-purple-500 ml-6 justify-center">
            {[
              { fecha: "2021", evento: "Técnico en Mecatrónica - SENA" },
              {
                fecha: "2024",
                evento: "Practicante en Koyag - Integraciones y QA",
              },
              {
                fecha: "2025",
                evento: "Practicante en Brandstrat - Desarrollo",
              },
              {
                fecha: "2026",
                evento: "Ingeniería de Software - Uniempresarial",
              },
            ].map((item, idx) => (
              <div key={idx} className="mb-8 ml-4">
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 border border-white dark:border-black"></div>
                <p className="text-sm text-gray-500 dark:text-white/70">
                  {item.fecha}
                </p>
                <h4 className="text-lg font-semibold">{item.evento}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 flex flex-col items-center gap-3">
        <img
          src="/public/assets/img/Logo-LS.png"
          alt="Logo Luis Sánchez"
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

export default Home;
