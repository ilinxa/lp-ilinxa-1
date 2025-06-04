import Button from '@/components/Button'
import Pointer from '@/components/Pointer'

import React from 'react'

const Hero = () => {
  return (
    <section className='py-24 overflow-x-clip  '>
        <div className='container relative mx-auto'>
            <div className=' absolute -left-32 top-16 hidden lg:block'>
                <img 
                    src="/images/design-example-1.png" 
                    alt='design-example' 
                    // width={400} height={400} 
                    />
            </div>
            <div className=' absolute -right-64 -top-16 hidden lg:block'>
                <img 
                    src="/images/design-example-2.png" 
                    alt='design-example2' 
                    // width={400} height={400} 
                    />
            </div>
            <div className='absolute left-56 top-96 hidden lg:block'>
                <Pointer name='Annxa' />
            </div>
            <div className='absolute right-80 -top-4 hidden lg:block'>
                <Pointer name='ilinxa' color='red'/>
            </div>

            <div className='flex justify-center'>
                <div className='inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold'>
                ✨ $7.5M seed round raised
                </div>
            </div>

            <h1 className='text-6xl md:text-7xl font-medium text-center max-w-3xl mx-auto mt-6'>Impactfull design, created effortlessly</h1>

            <p className='text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto'> Design tools shoulden&apos;t slow you down.
                Layers combine powerful tools into one easy-to-use suite
                That keeps you in your creative flow.</p>
            <form className='flex  border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto' >
                <input type="email" placeholder="Enter your email" className='bg-transparent px-4 flex-1 w-full'/>
                <Button type='submit' variant='primary' size='sm' className='whitespace-nowrap'>Submit</Button>
            </form>
        </div>
    </section>
  )
}

export default Hero