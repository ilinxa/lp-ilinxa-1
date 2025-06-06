import Avatar from '@/components/Avatar'
import FeatureCard from '@/components/FeatureCard'
import Key from '@/components/Key'
import Tag from '@/components/Tag'
import Image from 'next/image'
import React from 'react'
const features = [
    "Asset Library",
    "code Preview",
    "Flow Mode",
    "smart Sync",
    "auto Layout",
    "Fast Search",
    "Smart Guides",
]

const Features = () => {
  return (
    <section className='py-24 px-5  flex flex-col items-center'>
        <div className='container'>
            <div className='flex justify-center'>
                <Tag> Features</Tag>
            </div>
            <h2 className='text-6xl font-medium text-center mt-6 max-w-2xl mx-auto'>Where power meets <span className='text-lime-400'>simplicity</span></h2>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 '>
                <FeatureCard 
                    title='Real-time Collaboration' 
                    description='Work together seamlessly with conflict editing.'
                    className='md:col-span-2 lg:col-span-1 group'

                    >

                    <div className='aspect-video flex items-center justify-center'>
                        <Avatar className='z-40'>
                            <Image src="/images/avatar-ashwin-santiago.jpg" alt="avatar-1"  
                            width={100} height={100}
                            className="rounded-full"/>
                        </Avatar>
                        <Avatar className='-ml-6 z-30 border-indigo-500'>
                            <Image src="/images/avatar-florence-shaw.jpg" alt="avatar-2" 
                            width={100} height={100}
                            className="rounded-full "/>
                        </Avatar>
                        <Avatar className='-ml-6 z-20 border-amber-500'>
                            <Image src="/images/avatar-lula-meyers.jpg" alt="avatar-3" 
                            width={100} height={100}
                            className="rounded-full "/>
                        </Avatar>


                        <Avatar className='-ml-6 border-transparent group-hover:border-green-500 transition'>
                            
                            <div className='size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1 relative '>
                                <Image src='/images/avatar-owen-garcia.jpg' alt='avatar-4' width={100} height={100}
                                className='absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition'/>
                                {Array.from({length:3}).map((_,i)=>(
                                    <span className='size-1.5 rounded-full bg-white inline-flex' key={i}></span>
                                ))}
                            </div>
                            
                        </Avatar>
                    </div>
                </FeatureCard>

                <FeatureCard title='Interactive Prototyping' description='Engage your clients with prototypes that react to user actions. ' className='md:col-span-2 lg:col-span-1 group'>
                    <div className='aspect-video flex items-center justify-center'>
                        <p className='text-4xl  font-extrabold text-white/20 group-hover:text-white/10  transition duration-500 text-center'>
                            We&apos;ve achieved <span> </span>
                            <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative'>
                                <span > 
                                    incredible 
                                </span> 
                                <video src="/gif1.mp4" autoPlay loop muted playsInline
                                    className='absolute bottom-full left-1/2  object-cover -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500'
                                ></video>
                            </span> 
                            <span> </span>
                            growth this year.
                        </p>
                    </div>
                </FeatureCard>
                <FeatureCard title='Keyboard Quick actions' description='Powerfull commands to help you create designs more quickly'
                className='md:col-span-2 md:col-start-2 lg:col-span-1'>
                    <div className='aspect-video flex items-center justify-center gap-4 group'>
                        <Key className='w-28  outline-transparent outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500'>shift</Key>
                        <Key className='  outline-transparent outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-150'>alt</Key>
                        <Key className='  outline-transparent outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-300'>C</Key>
                    </div> 
                </FeatureCard>
                
            </div>

            <div className='mt-8 flex flex-wrap gap-3 justify-center'>
                {features.map((feature,i) => (
                    <div key={i} className='bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl justify-center items-center gap-3 hover:scale-105 transition duration-500 group'>

                        <span className='bg-lime-400 text-neutral-900 size-5 rounded-full inline-flex justify-center items-center group-hover:rotate-45 transition duration-500 '> 
                            &#10038;
                        </span>
                        <span className='font-medium md:text-lg'>
                            {feature}
                        </span>
                    </div>
                ))}

            </div>
        </div>

    </section>
  )
}

export default Features