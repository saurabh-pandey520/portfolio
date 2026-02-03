const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg">

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Hover Overlay */}
      <div className="
        absolute inset-0 bg-black/70 
        opacity-0 group-hover:opacity-100 
        transition duration-300
        flex flex-col justify-center items-center text-center p-4
      ">
        <h3 className="text-xl font-bold mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:underline"
          >
            GitHub
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:underline"
            >
              Live
            </a>
          ) : (
            <span className="text-gray-400">
              Coming Soon
            </span>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
