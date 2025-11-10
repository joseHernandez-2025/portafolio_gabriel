import Link from "next/link";

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
            src="/shared image.jpg"
            alt="José Gabriel"
            width={130}
            height={130}
            className="rounded-full object-cover shadow-lg"
          />
          <h2 className="text-4xl font-bold mt-6">José Gabriel Hernández</h2>
          <p className="text-gray-600 mt-3 max-w-md">
            Estudiante | futuro Ing. en logisticas y aduanas | Joven con principios
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
            en Fundación Glasswing, enseñando inglés a niños de escasos recursos. Tambien me desarrollo personalmente
            en actividades que fortalecen mis habilidades blandas creando una cinergia entre mi vida
            personal y mi desarrollo profecional.
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
              <img
              src="/Image (1).jpg"
              alt="Imagen"
              className="w-[500px] h-[150px] object-cover rounded-xl mb-4"
            />
              <p className="text-gray-700">
                Plataforma que conecta jóvenes sin experiencia con pequeñas empresas.
                Participé en el diseño y desarrollo, ayudando a nuestro equipo a ganar Expo Tec.
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm text-left">
              <h4 className="font-semibold mb-2">Iglesia Manantial de Vida</h4>
               <img
              src="/shared image (1).jpg"
              alt="Imagen"
              className="w-[500px] h-[150px] object-cover rounded-xl mb-4"
            />
              <p className="text-gray-700">
                Líder y maestro, organizando actividades y talleres para jóvenes y niños,
                fomentando valores, disciplina y crecimiento personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="flex justify-center items-center gap-10 py-20 bg-amber-50 border-t border-gray-800">
          <div>
            <img
              src="/shared image (2).jpg"
              alt="Foto de contacto"
              className="h-[500px] w-auto rounded-xl"
            />
          </div>
 
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl font-bold mb-2">Mis contactos</h2>
            <p className="text-blue-400 hover:underline mb-2">
            </p>
            <Link
              href="https://www.linkedin.com/in/jos%C3%A9-gabriel-hern%C3%A1ndez-linares-795892367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-blue-400 hover:underline mt-2"
              >
                LinkedIn
              </Link>
            <p className="text-blue-400">Email: jgabriel.hlinares@gmail.com</p>
          </div>
        </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-600">
        © 2025 José Gabriel Hernández — Portafolio personal
      </footer>
    </main>
  );
}

