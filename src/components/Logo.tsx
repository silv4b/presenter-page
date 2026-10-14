import { useState } from "react";

interface LogoProps {
  className?: string;
}

const LOGO_SRC = "/presenter-logo.png";

function LogoGlyph({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="brandGrad" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#d4d4d8" />
          <stop offset="55%" stopColor="#a1a1aa" />
          <stop offset="100%" stopColor="#71717a" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="#0f0f0f" />
      <rect
        x="11"
        y="15"
        width="42"
        height="27"
        rx="4"
        fill="url(#brandGrad)"
      />
      <path d="M27.5 23l13 5.5-13 5.5z" fill="#0f0f0f" />
      <rect x="18" y="47" width="28" height="4" rx="2" fill="#3a3a3a" />
      <circle cx="32" cy="41" r="2.6" fill="#3a3a3a" />
    </svg>
  );
}

export function LogoMark({ className }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <LogoGlyph className={className} />;
  }

  return (
    <img
      src={LOGO_SRC}
      alt=""
      aria-hidden="true"
      draggable={false}
      onError={() => setFailed(true)}
      className={`object-contain ${className ?? ""}`}
    />
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-8 w-8 rounded-lg" />
      <span className="text-[1.05rem] font-semibold tracking-tight text-white">
        Presenter
      </span>
    </span>
  );
}
