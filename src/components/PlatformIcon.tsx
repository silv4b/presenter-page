type PlatformIconName = "windows" | "linux" | "macos";

interface PlatformIconProps {
  name: PlatformIconName;
  className?: string;
}

export function PlatformIcon({ name, className }: PlatformIconProps) {
  if (name === "windows") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M3 4.6l7.2-.99v7.6H3V4.6zm9.1-1.25L21 2v9.2h-8.9V3.35zM3 12.8h7.2v7.6L3 19.4v-6.6zm9.1 0H21V22l-8.9-1.35V12.8z" />
      </svg>
    );
  }
  if (name === "linux") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M12 2c-2.2 0-3.4 1.7-3.4 3.8 0 1 .1 1.8.1 2.6-.6 1-1.6 2.2-2.2 3.6-.6 1.3-1 2.4-1 3.3 0 .7.4 1.3 1 1.7-.3.5-.4 1-.3 1.4.2.6.8 1 1.6 1.1.7.1 1.5 0 2.2-.2.6.3 1.3.4 1.9.2.3.1.6.1.9.1.6 0 1.2-.2 1.7-.5.7.2 1.4.3 2 .2.8-.1 1.4-.5 1.6-1.1.2-.4 0-.9-.3-1.4.6-.4 1-.9 1-1.6 0-.9-.4-2-1-3.3-.6-1.4-1.6-2.6-2.2-3.6 0-.8.1-1.6.1-2.6C15.4 3.7 14.2 2 12 2zm-1.6 3.1c.5 0 .9.5.9 1.1 0 .4-.2.8-.5 1-.2-.1-.5-.1-.7 0-.3-.2-.5-.6-.5-1 0-.6.4-1.1.8-1.1zm3.2 0c.5 0 .8.5.8 1.1 0 .4-.2.8-.5 1-.2-.1-.4-.1-.7 0-.3-.2-.4-.6-.4-1 0-.6.3-1.1.8-1.1zM12 8.3c.9 0 1.8.5 2.4 1.4l-.1.6c-.7-.3-1.5-.4-2.3-.4s-1.6.1-2.3.4l-.1-.6C10.2 8.8 11.1 8.3 12 8.3z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2-.1 1.6-.8 3-.8s1.8.8 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8zM14.2 5.7c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3z" />
    </svg>
  );
}
