import Image from 'next/image'
import React from 'react'

const footerLinks = [
    {href: '#', label: 'Content-1'},
    {href: '#', label: 'Content-2'},
    {href: '#', label: 'Content-3'},
]
const Footer = () => {
  return (
    <section className='py-16 flex justify-center'>
        <div className='container'>
            <div className='flex items-center flex-col md:justify-between md:flex-row gap-6'>
                <div>
                    <Image src={'/images/logo.svg'} alt={'logo'} width={100} height={100}/>
                </div>
                <div>
                    <nav className='flex gap-6'>
                        {footerLinks.map((link, i) => (
                            <a className='text-white/50 text-sm' href={link.href} key={i}>{link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer