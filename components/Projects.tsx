export default function Projects() {
  const projects = [
    {
      title:
        "Red Neuronal Convolucional para Detección de Patologías en Radiografías",
      description:
        "Proyecto académico desarrollado en equipo para el entrenamiento de una CNN orientada a la detección de patologías médicas en radiografías de tórax.",
      details: [
        "Trabajo colaborativo en equipo de 3 integrantes",
        "Entrenamiento y evaluación de modelos en Google Colab",
        "Aplicación de técnicas de visión por computadora e inteligencia artificial",
      ],
      tech: [
        "Python",
        "TensorFlow / Keras",
        "PyTorch",
        "OpenCV",
        "Scikit-image",
        "Google Colab",
      ],
      github:
        "https://github.com/antoniojv2003/TFI-INTELIGENCIA-ARTIFICIAL-2025",
      demo: "#",
    },
    {
      title: "Diseño y Modelado de Base de Datos Empresarial",
      description:
        "Proyecto académico centrado en el modelado y diseño completo de una base de datos empresarial, con foco en integridad, consistencia y optimización estructural.",
      details: [
        "Modelo de abstracción",
        "Modelo Entidad-Relación",
        "Modelo relacional y diccionario de datos",
      ],
      tech: [
        "SQL",
        "Modelado de datos",
        "Diseño relacional",
        "MySQL Workbench",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Mi CV Web",
      description:
        "Sitio web personal desarrollado para presentar mi perfil académico, habilidades, proyectos y datos de contacto en una interfaz moderna y responsive.",
      details: [
        "Desarrollo frontend con componentes reutilizables",
        "Deploy en Vercel con integración a GitHub",
        "Diseño responsive y estructura profesional",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      github: "https://github.com/TomasCabreraBellomo/mi-cv-web",
      demo: "https://mi-cv-web-vercel.vercel.app",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-blue-600">
        Proyectos
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {project.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2 text-slate-600">
              {project.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  GitHub
                </a>
              )}

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}