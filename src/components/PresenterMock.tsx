import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, PenLine, Highlighter, Eraser } from "lucide-react";
import { SlideCanvas } from "./SlideCanvas";

const SLIDE_LABELS = [
  "Capa",
  "Agenda",
  "Problema",
  "Solução",
  "Roadmap",
  "Métricas",
  "Equipe",
  "Perguntas",
];

/**
 * A stylized, non-interactive mock of the Presenter control window:
 * slide canvas, next-slide preview and the annotation toolbar.
 */
export function PresenterMock() {
  const [index, setIndex] = useState(2);
  const [seconds, setSeconds] = useState(9 * 60 + 42);

  useEffect(() => {
    const id = window.setInterval(
      () => setSeconds((s) => s + 1),
      1000,
    );
    return () => window.clearInterval(id);
  }, []);

  const clock = useMemo(() => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [seconds]);

  const total = SLIDE_LABELS.length;

  return (
    <div className="glow-ring w-full rounded-4xl border border-white/10 bg-ink-850/90 p-3 backdrop-blur-md sm:p-4">
      {/* Window chrome */}
      <div className="mb-3 flex items-center gap-2 px-1">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-zinc-500">
          presenter · apresentação_slides.pdf
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent-500/12 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-400">
          <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-accent-400" />
          PROJETANDO · 2 telas
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_150px]">
        {/* Main slide */}
        <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-ink-950">
          <SlideCanvas index={index} />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-ink-950/90 to-transparent px-3 pb-2.5 pt-8">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              aria-label="Slide anterior"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/12"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="font-mono text-xs text-zinc-300">
              Slide {index + 1}
              <span className="text-zinc-500"> / {total}</span>
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
              aria-label="Próximo slide"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/12"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right column: preview + timer */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-white/8 bg-ink-950/70 p-2.5">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Próximo
            </p>
            <div className="overflow-hidden rounded-lg border border-white/8">
              <SlideCanvas index={Math.min(index + 1, total - 1)} compact />
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-ink-950/70 p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Cronômetro
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold tabular-nums text-white">
              {clock}
            </p>
            <p className="mt-1 font-mono text-[10px] text-brand-300">
              F1 pausar · F2 zerar
            </p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mt-3 flex items-center gap-2 overflow-hidden rounded-2xl border border-white/8 bg-ink-950/70 px-3 py-2.5">
        <ToolPill icon={<PenLine className="h-4 w-4" />} active label="Caneta" />
        <ToolPill icon={<Highlighter className="h-4 w-4" />} label="Marcador" />
        <ToolPill icon={<Eraser className="h-4 w-4" />} label="Borracha" />
        <span className="ml-1 hidden h-5 w-px bg-white/10 sm:block" />
        <div className="hidden items-center gap-1.5 sm:flex">
          {["#e4e4e7", "#b4b4bb", "#8a8a92", "#5b5b62"].map((c, i) => (
            <span
              key={c}
              className={`h-4 w-4 rounded-full ${
                i === 0 ? "ring-2 ring-white/70 ring-offset-1 ring-offset-ink-950" : ""
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        {/* Filmstrip */}
        <div className="ml-auto hidden gap-1.5 md:flex">
          {SLIDE_LABELS.slice(0, 6).map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir para ${label}`}
              className={`h-7 w-11 rounded-md border transition-colors ${
                i === index
                  ? "border-brand-400/70 bg-brand-500/25"
                  : "border-white/8 bg-white/5 hover:bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolPill({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "bg-brand-500/20 text-brand-300"
          : "text-zinc-400 hover:bg-white/5"
      }`}
    >
      {icon}
      <span className="hidden lg:inline">{label}</span>
    </span>
  );
}
