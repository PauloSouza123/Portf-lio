import Sidebar from "@/app/sidebar/Sidebar";

const skillGroups = [
  {
    heading: "Customer Success & Commercial",
    summary: "Customer-facing SaaS delivery and account growth.",
    skills: ["Onboarding", "Customer training", "Product adoption", "Customer retention", "Churn reduction", "Renewals", "Upselling", "Account relationships", "Sales development"],
  },
  {
    heading: "Backend & APIs",
    summary: "Engineering and integration of practical software solutions.",
    skills: ["Java", "Spring Boot", "Python", "PHP", "REST APIs", "SQL", "PostgreSQL", "MySQL", "Database maintenance"],
  },
  {
    heading: "Frontend & Web",
    summary: "Modern web interfaces and application development.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vue.js", "Angular"],
  },
  {
    heading: "AI & Automation",
    summary: "Applying AI tools and automation to development and customer workflows.",
    skills: ["AI-assisted workflows", "AI integration in personal projects", "Automation design", "Technical enablement", "Customer-facing AI training"],
  },
  {
    heading: "Infrastructure & Security",
    summary: "Troubleshooting, deployment and secure technical operations.",
    skills: ["Git", "GitHub", "GitLab", "Docker", "AWS fundamentals", "Linux", "Shell Script", "Windows", "macOS", "Nmap", "Wireshark", "Burp Suite", "Technical support", "Cybersecurity fundamentals"],
  },
  {
    heading: "Communication & Leadership",
    summary: "Technical and commercial collaboration across teams.",
    skills: ["Professional English", "Client presentations", "Project leadership", "Team coordination", "Technical documentation", "Stakeholder communication"],
  },
];

export default function Skills() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10 md:ml-[260px] md:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Capabilities</p>
          <h1 className="mt-3 text-4xl font-bold">Skills</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            Technical expertise combined with customer enablement, commercial experience and project leadership.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.heading} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <h2 className="text-xl font-bold">{group.heading}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{group.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-200">{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
