import React from 'react'
import ProjectsSideBar from './ProjectsSideBar'

const SelectedProject = ({project}) => {
const formattedDate = new Date(ProjectsSideBar.dueDate).toLocaleDateString('en-US',
    {year:'numeric',month:'short',day:'numeric'})
  return (
    <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                <button>Delete</button>
            </div>
            <p className='mb-4 text-stone-400 '>{formattedDate}</p>
            <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
        </header>
    </div>
  )
}

export default SelectedProject