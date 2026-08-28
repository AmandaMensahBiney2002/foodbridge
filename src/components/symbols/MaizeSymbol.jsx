function MaizeSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Corn cob */}
      <path
        d="
          M100 35
          C75 45 65 80 68 120
          C70 155 82 180 100 190
          C118 180 130 155 132 120
          C135 80 125 45 100 35
          Z
        "
        stroke="currentColor"
        strokeWidth="6"
      />

      {/* Corn kernels */}
      <path
        d="M82 75 H118"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M76 95 H124"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M74 115 H126"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M77 135 H123"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M83 155 H117"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Leaves */}
      <path
        d="
          M75 175
          C45 160 30 130 38 100
          C55 115 70 140 75 175
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="
          M125 175
          C155 160 170 130 162 100
          C145 115 130 140 125 175
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />
    </svg>
  );
}

export default MaizeSymbol;