import Link from "next/link";

const navigation = [
  { href: "/", label: "About" },
  { href: "/main/services", label: "Experience" },
  { href: "/main/skills", label: "Skills" },
  { href: "/main/certificate", label: "Certifications" },
  { href: "/main/contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-800 bg-slate-950 text-slate-100 md:fixed md:inset-y-0 md:left-0 md:z-20 md:w-[260px] md:border-b-0 md:border-r">
      <div className="flex flex-col gap-6 px-5 py-5 md:h-full md:px-6 md:py-10">
        <Link href="/" className="block" aria-label="Paulo Andre de Souza, home">
          <span className="block text-xl font-bold tracking-tight">Paulo A. Souza</span>
          <span className="mt-1 block text-xs leading-relaxed text-slate-400">
            Customer Success · Software Engineering
          </span>
        </Link>
        <nav aria-label="Portfolio navigation" className="flex flex-wrap gap-2 md:flex-col">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400 md:mt-auto">
          <a
            href="https://github.com/PauloSouza123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-souza-896242328/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}
