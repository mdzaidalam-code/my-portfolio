import React, { useState } from 'react'
import SkillCard from './SkillCard';
import CategoryTag from './CategoryTag';

export default function Skill(){

    const categories =["All","Frontend","State & Routing", "CS & Core","Backend"];
    const [selected,setSelected] = useState("All")

    const skillsList = [
    { name: "React.js", category: "Frontend", level: "Advanced" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: "Advanced" },
    { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
    { name: "HTML5 & CSS3", category: "Frontend", level: "Advanced" },
    { name: "Context API", category: "State & Routing", level: "Intermediate" },
    { name: "React Router", category: "State & Routing", level: "Intermediate" },
    { name: "Java", category: "CS & Core", level: "Intermediate" },
    { name: "Data Structures & Algorithms", category: "CS & Core", level: "Practicing" },
    { name: "Git & GitHub", category: "CS & Core", level: "Intermediate" },
    { name: "Node.js & Express", category: "Backend", level: "Learning" },
    { name: "MongoDB", category: "Backend", level: "Learning" },
  ];

  const filterSkill = selected === "All" ? skillsList : skillsList.filter((skill) => skill.category === selected)



    return(
        <section className='flex flex-col justify-center items-start px-6 md:px-8 lg:px-12 max-w-6xl mx-auto mb-10'>
            <div className='space-y-3'>
                <h1 className='text-3xl sm:text-4xl font-bold tracking-tight'>
                Interactive Skill Matrix
            </h1>
            <p className='text-sm font text-slate-400 sm:text-base'>
                Click the categories below to filter through my frontend stack, state management tools, and core computer science subjects.
            </p>
            </div>
            <div className="flex flex-wrap gap-5 my-3">
                
                    {categories.map((category) => (<CategoryTag category={category} selected={selected} setSelected={setSelected}/>))}
                    
                
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">

                {filterSkill.map((skill,id) => (
                    <SkillCard 
                    key = {id}
                    name = {skill.name}
                    category = {skill.category}
                    level = {skill.level}
                 />
                ))}
            </div>
        </section>
    );
}
