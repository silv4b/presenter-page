import { FileUp, Monitor, Play, PencilRuler, EyeOff } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: FileUp,
    title: "Abra o PDF",
    body: "Clique em Abrir PDF, arraste o arquivo para a tela inicial ou use o atalho O.",
  },
  {
    icon: Monitor,
    title: "Escolha as telas",
    body: "Na seção Tela de projeção, marque os monitores onde a apresentação será exibida.",
  },
  {
    icon: Play,
    title: "Inicie a apresentação",
    body: "Pressione F5, as janelas de projeção abrem em tela cheia nos monitores selecionados.",
  },
  {
    icon: PencilRuler,
    title: "Conduza e anote",
    body: "Navegue com as setas e desenhe sobre os slides com caneta, marcador, laser ou borracha.",
  },
  {
    icon: EyeOff,
    title: "Controle o palco",
    body: "Use Z e X para ocultar as sidebars, B para tela preta e W para tela branca.",
  },
];

export function Usage() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como usar"
          title="Do PDF ao palco em cinco passos"
          description="Sem importar, converter ou reorganizar nada. O Presenter lê o seu PDF e projeta na hora."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal card-glass relative p-6">
              <span className="font-mono text-sm font-semibold text-brand-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-400">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.body}
              </p>
              {i < steps.length - 1 && (
                <span className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-white/10 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
