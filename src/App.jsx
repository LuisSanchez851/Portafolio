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

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Menú superior centrado con fondo tipo transparencia */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-800 bg-white/70 text-black dark:bg-black/70 dark:text-white backdrop-blur-md">
        <a
          href="/"
          className="hover:text-purple-400 transition-transform duration-200 hover:scale-110"
        >
          <FaHome />
        </a>
        <a
          href="/proyectos"
          className="hover:text-purple-400 transition-transform duration-200 hover:scale-110"
        >
          <FaCode />
        </a>
        <a
          href="/home"
          className="font-bold px-3 hover:text-purple-400 transition-transform duration-200 hover:scale-110"
        >
          Luis Sánchez <span className="text-purple-400">dev</span>
        </a>

        <a
          href="/portafolio"
          className="hover:text-purple-400 transition-transform duration-200 hover:scale-110"
        >
          <FaBriefcase />
        </a>
        <a
          href="/blog"
          className="hover:text-purple-400 transition-transform duration-200 hover:scale-110"
        >
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
        <section id="home" className="text-center">
          {/* Imagen de perfil */}
          <div className="flex justify-center">
            <img
              src="/src/assets/img/Me.jpg"
              alt="Luis Sanchez"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6">
            Software developer, <br className="hidden md:block" />
            founder, and tech enthusiast.
          </h1>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Soy Luis Sanchez, un desarrollador apasionado por crear soluciones
            digitales efectivas y escalables. Me enfoco en desarrollo fullstack,
            diseño de software y compartir conocimiento.
          </p>
        </section>

        <section id="home" className="text-center py-10">
          <div className="flex justify-center gap-6 text-2xl">
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
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
            Mis Proyectos
          </h3>

          <div className="flex gap-6 overflow-x-auto">
            {/* Proyecto 1 */}
            <a
              href="/basedatoscompleta"
              target="_blank"
              rel="oopener noreferrer"
              className="group relative min-w-[300px] md:min-w-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="/src/assets/img/imagen.jpeg"
                alt="Base de datos completa"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/70 group-hover:text-white">
                    2025
                  </p>
                  <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-500">
                    Base de datos completa
                  </h4>
                  <p className="text-sm text-white/90 mt-2">
                    Desarrollé por completo una base de datos desde la
                    diagramacion de tablas, relaciones, documentacion de uso de
                    MySQL, creacion de Backend, creacion de Frontend,
                    autenticacion de usuarios, operaciones CRUD, operaciones
                    HTTP.
                  </p>
                </div>

                {/* Botón solo aparece en hover */}
                <div className="flex justify-end">
                  <span className="text-purple-500 text-sm hover:underline mt-4 flex items-center gap-1 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Más información... <span className="text-xl">↗</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Proyecto 2 */}
            <a
              href="/proyecto-koyag"
              target="_blank"
              rel="oopener noreferrer"
              className="group relative min-w-[300px] md:min-w-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="/src/assets/img/ImagenRefeKoyag.png"
                alt="Tester e Integraciones a sistemas"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/70 group-hover:text-white">
                    2024
                  </p>
                  <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-500">
                    Tester e Integraciones a sistemas
                  </h4>
                  <p className="text-sm text-white/90 mt-2">
                    Descubrimiento de herramientas necesarias para el entorno de
                    plataformas, investigacion de requisitor, proceso de
                    integracion, pruebas en entornos de pruebas, simulando
                    entornos productivos, documentacion del proceso y
                    resultados.
                  </p>
                </div>

                <div className="flex justify-end">
                  <span className="text-purple-500 text-sm hover:underline mt-4 flex items-center gap-1 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Más información... <span className="text-xl">↗</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Proyecto 3 */}
            <a
              href="/proyecto-koyag"
              target="_blank"
              rel="oopener noreferrer"
              className="group relative min-w-[300px] md:min-w-[450px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src="/src/assets/img/ImagenRefeKoyag.png"
                alt="Tester e Integraciones a sistemas"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-white/70 group-hover:text-white">
                    2024
                  </p>
                  <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-500">
                    Tester e Integraciones a sistemas
                  </h4>
                  <p className="text-sm text-white/90 mt-2">
                    Descubrimiento de herramientas necesarias para el entorno de
                    plataformas, investigacion de requisitor, proceso de
                    integracion, pruebas en entornos de pruebas, simulando
                    entornos productivos, documentacion del proceso y
                    resultados.
                  </p>
                </div>

                <div className="flex justify-end">
                  <span className="text-purple-500 text-sm hover:underline mt-4 flex items-center gap-1 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Más información... <span className="text-xl">↗</span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Navegación */}
          <div className="flex justify-center gap-6 mt-6 text-2xl text-white/70">
            <button className="hover:text-purple-500">←</button>
            <button className="hover:text-purple-500">→</button>
          </div>

          {/* Tecnologías */}
          <div className="flex justify-center gap-4 mt-8 bg-white dark:bg-neutral-900 px-6 py-5 rounded-xl">
            <img
              src="/src/assets/img/html.png"
              alt="HTML"
              className="w-9 h-9"
            />
            <img src="/src/assets/img/css.png" alt="CSS" className="w-9 h-9" />
            <img
              src="/src/assets/img/javascript.png"
              alt="JavaScript"
              className="w-9 h-9"
            />
            <img
              src="/src/assets/img/react2.png"
              alt="React"
              className="w-9 h-9"
            />
            <img
              src="/src/assets/img/piton.png"
              alt="Python"
              className="w-9 h-9"
            />
            <img
              src="/src/assets/img/mysql.png"
              alt="MySQL"
              className="w-9 h-9"
            />
            <img
              src="/src/assets/img/tailwind.png"
              alt="Tailwind"
              className="w-9 h-9"
            />
            <img
              src="/src/assets/img/docker.png"
              alt="Docker"
              className="w-9 h-9"
            />
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
            Portafolio / Experiencia
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Parte izquierda - Logros / Proyectos */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Proyecto 1 */}
              <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                  September 5, 2023
                </p>
                <h4 className="text-xl font-bold">
                  Sistema de diseño para una plataforma educativa
                </h4>
                <p className="text-sm mt-2">
                  Desarrollé un sistema de diseño y componentes para una
                  plataforma educativa enfocada en la accesibilidad,
                  escalabilidad y experiencia del usuario.
                </p>
                <a
                  href="#"
                  className="text-purple-500 text-sm hover:underline mt-2 flex items-center gap-1"
                >
                  Leer más <span>↗</span>
                </a>
              </div>

              {/* Proyecto 2 */}
              <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                  July 22, 2023
                </p>
                <h4 className="text-xl font-bold">
                  Desarrollo de animaciones web de alto rendimiento
                </h4>
                <p className="text-sm mt-2">
                  Implementé animaciones fluidas para sitios web corporativos
                  usando tecnologías como Framer Motion, logrando una mejora del
                  35% en la retención de usuarios.
                </p>
                <a
                  href="#"
                  className="text-purple-500 text-sm hover:underline mt-2 flex items-center gap-1"
                >
                  Leer más <span>↗</span>
                </a>
              </div>

              {/* Proyecto 3 */}
              <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                  March 10, 2023
                </p>
                <h4 className="text-xl font-bold">
                  Migración de backend a microservicios
                </h4>
                <p className="text-sm mt-2">
                  Lideré la migración de un backend monolítico a arquitectura de
                  microservicios en Node.js y Docker, mejorando la escalabilidad
                  y el tiempo de respuesta.
                </p>
                <a
                  href="#"
                  className="text-purple-500 text-sm hover:underline mt-2 flex items-center gap-1"
                >
                  Leer más <span>↗</span>
                </a>
              </div>
            </div>

            {/* Parte derecha - Experiencia Laboral */}
            <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-8 shadow-lg self-center max-w-[380px]">
              <h4 className="text-xl font-bold mb-4">Experiencia Laboral</h4>
              <div className="flex flex-col gap-6">
                {/* Empresa 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="/src/assets/img/Logo Brandstrat.webp"
                      alt="Brandstrat"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">Brandstrat</p>
                      <p className="text-sm text-gray-600 dark:text-white/70">
                        Practicante de Tecnología
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-white/50">
                    Enero - Julio 2025
                  </p>
                </div>

                {/* Empresa 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="/src/assets/img/Logo Koyag.png"
                      alt="Koyag"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">Koyag</p>
                      <p className="text-sm text-gray-600 dark:text-white/70">
                        Practicante de Tecnología
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-white/50">
                    Enero - Julio 2024
                  </p>
                </div>
              </div>

              {/* Botón de descargar CV */}
              <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
                Descargar CV ↓
              </button>
            </div>
          </div>
        </section>

        {/* Sección Blog */}
        <section id="blog" className="py-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
            Blog
          </h3>

          <div className="flex flex-col gap-8">
            {/* Publicación */}
            <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                Junio 20, 2025
              </p>
              <h4 className="text-xl font-bold">
                Cómo estructurar un portafolio profesional como desarrollador
              </h4>
              <p className="text-sm mt-2">
                Un portafolio bien diseñado no solo muestra tus proyectos, sino
                también tu pensamiento, proceso y evolución como profesional.
                Aquí te cuento los puntos clave para construirlo.
              </p>
              <a
                href="#"
                className="text-purple-500 text-sm hover:underline mt-3 flex items-center gap-1"
              >
                Leer artículo <span>↗</span>
              </a>
            </div>

            {/* Publicación */}
            <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                Mayo 14, 2025
              </p>
              <h4 className="text-xl font-bold">
                10 recursos imprescindibles para desarrolladores frontend
              </h4>
              <p className="text-sm mt-2">
                En este artículo comparto herramientas, librerías, sitios y
                utilidades que considero indispensables para cualquier
                desarrollador frontend moderno.
              </p>
              <a
                href="#"
                className="text-purple-500 text-sm hover:underline mt-3 flex items-center gap-1"
              >
                Leer artículo <span>↗</span>
              </a>
            </div>

            {/* Publicación */}
            <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
                Abril 02, 2025
              </p>
              <h4 className="text-xl font-bold">
                De monolitos a microservicios: experiencia real migrando
                proyectos
              </h4>
              <p className="text-sm mt-2">
                Te cuento mi experiencia migrando un backend monolítico a una
                arquitectura de microservicios utilizando Node.js, Docker y
                otras tecnologías. Retos, soluciones y aprendizajes reales.
              </p>
              <a
                href="#"
                className="text-purple-500 text-sm hover:underline mt-3 flex items-center gap-1"
              >
                Leer artículo <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-500 mb-10 text-center">
            Contacto
          </h3>
          <form className="mt-6 space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 rounded bg-gray-700"
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full p-2 rounded bg-gray-700"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full p-2 rounded bg-gray-700 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 px-4 py-2 rounded text-white"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      {/* Footer con logo */}
      <footer className="text-center py-8 flex flex-col items-center gap-3">
        <img
          src="/src/assets/img/Logo LS.png"
          alt="Logo Luis Sanchez"
          className="w-14 h-14"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 Luis Sánchez. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
