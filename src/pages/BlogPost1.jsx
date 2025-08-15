import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaCode,
  FaBriefcase,
  FaBlog,
} from "react-icons/fa";

function BlogPost() {
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

      {/* Contenido del post */}
      <main className="pt-32 px-6 md:px-20 lg:px-40">
        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Publicado el 20 de junio, 2025
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
              Cómo estructurar tu portafolio como desarrollador
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Una guía completa para construir un portafolio profesional que te
              ayude a destacar en el mundo del desarrollo.
            </p>
            <img
              src="/assets/img/imagen.jpeg"
              alt="Imagen del post"
              className="w-full rounded-xl mt-8"
            />
          </header>

          {/* Contenido */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Un portafolio no es solo una galería de proyectos, sino una forma
              de contar quién eres como profesional. Aquí te comparto algunos
              puntos clave:
            </p>

            <h2>1. Introducción Personal</h2>
            <p>
              Comienza hablando de quién eres, tus intereses, tu motivación por
              aprender y qué te llevó al mundo del desarrollo.
            </p>

            <h2>2. Muestra tus proyectos</h2>
            <p>
              Elige entre 3 y 6 proyectos que reflejen tus habilidades. Para
              cada uno incluye:
            </p>
            <ul>
              <li>Captura o video del proyecto</li>
              <li>Descripción breve</li>
              <li>Retos enfrentados y soluciones</li>
              <li>Stack tecnológico</li>
              <li>Enlace a GitHub o demo</li>
            </ul>

            <h2>3. Destaca tus habilidades</h2>
            <p>
              Puedes incluir una sección de habilidades con logos, gráficos o
              simplemente texto sobre tecnologías que dominas.
            </p>

            <h2>4. Información de contacto</h2>
            <p>
              Facilita que te contacten. Incluye tus redes, correo o un
              formulario.
            </p>

            <blockquote>
              👉 Recuerda: Un portafolio es un proyecto vivo. Actualízalo
              constantemente.
            </blockquote>

            <p>Espero que esta guía te sea de utilidad 🚀.</p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 flex flex-col items-center gap-3">
        <img
          src="/public/assets/img/Logo LS.png"
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

export default BlogPost;
