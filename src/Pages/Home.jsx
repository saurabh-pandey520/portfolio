
 import Hero from "../Hero";
 import About from "../About";
 import Skills from "../Skills";
 import ProjectsRow from "../ProjectsRow";
 import Contact from "../Contact";
 const Home = () => {
  return (
    <>
    <div className="relative bg-[#0b0b0f] text-white min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <ProjectsRow/>
      <Contact/>
      </div>
    </>
  );
};
export default Home