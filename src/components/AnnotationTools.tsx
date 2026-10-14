import { PenLine, Highlighter, Eraser, MousePointer2, Undo2, Redo2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tools = [
  {
    icon: PenLine,
    name: "Caneta",
    key: "P",
    color: "var(--color-brand-300)",
    body: "Traço contínuo com cor e espessura ajustáveis. Espessura via scroll do mouse.",
  },
  {
    icon: Highlighter,
    name: "Marcador",
    key: "H",
    color: "var(--color-brand-400)",
    body: "Destaque semi-transparente para realçar trechos do slide.",
  },
  {
    icon: MousePointer2,
    name: "Laser",
    key: "L",
    color: "var(--color-brand-500)",
    body: "Ponteiro luminoso vermelho para chamar a atenção da plateia.",
  },
  {
    icon: Eraser,
    name: "Borracha",
    key: "E",
    color: "var(--color-brand-600)",
    body: "Apague só os traços selecionados. Duplo-clique limpa o slide inteiro.",
  },
];

export function AnnotationTools() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Anotações ao vivo"
          title="Desenhe sobre os slides, em tempo real"
          description="Ferramentas sincronizadas com o projetor. Cada traço aparece na hora para o público, e você desfaz e refaz quantas vezes precisar."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="reveal card-glass group relative overflow-hidden p-6"
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-25 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: tool.color }}
              />
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10"
                style={{ backgroundColor: `${tool.color}22`, color: tool.color }}
              >
                <tool.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-base font-semibold text-white">
                  {tool.name}
                </h3>
                <kbd className="rounded-md border border-white/12 bg-white/5 px-1.5 py-0.5 font-mono text-[11px] text-zinc-400">
                  {tool.key}
                </kbd>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {tool.body}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-5 grid gap-5 sm:grid-cols-3">
          <InfoChip
            icon={<Undo2 className="h-4 w-4" />}
            title="Desfazer"
            hint="Ctrl + Z"
          />
          <InfoChip
            icon={<Redo2 className="h-4 w-4" />}
            title="Refazer"
            hint="Ctrl + Y"
          />
          <InfoChip
            icon={<PenLine className="h-4 w-4" />}
            title="Linhas retas em 45°"
            hint="Segure Shift ao arrastar"
          />
        </div>
      </div>
    </section>
  );
}

function InfoChip({
  icon,
  title,
  hint,
}: {
  icon: React.ReactNode;
  title: string;
  hint: string;
}) {
  return (
    <div className="card-glass flex items-center gap-3 px-5 py-4">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/12 text-brand-300">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="truncate font-mono text-[11px] text-zinc-500">{hint}</p>
      </div>
    </div>
  );
}
