import {about, profile} from '../data/portfolio'

export default function About(){
    return(
        <section id='about' className='px-6 py-24 border-b border-line'>
        <div className='mx-auto max-w-6xl'>
            <h2 className='text-3xl font-semibold text-emerald-500 font-mono' >
            01.<span className='text-white'> About me</span>
        </h2>
        <div className='mt-2 w-24 h-px bg-linear-to-r from-emerald-400 to-transparent'/>
        <div className='grid gap-10 mt-10 md:grid-cols-5'>
            <div className='max-w-2xl space-y-5 text-slate-400 text-base md:col-span-3'>
                {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            </div>
            <div className='space-y-4 md:col-span-2'>
                <div className='border border-cyan-400/40 bg-panel rounded-lg p-5 transition-all duration-500 hover:bg-[#172a45] hover:border-cyan-400/80 hover:scale-105'>
                    <p className='uppercase text-sm text-cyan-500 mb-2'>
                        status
                    </p>
                    <p className='text-md font-medium text-slate-300'>{about.status}</p>
                </div>
                <div className='border border-cyan-400/40 bg-panel rounded-lg p-5 transition-all duration-500 hover:bg-[#172a45] hover:border-cyan-400/80 hover:scale-105'>
                    <p className='uppercase text-sm text-cyan-500 mb-2'>
                        focus
                    </p>
                    <p className='text-md font-medium text-slate-300'>{about.specialization}</p>
                </div>
            </div>
        </div>
        </div>
    </section>
    )
}