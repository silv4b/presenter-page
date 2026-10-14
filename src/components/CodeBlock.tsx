import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  label: string;
}

export function CodeBlock({ code, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/8 bg-ink-950/80">
      <div className="flex items-center justify-between border-b border-white/6 px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          {label}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-accent-400" /> copiado
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> copiar
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
