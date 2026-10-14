import { useState } from "react";
import { PresenterMock } from "./PresenterMock";
import { WindowFrame } from "./WindowFrame";
import { HERO_SHOT } from "../data/content";

/**
 * Exibe o print real da janela de controle em `public/screenshots/controle.png`.
 * Se o arquivo ainda não existir, mostra o mock interativo em CSS.
 */
export function HeroMedia() {
  const [failed, setFailed] = useState(false);

  if (failed) return <PresenterMock />;

  return (
    <WindowFrame
      className="glow-ring"
      title="presenter · apresentacao_slides.pdf"
      badge={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/12 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-400">
          <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-accent-400" />
          PROJETANDO
        </span>
      }
    >
      <img
        src={HERO_SHOT}
        alt="Janela de controle do Presenter com um slide, preview do próximo e cronômetro"
        className="block w-full max-w-full bg-ink-950"
        onError={() => setFailed(true)}
        loading="eager"
      />
    </WindowFrame>
  );
}
