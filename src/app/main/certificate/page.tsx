import Sidebar from "@/app/sidebar/Sidebar";

const certificates = [
  { id: "front-end", title: "Complete Front-End Development", file: "Certificado_Front_End.pdf", date: "22 Nov 2024", hours: "83 hours" },
  { id: "nextjs", title: "Next.js", file: "Certificado_nextjs.pdf", date: "18 Feb 2025", hours: "2 hours" },
  { id: "php", title: "PHP JEDAI", file: "Certificado_PHP_JEDAI.pdf", date: "7 Jan 2025", hours: "27 hours" },
  { id: "react", title: "React", file: "certificado-react.pdf", date: "14 Feb 2025", hours: "4 hours" },
  { id: "js-games", title: "JavaScript Games", file: "Games_JS.pdf", date: "26 Dec 2024", hours: "6 hours" },
  { id: "git", title: "Git & GitHub", file: "git_github.pdf", date: "31 Jan 2025", hours: "2 hours" },
];

export default function Certificate() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10 md:ml-[260px] md:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Continuous learning</p>
          <h1 className="mt-3 text-4xl font-bold">Certifications & Courses</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Completed courses supported by PDF certificates. Additional credentials will appear here when verified.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {certificates.map((cert) => (
              <article key={cert.id} className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <div>
                  <h2 className="text-xl font-semibold">{cert.title}</h2>
                  <p className="mt-3 text-sm text-slate-400">Completed: {cert.date}</p>
                  <p className="mt-1 text-sm text-slate-400">Course duration: {cert.hours}</p>
                </div>
                <a
                  href={`/c_certificate/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit rounded-lg border border-sky-400 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-400 hover:text-slate-950"
                  aria-label={`Open certificate for ${cert.title} (PDF, new tab)`}
                >
                  View certificate PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
