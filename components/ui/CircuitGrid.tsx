export default function CircuitGrid({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="1000"
          height="1000"
          patternUnits="userSpaceOnUse"
        >
          {/* Lines */}
          <path
            d="M 160 240 L 480 240 Q 500 240 500 260 L 500 400 Q 500 420 520 420 L 820 420"
            stroke="#2a2a2a"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 390 820 L 390 620 Q 390 600 410 600 L 800 600 Q 820 600 820 580 L 820 460"
            stroke="#2a2a2a"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 390 820 L 920 820 Q 940 820 940 840 L 940 890"
            stroke="#2a2a2a"
            strokeWidth="3"
            fill="none"
          />

          {/* Cubes */}
          <rect x="120" y="200" width="80" height="80" rx="5" fill="#3a3a3a" />
          <rect x="780" y="380" width="80" height="80" rx="5" fill="#3a3a3a" />
          <rect x="350" y="780" width="80" height="80" rx="5" fill="#3a3a3a" />
          <rect x="900" y="850" width="80" height="80" rx="5" fill="#3a3a3a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
}
