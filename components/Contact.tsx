export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-blue-600">
          Contacto
        </h2>

        <p className="mb-6 text-lg text-slate-600">
          Estoy abierto a oportunidades de aprendizaje, proyectos y experiencias
          que me permitan seguir creciendo en el área de desarrollo de software,
          inteligencia artificial y tecnología.
        </p>

        <div className="space-y-4 text-lg text-slate-700">
          <p>
            📧 Email:
            <a
              href="mailto:tomycabrera2003@gmail.com"
              className="ml-2 font-medium text-blue-600 hover:underline"
            >
              tomycabrera2003@gmail.com
            </a>
          </p>

          <p>
            📍 Ubicación:
            <span className="ml-2 text-slate-600">
              San Miguel de Tucumán, Argentina
            </span>
          </p>

          <p>
            💼 LinkedIn:
            <a
              href="https://www.linkedin.com/in/tomás-cabrera-bellomo"
              target="_blank"
              rel="noreferrer"
              className="ml-2 font-medium text-blue-600 hover:underline"
            >
              Tomás Cabrera Bellomo
            </a>
          </p>

          <p>
            📞 Teléfono:
            <span className="ml-2 text-slate-600">
              +54 387 4201094
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}