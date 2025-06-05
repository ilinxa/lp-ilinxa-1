import { integrations, integrationsType } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge';


const IntegrationsCol = (props : {integrations : integrationsType; className?: string}) => {
    const {integrations, className} = props
  
    return (
    <div className={twMerge('flex flex-col gap-4 pb-4', className)}>
        {
            integrations.map((integration, i) => (
            <div key={i} className='bg-neutral-900 border border-white/10 p-6 rounded-3xl'>
                <div className='flex justify-center'>
                    <Image src={integration.src} alt={integration.alt} width={300} height={300} className='size-24'/>
                    </div>
                <h3 className='text-3xl text-center  mt-6'>{integration.name}</h3>
                <p className='text-white/50 mt-2 text-center'>{integration.describtion}</p>
            </div>
            ))
        }
    </div>
  )
}

export default IntegrationsCol