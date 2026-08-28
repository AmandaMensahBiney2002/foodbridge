function AgricultureSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M100 175 C100 130 100 90 100 40"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Left leaves */}
      <path
        d="
          M98 125
          C65 125 40 105 38 76
          C65 73 91 88 98 125
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Right leaves */}
      <path
        d="
          M102 105
          C135 104 157 84 160 55
          C133 55 108 72 102 105
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Upper leaf */}
      <path
        d="
          M100 78
          C78 65 69 44 78 25
          C98 33 108 53 100 78
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Ground */}
      <path
        d="M45 175 H155"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default AgricultureSymbol;