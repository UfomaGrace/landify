import { Element } from "react-scroll";
import { FaStar } from "react-icons/fa";

function Services () {
    return (
        <Element name="services" className="mb-10">
            <div className="relative text-center ">
                <h2 className="absolute inset-0 flex items-center justify-center text-5xl top-1 font-bold text-[#1938380d] z-10 uppercase pointer-events-none">
                    SERVICES
                </h2>
                <h2 className="relative buttom-0 left-1/2-translate-x-1/2 translate-y-1/2 text-3xl font-bold text-gray-800 uppercase">
                    SERVICES
                </h2>
            </div>
            <div className="">
                <p className="relative items-center text-center justify-center mt-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="flex mt-12 p-8">
                <div className="flex-1 ml-5">
                    <div className="mb-6 rounded-full bg-[#00a19e2e] inline-block py-1 px-3 text-sm font-bold uppercase tracking-wide border border-[#00a19e26]">
                        <span className="text-[#00a19e] flex gap-2"><FaStar className="text-[#00a19e]" /> WHAT WE DO</span>
                    </div>
                    <h2 className="font-bold text-5xl leading-tight mb-6">Transforming Ideas into Outstanding Results</h2>
                    <p className="text-[1.1rem] leading-7 text-[#3b5353] mb-6">We believe in crafting exceptional experiences that drive meaningful growth for your business. 
                        Our dedicated team combines creativity with technical excellence to deliver solutions that make a difference.
                    </p>
                    <div>
                        <button className="flex bg-[#00a19e] text-white px-9 py-4 gap-2 rounded-full transition-colors font-bold items-center ">Explore our Work</button>
                    </div>
                </div>
                <div className="flex-1 rounded-3xl m-6">
                    <img src="/Images/services-1.webp" alt="Services" className="rounded-3xl"/>
                </div>
            </div>
            <div>
                
            </div>
        </Element>
    )
}
export default Services