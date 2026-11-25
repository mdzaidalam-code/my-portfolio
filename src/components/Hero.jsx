import { profile } from '../data/portfolio'
import { Download, Mail, ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
    return (
        <section id='home' className='relative isolate min-h-screen px-6 pt-24 flex items-center  border-b border-line'>

            <div className="relative mx-auto w-full max-w-6xl space-y-7 ">

                <div
                    className="absolute -left-10 -top-10
               h-35 w-35 rounded-full
               bg-emerald-300/60 blur-[55px]
              sm:-left-20 sm:w-55 sm:blur-[70px]
               transition-all duration-700 ease-in-out "
                />

                {/* Cyan glow */}
                <div
                    className=" absolute -right-10 top-20
               h-40 w-40 rounded-full
               bg-cyan-300/90 blur-[70px]
               sm:right-10  sm:w-50 sm:blur-[80px]
               md:right-20  md:w-60 md:blur-[90px]
               lg:right-38 lg:h-35 lg:w-70 lg:blur-[100px]
               transition-all duration-500 ease-in-out"
                />

                <div className='relative mx-auto w-full max-w-6xl space-y-3'>
                    <p className="mb-4 font-mono text-sm text-cyan-400">Hi, my name is</p>

                    <h1 className=" text-4xl font-bold text-slate-100 sm:text-6xl">
                        {profile.name}
                    </h1>

                    <h2 className="text-lg text-slate-400 sm:text-2xl">
                        {profile.title}
                    </h2>
                </div>

                <p className="mb-10 max-w-xl text-lg text-slate-300">{profile.tagline}</p>

                <div className='flex flex-wrap gap-5'>
                    <a href='#projects' className='flex items-center gap-2 text-black px-6 py-3 bg-emerald-500 font-medium hover:bg-emerald-400 capitalize rounded-md transition-colors duration-400'>view projects <ArrowRight size={18} /></a>
                    <a href={profile.resumeFile} download className='flex items-center gap-2 text-cyan-400 px-6 py-3 border border-cyan-400/40 font-medium hover:bg-cyan-500/20 hover:border-cyan-400 capitalize rounded-md transition-colors duration-400'><Download size={18} /> download resume </a>
                </div>

                <div className='mt-10 flex items-center gap-5 text-slate-400 '>
                    <a href={profile.github} className='hover:text-emerald-500 transition-colors duration-400'><FaGithub size={24} /></a>
                    <a href={profile.linkedin} className='hover:text-emerald-500 transition-colors duration-400'><FaLinkedinIn size={24} /></a>
                    <a href={profile.email} className='hover:text-emerald-500 transition-colors duration-400'><Mail size={24} /></a>
                </div>
            </div>
        </section>
    )
}