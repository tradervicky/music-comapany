"use client"
import React from 'react'

import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Courses
     {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
      }

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Courses)=>course.isFeatured)
  return (
    <div className='py-12 sm:px-32 bg-gray-900'>
        <div>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best Musicians</p>
                </div>
            </div>
            <div className='mt-10 '>
                <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((courses:Courses, index)=>(
                        <div key={index} className='flex text-white  justify-center'> 
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{courses.title}</p>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{courses.description}</p>
                                <Link className='text-teal-600' href={`/courses/${courses.slug}`}> 
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={'/courses'}>
                View All Courses
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCourses