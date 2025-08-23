'use client'
import Image from 'next/image'
import A from '../public/images/img-bg.jpg'
import NewData from './services/page'

export default function Home() {
    const handleRedirect = () => {
    // Replace with your telegram link
    window.location.href = "https://t.me/fasal_san";
  };
  return (
    <div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Background Image */}
        <Image
          src={A}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 animate-fadeInDown">
            Welcome to My Portfolio
          </h1>
          <p className="text-white text-xl md:text-2xl animate-fadeInUp delay-500">
            Building beautiful web experiences.
          </p>
        <button
          onClick={handleRedirect}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300"
        >
          Open Telegram
        </button>
      </div>
        </div>
      <div>
        <NewData />
      </div>
    </div>
  )
}
