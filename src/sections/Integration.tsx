
import IntegrationsCol from '@/components/IntegrationsCol'
import Tag from '@/components/Tag'
import { integrations } from '@/data/data'
import React from 'react'


const Integration = () => {
  return (
    <section className='py-24 overflow-hidden flex justify-center px-5'>

        <div className='container'>
            <div className='grid lg:grid-cols-2 gap-8 items-center'>
                <div>
                    <Tag>Integration</Tag>
                    <h2 className='text-6xl font-medium  mt-6 '>Play Well With <span className='text-lime-400'>Others</span></h2>
                    <p className='text-white/50 mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repellendus delectus? Totam id deleniti quasi.</p>
                </div>
                <div>
                    <div className='h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>

                        <IntegrationsCol integrations={integrations}/>
                        <IntegrationsCol integrations={integrations.slice().reverse()} reverse className='hidden md:flex'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Integration