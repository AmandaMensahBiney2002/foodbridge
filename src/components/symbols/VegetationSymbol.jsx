function VegetationSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tree trunk */}
      <path
        d="M105 190 C108 150 108 115 105 80"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M105 130 L75 100"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M107 120 L140 90"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Main canopy */}
      <circle
        cx="105"
        cy="65"
        r="42"
        stroke="currentColor"
        strokeWidth="6"
      />

      <circle
        cx="65"
        cy="80"
        r="30"
        stroke="currentColor"
        strokeWidth="6"
      />

      <circle
        cx="145"
        cy="80"
        r="30"
        stroke="currentColor"
        strokeWidth="6"
      />

      {/* Ground */}
      <path
        d="M45 190 H165"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Small plants */}
      <path
        d="M55 188 C55 170 48 160 40 153"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M155 188 C155 170 162 160 170 153"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default VegetationSymbol;