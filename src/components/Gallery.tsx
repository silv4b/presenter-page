import { useCallback, useEffect, useMemo, useState } from "react";
import { ImageOff, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WindowFrame } from "./WindowFrame";
import { screenshots } from "../data/content";

export function Gallery() {
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState(false);

  const shots = useMemo(
    () => screenshots.filter((s) => !failed.has(s.src)),
    [failed],
  );

  const active =
    shots.find((s) => s.src === activeSrc) ?? shots[0] ?? null;
  const activeIndex = active ? shots.indexOf(active) : -1;

  const markFailed = useCallback((src: string) => {
    setFailed((prev) => new Set(prev).add(src));
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (shots.length < 2) return;
      const next = (activeIndex + dir + shots.length) % shots.length;
      setActiveSrc(shots[next].src);
    },
    [activeIndex, shots],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, go]);

  return (
    <section id="galeria" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Galeria"
          title="Veja o Presenter por dentro"
          description="Da tela inicial à projeção em tela cheia: as telas que fazem uma apresentação acontecer."
        />

        {!active ? (
          <EmptyState />
        ) : (
          <div className="reveal mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start lg:gap-8">
            <button
              type="button"
              onClick={() => setLightbox(true)}
              aria-label="Ampliar imagem"
              className="group relative block w-full min-w-0 cursor-zoom-in text-left"
            >
              <WindowFrame title={`presenter · ${active.title}`} className="glow-ring">
                <img
                  key={active.src}
                  src={active.src}
                  alt={active.title}
                  onError={() => markFailed(active.src)}
                  className="block w-full"
                />
              </WindowFrame>
              <span className="pointer-events-none absolute right-4 top-14 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
                Ampliar
              </span>
            </button>

            <div className="flex min-w-0 flex-col gap-6">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-300">
                    {active.tag}
                  </span>

                  {shots.length > 1 && (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Imagem anterior"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                      >
                        <ChevronLeft className="h-4.5 w-4.5" />
                      </button>
                      <span className="font-mono text-xs text-zinc-500">
                        {activeIndex + 1}/{shots.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label="Próxima imagem"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                      >
                        <ChevronRight className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  {active.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {active.caption}
                </p>
              </div>

              {shots.length > 1 && (
                <div className="grid grid-cols-2 gap-3">
                  {shots.map((shot) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setActiveSrc(shot.src)}
                      className={`overflow-hidden rounded-xl border bg-ink-950 transition-colors ${
                        shot.src === active.src
                          ? "border-brand-500/60"
                          : "border-white/8 hover:border-white/25"
                      }`}
                      aria-label={`Ver ${shot.title}`}
                    >
                      <img
                        src={shot.src}
                        alt=""
                        onError={() => markFailed(shot.src)}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {lightbox && active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md sm:p-10"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={active.src}
            alt={active.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-full rounded-xl border border-white/10 object-contain"
          />

          {shots.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Imagem anterior"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950/60 text-white backdrop-blur transition-colors hover:bg-white/10 sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Próxima imagem"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-950/60 text-white backdrop-blur transition-colors hover:bg-white/10 sm:right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}

function EmptyState() {
  return (
    <div className="reveal mt-14 card-glass flex flex-col items-center gap-4 px-6 py-16 text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400">
        <ImageOff className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-base font-semibold text-white">
          Nenhum print encontrado
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
          Coloque os arquivos em{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[12px] text-brand-300">
            public/screenshots/
          </code>{" "}
          com os nomes esperados (veja{" "}
          <span className="font-mono text-[12px] text-zinc-300">
            public/screenshots/README.md
          </span>
          ).
        </p>
      </div>
    </div>
  );
}
