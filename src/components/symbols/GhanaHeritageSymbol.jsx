function GhanaHeritageSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Adinkra-inspired central circle */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Central spiral / Sankofa-inspired form */}
      <path
        d="
          M135 75
          C120 55 88 55 72 72
          C55 90 61 119 82 130
          C101 140 124 132 131 113
          C137 97 126 82 111 80
          C96 78 84 88 85 101
          C86 113 98 119 108 114
        "
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Decorative outer marks */}
      <path
        d="M100 20 V38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M100 162 V180"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M20 100 H38"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M162 100 H180"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M43 43 L56 56"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M144 144 L157 157"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M43 157 L56 144"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M144 56 L157 43"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default GhanaHeritageSymbol;