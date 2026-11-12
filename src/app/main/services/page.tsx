import Sidebar from "@/app/sidebar/Sidebar";

const experience = [
  {
    title: "Customer Success",
    organisation: "Capturama (formerly MyFoodSite)",
    period: "Sep 2026 – Present",
    points: [
      "Deliver client onboarding and product training, including sessions conducted in English.",
      "Support product adoption, customer retention, plan renewals and account expansion.",
      "Identify upsell opportunities and negotiate with customers within authorised responsibilities.",
      "Contribute to churn reduction and workflow improvements, without disclosing confidential business metrics.",
      "Promote the practical use of AI tools and automation to help customers improve their workflows.",
    ],
  },
  {
    title: "Sales Development Representative (SDR)",
    organisation: "Capturama (formerly MyFoodSite)",
    period: "Nov 2025 – Feb 2026",
    points: [
      "Qualified prospective customers and identified relevant commercial opportunities.",
      "Prepared prospect reports and communicated product value and plan options.",
      "Supported the customer journey from initial interest towards commercial handover.",
    ],
  },
  {
    title: "Technical Support / Software Developer",
    organisation: "Capturama (formerly MyFoodSite)",
    period: "Feb 2025 – Oct 2025",
    points: [
      "Provided technical support and troubleshooting for software and customer-facing systems.",
      "Worked on web features, APIs, databases, deployment and bug resolution.",
      "Contributed to technical projects and suggested workflow automation improvements.",
    ],
  },
  {
    title: "Freelance IT Support & Software Development",
    organisation: "Independent · Brazil",
    period: "2022 – Dec 2024",
    points: [
      "Diagnosed and maintained computers, operating systems and software for clients.",
      "Provided technical support and delivered programming solutions for practical business needs.",
      "Recommended and helped customers adopt CRM systems and other digital tools.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10 md:ml-[260px] md:py-20 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Professional background</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Experience</h1>
          <p className="mt-5 leading-8 text-slate-400">
            A career across customer success, sales development, technical support and software engineering.
            Capturama was previously known as MyFoodSite. Roles are presented separately to show their actual dates.
          </p>

          <div className="mt-10 space-y-6">
            {experience.map((role) => (
              <article key={role.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-bold">{role.title}</h2>
                  <span className="text-sm font-medium text-sky-300">{role.period}</span>
                </div>
                <p className="mt-2 font-medium text-slate-400">{role.organisation}</p>
                <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-300">
                  {role.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Work has included independent service agreements. Client names, proprietary code and company financial data are not disclosed.
          </p>
        </div>
      </main>
    </>
  );
}
