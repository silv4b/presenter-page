interface SlideCanvasProps {
  index: number;
  compact?: boolean;
}

/**
 * Renders a fake "slide" so the mock looks like a real PDF page.
 * Uses simple vector shapes / bars instead of images.
 */
export function SlideCanvas({ index, compact = false }: SlideCanvasProps) {
  const slide = index % 8;

  return (
    <div
      className={`relative flex w-full items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950 ${
        compact ? "aspect-[16/9]" : "aspect-[16/9]"
      }`}
    >
      <div className="slide-dots absolute inset-0 opacity-[0.5]" />
      <div className="relative flex h-full w-full flex-col justify-center gap-[6%] px-[8%] py-[7%]">
        {slide === 0 && <Cover />}
        {slide === 1 && <Agenda />}
        {slide === 2 && <Bullets />}
        {slide === 3 && <Split />}
        {slide === 4 && <Bars />}
        {slide === 5 && <Chart />}
        {slide === 6 && <Grid />}
        {slide === 7 && <End />}
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="h-1.5 w-12 rounded-full bg-brand-400" />
      <div className="text-lg font-semibold text-white sm:text-2xl">
        Apresentações sem PowerPoint
      </div>
      <div className="h-2 w-2/3 rounded-full bg-white/20" />
      <div className="h-2 w-1/2 rounded-full bg-white/12" />
    </div>
  );
}

function Agenda() {
  return (
    <div className="flex items-center gap-5">
      <div className="text-4xl font-bold text-brand-400/80">03</div>
      <div className="flex-1 space-y-2.5">
        <div className="h-3 w-2/3 rounded-full bg-white/70" />
        <div className="h-2 w-1/2 rounded-full bg-white/20" />
        <div className="h-2 w-3/5 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

function Bullets() {
  return (
    <div className="space-y-3">
      <div className="h-3 w-1/2 rounded-full bg-white/70" />
      {[90, 74, 82, 60].map((w) => (
        <div key={w} className="flex items-center gap-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent-400" />
          <span
            className="h-2 rounded-full bg-white/18"
            style={{ width: `${w}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function Split() {
  return (
    <div className="flex h-full items-stretch gap-4">
      <div className="flex flex-1 flex-col justify-center gap-2.5">
        <div className="h-3 w-3/4 rounded-full bg-white/70" />
        <div className="h-2 w-full rounded-full bg-white/18" />
        <div className="h-2 w-5/6 rounded-full bg-white/18" />
        <div className="mt-1 h-7 w-24 rounded-lg bg-brand-500/70" />
      </div>
      <div className="w-2/5 rounded-xl border border-white/10 bg-gradient-to-br from-brand-500/25 to-accent-500/15" />
    </div>
  );
}

function Bars() {
  const bars = [45, 70, 55, 95, 80, 62];
  return (
    <div className="flex h-full flex-col justify-end gap-3">
      <div className="mb-auto h-2.5 w-1/3 rounded-full bg-white/60" />
      <div className="flex h-2/3 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600/60 to-accent-400/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function Chart() {
  return (
    <div className="flex h-full items-center gap-4">
      <div className="relative h-3/5 w-3/5">
        <svg viewBox="0 0 100 60" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopOpacity="0.55" style={{ stopColor: "var(--color-brand-500)" }} />
              <stop offset="100%" stopOpacity="0" style={{ stopColor: "var(--color-brand-500)" }} />
            </linearGradient>
          </defs>
          <path
            d="M0,50 L18,38 L36,44 L54,22 L72,28 L100,8 L100,60 L0,60 Z"
            fill="url(#lineFill)"
          />
          <path
            d="M0,50 L18,38 L36,44 L54,22 L72,28 L100,8"
            fill="none"
            style={{ stroke: "var(--color-brand-300)" }}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="space-y-2">
        <div className="h-2.5 w-16 rounded-full bg-white/60" />
        <div className="h-2 w-12 rounded-full bg-accent-400/70" />
        <div className="h-2 w-14 rounded-full bg-white/18" />
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex flex-col justify-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] p-3"
        >
          <span className="h-6 w-6 rounded-lg bg-brand-500/40" />
          <span className="h-2 w-3/4 rounded-full bg-white/40" />
          <span className="h-2 w-1/2 rounded-full bg-white/16" />
        </div>
      ))}
    </div>
  );
}

function End() {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="text-2xl font-bold text-white sm:text-3xl">Obrigado!</div>
      <div className="h-2 w-40 rounded-full bg-white/20" />
      <div className="mt-1 flex gap-2">
        <span className="h-6 w-6 rounded-full bg-brand-500/50" />
        <span className="h-6 w-6 rounded-full bg-accent-400/40" />
      </div>
    </div>
  );
}
