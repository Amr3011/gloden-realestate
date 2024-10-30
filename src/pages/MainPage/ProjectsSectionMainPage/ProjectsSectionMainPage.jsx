import { Link } from "react-router-dom";
import projects from "../../../auth/projectsData";

export default function ProjectsSectionMainPage() {
  return (
    <section className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-gray-800 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Our Latest Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-gray-300 shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <figure className="overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover h-48 w-full transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-700">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <Link to="/project-details" state={{ projectId: project.id }}>
                  <button className="btn bg-blue-700 hover:bg-blue-600 w-full text-white font-semibold shadow-lg transition duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
