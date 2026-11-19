import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled,setScrolled] = useState(false)
    const [open,setOpen] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll();

        window.addEventListener("scroll" , onScroll)
        return() => window.removeEventListener("scroll", onScroll)
    },[]);

    const closeMenu = () => setOpen(false)

    return(
       
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-midnight/30 backdrop-blur-xs"
          : "bg-[#1e3555a8]"
      }`}
    >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-emerald-400 text-glow">
          Zaid<span className="text-cyan-400">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) =>
            (
                <li key={link.href}>

                    <a href={link.href} className="text-sm font-semibold text-slate-300 transition-colors hover:text-emerald-400">
                        {link.label}</a>

                </li>
            ))}
        </ul>

         <button
         type="button"
         onClick={() => setOpen((v)=>!v)}
         aria-label={open ? "Close menu" : "Open menu"}
         aria-expanded = {open}
         className="cursor-pointer bg-[#0f1a2b84] border border-[#21385caf] hover:border-emerald-600/70 transition-colors duration-300 p-2 rounded-md text-shadow-slate-300 hover:text-emerald-400 md:hidden"
         >
           {open ? <X size={22}/> : <Menu size={22}/>} 
        </button>
        </nav>

        {
            open && (
                <ul className="border-t border-line flex flex-col items-center bg-midnight-soft px-6 py-4 md:hidden">
                    {links.map((link) => 
                    (<li key={link.href}>
                        <a className="block py-2 text-slate-300 transition-colors duration-300 hover:text-emerald-400" onClick={closeMenu} href={link.href}>{link.label}</a>
                    </li>)
                    )}
                </ul>
            )
        }
      </header>
    
    )
}