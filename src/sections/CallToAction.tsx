import React from 'react'

const CallToAction = () => {
  return (
    <section className='py-24 flex justify-center px-6 '>
      <div className='overflow-x-clip p-4 flex'>
        <div className='flex flex-none gap-16 text-7xl md:text-8xl font-medium'>
          {Array.from({length: 10}).map((_,i) => (
              <div key={i} className='flex items-center gap-16'>
                  <span className='text-lime-400 text-7xl'>&#10038;</span>
                  <span> Get a free consultation </span>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CallToAction