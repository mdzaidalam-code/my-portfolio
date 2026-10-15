import React from 'react'
import {
  House,
  UserRound,
  Code2,
  FolderKanban,
  Mail,
  Icon,
} from "lucide-react";

const Navbar = () => {
    const navElement = [
    { label: "Home", icon: House, href: "#home" },
    { label: "About", icon: UserRound, href: "#about" },
    { label: "Skills", icon: Code2, href: "#skills" },
    { label: "Projects", icon: FolderKanban, href: "#projects" },
    { label: "Contact", icon: Mail, href: "#contact" }
]
    return (
        <div>
           {navElement.map((item) => {
            const Icon = item.icon;
            return (
                <Icon/>

            )
           })}
        </div>
    )
}

export default Navbar