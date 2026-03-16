export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Habilidades
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Git",
          "Tailwind",
        ].map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-center font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}