import { Element } from "react-scroll";
import { CircleCheck, CircleMinus } from 'lucide-react'

function Pricing() {
  return (
    <Element name="pricing">
        <div>
            <div className="relative text-center ">
                <h2 className="absolute inset-0 flex items-center justify-center text-5xl top-1 font-bold text-[#1938380d] z-10 uppercase pointer-events-none">
                    PRICING
                </h2>
                <h2 className="relative buttom-0 left-1/2-translate-x-1/2 translate-y-1/2 text-3xl font-bold text-gray-800 uppercase">
                    PRICING
                </h2>
            </div>
            <div className="">
                <p className="relative items-center text-center justify-center mt-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-15 mx-20'>

            <div className="bg-white rounded-2xl p-8 shadow-sm transform transition-transform duration-300 hover:-translate-y-3 hover:border-[#00a19e5f] border border-gray-300">
                <span className='rounded-full mb-2.5 text-[#00a19e] bg-[#00a19e1a] inline-block py-1 px-3 text-sm font-bold uppercase tracking-wide border border-[#00a19e26]'>STARTER</span>
                <div>
                    <h3 className='text-2xl mt-0.5 mb-2 text-[#193838] ubuntu'>Lorem Dolor Sit</h3>
                    <p className='text-[#3b535373] mb-3.5'>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
                    <div className=' mt-6 mb-8'>
                        <span className='relative top-[-1.5rem] text-[18px] mr-0.5 font-bold leading-0 items-baseline'>$</span>
                        <span className='text-[#193838] font-extrabold leading-4 text-4xl inline-flex'>12</span>
                        <span className='relative top-[-1.0rem] text-lg text-[#3b535373] ml-1.5 font-semibold leading-4 items-baseline'>/mo</span>
                    </div>
                    <hr className='border border-t border-dotted border-gray-300 my-6'/>
                    <ul>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Lorem ipsum dolor amet</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Consectetur adipiscing elit</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Sed do eiusmod tempor</li>
                        <li className="text-[#3b535373] py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleMinus className="bg-white flex-none text-[#3b535373] w-5 h-5"/>Incididunt ut labore</li>
                        <li className="text-[#3b535373] py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleMinus className="bg-white flex-none text-[#3b535373] w-5 h-5"/>Dolore magna aliqua</li>
                    </ul>
                    <div className='text-center justify-center items-center'>
                        <button className='bg-white border-2 font-semibold border-[#00a19e] text-[#00a19e] w-full py-2 px-4 rounded-lg hover:text-white hover:bg-[#00a19e] transition transition:colors duration-300'>Get Started</button>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl p-8 shadow-2xl shadow-[#00a19e8e] transform transition-transform duration-300 hover:-translate-y-3 border border-[#00a19e5f] bg-gradient-to-t from-white to-[#00a19e1a]">
                <span className='rounded-full mb-2.5 text-[#00a19e] bg-[#00a19e1a] inline-block py-1 px-3 text-sm font-bold uppercase tracking-wide border border-[#00a19e26]'>PRO</span>
                <div>
                    <h3 className='text-2xl mt-0.5 mb-2 text-[#193838] ubuntu'>Cras Aenean Quam</h3>
                    <p className='text-[#3b535373] mb-3.5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    <div className=' mt-6 mb-8'>
                        <span className='relative top-[-1.5rem] text-[18px] mr-0.5 font-bold leading-0 items-baseline'>$</span>
                        <span className='text-[#193838] font-extrabold leading-4 text-4xl inline-flex'>29</span>
                        <span className='relative top-[-1.0rem] text-lg text-[#3b535373] ml-1.5 font-semibold leading-4 items-baseline'>/mo</span>
                    </div>
                    <hr className='border border-t border-dotted border-gray-300 my-6'/>
                    <ul>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Excepteur sint occaecat</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Cupidatat non proident</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Sunt in culpa qui officia</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Deserunt mollit anim id</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Est laborum commodo</li>
                    </ul>
                    <div className='text-center justify-center items-center'>
                        <button className='bg-white border-2 font-semibold border-[#00a19e] text-[#00a19e] w-full py-2 px-4 rounded-lg hover:text-white hover:bg-[#00a19e] transition transition:colors duration-300'>Choose Pro</button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm transform transition-transform duration-300 hover:-translate-y-3 hover:border-[#00a19e5f] border-gray-300 border">
                <span className='rounded-full mb-2.5 text-[#00a19e] bg-[#00a19e1a] inline-block py-1 px-3 text-sm font-bold uppercase tracking-wide border border-[#00a19e26]'>BUSINESS</span>
                <div>
                    <h3 className='text-2xl mt-0.5 mb-2 text-[#193838] ubuntu'>Porta Parturient</h3>
                    <p className='text-[#3b535373] mb-3.5'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</p>
                    <div className=' mt-6 mb-8'>
                        <span className='relative top-[-1.5rem] text-[18px] mr-0.5 font-bold leading-0 items-baseline'>$</span>
                        <span className='text-[#193838] font-extrabold leading-4 text-4xl inline-flex'>59</span>
                        <span className='relative top-[-1.0rem] text-lg text-[#3b535373] ml-1.5 font-semibold leading-4 items-baseline'>/mo</span>
                    </div>
                    <hr className='border border-t border-dotted border-gray-300 my-6'/>
                    <ul>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Quam nihil molestiae</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Consequatur vel illum</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Qui dolorem eum fugiat</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Quis nostrum exercitationem</li>
                        <li className="py-1 px-0 mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Ullam corporis suscipit</li>
                    </ul>
                    <div className='text-center justify-center items-center'>
                        <button className='bg-white border-2 font-semibold border-[#00a19e] text-[#00a19e] w-full py-2 px-4 rounded-lg hover:text-white hover:bg-[#00a19e] transition transition:colors duration-300'>Start Business</button>
                    </div>
                </div>
            </div>
        </div>
    
    </Element>
  )
}

export default Pricing