import React from 'react'

const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg  p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <img className='w-16 h-16 rounded-full mr-4 object-cover border-1 border-slate-500'
        src='../image/bannerimage.png'  alt='Author image'/>
        <div>
          <h3 className='text-xl font-bold '>Sumaira Shakeel</h3>
          <p className='text-slate-500'>Web App Developer | ui/ux designer</p>

        </div>

      </div>
      <p className='mt-4 text-black leading-relaxed'>
        I am a passionate and skilled Web Developer and UI/UX Designer with expertise in crafting seamless, user-centric digital experiences. My core strengths lie in modern front-end technologies, including HTML, CSS, Next.js, and Tailwind CSS, enabling me to deliver responsive, visually appealing, and highly functional web applications.
      </p>
      <div className='mt-4 flex space-x-3'>
        <a href="#" className='px-4 py-2  bg-blue-600  text-white rounded-md hover:bg-blue-700 transition duration-300 '>
          Twitter
        </a>
        <a href="#" className='px-4 py-2  bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 '>
         Linkedin
        </a>
        <a href="#" className='px-4 py-2  bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 '>
        GitHub
        </a>
      </div>
      
    </div>
  )
}

export default AuthorCard;