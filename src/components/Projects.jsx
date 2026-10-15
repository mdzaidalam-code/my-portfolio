import React, { useState } from 'react';
import { ExternalLink, Layers, ShoppingBag, CheckSquare, Code2 } from 'lucide-react';

export default function Projects() {

    const [activeTab, setActiveTab] = useState('all')

    const projects = [
        {
            id: "food-delivery",
            title: "Food Delivery & Restaurant Web App",
            category: "featured",
            icon: ShoppingBag,
            description: "A responsive, component-based food delivery application built with React.js and Vite. Features multi-page routing, category filtering, cart state management via Context API, and a payment checkout flow.",
            techStack: ["React.js", "Vite", "React Router", "Context API", "Tailwind CSS"],
            highlights: [
                "Multi-page navigation (Home, Cart, Orders) using React Router",
                "Cart state management powered by React Context API",
                "Smooth category filtering animations and payment-step UI"
            ],
            github: "#",
            live: "#"
        },
        {
            id: "todo-app",
            title: "Task Master Todo Application",
            category: "react",
            icon: CheckSquare,
            description: "A functional, everyday task management application built to solidify core React state operations and component-driven architecture.",
            techStack: ["React.js", "JavaScript (ES6+)", "CSS3"],
            highlights: [
                "Core CRUD operations (Adding, updating, and deleting tasks)",
                "Practiced immutable state updates in React hooks",
                "Clean, responsive layout for daily productivity"
            ],
            github: "#",
            live: "#"
        },
        {
            id: "micro-apps",
            title: "React & JS Micro-Apps Collection",
            category: "javascript",
            icon: Code2,
            description: "A curated collection of interactive JavaScript and React mini-applications built to strengthen DOM manipulation and state logic.",
            techStack: ["JavaScript", "React.js", "DOM API"],
            highlights: [
                "Interactive Dice Game & Dynamic Color Changer",
                "Responsive Job Card Dashboard & Student Attendance Tracker",
                "Digital Banking / Customer Segmentation UI"
            ],
            github: "#",
            live: "#"
        }
    ];

    const filterProject = activeTab === 'all' ? projects : projects.filter((tab) =>
        tab.category === activeTab || (activeTab === "react" && tab.category === "featured")
    )

    return (
        <section id='projects' className='flex flex-col justify-center items-start px-6 md:px-8 lg:px-12 max-w-6xl mx-auto space-y-8 py-10'>
            <div className='space-y-2'>
                <h2 className='text-4xl font-bold text-white tracking-tight'>Projects & Appplication</h2>
                <p className='text-sm sm:text-base text-slate-400 max-w-2xl'>Real-world applications built to demonstrate component composition, state management, and responsive UI design.</p>
            </div>

            <div className='flex gap-2 '>
                {['all', 'react', 'javascript'].map((tab) => (
                    <button onClick={() => setActiveTab(tab)} className={`bg-amber-300 px-4 py-2 rounded-xl font-mono text-xs  uppercase transition-all cursor-pointer ${activeTab === tab ?
                            "bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20" : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                        } `}>
                        {tab === 'all' ? 'All Projects' : tab === 'react' ? 'React App' : 'Micro-Apps'}
                    </button>
                ))}

            </div>

            <div className=' grid grid-col-1 md:grid-cols-2 gap-6 w-full'>
                {
                    filterProject.map((projects) => {
                        const Icon = projects.icon
                        return (
                            <div className='bg-slate-900/50 border border-slate-600/50 space-y-6 p-7 rounded-2xl hover:border-slate-700 transition-all flex flex-col justify-between '>
                                <div className='space-y-4'>
                                <div className='flex justify-between'>
                                    <div className='w-12 h-12 flex items-center justify-center bg-emerald-950/80 border border-emerald-500/30 text-emerald-500 rounded-xl'>
                                        <Icon className='w-6 h-6'/>
                                    </div>

                                    <div className='flex gap-3 items-center text-slate-400'>
                                        <a href="" className=' hover:text-white transition-colors'>
                                            gi
                                        </a>
                                        
                                        <a href="" className=' hover:text-white transition-colors'>
                                            <ExternalLink/>
                                        </a>
                                    </div>
                                </div>
                                        <h4 className='font-bold text-white text-xl'>
                                            {projects.title}
                                        </h4>
                                        <p className='text-sm text-slate-300 leading-relaxed'>
                                            {projects.description}
                                        </p>
                                    
                                        <ul className='border-t border-slate-700/80 space-y-2 pt-2 '>
                                            {projects.highlights.map((highlights,idx) => (
                                                <li key={idx} className='text-xs text-slate-400 flex items-center gap-2'>
                                                    <span className='bg-emerald-400 w-1.5 h-1.5 rounded-full shrink-0'/>
                                                    <span>{highlights}</span>
                                                </li>
                                            ))}
                                        </ul>
                                </div>
                                <div className='flex flex-wrap pt-4 gap-1.5'>
                                    {projects.techStack.map((techStack,idx) => (
                                    <div key={idx} className='rounded-md text-xs font-mono bg-slate-950 px-2.5 py-1 border border-slate-600/70 text-cyan-300'>
                                           {techStack} 
                                    </div>
                                    ))}
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
// bg-slate-900/50 border border-slate-600/50 space-y-6 p-7 rounded-2xl
// hover:border-slate-700 transition-all flex flex-col justify-between 