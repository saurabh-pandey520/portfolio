const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm">
          © {new Date().getFullYear()} Saurabh Pandey. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/saurabh-pandey520"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/saurabh-pandey-043339292"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="src/assets/saurabh_kumar_pandey_Resume.pdf"
            download
            className="hover:text-purple-400 transition"
          >
            Resume
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
