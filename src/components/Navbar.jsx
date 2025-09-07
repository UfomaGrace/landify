import { Link } from "react-scroll";

function Navbar () {
    
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-7 h-24">
            <div className="lg:flex m-5 md:hidden sm:hidden">
                <nav className="flex container mx-auto gap-45 p-5 items-center justify-between">
                    <div className="bg-white text-black font-bold text-2xl">Landify</div>
                    <ul className="flex gap-7">
                        <li className="hover:text-teal-600 cursor-pointer " ><Link to="home" smooth={true} duration={800} offset={-100} spy={true} >Home</Link></li>
                        <li className="hover:text-teal-600 cursor-pointer" ><Link to="about" smooth={true} duration={800} offset={-100} spy={true} >About</Link></li>
                        <li className="hover:text-teal-600 cursor-pointer" ><Link to="features" smooth={true} duration={800} offset={-90} spy={true} >Features</Link></li>
                        <li className="hover:text-teal-600 cursor-pointer" ><Link to="services" smooth={true} duration={800} offset={-100} spy={true} >Services</Link></li>
                        <li className="hover:text-teal-600 cursor-pointer" ><Link to="pricing" smooth={true} duration={800} offset={-100} spy={true}>Pricing</Link></li>
                        <li className="relative group cursor-pointer"><span className="hover:text-teal-600 pb-1">Dropdown</span>
                            <ul className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 top-full">
                                <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Dropdown 1</li>
                                <li className="relative"><span className="peer flex justify-between items-center px-4 py-2 hover:text-teal-600 cursor-pointer">Deep Dropdown</span>
                                    
                                    <ul className="absolute right-full top-0 ml-1 w-44 bg-white rounded-md shadow-md opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-200 z-50">
                                        <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Deep Dropdown 1</li>
                                        <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Deep Dropdown 2</li>
                                        <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Deep Dropdown 3</li>
                                        <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Deep Dropdown 4</li>
                                        <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Deep Dropdown 5</li>
                                    </ul>
                                </li>
                                <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Dropdown 2</li>
                                <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Dropdown 3</li>
                                <li className="px-4 py-2 hover:text-teal-600 cursor-pointer">Dropdown 4</li>
                            </ul>
                        </li>
                        <li className="hover:text-teal-600 cursor-pointer" ><Link to="contact" smooth={true} duration={800} offset={-95}>Contact</Link></li>
                    </ul>
                    <button className="bg-teal-600 cursor-pointer  text-white py-2 px-6 rounded-md transition-colors hover:bg-teal-500"><Link to="about" smooth={true} duration={800} offset={-95}>Get Started</Link></button>
                </nav>

            </div>
        </div>
    )
}
export default Navbar