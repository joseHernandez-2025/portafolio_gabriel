"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-800">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="font-bold text-lg">José Gabriel</h1>
          <ul className="flex gap-4 text-sm">
            <li><a href="#about" className="hover:underline">Sobre mí</a></li>
            <li><a href="#skills" className="hover:underline">Habilidades</a></li>
            <li><a href="#projects" className="hover:underline">Proyectos</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="pt-32 pb-20 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/avatar.jpg"
            alt="José Gabriel"
            width={130}
            height={130}
            className="rounded-full object-cover shadow-lg"
          />
          <h2 className="text-4xl font-bold mt-6">José Gabriel Hernández</h2>
          <p className="text-gray-600 mt-3 max-w-md">
            Estudiante | Desarrollador Web en formación | Entusiasta del inglés y la tecnología
          </p>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-6">¿Quién soy?</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            Estudiante en formación y becario del programa empresarial Súperate, especializado
            en inglés, programación y valores. Actualmente curso mi último año y soy voluntario
            en Fundación Glasswing, enseñando inglés a niños de escasos recursos.
          </p>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="skills" className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-10">Habilidades y fortalezas</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">Técnicas</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Microsoft Excel & Power BI</li>
                <li>Python (básico)</li>
                <li>Comunicación en inglés</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">Blandas</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Liderazgo</li>
                <li>Pensamiento estratégico</li>
                <li>Trabajo en equipo</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">Crecimiento</h4>
              <p className="text-gray-700">
                Mejora continua mediante proyectos, voluntariado y participación en iniciativas
                sociales y tecnológicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-10">Proyectos destacados</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 shadow-sm text-left">
              <h4 className="font-semibold mb-2">Dexpert</h4>
              <p className="text-gray-700">
                Plataforma que conecta jóvenes sin experiencia con pequeñas empresas.
                Participé en el diseño y desarrollo, ayudando a nuestro equipo a ganar Expo Tec.
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm text-left">
              <h4 className="font-semibold mb-2">Iglesia Manantial de Vida</h4>
              <p className="text-gray-700">
                Líder y maestro, organizando actividades y talleres para jóvenes y niños,
                fomentando valores, disciplina y crecimiento personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-6">Contáctame</h3>
          <form className="max-w-md mx-auto text-left space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Mensaje"
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-600">
        © 2025 José Gabriel Hernández — Portafolio personal
      </footer>
    </main>
  );
}

