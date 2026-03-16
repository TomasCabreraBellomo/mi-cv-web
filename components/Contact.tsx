export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-16 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8">
        Contacto
      </h2>

      <div className="space-y-4 text-lg">

        <p>
          📧 Email: 
          <a
            href="mailto:tuemail@gmail.com"
            className="text-blue-600 ml-2"
          >
            tuemail@gmail.com
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/tuusuario"
            className="text-blue-600 ml-2"
          >
            github.com/tuusuario
          </a>
        </p>

        <p>
          🔗 LinkedIn:
          <a
            href="https://linkedin.com"
            className="text-blue-600 ml-2"
          >
            linkedin.com/in/tuusuario
          </a>
        </p>

      </div>
    </section>
  );
}
