import { Element } from "react-scroll";
import { BsEnvelopeAt, BsGeoAlt, } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";

function Contact () {
    return (
        <Element name="contact">
            <div className="bg-[#f0f6f5] scroll-mt-23 overflow-clip py-15">
                <div className="relative text-center ">
                    <h2 className="absolute inset-0 flex items-center justify-center text-5xl top-1 font-bold text-[#1938380d] z-10 uppercase pointer-events-none">
                        CONTACT
                    </h2>
                    <h2 className="relative buttom-0 left-1/2-translate-x-1/2 translate-y-1/2 text-3xl font-bold text-gray-800 uppercase">
                        CONTACT
                    </h2>
                </div>
                <div className="">
                    <p className="relative items-center text-center justify-center mt-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="flex gap-6">
                    <div className="flex-1 w-1/2 mt-15 ml-10 p-4 transform-none">
                        <section className="font-semibold text-sm uppercase leading-0.5 mb-4">CONTACT US</section>
                        <h2 className="font-bold leading-12 mb-8 text-5xl text-[#193838]">Nemo enim ipsam voluptatem quia voluptas aspernatur</h2>
                        <p className="text-[#3b5353bf] mb-6 font-light text-[1.25rem] ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        <div>
                            <div className="flex gap-3 mb-3">
                                <BsEnvelopeAt className="text-[#00a19e]"/>
                                <span className="text-[#3b5353]">info@example.com</span>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <LuPhone className="text-[#00a19e]"/>
                                <span className="text-[#3b5353]">+1 5589 55488 558</span>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <BsGeoAlt className="text-[#00a19e]"/>
                                <span className="text-[#3b5353]">A108 Adam Street, New York, NY 535022</span>
                            </div>
                            <div className="flex gap-2">
                                <a href="contact" className="hover:text-teal-600 font-medium text-[1.1rem] text-[#193838]">Open Map</a>
                                <GoArrowRight className="transform transform:transition translate-y-1.5" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex-1 p-10 w-5/12 rounded-2xl mt-15 mr-15">
                        <form className="space-y-4">
                            <div>
                                <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-2xl w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#00a19e] resize-none"/>
                            </div>
                            <div>
                                <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-2xl w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#00a19e] resize-none"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Subject" className="border border-gray-300 rounded-2xl w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#00a19e] resize-none"/>
                            </div>
                            <div>
                                <textarea placeholder="Message" rows={6} className="border border-gray-300 rounded-2xl w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#00a19e] resize-none"></textarea>
                            </div>
                            <button className="bg-[#00a19e] border border-[#00a19e] text-white w-full py-3 px-4 rounded-md  ">Submit Message</button>
                        </form>
                    
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default Contact