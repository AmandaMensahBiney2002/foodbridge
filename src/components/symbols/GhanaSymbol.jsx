function GhanaSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stylized Ghana outline */}
      <path
        d="
          M65 20
          L120 25
          L160 45
          L180 80
          L175 120
          L190 155
          L165 185
          L145 220
          L115 235
          L90 215
          L70 185
          L55 150
          L40 120
          L45 85
          L35 55
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Gulf of Guinea detail */}
      <path
        d="M90 215 C105 225 125 230 145 220"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Small star representing Ghana */}
      <path
        d="
          M110 100
          L116 115
          L132 115
          L119 124
          L124 140
          L110 130
          L96 140
          L101 124
          L88 115
          L104 115
          Z
        "
        fill="currentColor"
      />
    </svg>
  );
}

export default GhanaSymbol;