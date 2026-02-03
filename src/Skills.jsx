const skills = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "HTML & CSS", level: "Advanced" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "Framer Motion", level: "Intermediate" },
];
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-14 text-center"
        >
          <span className="text-purple-400">My</span> Skills
        </motion.h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                relative
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-6
                transition
                hover:border-purple-500/50
                hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-purple-600/10 blur-2xl opacity-0 hover:opacity-100 transition"></div>

              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">
                  {skill.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {skill.level}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
