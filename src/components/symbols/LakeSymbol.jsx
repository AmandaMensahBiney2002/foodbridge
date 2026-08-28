function LakeSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 260 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Lake */}
      <path
        d="
          M35 105
          C70 90 95 95 125 105
          C155 115 190 115 225 100
          C215 135 185 155 130 158
          C75 160 45 140 35 105
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Water lines */}
      <path
        d="M65 120 H195"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M85 137 H175"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Mountains behind lake */}
      <path
        d="M25 105 L80 45 L115 90 L155 35 L225 105"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LakeSymbol;