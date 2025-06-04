import { logosData } from '@/data/data'
import React from 'react'

const LogoTicker = () => {
  return (
    <section className='py-24 overflow-x-clip flex justify-center items-center '>
        <div className='container'>
            <h3 className='text-center text-white/50 text-xl'>
                Already chosen by these market leaders
            </h3>
            <div className='overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                <div className='flex justify-center gap-24 pr-24'>
                    {
                        logosData.map((logo,i) => (
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                key={i} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoTicker