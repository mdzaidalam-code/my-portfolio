
import { useState,useEffect } from 'react';


export default function Hero() {
  const role = ['Frontend Developer Intern','React.js Developer','MERN Stack Learner']

  const [text,setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(()=>{
    const currRole = role[index];
    const complete = !deleting && text === currRole
    const delay = complete ? 1000 : deleting ? 50 : 100

    const timer = setTimeout(() => {
      if (complete) {
        setDeleting(true)
      }
      else if (deleting) {
        setText((prev) => prev.slice(0,-1))

        if (text==='') {
          setDeleting(false)
          setIndex((prev)=> (prev +1)%role.length)
        }
      }
      
      else{
        setText(currRole.slice(0,text.length+1))
      }
    },delay) 

    return () => clearTimeout(timer)
  },[index,text,deleting])
  return (
    <main className="min-h-screen flex flex-col justify-center items-start px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
      
      {/* 1. Status Badge */}
      <div className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-4 py-1.5 rounded-full text-xs font-mono mb-6">
        🟢 Open for Internships · 2026
      </div>

      {/* 2. Main Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
        Hi, I'm <span className="bg-linear-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Md Zaid Alam Ansari</span>
      </h1>

      {/* 3. Subtitle / Role */}
      <h2 className="text-2xl text-slate-400 font-mono mb-6">
        &gt; {text}
      </h2>

      {/* 4. Short Bio */}
      <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
        B.Tech Computer Science student building clean, responsive web applications using React.js and Tailwind CSS.
      </p>

      {/* 5. Call to Action Button */}
      <a href='#projects' className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all cursor-pointer">
        Explore My Projects →
      </a>

    </main>
  );
}



