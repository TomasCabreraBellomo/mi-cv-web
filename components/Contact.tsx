export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-16 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-blue-600
">
        Contacto
      </h2>

      <div className="space-y-4 text-lg">

        <p>
          📧 Email: 
          <a
            href="mailto:tuemail@gmail.com"
            className="text-blue-600 ml-2"
          >
            tomycabrera2003@gmail.com
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/tuusuario"
            className="text-blue-600 ml-2"
          >
https://github.com/TomasCabreraBellomo          </a>
        </p>

        <p>
          🔗 LinkedIn:
          <a
            href="https://linkedin.com"
            className="text-blue-600 ml-2"
          >
            linkedin.com/in/TomasCabreraBellomo
          </a>
        </p>

      </div>
    </section>
  );
}
