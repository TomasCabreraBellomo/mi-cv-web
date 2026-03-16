import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Estudiante avanzado de Ingenieria en Computación
        </p>

        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Tomas Ignacio Cabrera Bellomo        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
          Estudiante de programación interesado en desarrollo web,
          frontend y backend, con ganas de seguir aprendiendo y
          construir proyectos modernos.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
          >
            Contactarme
          </a>

          <a
            href="#education"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Ver formación
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-full bg-white p-2 shadow-xl">
          <Image
            src="/profile.jpg"
            alt="Foto de perfil"
            width={220}
            height={220}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
