import { useLocation, Link } from "react-router-dom";
import projects from "../../auth/projectsData";
import Slider from "react-slick";

const ProjectDetails = () => {
  const location = useLocation();
  const { projectId } = location.state || {};

  const project = projects.find((p) => p.id === projectId.toString());

  if (!project) {
    return <p className="text-center text-xl font-semibold text-gray-700">Project not found</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: (
      <div className="bg-blue-600 rounded-full shadow-xl p-3 hover:bg-blue-700 transition duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6" />
        </svg>
      </div>
    ),
    prevArrow: (
      <div className="bg-blue-600 rounded-full shadow-xl p-3 hover:bg-blue-700 transition duration-300 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6l-6 6 6 6" />
        </svg>
      </div>
    ),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-12">
      <div className="max-w-7xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index} className="h-[500px]">
                <img src={image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="p-10 flex flex-col justify-between bg-gray-50">
          <div>
            <h2 className="text-5xl font-bold mb-4 text-gray-800">{project.title}</h2>
            <h3 className="text-3xl text-gray-600 mb-6">{project.subtitle}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
          </div>
          <Link to="/">
            <button className="mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-lg shadow-xl transition duration-300">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
