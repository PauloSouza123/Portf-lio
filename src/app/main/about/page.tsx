"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/sidebar/Sidebar";

const copy = {
  en: {
    eyebrow: "Based in Brazil · Open to international opportunities",
    title: "Bridging software engineering, customer success and AI.",
    intro:
      "I'm Paulo Andre de Souza, a customer-facing technology professional with experience in software development, technical support, sales development and Customer Success.",
    detail:
      "At Capturama (formerly MyFoodSite), I've supported technical operations, qualified commercial opportunities and delivered client onboarding and training. I now focus on product adoption, customer relationships, renewals and account growth. I've delivered training in English, led projects and collaborated on initiatives to streamline workflows through automation and AI tools.",
    background:
      "From 2022 to 2024, I also worked independently on computer maintenance, software support and programming, helping clients adopt practical technical solutions.",
    strengths: "What I bring",
    strengthsItems: [
      ["Customer success", "Onboarding, customer enablement, renewals, retention and account expansion."],
      ["Software engineering", "Practical full-stack development, APIs, SQL databases and technical troubleshooting."],
      ["AI & automation", "Integrating AI into projects and helping customers apply AI tools in their day-to-day work."],
    ],
    work: "Featured project",
    workTitle: "CS Workspace — Customer Success Operations Dashboard",
    workText:
      "A full-stack project for organizing follow-ups, tasks and customer success workflows. The public showcase uses illustrative data; the application source remains private.",
    workLink: "View project showcase",
    experience: "Explore my experience",
    certificate: "View certifications",
    github: "GitHub projects",
    note: "I communicate professionally in English and am open to relocation opportunities that provide visa sponsorship.",
    switchLabel: "Ler em português",
  },
  pt: {
    eyebrow: "No Brasil · Aberto a oportunidades internacionais",
    title: "Conectando engenharia de software, Customer Success e IA.",
    intro:
      "Sou Paulo Andre de Souza, profissional de tecnologia com experiência em desenvolvimento de software, suporte técnico, desenvolvimento comercial e Customer Success.",
    detail:
      "Na Capturama (antiga MyFoodSite), atuei em operações técnicas, qualificação comercial e treinamento de clientes. Atualmente, meu foco é adoção da plataforma, relacionamento com clientes, renovações e expansão de contas. Já realizei treinamentos em inglês, liderei projetos e contribuí com iniciativas de automação e uso de ferramentas de IA.",
    background:
      "Entre 2022 e 2024, também atuei como freelancer em manutenção de computadores, suporte de software e programação, ajudando clientes a adotar soluções tecnológicas.",
    strengths: "Minhas competências",
    strengthsItems: [
      ["Customer Success", "Onboarding, capacitação, renovações, retenção e expansão de contas."],
      ["Engenharia de software", "Desenvolvimento full-stack, APIs, bancos SQL e diagnóstico de problemas técnicos."],
      ["IA e automação", "Integração de IA em projetos e orientação prática sobre ferramentas de IA no dia a dia."],
    ],
    work: "Projeto em destaque",
    workTitle: "CS Workspace — Dashboard de Operações de Customer Success",
    workText:
      "Projeto full-stack para organização de acompanhamentos, tarefas e rotinas de CS. A apresentação pública utiliza dados ilustrativos, e o código da aplicação permanece privado.",
    workLink: "Ver apresentação do projeto",
    experience: "Conhecer minha experiência",
    certificate: "Ver certificados",
    github: "Projetos no GitHub",
    note: "Tenho comunicação profissional em inglês e disponibilidade para oportunidades internacionais com patrocínio de visto.",
    switchLabel: "Read in English",
  },
};

export default function About() {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const t = copy[language];

  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-slate-950 text-slate-100 md:ml-[260px]">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 md:py-20 lg:px-16">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">{t.eyebrow}</p>
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "pt" : "en")}
              className="shrink-0 rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              {t.switchLabel}
            </button>
          </div>

          <section className="mt-12 max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mt-7 text-lg leading-8 text-slate-300">{t.intro}</p>
            <p className="mt-5 leading-8 text-slate-400">{t.detail}</p>
            <p className="mt-4 leading-8 text-slate-400">{t.background}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/main/services" className="rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">{t.experience}</Link>
              <Link href="/main/certificate" className="rounded-xl border border-slate-600 px-5 py-3 font-medium transition hover:border-sky-400">{t.certificate}</Link>
            </div>
          </section>

          <section className="mt-20" aria-labelledby="strengths-title">
            <h2 id="strengths-title" className="text-2xl font-bold">{t.strengths}</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {t.strengthsItems.map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                  <h3 className="text-lg font-semibold text-sky-300">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-3xl border border-slate-700 bg-slate-900 p-7 sm:p-10" aria-labelledby="work-title">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">{t.work}</p>
            <h2 id="work-title" className="mt-3 text-2xl font-bold">{t.workTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">{t.workText}</p>
            <div className="mt-6 flex flex-wrap gap-5">
              <a className="font-medium text-sky-300 underline underline-offset-4 hover:text-sky-200" href="https://paulosouza123.github.io/DashBoard-CS-showcase/" target="_blank" rel="noopener noreferrer">{t.workLink}</a>
              <a className="font-medium text-sky-300 underline underline-offset-4 hover:text-sky-200" href="https://github.com/PauloSouza123" target="_blank" rel="noopener noreferrer">{t.github}</a>
            </div>
          </section>

          <p className="mt-14 border-t border-slate-800 pt-6 text-sm leading-7 text-slate-400">{t.note}</p>
        </div>
      </main>
    </>
  );
}
