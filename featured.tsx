import React from 'react'

const Featured = () => {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-center  text-3xl font-bold md:text-4xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out hover:text-black text-blue-400 transform hover:translate-y-[-5px] '>
        Tech Chronicles: Unveiling the Secrets of Innovation and Digital Mastery
        </h2>
        <p className='text-center mb-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
        In a world driven by relentless innovation, Tech Chronicles serves as your guide to uncovering the hidden gems of technology. From groundbreaking advancements to digital mastery, we delve deep into the evolving landscape of innovation. Join us as we unravel the secrets that shape our modern world, empowering you with insights to stay ahead in this ever-changing digital era. Whether you are a tech enthusiast or a curious learner, there is always more to discover. Let’s explore the future, one breakthrough at a time!
        </p>
        <div className='mx-auto  max-w-7xl px-5 '>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring Our Catogaries</h1>
        <div className='grid grid-cols-2  gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
          {[
            "HTMl",
            "Css",
            "Javascript",
            "TypeScript",
            "React.js",
            "Next.js",
           

          ].map((Catogaries,index)=>(
            <div key={index}
            className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition
             duration-300 ease-in-out transform hover:scale-105 cursor-pointer  flex items-center justify-center text-neutral-600'>
              <p className='text-center text-lg font-semibold'>{Catogaries}</p>
              <div className='absolute inset-0 border-2 border-transparent group hover:border-white rounded-lg transition duration-300 ease-in-out gap-2'></div>

            </div>

          ))}
        </div>

        </div>
        <p className=' text-center text-sm md:text text-black mb-6 px-10 mt-6 animate-fade-in-down delay-100mt-10'>
        Explore the world of Technology through comprehensive insights and resources that cover everything from the basics of HTML to advanced web development techniques with CSS and JavaScript. Dive deeper into TypeScript, a powerful tool for writing cleaner and more scalable code. Discover the versatility of Python for applications in web development, data science, and automation. Master modern frameworks like React and Next.js, and enhance your development workflow with GitHub for version control and collaboration. Learn how to build efficient APIs and harness the power of Data Structures to optimize algorithms and solve complex problems. Whether youare a beginner or an experienced developer, these categories will help you stay ahead in the rapidly evolving tech landscape.
        </p>
      </section>
    </div>
  )

}
export default Featured;





