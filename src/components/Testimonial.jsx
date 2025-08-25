import { Quote, Trophy } from 'lucide-react'
function Testimonial () {
    return (
        <div>
            <div className="mt-18">
                <div className="relative text-center ">
                    <h2 className="absolute inset-0 flex items-center justify-center text-5xl top-1 font-bold text-[#1938380d] z-10 uppercase pointer-events-none">
                        TESTIMONIAL
                    </h2>
                    <h2 className="relative buttom-0 left-1/2-translate-x-1/2 translate-y-1/2 text-3xl font-bold text-gray-800 uppercase">
                        TESTIMONIAL
                    </h2>
                </div>
                <div className="">
                    <p className="relative items-center text-center justify-center mt-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
            </div>




            <div className="grid grid-cols-1 p-16 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5">
                <div className="bg-white p-8 mt-auto rounded-2xl relative border border-gray-200 transform transition-transform items-start duration-400 -translate-y-26 ">
                    <div className="font-normal absolute top-0 rounded-full left-10 w-10 h-10 flex items-center justify-center bg-white -translate-y-5 shadow text-9xl z-0">
                        <Quote className='h-6 text-[#00a19e]'/>
                    </div>
                    <p className="text-gray-800 text-[1rem] my-6 leading-relaxed relative z-10 font-normal">Implementing innovative strategies has revolutionized
                        our approach to market challenges and competitive positioning.
                    </p>
                    
                    <hr className='border border-t border-gray-200 my-6'/>
                    <div className="flex items-center mt-6 mb-0 gap-4 relative z-10">
                        <img src="/Images/Rachel.webp" alt="Rachel Bennett" className="w-12 h-12 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-[#193838] mb-1 text-[1.125rem]">Rachel Benett</h3>
                            <span className="text-sm text-[#19383899]">Strategy Director</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#00a19e1a] p-8 mt-auto rounded-2xl relative border border-[#00a19e40] transform transition-transform translate-y-4 ">
                    <div className="font-normal absolute top-0 rounded-full left-10 w-10 h-10 flex items-center justify-center bg-[#00a19e1a] -translate-y-5 shadow text-9xl z-0">
                        <Quote className='h-6 text-[#00a19e]'/>
                    </div>
                    <p className="text-gray-800 text-[1rem] my-6 leading-relaxed relative z-10 font-normal">Exceptional service delivery and innovative solutions have transformed our business operations, 
                        leading to remarkable growth and enhanced customer satisfaction across all touchpoints.
                    </p>
                    
                    <hr className='border border-t border-gray-300 my-6'/>
                    <div className="flex items-center mt-6 gap-4 relative z-10">
                        <img src="/Images/Daniel.webp" alt="Daniel Morgan" className="w-12 h-12 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-[#193838] mb-1 text-[1.125rem]">Daniel Morgan</h3>
                            <span className="text-sm text-[#19383899]">Chief Innovation Officer</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 mt-auto rounded-2xl relative border border-gray-200 transform transition-transform duration-400 -translate-y-26">
                    <div className="font-normal absolute top-0 rounded-full left-10 w-10 h-10 flex items-center justify-center bg-white -translate-y-5 shadow text-9xl z-0">
                        <Quote className='h-6 text-[#00a19e]'/>
                    </div>
                    <p className="text-gray-800 text-[1rem] my-6 leading-relaxed relative z-10 font-normal">Strategic partnership has enabled seamless digital transformation and 
                        operational excellence.
                    </p>
                    
                    <hr className='border border-t border-gray-200 my-6'/>
                    <div className="flex items-center mt-6 mb-0 gap-4 relative z-10">
                        <img src="/Images/Emma.webp" alt="Emma Thompson" className="w-12 h-12 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-[#193838] mb-1 text-[1.125rem]">Emma Thompson</h3>
                            <span className="text-sm text-[#19383899]">Digital Lead</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 mt-auto rounded-2xl relative border border-gray-200 transform transition-transform duration-400 -translate-y-24 ">
                    <div className="font-normal absolute top-0 rounded-full left-10 w-10 h-10 flex items-center justify-center bg-white -translate-y-5 shadow text-9xl z-0">
                        <Quote className='h-6 text-[#00a19e]'/>
                    </div>
                    <p className="text-gray-800 text-[1rem] my-6 leading-relaxed relative z-10 font-normal">Professional expertise and dedication 
                        have significantly improved our project delivery timelines and quality metrics.
                    </p>
                    
                    <hr className='border border-t border-gray-200 my-6'/>
                    <div className="flex items-center mt-6 mb-0 gap-4 relative z-10">
                        <img src="/Images/Christopher.webp" alt="Christopher Lee" className="w-12 h-12 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-[#193838] mb-1 text-[1.125rem]">Christopher Lee</h3>
                            <span className="text-sm text-[#19383899]">Technical Director</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#00a19e1a] p-8 mt-auto rounded-2xl relative border border-[#00a19e40] transform transition-transform duration-400 translate-y-12">
                    <div className="font-normal absolute top-0 rounded-full left-8 w-10 h-10 flex items-center justify-center bg-[#00a19e1a] -translate-y-5 shadow text-9xl z-0">
                        <Quote className='h-6 text-[#00a19e]'/>
                    </div>
                    <p className="text-gray-800 text-[1rem] my-6 leading-relaxed relative z-10 font-normal">Collaborative approach and industry expertise have revolutionized our product development cycle, 
                        resulting in faster time-to-market and increased customer engagement levels.
                    </p>
                    
                    <hr className='border border-t border-gray-300 my-6'/>
                    <div className="flex items-center mt-6 gap-4 relative z-10">
                        <img src="/Images/Olivia.webp" alt="Olivia Carter" className="w-12 h-12 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-[#193838] mb-1 text-[1.125rem]">Olivia Carter</h3>
                            <span className="text-sm text-[#19383899]">Product Manager</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 mt-auto rounded-2xl relative border border-gray-200 transform transition-transform items-start duration-400 -translate-y-22 ">
                    <div className="font-normal absolute top-0 rounded-full left-10 w-10 h-10 flex items-center justify-center bg-white -translate-y-5 shadow text-9xl z-0">
                        <Quote className='h-6 text-[#00a19e]'/>
                    </div>
                    <p className="text-gray-800 text-[1rem] my-6 leading-relaxed relative z-10 font-normal">Innovative approach to user experience design has significantly 
                        enhanced our platform's engagement metrics and customer retention rates.
                    </p>
                    
                    <hr className='border border-t border-gray-200 my-6'/>
                    <div className="flex items-center mt-6  gap-4 relative z-10">
                        <img src="/Images/Nathan.webp" alt="Nathan Brooks" className="w-12 h-12 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-[#193838] mb-1 text-[1.125rem]">Nathan Brooks</h3>
                            <span className="text-sm text-[#19383899]">UX Director</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>

                <div className='mt-10 text-center justify-center min-h-screen'>
                    <h3 className='text-[#193838] font-bold text-[2.75rem] leading-5 mb-6 p-6'>Driving Excellence Through Innovation</h3>
                    <p className='text-[#3b5353bf] text-[1.125rem] font-normal mb-10 ml-auto mr-auto max-w-xl '>Vestibulum rutrum quam vitae fringilla tincidunt. 
                        Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.
                    </p>
                
                </div>
                
            </div>
        </div>
    )
}
export default Testimonial