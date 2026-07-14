export default function PlaceholderImage({
  label,
  className = ""
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden flex items-end p-4 bg-gradient-to-br from-primary/15 via-gold/10 to-accent/10 ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute top-4 right-4 text-primary-dark/25"
        aria-hidden="true"
      >
        <path
          d="M4 8a2 2 0 012-2h1.2l.8-1.4A1 1 0 018.86 4h6.28a1 1 0 01.86.6L16.8 6H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="font-mono text-[11px] uppercase tracking-wider text-primary-dark/70 bg-surface/85 px-2.5 py-1 rounded-full">
        {label}
      </span>
    </div>
  );
}
