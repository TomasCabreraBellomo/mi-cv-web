export default function Skills() {
  const skillGroups = [
    {
      title: "Programación",
      items: ["Python", "Java", "C", "Assembly (RISC-V 32)"],
    },
    {
      title: "Bases de datos",
      items: [
        "SQL",
        "MySQL Workbench",
        "Modelado conceptual",
        "Modelo relacional",
      ],
    },
    {
      title: "Sistemas",
      items: [
        "Linux",
        "Terminal",
        "Gestión de paquetes",
        "Máquinas virtuales",
      ],
    },
    {
      title: "Redes",
      items: [
        "Configuración de redes IP",
        "Routers y switches",
        "Cableado estructurado",
        "Infraestructura básica",
      ],
    },
    {
      title: "IA y visión por computadora",
      items: [
        "TensorFlow / Keras",
        "PyTorch",
        "OpenCV",
        "Scikit-image",
      ],
    },
    {
      title: "Idiomas",
      items: ["Castellano nativo", "Inglés B2", "Alemán A1"],
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-blue-600">
        Habilidades
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {group.title}
            </h3>

            <ul className="mt-4 space-y-2 text-slate-600">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}