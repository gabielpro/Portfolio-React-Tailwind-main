import React from 'react'
import HeroImage from '../assets/foto1.jpeg'

const Hero = () => {
  return (
    <div className='bg-blue-900 text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            Yo soy {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Gabriel Villegas</span>
            , Desarrollador Full-Stack que integra hardware, software y diseño 3D
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
        Desarrollo aplicaciones web responsivas, integrando habilidades técnicas y diseño 3D.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contactate conmigo</button>
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resumen</button>
        </div>

    </div>
  )
}

export default Hero