import React from "react";
import AboutImage from "../assets/foto1.jpeg";

const About = () => { 
  return (
    <div className="bg-blue-900 text-black py-20 " id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient bg-clip-text from-violet-800 to-red-600">
          Sobre Mi
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Sobre mí"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 border-4 shadow-lg"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-black-900">
              "Me destaco por mi capacidad de integrar habilidades en mecánica y carpintería con el desarrollo de hardware y programación. Con experiencia en JavaScript, 
              HTML, CSS y Python, puedo crear soluciones tanto físicas como digitales. Además, cuento con conocimientos en diseño 3D, 
              lo que me permite visualizar y materializar proyectos de manera efectiva. Mi conocimiento básico en bases de datos y marketing digital me permite aportar una perspectiva integral a los proyectos, 
              adaptándome rápidamente a las necesidades cambiantes."
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="javascript" className="w-2/12 text-black-800">
                  JavaScript
                </label>
                <div className="grow bg-gray-900 rounded-full h-2.5 ">
                  <div
                    className="bg-gradient-to-r from-green-600 to-green-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlcss" className="w-2/12 text-black-800">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-900 rounded-full h-2.5 ">
                  <div
                    className="bg-gradient-to-r from-green-600 to-green-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="python" className="w-2/12 text-black-800">
                  Python
                </label>
                <div className="grow bg-gray-900 rounded-full h-2.5 ">
                  <div
                    className="bg-gradient-to-r from-green-600 to-green-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center text-violet-200">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-green-400">
                  2+
                </h3>
                <p>Años de experiencia</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-green-400">
                  6+
                </h3>
                <p>Proyectos completados</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-green-400">
                  4+
                </h3>
                <p>Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
