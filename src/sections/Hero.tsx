'use client'
import Button from '@/components/Button'
import Pointer from '@/components/Pointer'

import React, {  useEffect } from 'react'
import {motion, useAnimate} from 'framer-motion'
import cursorYouImage from '../../public/cursor-you.svg'

const Hero = () => {
    const [leftDesignScope, leftDesignAnimate] = useAnimate()
    const [leftPointerScope, leftPointerAnimate] = useAnimate()
    const [rightDesignScope, rightDesignAnimate] = useAnimate()
    const [rightPointerScope, rightPointerAnimate] = useAnimate()
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current,{opacity:1},{duration:0.5}],
            [leftDesignScope.current,{y:0,x:0},{duration:0.5}],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current,{opacity:1},{duration:0.5}],
            [leftPointerScope.current,{y:0,x:-100},{duration:0.5}],
            [leftPointerScope.current,{y:[0,16,0],x:0},{duration:0.5, ease:'easeInOut'}],
        ]);
        // RIGHT
        rightDesignAnimate([
            [rightDesignScope.current,{opacity:1},{duration:0.5 , delay:1.5}],
            [rightDesignScope.current,{y:0,x:0},{duration:0.5}],
        ]);
        rightPointerAnimate([
            [rightPointerScope.current,{opacity:1},{duration:0.5 , delay:1.5}],
            [rightPointerScope.current,{y:0,x:175},{duration:0.5}],
            [rightPointerScope.current,{y:[0,20,0],x:0},{duration:0.5, ease:'easeInOut'}],
        ]);

    },[])
    // const [rightDesignScope, rightDesignAnimate] = useAnimate()
  return (
    <section className='py-24 overflow-x-clip  '
    style={
       {
        cursor:`url(${cursorYouImage.src}), auto`
       }
    }
    >
        <div className='container relative mx-auto'>
            {/* LEFT */}
            <motion.div 
                ref={leftDesignScope}
                initial={{opacity:0, y:100, x:-100}}
                drag
                className=' absolute -left-32 top-16 hidden lg:block'>
                <img 
                    src="/images/design-example-1.png" 
                    alt='design-example' 
                    // width={400} height={400} 
                    draggable={false}
                />
            </motion.div>
            <motion.div 
                ref={leftPointerScope}
                initial={{opacity:0, y:100, x:-200}}
                className='absolute left-56 top-96 hidden lg:block'>
                <Pointer name='Annxa' />
            </motion.div>
            {/* RIGHT */}
            <motion.div 
                ref={rightDesignScope}
                drag
                initial={{opacity:0, y:100, x:100}}
                className=' absolute -right-64 -top-16 hidden lg:block'>

                <img 
                    draggable={false}
                    src="/images/design-example-2.png" 
                    alt='design-example2' 
                    // width={400} height={400} 
                    />
            </motion.div>

            <motion.div 
                ref={rightPointerScope}
                initial={{opacity:0, y:100, x:275}}
                className='absolute right-80 -top-4 hidden lg:block'>
                <Pointer name='ilinxa' color='red'/>
            </motion.div>

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