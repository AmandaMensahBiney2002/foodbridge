function MountainSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 260 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main mountain */}
      <path
        d="
          M20 155
          L95 35
          L125 85
          L160 25
          L240 155
          Z
        "
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Mountain details */}
      <path
        d="M95 35 L80 75 L105 65"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M160 25 L145 65 L175 55"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Ground */}
      <path
        d="M15 155 H245"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default MountainSymbol;