import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          Estudiante avanzado de Ingeniería en Computación
        </p>

        <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Tomás Cabrera Bellomo
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Perfil técnico orientado al desarrollo de software, inteligencia
          artificial, redes y bases de datos, con fuerte interés en construir
          soluciones modernas, escalables y bien diseñadas.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-200 transition hover:scale-[1.02] hover:shadow-xl"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 shadow-sm transition hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-full bg-white/80 p-3 shadow-2xl ring-1 ring-slate-200 backdrop-blur">
          <Image
            src="/profile.jpg"
            alt="Foto de perfil de Tomás Cabrera Bellomo"
            width={240}
            height={240}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}