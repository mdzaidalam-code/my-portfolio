import React from 'react'

const SkillCard = ({ key, name, category, level }) => {
    return (
        <div className='flex flex-col justify-between bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-5 space-y-3'>
            <div className='flex items-center justify-between'>
                <span className='font-semibold text-sm text-white'>
                    {name}
                </span>
                
                <div className='text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-700'>
                    {category}
                </div>
            </div>
            <div className="text-xs font-mono text-emerald-400/90">
                ● {level}
              </div>
        </div>
    )
}

export default SkillCard