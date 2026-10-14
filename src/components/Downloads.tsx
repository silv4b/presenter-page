import { useState } from "react";
import { Download, PackageCheck, HardDrive, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PlatformIcon } from "./PlatformIcon";
import { CodeBlock } from "./CodeBlock";
import {
  platforms,
  INSTALL_PS,
  INSTALL_SH,
  REPO_URL,
} from "../data/content";

export function Downloads() {
  const [active, setActive] = useState(platforms[0].id);
  const current = platforms.find((p) => p.id === active) ?? platforms[0];

  return (
    <section id="downloads" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Download"
          title="Baixe o Presenter para a sua máquina"
          description="Instaladores assinados são publicados a cada release no GitHub. No Windows há versão instalável e portátil; no Linux, pacotes .deb e .AppImage."
        />

        <div className="reveal mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Card selector */}
          <div className="card-glass min-w-0 overflow-hidden p-2">
            <div className="flex gap-1 sm:gap-1.5">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => setActive(platform.id)}
                  className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-2xl px-2 py-2.5 text-xs font-medium transition-colors sm:gap-2 sm:px-4 sm:py-3 sm:text-sm ${
                    platform.id === active
                      ? "bg-white/8 text-white"
                      : "text-zinc-400 hover:bg-white/4 hover:text-white"
                  }`}
                >
                  <PlatformIcon
                    name={platform.icon}
                    className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  />
                  {platform.name}
                </button>
              ))}
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white">
                  <PlatformIcon name={current.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {current.name}
                  </h3>
                  <p className="text-sm text-zinc-500">{current.detail}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                <DetailRow icon={<PackageCheck className="h-4 w-4" />}>
                  {current.meta}
                </DetailRow>
                <DetailRow icon={<HardDrive className="h-4 w-4" />}>
                  {current.formats}
                </DetailRow>
                <DetailRow icon={<ShieldCheck className="h-4 w-4" />}>
                  Build reproduzível via GitHub Actions
                </DetailRow>
              </ul>

              <a
                href={`${REPO_URL}/releases/latest`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-transform hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Baixar para {current.name}
              </a>
              <p className="mt-3 text-center text-xs text-zinc-500">
                Você será levado às releases no GitHub.
              </p>
            </div>
          </div>

          {/* One-line install */}
          <div className="card-glass flex min-w-0 flex-col p-5 sm:p-7">
            <h3 className="text-lg font-semibold text-white">
              Instalação em um comando
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Sem baixar e abrir instaladores manualmente. Cole no terminal e o
              script baixa a última versão para você.
            </p>

            <div className="mt-6 space-y-4">
              <CodeBlock label="Windows · PowerShell" code={INSTALL_PS} />
              <CodeBlock label="Linux · bash" code={INSTALL_SH} />
            </div>

            <div className="mt-auto flex items-center gap-2 pt-6 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Desinstalação e opções avançadas na documentação.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3 text-sm text-zinc-300">
      <span className="text-zinc-500">{icon}</span>
      {children}
    </li>
  );
}
