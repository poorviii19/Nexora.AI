import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div
      className="
        px-4 sm:px-20 xl:px-32
        relative inline-flex flex-col
        w-full justify-center items-center
        bg-[url('/gradientBackground.png')]
        bg-cover bg-no-repeat
        min-h-screen
      "
    >
      <div className="text-center mb-6">
        <h1>
          <span
            className="
              text-red-700
              text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl
              font-semibold
              mx-auto
              leading-[1.2]
            "
          >
            NexoraAI
          </span>

          <br />

          <span
            className="
              text-xl sm:text-2xl md:text-3xl 2xl:text-4xl
              font-semibold
              leading-[1.2]
            "
          >
            Next-generation intelligence platform
          </span>
        </h1>

        <p
          className="
            mt-4
            max-w-xs sm:max-w-lg 2xl:max-w-xl
            mx-auto
            max-sm:text-xs
            text-primary
          "
        >
          NexoraAI is an all-in-one AI platform that helps you create smarter,
          faster, and better — from content generation to image tools and
          productivity solutions, all powered by intelligent automation.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">

        <button
          onClick={() => navigate('/ai')}
          className="
            bg-primary text-white
            px-10 py-3 rounded-lg
            hover:scale-105
            active:scale-95
            transition-all duration-200
            cursor-pointer
          "
        >
          Start Generating
        </button>

        <button
          className="
            bg-white text-black
            px-10 py-3 rounded-lg
            hover:scale-105
            active:scale-95
            transition-all duration-200
            cursor-pointer
          "
        >
          Watch Demo
        </button>

      </div>
      <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
        <img src = {assets.user_group} alt ="" className='h-8'/>
        Trusted by 10k+ people
      </div>
    </div>
  )
}

export default Hero