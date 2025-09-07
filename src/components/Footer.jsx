import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer () {
    return (
        <footer className="bg-[#031a1a] text-white pb-13">
            <div className="mx-6 lg:flex gap-0 lg:justify-between lg:space-x-8">

                <div className="p-10 mb-8 px-12 lg:mb-0 lg:w-1/2">
                    <span className="text-white text-3xl font-medium leading-1">Landify</span>
                    <p className="text-sm mb-4 mt-6 leading-relaxed">Cras fermentum odio eu feugiat lide par naso tierra. 
                        Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                    </p>
                    <div className="flex mt-6">
                        <div><a href="#" className="rounded-full w-10 h-10 border border-gray-500 transition-colors duration-300 mr-10 flex items-center justify-center text-sm text-[#ffffff80] hover:border-[#00a19e] hover:text-[#00a19e]"><FaXTwitter className=""/></a></div>
                        <div><a href="#" className="rounded-full w-10 h-10 border border-gray-500 transition-colors duration-300 mr-10 flex items-center justify-center text-sm text-[#ffffff80] hover:border-[#00a19e] hover:text-[#00a19e]"><FaFacebook /></a></div>
                        <div><a href="#" className="rounded-full w-10 h-10 border border-gray-500 transition-colors duration-300 mr-10 flex items-center justify-center text-sm text-[#ffffff80] hover:border-[#00a19e] hover:text-[#00a19e]"><FaInstagram /></a></div>
                        <div><a href="#" className="rounded-full w-10 h-10 border border-gray-500 transition-colors duration-300 mr-10 flex items-center justify-center text-sm text-[#ffffff80] hover:border-[#00a19e] hover:text-[#00a19e]"><FaLinkedin /></a></div>
                    </div>
                </div>
                <div className="flex gap-0">
                    <div className="flex-1 p-10 mb-8 ">
                        <h4 className="text-white text-lg font-semibold mb-4">Useful Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="home" id="home" className="hover:text-teal-600">Home</a></li>
                            <li><a href="about-us" id="about-us" className="hover:text-teal-600">About Us</a></li>
                            <li><a href="services" id="services" className="hover:text-teal-600">Services</a></li>
                            <li><a href="terms of services" id="terms" className="hover:text-teal-600">Terms of service</a></li>
                            <li><a href="privacy policy" id="policy" className="hover:text-teal-600">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 p-10 mb-8 ">
                        <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="" className="">Web Design</a></li>
                            <li><a href="" className="">Web Developement</a></li>
                            <li><a href="" className="">Product Management</a></li>
                            <li><a href="" className="">Marketing</a></li>
                            <li><a href="" className="">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className="flex-1 p-10 mb-8 text-left text-sm">
                        <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                        <p>United States</p>
                        <p className="mt-4"><strong>Phone:</strong> +1 5589 55488 55</p>
                        <p><strong>Email:</strong> info@example.com</p>
                    </div>
                </div>
            </div>
                <div className="mx-12 px-6 text-center py-6 justify-center bg-teal-900">
                    <p>&copy; Copyright MyWebsite All Rights Reserved</p>
                    <p className="mt-1">Designed by <a href="" className="text-teal-600 hover:text-teal-700">BootstrapMade</a></p>
                </div>
        </footer>
    )
}
export default Footer