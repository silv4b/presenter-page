import { Star, Heart, Share2, Bug, Lightbulb } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { REPO_URL } from "../data/content";

const cards = [
  {
    icon: Star,
    title: "Dê uma estrela no GitHub",
    body: "Uma estrela ajuda mais pessoas a descobrirem o Presenter.",
    href: REPO_URL,
    cta: "Star no repositório",
    primary: true,
  },
  {
    icon: Heart,
    title: "Apoie o projeto",
    body: "Ajude a viabilizar assinatura de código e releases para todas as plataformas.",
    href: `${REPO_URL}/blob/develop/LICENSE`,
    cta: "Ver licença",
  },
  {
    icon: Bug,
    title: "Reporte um bug",
    body: "Encontrou algo quebrado? Conte o que aconteceu para corrigirmos.",
    href: `${REPO_URL}/issues/new?labels=bug`,
    cta: "Abrir issue",
  },
  {
    icon: Lightbulb,
    title: "Sugira um recurso",
    body: "Tem uma ideia do que o Presenter deveria fazer a seguir?",
    href: `${REPO_URL}/issues/new?labels=enhancement`,
    cta: "Sugerir recurso",
  },
];

export function Support() {
  return (
    <section id="support" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Suporte"
          title="Mantenha o Presenter rápido e livre"
          description="O Presenter é gratuito e open source. Se ele te ajuda, retribua com uma estrela, compartilhando, reportando problemas ou sugerindo melhorias."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className={`reveal card-glass group flex flex-col p-6 transition-colors ${
                card.primary
                  ? "border-brand-500/30 hover:border-brand-500/50"
                  : "hover:border-white/20"
              }`}
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${
                  card.primary
                    ? "border-brand-500/40 bg-brand-500/12 text-brand-300"
                    : "border-white/10 bg-white/[0.03] text-zinc-300"
                }`}
              >
                <card.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {card.body}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-transform group-hover:translate-x-0.5">
                {card.cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="reveal mt-5 flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-white/8 bg-gradient-to-r from-brand-600/10 to-accent-500/10 px-6 py-6 text-sm text-zinc-300">
          <Share2 className="h-4 w-4 text-accent-400" />
          Conhece alguém que perde tempo montando slides? Mande o Presenter para
          essa pessoa.
        </div>
      </div>
    </section>
  );
}
