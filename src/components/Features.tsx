import { Monitor, MonitorSmartphone, Timer, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { features } from "../data/content";

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Recursos"
          title={
            <>
              Mais controle,
              <br className="hidden sm:block" /> menos improviso
            </>
          }
          description="Tudo que você precisa para conduzir uma apresentação: projeção em múltiplas telas, anotações ao vivo, cronômetro e navegação fluida, sem depender de PowerPoint."
        />

        {/* Highlight bento */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className="reveal card-glass col-span-1 p-6 lg:col-span-2">
            <div className="flex items-center gap-2 text-brand-300">
              <MonitorSmartphone className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Multi-monitor
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
              O apresentador controla, o público assiste
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
              A janela principal roda a apresentação e comanda as telas de
              projeção em tela cheia. Marque vários monitores e exiba em todos ao
              mesmo tempo.
            </p>
            <MonitorDiagram />
          </div>

          <div className="reveal card-glass flex flex-col p-6">
            <div className="flex items-center gap-2 text-accent-400">
              <Timer className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Tempo real
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              Cronômetro no seu ritmo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Modo progressivo ou regressivo para controlar o tempo da fala.
            </p>
            <div className="mt-6 flex flex-1 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="font-mono text-5xl font-semibold tabular-nums text-white">
                  09:42
                </div>
                <div className="mt-3 h-1.5 w-40 overflow-hidden rounded-full bg-white/8">
                  <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-brand-500 to-accent-400" />
                </div>
                <p className="mt-3 font-mono text-[11px] text-zinc-500">
                  F1 pausar · F2 zerar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="reveal group card-glass p-6 transition-colors hover:border-brand-500/30"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-300 transition-colors group-hover:border-brand-500/40 group-hover:text-brand-400">
                  <feature.icon className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-white/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {feature.tag}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.body}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-white/8 bg-white/[0.02] px-6 py-5 text-sm text-zinc-400">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-400" />
            Renderização em alta resolução com PDF.js
          </span>
          <span className="inline-flex items-center gap-2">
            <Monitor className="h-4 w-4 text-accent-400" />
            Tela cheia automática com monitor único
          </span>
        </div>
      </div>
    </section>
  );
}

function MonitorDiagram() {
  return (
    <div className="mt-8 grid grid-cols-3 items-end gap-3 sm:gap-5">
      {[
        { label: "Controle", active: true, primary: true },
        { label: "Projeção 1", active: true, primary: false },
        { label: "Projeção 2", active: true, primary: false },
      ].map((mon) => (
        <div key={mon.label} className="flex flex-col items-center gap-2">
          <div
            className={`flex w-full items-center justify-center rounded-lg border ${
              mon.primary
                ? "aspect-[16/10] border-brand-500/50 bg-brand-500/12"
                : "aspect-[16/9] border-accent-500/40 bg-accent-500/8"
            }`}
          >
            <span
              className={`h-2 w-8 rounded-full ${
                mon.primary ? "bg-brand-400/70" : "bg-accent-400/60"
              }`}
            />
          </div>
          <div className="h-3 w-6 rounded-b-sm border-x-2 border-b-2 border-white/15" />
          <span className="font-mono text-[10px] text-zinc-500">
            {mon.label}
          </span>
        </div>
      ))}
    </div>
  );
}
