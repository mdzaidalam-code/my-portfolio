import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";

export default function Education(){
    return(
    <section id="education" className="px-6 py-24 ">
        <div className="mx-auto max-w-6xl">
                <h2 className='text-3xl font-semibold text-emerald-400 font-mono' >
                    04.<span className='text-white'> Education</span>
                </h2>
                <div className='mt-2 w-24 h-px bg-linear-to-r from-emerald-400 to-transparent'/>

                <div className="mt-10 flex flex-col gap-5 rounded-xl border border-line bg-panel p-6 sm:flex-row sm:items-center">
                    <div className="bg-emerald-400/10 rounded-lg h-12 w-12 flex items-center justify-center text-emerald-400">
                        <GraduationCap size={26}/>
                    </div>

                    <div className="">
                        <h3 className="text-slate-100 font-medium">
                            {education.degree}
                        </h3>
                        <p className="my-1 text-slate-400">{education.college}</p>
                        <p className="text-sm text-slate-400/70">
                            {education.semester} · Expected {education.graduation}
                        </p>
                    </div>
                </div>
        </div>
    </section>
)}