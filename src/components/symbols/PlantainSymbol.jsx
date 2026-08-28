function PlantainSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Leaf */}
      <path
        d="
          M105 175
          C55 145 35 95 55 40
          C105 50 140 90 105 175
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* Leaf vein */}
      <path
        d="M105 175 C90 120 75 75 55 40"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Plantain bunch */}
      <path
        d="M110 95 C125 105 145 110 160 100"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M120 105 C135 125 150 130 165 120"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M125 120 C140 140 155 145 168 135"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Stem */}
      <path
        d="M110 95 C105 80 105 70 110 60"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default PlantainSymbol;