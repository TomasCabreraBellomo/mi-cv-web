export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold text-slate-900">
          Tomas Cabrera
        </h1>

        <div className="flex gap-6 text-sm font-medium text-slate-700">
          <a href="#about" className="transition hover:text-blue-600">
            Sobre mí
          </a>

          <a href="#education" className="transition hover:text-blue-600">
            Formación
          </a>

          <a href="#skills" className="transition hover:text-blue-600">
            Habilidades
          </a>

          <a href="#contact" className="transition hover:text-blue-600">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
