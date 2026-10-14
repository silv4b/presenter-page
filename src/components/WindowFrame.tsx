import type { ReactNode } from "react";

interface WindowFrameProps {
  title?: string;
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Moldura estilo janela nativa (chrome do macOS) reutilizável. */
export function WindowFrame({
  title,
  badge,
  children,
  className,
}: WindowFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-ink-850/90 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-ink-900/60 px-3 py-2.5">
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-3 min-w-0 flex-1 truncate font-mono text-[11px] text-zinc-500">
            {title}
          </span>
        )}
        {badge && <span className="ml-auto shrink-0">{badge}</span>}
      </div>
      {children}
    </div>
  );
}
