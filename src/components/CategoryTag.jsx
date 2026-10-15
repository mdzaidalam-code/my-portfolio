import React, { useState } from 'react'

const CategoryTag = ({category,selected,setSelected}) => {
  return (
    <button
              onClick={() => setSelected(category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selected === category
                  ? "bg-emerald-400 text-slate-950 font-bold shadow-lg hover:shadow-emerald-500/60 transition-all"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
              }`}
            >
              {category}
            </button>
  )
}

export default CategoryTag