import { FaGithub } from "react-icons/fa";
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

const statusStyles = {
  "In Progress": "border-cyan-400/50 text-cyan-300 bg-cyan-400/10",
  Ongoing: "border-emerald-400/50 text-emerald-300 bg-emerald-400/10",
  Planned: "border-slate-500/50 text-slate-300 bg-slate-500/10",
  Completed: "border-emerald-400/50 text-emerald-300 bg-emerald-400/10",
};

export default function Projects() {
    return(
        <section id='projects' className='px-6 py-24'>
            <div className='mx-auto max-w-6xl`'>
                <h2 className='text-3xl font-semibold text-emerald-400 font-mono' >
                    03.<span className='text-white'> Projects</span>
                </h2>
                <div className='mt-2 w-24 h-px bg-linear-to-r from-emerald-400 to-transparent'/>

                <div className="grid mt-13 gap-6 sm:grid-cols-2">
                    {projects.map((project) => (
                       <article key={project.name} className=" flex flex-col px-6 py-5 bg-panel rounded-xl border border-line hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.4)] hover:border-emerald-400/40 transition duration-300">
                          <div className="flex items-start justify-between gap-4">
                            
                             <h2 className="text-lg text-slate-100 font-semibold">
                                {project.name}
                            </h2>
                            
                             <span className={`shrink-0 py-0.5 text-xs font-medium px-4 rounded-full capitalize border ${statusStyles[project.status] ?? statusStyles.Planned}`}>
                                {project.status}
                             </span>
                        </div> 
                             <p className="text-slate-400/80 uppercase text-sm font-light tracking-widest">
                                {project.role}
                             </p>

                             <p className="my-5 flex-1 leading-relaxed text-slate-400">
                                {project.summary}
                             </p>

                             <ul className="text-sm space-y-1.5 text-slate-400">
                                {project.features.map((feature)=>(
                                    <li className="flex items-center gap-2">
                                       <span className="text-emerald-300">
                                        ▹
                                       </span>
                                        {feature}
                                    </li>
                                ))}
                             </ul>

                             <ul className="flex flex-wrap gap-1.5 mt-5">
                                {project.stack.map((tech)=>(
                                    <li key={tech} className="px-2.5 py-1 text-xs text-cyan-300 font-mono rounded-md bg-midnight-soft border border-cyan-300/20 hover:border-cyan-300/40 hover:scale-110 transition-transform duration-500">
                                        {tech}
                                    </li>
                                ))}
                             </ul>

                             {(project.repo || project.demo) && (
                                <div className="flex mt-7 justify-between border-t pt-4  border-line">
                                    {project.repo && (
                                        <a href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-sm text-slate-300 transition-all hover:text-cyan-400 gap-1.5 capitalize duration-300 hover:scale-110"
                                        >
                                        <FaGithub size={18}/> code
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center text-sm text-slate-300 transition hover:text-cyan-400 gap-1.5 capitalize duration-300 hover:scale-110"
                                        >
                                        <ExternalLink size={18}/> live demo
                                        </a>
                                    )}
                                </div>
                             )}
                          
                       </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

