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

function Blog() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const posts = [
    {
      titulo: "Cómo estructurar tu portafolio como desarrollador",
      fecha: "Junio 20, 2025",
      descripcion:
        "Guía sobre cómo crear un portafolio que no solo muestre tus proyectos, sino también tu perfil profesional.",
      imagen: "/src/assets/img/imagen.jpeg",
      enlace: "/blog/post-1",
    },
    {
      titulo: "10 recursos imprescindibles para frontend developers",
      fecha: "Mayo 14, 2025",
      descripcion:
        "Herramientas, sitios y librerías que te facilitan la vida como desarrollador frontend.",
      imagen: "/src/assets/img/ImagenRefeKoyag.png",
      enlace: "#",
    },
    {
      titulo: "De monolitos a microservicios: experiencia real",
      fecha: "Abril 02, 2025",
      descripcion:
        "Cómo migré un backend monolítico a microservicios usando Node.js, Docker y otras tecnologías.",
      imagen: "/src/assets/img/imagen.jpeg",
      enlace: "#",
    },
    {
      titulo: "Mejorando la productividad como developer",
      fecha: "Marzo 10, 2025",
      descripcion:
        "Técnicas, herramientas y hábitos que me han ayudado a ser más productivo en desarrollo.",
      imagen: "/src/assets/img/imagen.jpeg",
      enlace: "#",
    },
    {
      titulo: "Guía completa de Tailwind CSS",
      fecha: "Febrero 18, 2025",
      descripcion:
        "Desde los fundamentos hasta componentes avanzados para dominar Tailwind CSS.",
      imagen: "/src/assets/img/imagen.jpeg",
      enlace: "#",
    },
    {
      titulo: "API REST vs GraphQL: ¿cuál elegir?",
      fecha: "Enero 8, 2025",
      descripcion:
        "Ventajas y desventajas de cada uno. Cuándo usar REST, cuándo GraphQL y en qué casos combinarlos.",
      imagen: "/src/assets/img/imagen.jpeg",
      enlace: "#",
    },
  ];

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
            <span className="text-purple-500">Blog</span> de desarrollo y más.
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Publicaciones sobre desarrollo, programación, experiencias,
            recursos, reflexiones y mucho más del mundo tech.
          </p>
        </section>

        {/* Blog Cards tipo proyectos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a
              href={post.enlace}
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={post.imagen}
                alt={post.titulo}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/70 group-hover:text-white">
                    {post.fecha}
                  </p>
                  <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-500">
                    {post.titulo}
                  </h4>
                  <p className="text-sm text-white/90 mt-2">
                    {post.descripcion}
                  </p>
                </div>
                <div className="flex justify-end">
                  <span className="text-purple-500 text-sm hover:underline mt-4 flex items-center gap-1 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Leer más <span className="text-xl">↗</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </section>
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

export default Blog;
