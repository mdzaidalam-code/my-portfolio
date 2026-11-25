import { Group } from "lucide-react"
import { topSkills,skillGroups } from "../data/portfolio"

export default function Skills() {
    return (
        <section id="skills" className="px-6 py-24 border-b border-line">
            <div className="mx-auto max-w-6xl">

                <h2 className='text-3xl font-semibold text-emerald-400 font-mono' >
                    02.<span className='text-white'> Skills</span>
                </h2>
                <div className="h-px w-24 bg-linear-to-r mt-2 from-emerald-400 to-transparent" />

                {/* Top skills */}
                <div className="space-y-3 mt-10">
                    <p className="uppercase text-xs tracking-widest text-cyan-400">strongest skills</p>
                    <div className="flex flex-wrap gap-3">
                        {
                        topSkills.map((skill) => (
                            <div key={skill} className="glow-emerald px-4 py-1 text-sm text-emerald-300 font-medium rounded-full border border-emerald-500 bg-emerald-400/10">
                                {skill}
                            </div>
                        ))
                    }
                    </div>
                </div>

                {/* Grouped skills */}
                <div className="grid gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((skl) => (
                        <div key={skl.title} className="space-y-5 border border-line bg-panel px-6 py-5 transition hover:border-cyan-400/80 duration-300 rounded-xl">
                            <h3 className="font-semibold text-slate-100">
                                {skl.title}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {skl.items.map((item) => (
                                <li
                                key={item}
                                 className="px-4 py-1 text-sm text-slate-300 rounded-sm bg-midnight hover:border hover:border-cyan-300/40 hover:scale-110 transition-transform duration-500">
                                    {item}
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}