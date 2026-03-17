export default function Achievements() {
  const achievements = [
    {
      title: "Beca Space Camp – NASA",
      description:
        "Programa de entrenamiento realizado en el U.S. Space & Rocket Center, Estados Unidos, a través de una beca otorgada por la Embajada de los Estados Unidos en Argentina.",
    },
    {
      title: "Nivel de inglés B2 certificado",
      description:
        "Certificación ECCE de la Universidad de Michigan, que acredita manejo intermedio-avanzado del idioma inglés en contextos académicos y profesionales.",
    },
  ];

  return (
    <section id="achievements" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-blue-600">
        Logros y destacados
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {achievement.title}
            </h3>

            <p className="mt-3 text-slate-600">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}