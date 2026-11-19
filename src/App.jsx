import Navbar from "./components/Navbar";

const placeholder = [
  { id: "home", title: "Hero" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {placeholder.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="flex min-h-screen items-center justify-center border-b border-line"
          >
            <h2 className="text-3xl font-semibold text-slate-500">{s.title}</h2>
          </section>
        ))}
      </main>
    </>
  );
}