const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>

        <p className="text-gray-400 max-w-3xl leading-relaxed">
          I am a frontend developer focused on building clean, responsive
          and high-performance web applications using React and Tailwind CSS.
          I enjoy turning complex problems into simple, beautiful UI.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {["React", "JavaScript", "Tailwind", "API", "Git"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-purple-500 transition"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
