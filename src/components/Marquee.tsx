import { marqueeItems } from "../data/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-ink-950/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap text-sm font-medium text-zinc-500"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
