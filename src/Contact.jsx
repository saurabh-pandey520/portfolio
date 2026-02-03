const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-purple-400">Touch</span>
        </h2>

        <p className="text-gray-400 mb-10">
          I’m open to frontend opportunities, internships, and collaborations.
        </p>

        <div className="space-y-4 text-sm">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:pandeysaurabh16939@gmail.com"
              className="text-purple-400 hover:underline"
            >
              pandeysaurabh16939@gmail.com
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/saurabh-pandey-043339292"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline"
            >
              linkedin.com/in/saurabh-pandey-043339292
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/saurabh-pandey520"
              target="_blank"

              rel="noreferrer"
              className="text-purple-400 hover:underline"
            >
              github.com/saurabh-pandey520
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
