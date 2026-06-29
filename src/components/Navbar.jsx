import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
        <div className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto px-6 py-4 '>
            <div className='text-3xl font-bold text-purple-600 '>My Portfolio</div>
            <div className='hidden md:flex items-center gap-8'>
                <a href='#home' className='font-medium text-gray-700 hover:text-purple-600'>Home</a>
                <a href='#about' className='font-medium text-gray-700 hover:text-purple-600'>About</a>
                <a href='#skills' className='font-medium text-gray-700 hover:text-purple-600'>Skills</a>
                <a href='#projects' className='font-medium text-gray-700 hover:text-purple-600'>Projects</a>
                <a href='#contact' className='font-medium text-gray-700 hover:text-purple-600'>Contact</a>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar