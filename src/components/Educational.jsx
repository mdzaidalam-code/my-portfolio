import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function EducationTimeline() {
  const coursework = [
    "Data Structures & Algorithms (Java)",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Web Development"
  ];
  return (
    <div className='space-y-12 max-w-6xl px-6 md:px-8 lg:px-12 mx-auto'>
      <div className='space-y-4'>
        <h3 className='font-bold text-3xl sm:text-4xl tracking-tight text-white'>
          Education &amp; Coursework
        </h3>
        <p className='max-w-2xl text-sm sm:text-base text-slate-400'>
          My Computer Science engineering background and core technical coursework that shape my problem-solving approach.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8'>
        {/* left side content */}
        <div className='col-span-2 space-y-7'>

          {/* Btech card */}
          <div className='p-8 bg-slate-900/60 space-y-5 rounded-3xl border border-slate-500/30 hover:border-slate-700 transition-all'>
            <div className='flex justify-between items-center'>
              <div className='w-12 h-12 flex justify-center items-center border border-emerald-800 bg-emerald-950/60 rounded-2xl text-emerald-400'>
                <GraduationCap className='w-6 h-6' />
              </div>
              <span className='font-mono text-xs text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30'>
                2023 - 2027 (7th Semester)
              </span>
            </div>
            <div className='space-y-3'>
              <h5 className='text-white font-bold text-xl'>Bachelor of Technology — Computer Science &amp; Engineering</h5>
              <div className='space-y-1.5'>
                <p className='text-cyan-300 text-sm font-medium'>BA College of Engineering and Technology</p>
                <p className='text-slate-400 text-xs'>Jharkhand University of Technology (JUT)</p>
              </div>
            </div>
            <div className='flex gap-5 text-sm font-mono text-slate-300 pt-5 border-t border-slate-500/40'>
              <div className='flex items-center gap-1.5'>
                <Award className='text-emerald-400 w-5 h-5' /> CGPA: <strong className='text-white tex-lg'>6.74 / 10</strong>
              </div>
              <span>
                •
              </span>
              <span>
                Focus: Full-Stack &amp; DSA
              </span>
            </div>
          </div>


          <div className='grid sm:grid-cols-2 gap-4 '>
            <div className='p-5 bg-slate-900/60 rounded-2xl border border-slate-500/30 hover:border-slate-700 transition-all space-y-2'>
              <span className='font-mono text-sm text-slate-500 uppercase'>intermediate</span>
              <h5 className='text-white font-bold text-sm'>KCC</h5>
              <span className='text-xs text-slate-400 uppercase'>jamshedpur</span>
            </div>
            <div className='p-5 bg-slate-900/60 rounded-2xl border border-slate-500/30 hover:border-slate-700 transition-all  space-y-2'>
              <span className='font-mono text-sm text-slate-500 uppercase'>matriculation</span>
              <h5 className='text-white font-bold text-sm'>NSPS</h5><span className='text-xs text-slate-400 uppercase'>jamshedpur</span>
            </div>

          </div>
        </div>
        {/* Right side */}

        <div className='bg-slate-900/60 border border-slate-500/30 hover:border-slate-700 transition-all rounded-2xl p-6 space-y-6'>
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <BookOpen className='w-5 h-5 text-cyan-400' />
              <h5 className='text-white font-bold'>
                Relevant Coursework
              </h5>
            </div>
          </div>
          <p className='text-xs leading-relaxed text-slate-400'>
            Core computer science subjects studied during my B.Tech degree:
          </p>

          <ul className='space-y-3'>
            {coursework.map((topic, idx) => (
              <li key={idx} className='flex items-center gap-2.5'>
                <CheckCircle className='shrink-0 w-5 h-5 text-emerald-400'/>
                <span className='text-xs text-slate-300'>{topic}</span>
              </li>
            ))}
          </ul>
          <div className=' pt-5 border-t border-slate-500/30 font-mono text-slate-400 text-sm'>
            <p>
              💡 <strong className="text-slate-200">DSA Focus:</strong> Actively practicing data structures using Java.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}