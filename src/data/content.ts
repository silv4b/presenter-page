import type { LucideIcon } from "lucide-react";
import {
  MonitorPlay,
  Layers,
  PencilRuler,
  Timer,
  LayoutGrid,
  FileDown,
  Contrast,
  Settings2,
  History,
  Keyboard,
} from "lucide-react";

export const REPO_URL = "https://github.com/silv4b/presenter";
export const INSTALL_PS =
  "irm https://raw.githubusercontent.com/silv4b/presenter/develop/install.ps1 | iex";
export const INSTALL_SH =
  "curl -fsSL https://raw.githubusercontent.com/silv4b/presenter/develop/install.sh | bash";

export const navLinks = [
  { id: "features", label: "Recursos" },
  { id: "galeria", label: "Galeria" },
  { id: "shortcuts", label: "Atalhos" },
  { id: "downloads", label: "Download" },
  { id: "faq", label: "FAQ" },
  { id: "support", label: "Suporte" },
] as const;

export interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
  tag: string;
}

export const features: Feature[] = [
  {
    icon: MonitorPlay,
    tag: "Multi-janela",
    title: "Modo apresentador",
    body: "A janela principal controla as telas de projeção em tela cheia. Com um único monitor, o app entra em tela cheia com controles flutuantes.",
  },
  {
    icon: Layers,
    tag: "Multi-monitor",
    title: "Projeção em várias telas",
    body: "Marque quantos monitores quiser e exiba a apresentação simultaneamente em todos eles. A configuração é persistida em disco.",
  },
  {
    icon: PencilRuler,
    tag: "Anotações ao vivo",
    title: "Desenhe sobre os slides",
    body: "Caneta, marcador, laser e borracha sincronizados em tempo real com o projetor. Desfazer/refazer com Ctrl+Z e Ctrl+Y.",
  },
  {
    icon: Timer,
    tag: "Tempo",
    title: "Cronômetro progressivo e regressivo",
    body: "Controle o tempo da sua fala com stopwatch ou countdown. F1 inicia e pausa, F2 zera o contador.",
  },
  {
    icon: LayoutGrid,
    tag: "Navegação",
    title: "Carrossel e preview",
    body: "Filmstrip com miniaturas de todas as páginas, preview do próximo slide e sidebars redimensionáveis via arraste.",
  },
  {
    icon: History,
    tag: "Conveniência",
    title: "Histórico de arquivos",
    body: "Os últimos PDFs abertos ficam numa sidebar na tela inicial. Reabra com um clique, com verificação de existência e dialog de erro.",
  },
  {
    icon: Contrast,
    tag: "Palco",
    title: "Tela preta e tela branca",
    body: "Oculte o conteúdo do projetor com B ou ilumine a tela para perguntas da plateia com W, sem sair da apresentação.",
  },
  {
    icon: FileDown,
    tag: "Exportação",
    title: "Exportar PDF anotado",
    body: "Gere uma cópia do documento com todas as anotações incorporadas, pronta para compartilhar ou arquivar.",
  },
  {
    icon: Settings2,
    tag: "Aparência",
    title: "Cor de fundo e auto-hide",
    body: "Escolha a cor de fundo do projetor com presets ou hex personalizado e configure o auto-hide dos controles.",
  },
  {
    icon: Keyboard,
    tag: "Produtividade",
    title: "Atalhos de teclado",
    body: "Navegue, dê zoom, alterne ferramentas e controle o cronômetro sem tirar as mãos do teclado.",
  },
];

export interface Shortcut {
  keys: string;
  action: string;
}

export const shortcuts: Shortcut[] = [
  { keys: "F5", action: "Iniciar / Encerrar apresentação" },
  { keys: "O", action: "Abrir PDF (tela inicial)" },
  { keys: "→ / Espaço / PgDn", action: "Próximo slide" },
  { keys: "← / PgUp", action: "Slide anterior" },
  { keys: "Home / End", action: "Primeiro / último slide" },
  { keys: "B", action: "Tela preta" },
  { keys: "W", action: "Tela branca" },
  { keys: "Z / X", action: "Mostrar/ocultar sidebars" },
  { keys: "C", action: "Mostrar/ocultar carrossel" },
  { keys: "F1 / F2", action: "Cronômetro: pausar / zerar" },
  { keys: "L / P / H / E", action: "Laser / Caneta / Marcador / Borracha" },
  { keys: "Ctrl+Z / Ctrl+Y", action: "Desfazer / Refazer anotação" },
  { keys: "↑ / ↓ · Ctrl+= / Ctrl+-", action: "Zoom in / out" },
  { keys: "Ctrl+0", action: "Resetar zoom" },
  { keys: "Space+arraste", action: "Pan (zoom > 1)" },
  { keys: "Duplo-clique", action: "Apagar anotações do slide (borracha)" },
  { keys: "Esc", action: "Encerrar apresentação" },
];

export const marqueeItems = [
  "Sem PowerPoint",
  "Tauri 2 · Rust",
  "Open source",
  "Anotações ao vivo",
  "Multi-monitor",
  "Cronômetro",
  "Exportar PDF",
  "Tela preta",
  "Laser pointer",
  "100% offline",
];

export interface Platform {
  id: string;
  name: string;
  detail: string;
  meta: string;
  formats: string;
  icon: "windows" | "linux" | "macos";
}

export const platforms: Platform[] = [
  {
    id: "windows",
    name: "Windows",
    detail: "Windows 10 / 11",
    meta: "Instalador NSIS (.exe)",
    formats: "Setup.exe · Versão portátil (.zip)",
    icon: "windows",
  },
  {
    id: "linux",
    name: "Linux",
    detail: "Distribuições x86_64",
    meta: "Pacotes .deb e .AppImage",
    formats: "presenter.deb · presenter.AppImage",
    icon: "linux",
  },
  {
    id: "macos",
    name: "macOS",
    detail: "Apple Silicon (ARM64)",
    meta: "Instalador .dmg via CI",
    formats: "presenter.dmg",
    icon: "macos",
  },
];

/** Print usado no Hero. Se o arquivo não existir, cai no mock em CSS. */
export const HERO_SHOT = "/screenshots/presenter-presentation-open-page.png";

export interface Screenshot {
  /** Caminho em public/screenshots/ (URL absoluta a partir da raiz). */
  src: string;
  title: string;
  caption: string;
  tag: string;
}

/**
 * Prints exibidos na seção Galeria.
 * Basta colocar os arquivos em `public/screenshots/` com estes nomes.
 */
export const screenshots: Screenshot[] = [
  {
    src: "/screenshots/presenter-initial-page.png",
    title: "Tela inicial",
    caption:
      "Abra um PDF, arraste e solte o arquivo ou reabra algo do histórico de recentes.",
    tag: "Início",
  },
  {
    src: "/screenshots/presentar-drag-and-drop-page.png",
    title: "Arraste e solte",
    caption:
      "Jogue o PDF direto na janela do Presenter para começar, ou use o atalho O.",
    tag: "Abertura",
  },
  {
    src: "/screenshots/presenter-presentation-open-page.png",
    title: "Janela de controle",
    caption:
      "Slide atual, preview do próximo, cronômetro e as ferramentas de anotação num só lugar.",
    tag: "Apresentador",
  },
  {
    src: "/screenshots/presenter-one-monitor-mode.png",
    title: "Modo um monitor",
    caption:
      "Com um único monitor, o app entra em tela cheia com controles flutuantes sobre o slide.",
    tag: "Tela cheia",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "O que é o Presenter?",
    a: "É um aplicativo de apresentação de PDFs para desktop. Ele transforma qualquer arquivo PDF numa apresentação estilo PowerPoint, com uma janela de controle para o apresentador e telas de projeção em tela cheia para o público.",
  },
  {
    q: "Em quais sistemas o Presenter roda?",
    a: "Windows 10/11 e Linux (x86_64). Os workflows de CI também geram um instalador .dmg para macOS ARM64. Os instaladores são publicados nas releases do GitHub.",
  },
  {
    q: "Preciso de internet ou de uma conta para usar?",
    a: "Não. O Presenter é um aplicativo local e offline, todo o processamento do PDF acontece na sua máquina, sem enviar o arquivo para servidores.",
  },
  {
    q: "Como funcionam as anotações ao vivo?",
    a: "Durante a apresentação você desenha diretamente sobre os slides usando caneta, marcador, laser ou borracha. Os traços são sincronizados em tempo real com as janelas de projeção e podem ser desfeitos/refeitos com Ctrl+Z e Ctrl+Y (até 50 passos).",
  },
  {
    q: "Consigo apresentar em mais de um monitor?",
    a: "Sim. Na seção Tela de projeção você marca os monitores onde a apresentação deve aparecer e cada um abre em tela cheia, simultaneamente. Com apenas um monitor, o app entra em tela cheia com controles flutuantes.",
  },
  {
    q: "Dá para exportar os slides com as anotações?",
    a: "Sim. O comando Exportar PDF gera uma cópia do documento com todas as anotações incorporadas, pronta para compartilhar.",
  },
  {
    q: "Meu antivírus/SmartScreen avisou ao abrir. É seguro?",
    a: "É um alerta de reputação típico de aplicativos novos que ainda não possuem assinatura de código paga. O projeto é open source, o código-fonte está público no GitHub e você pode inspecioná-lo e compilá-lo por conta própria.",
  },
  {
    q: "O Presenter é gratuito?",
    a: "Sim, é gratuito e open source. Se ele te ajudar, você pode apoiar o projeto com uma estrela no GitHub, reportando problemas ou sugerindo recursos.",
  },
];

export const footerLinks = {
  projeto: [
    { label: "Recursos", href: "#features" },
    { label: "Galeria", href: "#galeria" },
    { label: "Atalhos", href: "#shortcuts" },
    { label: "Download", href: "#downloads" },
    { label: "FAQ", href: "#faq" },
  ],
  comunidade: [
    { label: "GitHub", href: REPO_URL },
    { label: "Reportar bug", href: `${REPO_URL}/issues/new` },
  ],
} as const;

