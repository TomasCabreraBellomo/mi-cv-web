export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Formación
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">
            Curso de programación
          </h3>
          <p className="mt-2 text-slate-600">
            Aprendiendo desarrollo web, JavaScript, React y Next.js.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">
            Universidad Nacional de Tucumán
          </h3>
          <p className="mt-2 text-slate-600">
            Cursando actualmente la carrera de Ingenieria en Computación
            
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">
            Cursos online
          </h3>
          <p className="mt-2 text-slate-600">
            Cursos que hiciste o estás haciendo para seguir mejorando.
          </p>
        </div>
      </div>
    </section>
  );
}