"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer?: string | null;
  list?: string[];
  listLabel?: string;
  guide?: boolean;
  sections?: { label: string; items: string[] }[];
};

function FAQRow({ faq }: { faq: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-base font-semibold text-[#1B2B44]">{faq.question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3">
          {faq.answer && (
            <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
          )}

          {faq.listLabel && (
            <p className="text-sm font-semibold text-[#1B2B44]">{faq.listLabel}</p>
          )}

          {faq.list && (
            <ul className="flex flex-col gap-1.5 pl-2">
              {faq.list.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFCD00]" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {faq.guide && (
            <a
              href="/recruit/team-guide.pdf"
              download
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#1B2B44] underline underline-offset-2 hover:text-[#FFCD00] transition"
            >
              <svg className="h-4 w-4 text-[#FFCD00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download the Team Guide
            </a>
          )}

          {faq.sections && faq.sections.map((section) => (
            <div key={section.label}>
              <p className="text-sm font-semibold text-[#1B2B44] mb-1.5">{section.label}</p>
              <ul className="flex flex-col gap-1.5 pl-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFCD00]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq) => (
        <FAQRow key={faq.question} faq={faq} />
      ))}
    </div>
  );
}