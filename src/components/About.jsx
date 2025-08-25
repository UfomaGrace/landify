import {ShieldCheckIcon, Zap, HeadsetIcon} from 'lucide-react'
function About () {
    return (
        <div href="about" id="about">
            <div className="flex">
                <div className="m-14 flex-1">
                    <span className="inline-block bg-[#00a19e1a] text-teal-600 py-2 px-4 rounded-md text-sm font-semibold uppercase tracking-wide">ABOUT OUR COMPANY</span>
                    <h2 className="text-4xl font-bold leading-tight [unicode-bidi:isolate] mt-6">Tempor incididunt ut labore et dolore magna</h2>
                    <p className="text-lg leading-relaxed font-medium mt-6 mb-6 text-[#193838]">Unde omnis iste natus error sit voluptatem 
                        accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis.
                    </p>
                    <p className="text-[#3b5353] leading-7 mb-10 mt-0">Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt 
                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="py-6 px-4 bg-white border border-gray-200 rounded-lg text-center hover:border-[#00a19e]">
                            <h2 className="text-3xl text-[#00a19e] leading-6 mb-4 font-bold">250+</h2>
                            <p className="text-sm text-[#3b5353] ">Projected Completed</p>
                        </div>
                        <div className="py-6 px-4 bg-white border border-gray-200 rounded-lg text-center hover:border-[#00a19e]">
                            <h2 className="text-3xl text-[#00a19e] leading-6 mb-4 font-bold">98%</h2>
                            <p className="text-sm text-[#3b5353] ">Client Satisfaction</p>
                        </div>
                        <div className="py-6 px-4 bg-white border border-gray-200 rounded-lg text-center hover:border-[#00a19e]">
                            <h2 className="text-3xl text-[#00a19e] leading-6 mb-4 font-bold">24/7</h2>
                            <p className="text-sm text-[#3b5353] ">Support Available</p>
                        </div>
                        <div className="py-6 px-4 bg-white border border-gray-200 rounded-lg text-center hover:border-[#00a19e]">
                            <h2 className="text-3xl text-[#00a19e] leading-6 mb-4 font-bold">12+</h2>
                            <p className="text-sm text-[#3b5353] ">Years Experience</p>
                        </div>
                    </div>

                </div>
                <div className="flex-1 grid grid-rows-2 grid-cols-2 gap-8 p-4 mt-12">  
                    <img src="/Images/about-image1.webp" alt="Office Space" className="col-span-2 row-span-1 w-full h-auto rounded-lg"/> 
                    <img src="/Images/about-image2.webp" alt="Staffs" className="rounded-md transform transition-transform duration-500 hover:scale-110 col-span-1 w-full h-auto"/>
                    <img src="/Images/about-image3.webp" alt="meetings" className="rounded-md transform transition-transform duration-500 hover:scale-110 col-span-1 w-full h-auto"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mr-10 ml-10 mb-10 items-center justify-center">
                <div className="flex flex-col items-center text-center p-6 mb-10">
                    <div className="flex items-center justify-center mb-6 mx-auto w-17 h-17 text-2xl text-white transition-transform duration-300 hover:translate-y-[-0.5rem] rounded-full bg-teal-600">
                        <ShieldCheckIcon />
                    </div>
                    <h2 className="text-2xl mb-4 text-[#193838] font-semibold">Trusted Security</h2>
                    <p className="leading-relaxed text-[#3b5353bf] m-0">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 mb-10">
                    <div className="flex items-center justify-center mb-6 mx-auto w-17 h-17 text-2xl text-white transition-transform duration-300 hover:translate-y-[-0.5rem] rounded-full bg-teal-600">
                        <Zap />
                    </div>
                    <h2 className="text-2xl mb-4 text-[#193838] font-semibold">Fast Performance</h2>
                    <p className="leading-relaxed text-[#3b5353bf] m-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 mb-10">
                    <div className="flex items-center justify-center mb-6 mx-auto w-17 h-17 text-2xl text-white transition-transform duration-300 hover:translate-y-[-0.5rem] rounded-full bg-teal-600">
                        <HeadsetIcon/>
                    </div>
                    <h2 className="text-2xl mb-4 text-[#193838] font-semibold">Expert Support</h2>
                    <p className="leading-relaxed text-[#3b5353bf] m-0">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.</p>
                </div>
            </div>
        </div>
        
    )
}
export default About