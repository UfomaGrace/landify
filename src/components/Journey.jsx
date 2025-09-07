import { Element } from "react-scroll";
import {CirclePlay} from 'lucide-react'
import { BsLightbulb, BsPeople, BsAward } from "react-icons/bs";
function Journey () {
    return (
        <Element name="home"className="mt-25 p-6 flex bg-gradient-to-tr from-[#00a19e1e] to-[#fff] border-0">
            <div className="m-10 flex-1">  
                <h1 className="block font-normal leading-tight mb-8 text-6xl text-[#193838]">Creating Digital Experiences That Matters</h1>
                <p className="my-5 text-gray-500 text-2xl leading-relaxed font-light mb-12">We craft beautiful, functional, and meaningful digital solutions that help businesses connect with their audiences in authentic ways.</p>
                <div className="flex items-center gap-4 mx-0 mb-3">
                    <button className="bg-teal-500  text-white px-8 py-4  rounded-md transition-colors hover:bg-teal-600">Start Your Journey</button>
                    <div className="flex items-center gap-2">
                        <button className="hover:text-teal-500 flex items-center gap-2 py-2 px-4 rounded">
                        <CirclePlay className="text-teal-600 text-2xl"/> Watch our Story 
                        </button>
                    </div>
                </div>
                <div className="flex gap-10 mt-16 mb-10">
                    <div>
                        <h2 className="text-teal-500 text-3xl mb-3">150+</h2> 
                        <p className="text-gray-500">Project Completed</p>
                    </div>
                    <div>
                        <h2 className="text-teal-500 text-3xl mb-3">98%</h2>
                        <p className="text-gray-500">Client Satisfaction</p>
                    </div>
                    <div>
                        <h2 className="text-teal-500 text-3xl mb-3">24/7</h2>
                        <p className="text-gray-500">Support Available</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center relative">
                <div className="">
                    <img src="/Images/main-image.webp" alt="Illustration" />
                </div>

                <div className="flex gap-3 mr-10 mt-10 rounded-md p-5 animate-bounce [animation-duration:5s] right-40 top-40 absolute bg-white shadow-sm">
                    <span className="text-[#00a19e]"><BsLightbulb /></span>
                    <span className="text-sm font-medium">Innovation</span>
                </div>

                <div className="flex gap-3 mb-35 rounded-md p-5 animate-bounce [animation-duration:4s] bottom-30 left-8 absolute bg-white shadow-sm">
                    <span className="text-[#00a19e]"><BsPeople /></span>
                    <span className="text-sm font-medium">Collaboration</span>
                </div>

                <div className="flex gap-3 mb-35 rounded-md p-5 animate-bounce [animation-duration:5s] right-10 bottom-40 absolute bg-white shadow-sm">
                    <span className="text-[#00a19e]"><BsAward /></span>
                    <span className="text-sm font-medium">Excellence</span>
                </div>
            </div>
            
        </Element>
    )
}
export default Journey