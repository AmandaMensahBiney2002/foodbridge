function PalmSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Trunk */}
      <path
        d="M100 210 C95 160 100 110 105 70"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Palm leaves */}
      <path
        d="M105 70 C70 45 40 45 20 55"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M105 70 C70 25 45 20 30 25"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M105 70 C105 30 120 10 135 5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M105 70 C140 35 165 35 185 45"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M105 70 C145 60 170 70 185 85"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Ground */}
      <path
        d="M55 210 H150"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default PalmSymbol;