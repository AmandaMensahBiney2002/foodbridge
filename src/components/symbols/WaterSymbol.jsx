function WaterSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Waterfall */}
      <path
        d="M80 20 V95"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M100 20 V110"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M120 20 V95"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Water surface */}
      <path
        d="
          M35 110
          C55 95 75 125 95 110
          C115 95 135 125 155 110
          C175 95 195 125 215 110
        "
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="
          M25 135
          C45 120 65 150 85 135
          C105 120 125 150 145 135
          C165 120 185 150 215 135
        "
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Water drops */}
      <path
        d="M60 55 C50 68 50 78 60 84 C70 78 70 68 60 55Z"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M145 50 C135 63 135 73 145 79 C155 73 155 63 145 50Z"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

export default WaterSymbol;