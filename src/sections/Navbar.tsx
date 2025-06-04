import Button from "@/components/Button"
import { navLinks } from "@/data/data"

const Navbar = () => {
  return (
    <section className="py-4 lg:py-8 w-full flex items-center justify-center">
        <div className="container max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
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
                        className="feather feather-menu md:hidden ">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                    <Button variant="secondary" className="hidden md:inline-flex  items-center justify-center">SignIn </Button>
                    <Button variant="primary" className="hidden md:inline-flex items-center justify-center">SignUp </Button>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar