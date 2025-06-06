'use client'
import { logosData } from '@/data/data'
import {Fragment} from 'react'
import {motion} from 'framer-motion'
const LogoTicker = () => {
  return (
    <section className='py-24 overflow-x-clip flex justify-center items-center '>
        <div className='container'>
            <h3 className='text-center text-white/50 text-xl'>
                Already chosen by these market leaders
            </h3>
            <div className='flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                <motion.div 
                    animate={{
                        x:"-50%"
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 15,
                        ease: "linear"
                    }}
                    className='flex flex-none justify-center gap-24 pr-24'>

                    {Array.from({length: 2}).map((_,i) => (
                        <Fragment key={i}>
                            {logosData.map((logo,i) => (
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                key={i} 
                            />
                            ))}
                        </Fragment>
                    ))}

                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default LogoTicker