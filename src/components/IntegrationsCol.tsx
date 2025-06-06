'use client'
import { integrationsType } from '@/data/data'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion'

const IntegrationsCol = (props : {integrations : integrationsType; className?: string; reverse?: boolean}) => {
    const {integrations, className, reverse} = props
  
    return (
    <motion.div 
        initial={{y:reverse ? "-50%" : "0%"}}
        animate={{
            y:reverse ? "0%" : "-50%",
        }}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear"
        }}
        className={twMerge('flex flex-col gap-4 pb-4', className)}>

        {Array.from({length:2}).map((_,i) => (
            <Fragment key={i}>
                {integrations.map((integration, i) => (
            <div key={i} className='bg-neutral-900 border border-white/10 p-6 rounded-3xl'>
                <div className='flex justify-center'>
                    <Image src={integration.src} alt={integration.alt} width={300} height={300} className='size-24'/>
                    </div>
                <h3 className='text-3xl text-center  mt-6'>{integration.name}</h3>
                <p className='text-white/50 mt-2 text-center'>{integration.describtion}</p>
            </div>
            ))
        }
            </Fragment>
        ))}
        
    </motion.div>
  )
}

export default IntegrationsCol