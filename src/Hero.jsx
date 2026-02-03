import { motion } from "framer-motion";
import profile from "../src/assets/profile.jpeg"; // ya public wala use kar

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-gradient-to-br from-black to-gray-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
         
          <h1 className="
  text-6xl font-bold
  bg-gradient-to-r from-purple-400 to-pink-500
  text-transparent bg-clip-text">
            Saurabh <br /> Pandey
          </h1>

          <p className="mt-4 text-gray-400 max-w-md">
            Frontend Developer specializing in React and modern UI development.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="
  px-7 py-3 rounded-lg
  bg-purple-600
  hover:bg-purple-700
  transition duration-300
  hover:scale-105
  hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
"
            >
              View Projects
            </a>

            <a
  href="#contact"
  className="
  px-7 py-3 rounded-lg
  bg-purple-600
  hover:bg-purple-700
  transition duration-300
  hover:scale-105
  hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
"

>
  Contact
</a>
<a
  href="src/assets/saurabh_kumar_pandey_Resume.pdf"
  download
  className="
  px-7 py-3 rounded-lg
  bg-purple-600
  hover:bg-purple-700
  transition duration-300
  hover:scale-105
  hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
"
>
  Download Resume
</a>


          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-600 blur-2xl opacity-40"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-64 h-64 rounded-full border-4 border-purple-500 object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
