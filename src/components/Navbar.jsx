function Navbar () {
    return (
        <div>
            <div className="flex m-5">
                <nav className="flex container mx-auto gap-45 p-5 items-center justify-between">
                    <div className="bg-white text-black font-bold text-2xl">Landify</div>
                    <ul className="flex gap-7">
                        <li><a href="home" id="home" className="hover:text-teal-600">Home</a></li>
                        <li><a href="about" id="about" className="hover:text-teal-600">About</a></li>
                        <li><a href="features" className="hover:text-teal-600">Features</a></li>
                        <li><a href="services" className="hover:text-teal-600">Services</a></li>
                        <li><a href="pricing" className="hover:text-teal-600">Pricing</a></li>
                        <li><a href="#" className="hover:text-teal-600">Dropdown</a></li>
                        <li><a href="contact" className="hover:text-teal-600">Contact</a></li>
                    </ul>
                    <button className="bg-teal-600  text-white py-2 px-6 rounded-md transition-colors hover:bg-teal-500">Get Started</button>
                </nav>

            </div>
        </div>
    )
}
export default Navbar