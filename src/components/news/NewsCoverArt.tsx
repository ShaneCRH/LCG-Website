import { getNewsCategoryMeta } from "@/lib/newsCategories";

const accentHex: Record<string, string> = {
  brass: "#9c8550",
  navy: "#1a2340",
  charcoal: "#1c1c1c",
};

interface Props {
  category?: string;
  className?: string;
}

/**
 * Generative, on-brand cover art for news posts. Avoids depending on
 * sourced stock photography — every category renders a distinct
 * geometric pattern using the site's existing palette.
 */
export function NewsCoverArt({ category, className }: Props) {
  const meta = getNewsCategoryMeta(category);
  const accent = accentHex[meta?.accent ?? "brass"];
  const pattern = meta?.pattern ?? "grid";

  return (
    <div
      className={`relative overflow-hidden bg-charcoal ${className ?? ""}`}
      role="img"
      aria-label={meta?.label ?? "Landmark Creative Group"}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#1c1c1c" />
        {pattern === "grid" && (
          <g stroke={accent} strokeOpacity="0.35" strokeWidth="1">
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
            ))}
          </g>
        )}
        {pattern === "diagonal" && (
          <g stroke={accent} strokeOpacity="0.35" strokeWidth="1">
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={i} x1={i * 50 - 150} y1="0" x2={i * 50 + 150} y2="300" />
            ))}
          </g>
        )}
        {pattern === "stack" && (
          <g fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <rect key={i} x={40 + i * 10} y={40 + i * 36} width={320 - i * 20} height="20" />
            ))}
          </g>
        )}
        {pattern === "dots" && (
          <g fill={accent} fillOpacity="0.45">
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 10 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={20 + col * 40} cy={20 + row * 40} r="2.5" />
              ))
            )}
          </g>
        )}
        <rect x="0" y="0" width="400" height="300" fill="url(#fade)" />
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1c1c" stopOpacity="0" />
            <stop offset="100%" stopColor="#1c1c1c" stopOpacity="0.55" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[0.6rem] tracking-[0.15em] uppercase text-ivory/70 font-medium">
          {meta?.label ?? "Landmark Creative Group"}
        </p>
      </div>
    </div>
  );
}
