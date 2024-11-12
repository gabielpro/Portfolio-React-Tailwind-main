import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";


const projects = [
  {
    id: 1,
    name: "Employee Management System",
    description: "A full-stack application to manage employee records, using the MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  }, 
  {
    id: 2,
    name: "Aplicacion 1",
    description: "Página web de un proyecto de robótica",
    technologies: ["Conexion de Hardware", "Programacion en ArduinoUno", "React", "Node.js"],
  },
  {
    id: 3,
    name: "Primer Trabajo",
    description: "Trabajé en la cafeteria 'El Rincón del pan' ",
    technologies: ["Mozo", "Atencion al cliente", "Repositor", "Limpieza"],
    image: "", // Imagen del proyecto

  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-xs text-white rounded-full px-3 py-1 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.github}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
