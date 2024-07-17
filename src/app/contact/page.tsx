'use client'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Meteors } from '@/components/ui/meteors'
import React from 'react'


const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black py-12 pt-36">
        <Meteors number={100} />
    <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h1>
    <BackgroundGradient className="rounded-[22px] w-full min-w-lg overflow-hidden ">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-[20px] shadow-lg w-[480px] relative">
        <form className='w-full'>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              id="message"
              placeholder="Your Message"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </BackgroundGradient>
  </div>
  )
}

export default page