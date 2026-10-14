import { ArrowRight, Star, Zap } from "lucide-react";
import { HeroMedia } from "./HeroMedia";
import { REPO_URL } from "../data/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
      {/* background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-[360px] w-[360px] rounded-full bg-accent-500/12 blur-[110px]" />
        <div className="hero-grid absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300">
            <Zap className="h-3.5 w-3.5 text-accent-400" />
            Grátis e open source · Windows &amp; Linux
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transforme PDFs em
            <br />
            <span className="gradient-text">apresentações profissionais.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            O <span className="font-medium text-zinc-200">Presenter</span> é um
            aplicativo desktop que abre qualquer arquivo PDF numa apresentação
            estilo PowerPoint, com janela de controle para o apresentador,
            projeção em tela cheia e anotações ao vivo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#downloads"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-transform hover:scale-[1.03]"
            >
              Baixar Presenter
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <Star className="h-4 w-4" />
              Ver no GitHub
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/8 pt-6">
            <Stat value="4" label="ferramentas de anotação ao vivo" />
            <Stat value="∞" label="monitores em simultâneo" />
            <Stat value="100%" label="offline, sem contas" />
          </dl>
        </div>

        <div className="reveal lg:pl-4">
          <HeroMedia />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-2xl font-semibold text-white sm:text-3xl">{value}</dt>
      <dd className="mt-1 text-xs leading-snug text-zinc-500">{label}</dd>
    </div>
  );
}
