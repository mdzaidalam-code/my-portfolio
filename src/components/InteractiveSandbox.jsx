import React, { useState } from 'react'
import { Sliders, Copy, Check, Code2 } from 'lucide-react';

const InteractiveSandbox = () => {
  const [buttonText, setButtonText] = useState('Click Me');
  const [variant, setVariant] = useState('cyan');
  const [border, setBorder] = useState('small')

  return (
    <div className='space-y-4 w-5xl mx-auto'>
      <div className='space-y-1.5'>
        <h3>
          Interactive UI Playground
        </h3>
        <p>
          Customize the UI state using the controls below to see real-time React component rendering and dynamic jsx code generation
        </p>
      </div>

      {/* main div */}
      <div className='bg-slate-900/60 border border-slate-500/30 rounded-3xl hover:border-slate-700 flex justify-between gap-5 p-10'>

        {/* left content */}
        <div className=' w-full space-y-5'>
          <div className='pb-4 border-b flex gap-2 text-white border-slate-400/30'>
            <Sliders className='w-5 h-5 text-emerald-400' />
            <span className='capitalize font-bold'>state controls</span>
          </div>
          <div className='space-y-2'>
            <label className='font-mono text-xs text-slate-400'>Button Label Text</label>
            <input className='bg-slate-950/30 border border-slate-500/40 px-4 py-2.5 text-sm text-white rounded-xl w-full outline-none' type="text" value={buttonText} onChange={(e) => setButtonText(e.target.value)} />
          </div>
          <div className='space-y-2'>
            <label className='font-mono text-xs text-slate-400'>Color Variant</label>
            <div className='flex gap-2'>
              {['emerald', 'cyan', 'outline'].map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}

                  className={`flex-1 py-3 text-xs transition-all cursor-pointer font-mono rounded-xl capitalize ${variant === v ? "bg-emerald-400 text-slate-950 font-bold" : "bg-slate-950 text-slate-400 border border-slate-800"}
              `}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className='font-mono text-xs text-slate-400 capitalize'>border radius</label>
            <div className='flex gap-2'>
              {['small', 'medium', 'pill'].map((b) => (
                <button
                  key={b}
                  onClick={() => setBorder(b)}

                  className={`flex-1 py-3 text-xs transition-all cursor-pointer font-mono rounded-xl capitalize ${border === b ? "bg-emerald-400 text-slate-950 font-bold" : "bg-slate-950 text-slate-400 border border-slate-800"}
              `}>
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>


        {/* right content */}
        <div className='w-full flex flex-col'>

          <div className='flex flex-col'>
            <label className='font-mono text-xs text-slate-400 capitalize'>border radius</label>
            <div className='h-35 flex justify-center items-center rounded-2xl border border-slate-500/30 bg-slate-950'>
              <button
                className={`text-lg transition-all cursor-pointer  rounded-xl capitalize text-slate-950 bg-emerald-500 font-bold px-6 py-3
              `}>
                {buttonText}
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='font-mono text-xs text-slate-400 capitalize'>border radius</label>
            <div className='rounded-2xl border border-slate-500/30 bg-slate-950'>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InteractiveSandbox