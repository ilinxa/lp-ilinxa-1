'use client'
import Tag from '@/components/Tag'
import  { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus quibusdam reiciendis? Consequatur velit omnis deserunt nihil fuga! Saepe at corrupti optio suscipit nesciunt aliquid dolorem quasi quibusdam iusto ea.`
// separate to words:
const words = text.split(' ');
const Introduction = () => {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:scrollTarget,
        offset:['start end','end end']
    })
    const [currentWord, setCurrentWord] = useState(0)
    const wordIndex = useTransform(scrollYProgress, [0,1], ['0%',words.length])
    useEffect(() => {
        wordIndex.on('change',(latest)=>{
            // setCurrentWord(latest);
            const index = Math.floor(Number(latest));
            setCurrentWord(Math.min(index, words.length));
        })
    },[wordIndex])

    // useMotionValueEvent(scrollYProgress, 'change', (latest) => console.log("latest",latest))
    return (
    <section className='py-32 lg:py-40 flex justify-center px-6'> 
        <div className='container'>

            <div className='sticky top-28'>

                <div className='flex justify-center'>
                    <Tag>Introduction Layers</Tag>
                </div>
                <div className='text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10'>
                    <span>
                        Your creative process deserves better.
                    </span>{' '}
                    <span >
                        {words.map((word,wordIndex) => (
                            <span key={wordIndex} className={twMerge('transition duration-500 text-white/15',wordIndex < currentWord && 'text-white')}>{`${word} `} </span>
                        ))}
                    </span>
                    <span className='text-lime-400 block'>That&apos;s why we built Layers.</span>
                </div>

            </div>
            <div className='h-[150vh]' ref={scrollTarget}></div>

        </div>
    </section>
    
  )
}

export default Introduction