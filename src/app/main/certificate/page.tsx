"use client";

import { useMemo, useState } from "react";
import Sidebar from "@/app/sidebar/Sidebar";
import {
  certificates,
  type CertificateCategory,
} from "./certificates";

type CategoryFilter = "All" | CertificateCategory;

const categoryOptions: CategoryFilter[] = [
  "All",
  "Software Development",
  "Cybersecurity",
];

function formatDate(value: string): string {
  const date = new Date(`${value}T12:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default function Certificate() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return certificates
      .filter((cert) => category === "All" || cert.category === category)
      .filter((cert) =>
        [cert.title, cert.provider ?? "", cert.category]
          .join(" ")
          .toLocaleLowerCase()
          .includes(query),
      )
      .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
  }, [category, search]);

  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10 md:ml-[260px] md:py-20 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
            Professional development
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Certificates &amp; Courses
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            A collection of {certificates.length} distinct completed courses in
            software development, programming, cybersecurity and infrastructure.
            Course titles follow the original certificates.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
            Historical certificates open their existing PDF documents. Newer
            credentials link to the verification addresses printed on the
            certificates; the downloadable PDF files will be added to this
            repository separately.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <label htmlFor="certificate-search" className="mb-2 block text-sm font-medium text-slate-300">
                Search courses
              </label>
              <input
                id="certificate-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Java, Python, pentest..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>
            <div>
              <label htmlFor="certificate-category" className="mb-2 block text-sm font-medium text-slate-300">
                Category
              </label>
              <select
                id="certificate-category"
                value={category}
                onChange={(event) => setCategory(event.target.value as CategoryFilter)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 focus:border-sky-400 focus:outline-none sm:min-w-[230px]"
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p aria-live="polite" className="mt-5 text-sm text-slate-400">
            Showing {filtered.length} of {certificates.length} certificates
          </p>

          {filtered.length === 0 ? (
            <p className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
              No matching courses. Try another search or category.
            </p>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {filtered.map((cert) => (
                <article
                  key={cert.id}
                  className="flex min-w-0 flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-slate-600"
                >
                  <div>
                    <span className="inline-block rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-sky-300">
                      {cert.category}
                    </span>
                    <h2 className="mt-4 text-xl font-semibold leading-snug">
                      {cert.title}
                    </h2>
                    {cert.provider && (
                      <p className="mt-2 text-sm font-medium text-slate-300">
                        {cert.provider}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-slate-400">
                      Completed: {formatDate(cert.date)} · {cert.hours}
                    </p>
                    {cert.credentialId && (
                      <p className="mt-2 break-all text-xs leading-5 text-slate-500">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {cert.pdfPath && (
                      <a
                        href={cert.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        View certificate PDF
                      </a>
                    )}
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-lg border border-sky-400 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                      >
                        Verify credential
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
