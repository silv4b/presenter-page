import { useState } from "react";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { REPO_URL } from "../data/content";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative z-50 border-b border-white/8 bg-gradient-to-r from-brand-600/20 via-brand-500/12 to-accent-500/20">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 pr-9 text-center text-xs sm:text-sm">
        <span className="hidden items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-200 sm:inline-flex">
          <Sparkles className="h-3 w-3" />
          Novo
        </span>
        <span className="text-zinc-200">
          Instaladores para Windows e Linux já disponíveis.
        </span>
        <a
          href={`${REPO_URL}/releases/latest`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
        >
          Ver releases
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar aviso"
          className="absolute right-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-zinc-300 transition-colors hover:bg-white/10 hover:text-white sm:right-5"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
