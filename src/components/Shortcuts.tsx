import { SectionHeading } from "./SectionHeading";
import { shortcuts } from "../data/content";

export function Shortcuts() {
  return (
    <section id="shortcuts" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Atalhos"
          title="Tudo na ponta dos dedos"
          description="Navegue, dê zoom, alterne ferramentas e controle o cronômetro sem tirar as mãos do teclado."
        />

        <div className="reveal mt-14 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]">
          <ul className="grid sm:grid-cols-2">
            {shortcuts.map((shortcut, i) => (
              <li
                key={shortcut.action}
                className={`flex items-center justify-between gap-4 border-b border-white/6 px-5 py-3.5 transition-colors hover:bg-white/[0.03] sm:px-7 ${
                  i % 2 === 0 ? "sm:border-r sm:border-white/6" : ""
                }`}
              >
                <span className="text-sm text-zinc-300">
                  {shortcut.action}
                </span>
                <kbd className="shrink-0 rounded-lg border border-white/12 bg-ink-950/70 px-2.5 py-1 font-mono text-xs text-zinc-200">
                  {shortcut.keys}
                </kbd>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
