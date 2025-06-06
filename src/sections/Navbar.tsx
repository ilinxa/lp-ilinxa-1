'use client'
import Button from "@/components/Button"
import { navLinks } from "@/data/data"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
// framer
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        
        <section className="py-4 lg:py-8 w-full flex items-center justify-center fixed  top-0 z-50">
            <div className="container max-w-5xl">
                <div className=" border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                    <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center ">
                        <div>
                            <img src='/images/logo.svg' alt="layers logo" className="h-9 md:h-auto w-auto " />
                        </div>
                        <div className="lg:flex justify-center items-center hidden ">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link, i) => (
                                    <a href={link.href} key={i}>
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex gap-4 justify-end ">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" strokeLinejoin="round" 
                                className="feather feather-menu md:hidden "
                                onClick={() => setIsOpen(!isOpen)}
                                >
                                <line x1="3" y1="6" x2="21" y2="6"
                                    className={twMerge("origin-left transition",isOpen && "rotate-45 -translate-y-1")}
                                ></line>
                                <line x1="3" y1="12" x2="21" y2="12"
                                    className={twMerge("transition",isOpen && "opacity-0")}
                                ></line>
                                <line x1="3" y1="18" x2="21" y2="18"
                                    className={twMerge("origin-left transition",isOpen && "-rotate-45 translate-y-1")}
                                ></line>
                            </svg>
                            <Button variant="secondary" className="hidden md:inline-flex  items-center justify-center">SignIn </Button>
                            <Button variant="primary" className="hidden md:inline-flex items-center justify-center">SignUp </Button>

                        </div>
                    </div>
                    <AnimatePresence>

                    {isOpen && (
                        <motion.div 
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}

                        className=" overflow-hidden">
                            <div className="flex flex-col items-center gap-4 py-2 md:hidden">
                                {navLinks.map((link, i) => (
                                    <a 
                                        href={link.href} 
                                        key={i} 
                                        className="" >
                                    {link.name}
                                    </a>

                                ))}
                                <Button variant="secondary" className="py-2">SignIn </Button>
                                <Button variant="primary" className="py-2">SignUp </Button>
                            </div>
                        </motion.div>
                    )}

                    </AnimatePresence>

                </div>
            </div>
        </section>
        <div className="pb-[86px] md:pb-[97px] lg:pb-[130px]"></div>
        </>
    )
}

export default Navbar