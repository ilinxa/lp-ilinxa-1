import Tag from '@/components/Tag'
import React from 'react'

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus quibusdam reiciendis? Consequatur velit omnis deserunt nihil fuga! Saepe at corrupti optio suscipit nesciunt aliquid dolorem quasi quibusdam iusto ea.`
const Introduction = () => {
  return (
    <section className='py-28 lg:py-40 flex justify-center'> 
        <div className='container'>
            <div className='flex justify-center'>
                <Tag>Introduction Layers</Tag>
            </div>
            <div className='text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10'>
                <span>
                    Your creative process deserves better.
                </span>{' '}
                <span className='text-white/15'>{text}</span>
                <span className='text-lime-400 block'>That&apos;s why we built Layers.</span>
            </div>
        </div>
    </section>
    
  )
}

export default Introduction