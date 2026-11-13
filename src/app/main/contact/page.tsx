import Sidebar from "@/app/sidebar/Sidebar";

const links = [
  {
    label: "GitHub",
    value: "PauloSouza123",
    href: "https://github.com/PauloSouza123",
  },
  {
    label: "LinkedIn",
    value: "Paulo Andre de Souza",
    href: "https://www.linkedin.com/in/paulo-souza-896242328/",
  },
  {
    label: "Email",
    value: "hobtcraft@gmail.com",
    href: "mailto:hobtcraft@gmail.com",
  },
];

export default function Contact() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10 md:ml-[260px] md:py-20 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Get in touch</p>
          <h1 className="mt-3 text-4xl font-bold">Contact</h1>
          <p className="mt-5 leading-8 text-slate-400">
            Based in Cascavel, Paraná, Brazil. Available for conversations about technology, software engineering,
            technical customer success and international career opportunities.
          </p>
          <div className="mt-10 space-y-4">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <span className="block text-sm uppercase tracking-widest text-sky-300">{item.label}</span>
                <span className="mt-2 block break-all text-lg font-semibold">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
