import { Element } from "react-scroll";

import {RocketIcon, Check, ArrowRightIcon, ShieldCheckIcon, CircleCheck, Shield, Repeat2, ChartLine, ShieldCheck, Quote, Zap} from 'lucide-react'
import { BsRocketTakeoff } from "react-icons/bs";
import { IoShieldHalfOutline } from "react-icons/io5";
import { GoZap } from "react-icons/go";
import { FaHeartbeat } from "react-icons/fa";

function Features () {
    return (
        <Element name="features">
            <div className="p-16 mt-16 scroll-mt-24 overflow-clip">
                <div className="relative text-center ">
                    <h2 className="absolute inset-0 flex items-center justify-center text-5xl top-1 font-bold text-[#1938380d] z-10 uppercase pointer-events-none">
                        FEATURES
                    </h2>
                    <h2 className="relative buttom-0 left-1/2-translate-x-1/2 translate-y-1/2 text-3xl font-bold text-gray-800 uppercase">
                        FEATURES
                    </h2>
                </div>
                <div className="">
                    <p className="relative items-center text-center justify-center mt-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
          
        
  
                <div className="rounded-md bg-white p-10 shadow-2xl mt-20">
                    <div className="flex gap-8"> 
                        <div className="flex-1 shadow-lg transform transition-all hover:-translate-y-1 duration-500 shadow-[#00a19e4d] rounded-2xl bg-[#00a19e] text-white p-6">
                            <div className="flex gap-3">
                                <i className="rounded-2xl flex bg-white w-14 h-14 items-center justify-center text-center text-[#00a19e]">
                                    <BsRocketTakeoff className='w-6 h-6' />
                                </i>
                                <div className="whitespace-nowrap">
                                    <h5 className="font-semibold text-[16px]">Innovation</h5>
                                    <p className="text-sm mt-1">Cuttin-edge Solutions</p>
                                </div>
                            </div>
                        </div>
                    

                        <div className="flex-1 transform transition-all border border-gray-200 group hover:-translate-y-1 duration-500 hover:shadow-[#0aa19e2c] hover:shadow-lg rounded-2xl hover:bg-[#00a19e] bg-white p-6">
                            <div className="flex gap-3">
                                <i className="rounded-2xl flex group-hover:bg-white group-hover:text-[#00a19e] text-white w-14 h-14 items-center justify-center text-center bg-[#00a19e]">
                                    <IoShieldHalfOutline className='w-6 h-6' />
                                </i>
                                <div className="whitespace-nowrap group-hover:text-white">
                                    <h5 className="font-semibold text-[16px]">Security</h5>
                                    <p className="text-gray-500 group-hover:text-white text-sm mt-1">Advanced Protection</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex-1 transform transition-all border border-gray-200 group hover:-translate-y-1 duration-500 hover:shadow-[#0aa19e2c] hover:shadow-lg rounded-2xl hover:bg-[#00a19e] bg-white p-6">
                            <div className="flex gap-3">
                                <i className="rounded-2xl flex group-hover:bg-white group-hover:text-[#00a19e] text-white w-14 h-14 items-center justify-center text-center bg-[#00a19e]">
                                    <GoZap className='w-6 h-6' />
                                </i>
                                <div className="whitespace-nowrap group-hover:text-white">
                                    <h5 className="font-semibold text-[16px]">Performance</h5>
                                    <p className="text-gray-500 group-hover:text-white text-sm mt-1">Lightning Fast Speed</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex-1 transform transition-all border border-gray-200 group hover:-translate-y-1 duration-500 hover:shadow-[#0aa19e2c] hover:shadow-lg rounded-2xl hover:bg-[#00a19e] bg-white p-6">
                            <div className="flex gap-3">
                                <i className="rounded-2xl flex group-hover:bg-white group-hover:text-[#00a19e] text-white w-14 h-14 items-center justify-center text-center bg-[#00a19e]">
                                    <FaHeartbeat className='w-6 h-6' />
                                </i>
                                <div className="whitespace-nowrap group-hover:text-white">
                                    <h5 className="font-semibold text-[16px]">Support</h5>
                                    <p className="text-gray-500 group-hover:text-white text-sm mt-1">24/7 assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    <div className="flex pr-10">
                        <div className="m-10 flex-1/3">
                            <div className="w-17 h-17 rounded-2xl bg-teal-600 items-center justify-center mb-6 shadow-teal-300 mt-8 flex text-white"><RocketIcon/></div>
                            <div>
                                    <h3 className="text-4xl font-bold mb-5 leading-5 text-[#193838]">Innovation Excellence</h3>
                                    <p className="text-[#3b5353cc] mb-7 leading-7 text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                        totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
                                    </p>
                            </div>
                            <div >
                                <ul className='grid grid-cols-2 gap-4'>
                                    <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Excepteur sint occaecat cupidatat non proident</li>
                                    <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>At vero eos et accusamus et iusto odio</li>
                                    <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Sunt in culpa qui officia deserunt mollit anim</li>
                                    <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white flex-none text-[#00a19e] w-5 h-5"/>Et harum quidem rerum facilis est et expedita</li>
                                </ul>
                            </div>

                            <div className="flex gap-8 mt-7 mb-9">
                                <div>
                                    <h2 className="text-[#00a19e] text-2xl font-bold mb-4">99%</h2> 
                                    <p className="text-[#3b5353cc] text-sm uppercase leading-0.5">UPTIME</p>
                                </div>
                                <div>
                                    <h2 className="text-[#00a19e] text-2xl font-bold mb-4">50K+</h2>
                                    <p className="text-[#3b5353cc] text-sm uppercase leading-0.5">USERS</p>
                                </div>
                                <div>
                                    <h2 className="text-[#00a19e] text-2xl font-bold mb-4">24/7</h2>
                                    <p className="text-[#3b5353cc] text-sm uppercase leading-0.5">SUPPORT</p>
                                </div>
                            </div>
                            <div className="flex gap-2 shadow-teal-800">
                                <button className="flex bg-[#00a19e] text-white px-9 py-4 gap-2 rounded-4xl transition-colors font-semibold items-center ">Learn More<ArrowRightIcon className="flex w-5 h-5"/></button>
                            </div>
                        </div>
                        <div className="flex-1/2 flex items-center  overflow-hidden">
                            <img src="/Images/features-1.webp" alt="Features" className="transition-transform duration-500 hover:scale-105 hover:rounded-3xl rounded-2xl" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className=" rounded-md bg-white p-10 shadow-2xl mt-30 transition-all duration-300 hover:border-teal-500 hover:translate-y-[-0.5rem] border border-transparent">
                        <div className="rounded-full text-teal-400 items-center justify-center bg-[#00a19e1a] mb-5 w-16 h-16 flex"><ShieldCheckIcon/></div>
                        <h3 className="text-2xl mb-4 font-semibold">Strategic Business Intelligence</h3>
                        <p className="text-[#3b5353cc] mb-5 text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                            luctus nec ullamcorper mattis, pulvinar dapibus leo. Aenean commodo ligula eget dolor.
                        </p>
                        <ul>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Real-time data analytics</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Automated reporting systems</li>
                        </ul>
                        <div className="group gap-2">
                            <a href="" className="text-[#00a19e] font-medium text-sm group-hover:text-teal-500">Business Solutions
                                <ArrowRightIcon className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-2 inline-block font-normal leading-1 translate-y-[-0.125rem]"/>
                            </a>
                        </div>
                    </div>

                    <div className=" rounded-md bg-white p-10 shadow-2xl mt-30 transition-all duration-300 hover:border-teal-500 hover:translate-y-[-0.5rem] border border-transparent">
                        <div className="rounded-full text-teal-400 items-center justify-center bg-[#00a19e1a] mb-5 w-16 h-16 flex"><Shield/></div>
                        <h3 className="text-2xl mb-4 font-semibold">Enterprise Security Framework</h3>
                        <p className="text-[#3b5353cc] mb-5 text-sm leading-6">Maecenas tempus, 
                            tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
                            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        </p>
                        <ul>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Advanced encryption protocols</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Multi-factor authentication</li>
                        </ul>
                        <div className="group gap-2">
                            <a href="" className="text-[#00a19e] font-medium text-sm group-hover:text-teal-500">Security Details
                                <ArrowRightIcon className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-2 inline-block font-normal leading-1 translate-y-[-0.125rem]"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center justify-center text-center py-6 px-5 ">
                    <div className=" rounded-md bg-white p-8 shadow-2xl mb-10 transition-all duration-300 hover:border-teal-500 hover:translate-y-[-0.5rem] border border-transparent">
                        <h4 className="text-[18px] font-semibold mb-4">Cloud Integration</h4>
                        <span className="text-[#0d6efd] bg-[#0D6EFD1A] mb-4 py-1.5 px-3 rounded-4xl">In Developement</span>
                    </div>

                    <div className="rounded-md bg-white p-8 shadow-2xl mb-10 transition-all duration-300 hover:border-teal-500 hover:translate-y-[-0.5rem] border border-transparent">
                        <h4 className="text-[18px] font-semibold mb-4">Data Management</h4>
                        <span className="text-[#198754] bg-[#1987541a] py-1.5 px-3 mb-4 rounded-4xl">Implemented</span>
                    </div>

                    <div className="rounded-md bg-white p-8 shadow-2xl mb-10 transition-all duration-300 hover:border-teal-500 hover:translate-y-[-0.5rem] border border-transparent">
                        <h4 className="text-[18px] font-semibold mb-4">Process Automation</h4>
                        <span className="text-[#198754] bg-[#1987541a] py-1.5 px-3 mb-4 rounded-4xl">Implemented</span>
                    </div>

                    <div className="rounded-md bg-white p-8 shadow-2xl mb-10 transition-all duration-300 hover:border-teal-500 hover:translate-y-[-0.5rem] border border-transparent">
                        <h4 className="text-[18px] font-semibold mb-4">AI Solutions</h4>
                        <span className="text-[#6c757d] bg-[#6c757d1a] py-1.5 px-3 mb-4 rounded-4xl">Scheduled</span>
                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="rounded-2xl p-10 shadow-sm transform transition-transform duration-300 hover:-translate-y-3">
                        <div className="rounded-full items-center text-white justify-center bg-[#00a19e] mb-5 w-16 h-16 flex"><Repeat2/></div>
                        <h3 className="text-2xl font-bold mb-4">Intuitive Dashboard Interface</h3>
                        <p className="text-[1rem] leading-relaxed mb-5 text-[#3b5353bf]">Lorem ipsum dolor sit amet consectetur 
                            adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                        </p>
                        <ul>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Real-time data visualization</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Customizable widgets</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Interactive reports</li>
                        </ul>
                        <div className="overflow-hidden rounded-2xl">
                            <img src="/Images/features-ab.webp" alt="Dashboard Feature" className="transition-transform duration-500 hover:scale-105 rounded-2xl" />
                        </div>
                    </div>

                    <div className="rounded-2xl p-10 shadow-sm bg-gradient-to-t from-white to-[#00a19e26] border border-[#00a19e40] transform transition-transform duration-300 hover:-translate-y-3">
                        <div className="rounded-full items-center text-white justify-center bg-[#00a19e] mb-5 w-16 h-16 flex"><ChartLine/></div>
                        <h3 className="text-2xl font-bold mb-4">Advanced Analytics Tools</h3>
                        <p className="text-[1rem] leading-relaxed mb-5 text-[#3b5353bf]">Mauris blandit aliquet elit eget tincidunt nibh 
                            pulvinar a cras ultricies ligula sed magna dictum porta mauris blandit aliquet elit eget tincidunt.
                        </p>
                        <ul>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className=" text-[#00a19e] w-5 h-5"/>Predictive Analysis</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className=" text-[#00a19e] w-5 h-5"/>Custom Reporting</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className=" text-[#00a19e] w-5 h-5"/>Data Exploration</li>
                        </ul>
                        <div className="overflow-hidden rounded-2xl">
                            <img src="/Images/features-abc.webp" alt="Dashboard Feature" className="transition-transform duration-500 hover:scale-105 rounded-2xl" />
                        </div>
                    </div>

                    <div className="rounded-2xl p-10 shadow-sm transform transition-transform duration-300 hover:-translate-y-3">
                        <div className="rounded-full items-center text-white justify-center bg-[#00a19e] mb-5 w-16 h-16 flex"><ShieldCheck/></div>
                        <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Security</h3>
                        <p className="text-[1rem] leading-relaxed mb-5 text-[#3b5353bf]">Nulla porttitor accumsan tincidunt praesent sapien massa 
                            convallis a pellentesque nec egestas non nisi proin eget tortor risus donec sollicitudin.
                        </p>
                        <ul>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>End-to-end encryption</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Advanced access control</li>
                            <li className=" mb-2.5 text-sm text-start flex gap-2.5"><CircleCheck className="bg-white text-[#00a19e] w-5 h-5"/>Compliance monitoring</li>
                        </ul>
                        <div className="overflow-hidden rounded-2xl">
                            <img src="/Images/features-a.webp" alt="Dashboard Feature" className="transition-transform duration-500 hover:scale-105 rounded-2xl" />
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-xl shadow-sm grid grid-cols-2 mt-20 gap-10">
                    <div>
                        <img src="/Images/features-jenn.webp" alt="Jennifer View" className=""/>
                    </div>
                    <div>
                        <div className="bg-[#00a19e1a] w-15 h-15 flex items-center justify-center text-center text-[#00a19e] text-[1.75rem] rounded-full mb-6"><Quote/></div>
                        <p className="text-[#193838] text-[1.25rem] leading-7 mb-8">Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Vivamus magna 
                            justo lacinia eget consectetur sed convallis at tellus. Curabitur aliquet quam id dui posuere blandit.
                        </p>
                        <h4 className="text-[#193838] text-[1.2rem] font-bold mb-1">Jennifer Austin</h4>
                        <span className="text-[#3b5353b3] text-[0.95rem]">Product Director at TechCorp</span>
                    </div>
                </div>
            </div>

            <div className='bg-[#0f302f] overflow-hidden flex relative mt-8 p-10'>
                <div className='flex-1'>
                    <h2 className='font-bold text-[2.5rem] leading-loose mb-5 mt-12 text-white'>Transform Your Business with Cutting-Edge Technology</h2>
                    <p className='leading-relaxed mb-8 text-[1.1rem] text-[#ffffffcc]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <ul>
                        <li className="mb-2.5 text-sm text-start flex gap-2.5 text-white"><CircleCheck className="text-[#00a19e] w-5 h-5"/>Streamline operations and enhance productivity</li>
                        <li className="mb-2.5 text-sm text-start flex gap-2.5 text-white"><CircleCheck className="text-[#00a19e] w-5 h-5"/>Achieve remarkable cost savings and efficiency gains</li>
                        <li className="mb-2.5 text-sm text-start flex gap-2.5 text-white"><CircleCheck className="text-[#00a19e] w-5 h-5"/>Scale your business resources intelligently</li>
                    </ul>
                    <button className="bg-[#00a19e] text-white px-8 py-4 rounded-2xl font-semibold mt-6 items-center justify-center transition-colors hover:bg-teal-600">Start Your Journey</button>
                </div>
                <div className='flex-1'>
                    <img src='/Images/transform.webp' alt='Transform your business' className='rounded-4xl' />
                </div>
            </div>
        </Element>

    )
}
export default Features