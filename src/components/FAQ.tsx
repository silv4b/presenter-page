import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "../data/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas, respondidas"
          description="O que as pessoas costumam querer saber antes de baixar."
        />

        <div className="reveal mx-auto mt-14 max-w-3xl divide-y divide-white/8 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.03] sm:px-7"
                >
                  <span
                    className={`text-base font-medium transition-colors ${
                      isOpen ? "text-white" : "text-zinc-200"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-400" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400 sm:px-7">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
