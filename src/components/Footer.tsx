import { Github, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";
import { REPO_URL, footerLinks } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink-950/60">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="sm:col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Apresentação de PDFs para desktop, construída com Tauri 2, React e
              TypeScript. Gratuita e open source.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Projeto" links={footerLinks.projeto} />
          <FooterColumn title="Comunidade" links={footerLinks.comunidade} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Presenter · Open source sob a licença do
            projeto.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <a
                href={link.href}
                {...(external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
