export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-blue-600">
        Formación
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-slate-900">
            Ingeniería en Computación
          </h3>
          <p className="mt-2 text-slate-600">
            Estudiante avanzado, enfocado en seguir desarrollando habilidades
            técnicas y construir una base sólida en software y tecnología.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-slate-900">
            Desarrollo Web
          </h3>
          <p className="mt-2 text-slate-600">
            Aprendiendo y practicando HTML, CSS, JavaScript, React, Next.js
            y buenas prácticas de desarrollo frontend.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-slate-900">
            Aprendizaje continuo
          </h3>
          <p className="mt-2 text-slate-600">
            Formación constante en programación, herramientas modernas y
            conceptos vinculados a inteligencia artificial y software.
          </p>
        </div>
      </div>
    </section>
  );
}