export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-blue-600">
        Formación académica
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-slate-900">
            Ingeniería en Computación
          </h3>
          <p className="mt-2 text-slate-600">
            Universidad Nacional de Tucumán
          </p>
          <p className="mt-1 text-sm text-slate-500">
            2022 - 2027 (en curso)
          </p>
          <p className="mt-3 text-slate-600">
            Estudiante avanzado con formación en programación, redes, sistemas,
            bases de datos e inteligencia artificial.
          </p>
          <p className="mt-2 text-sm font-medium text-blue-600">
            Promedio actual: 7/10
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-slate-900">
            Bachiller en Administración de Empresas y Economía
          </h3>
          <p className="mt-2 text-slate-600">
            Instituto de Educación Integral
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Finalizado en 2020
          </p>
          <p className="mt-3 text-slate-600">
            Base académica que fortaleció mi organización, análisis y visión
            estructurada para resolver problemas.
          </p>
        </div>
      </div>
    </section>
  );
}