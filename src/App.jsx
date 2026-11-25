import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const placeholder = [
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <Skills/>
        {placeholder.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="flex min-h-[33vh] items-center justify-center border-b border-line"
          >
            <h2 className="text-3xl font-semibold text-slate-500">{s.title}</h2>
          </section>
        ))}
      </main>
    </>
  );
}