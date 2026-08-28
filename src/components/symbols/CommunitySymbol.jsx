function CommunitySymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Person 1 */}
      <circle
        cx="120"
        cy="45"
        r="18"
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="M120 65 V125"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Person 2 */}
      <circle
        cx="55"
        cy="80"
        r="15"
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="M55 95 V145"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Person 3 */}
      <circle
        cx="185"
        cy="80"
        r="15"
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="M185 95 V145"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Connection */}
      <path
        d="M70 115 C90 100 100 100 120 110"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M120 110 C140 100 150 100 170 115"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Ground */}
      <path
        d="M35 155 H205"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CommunitySymbol;