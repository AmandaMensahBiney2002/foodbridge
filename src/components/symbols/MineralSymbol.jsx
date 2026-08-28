function MineralSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Crystal */}
      <path
        d="
          M110 20
          L165 70
          L145 155
          L110 190
          L75 155
          L55 70
          Z
        "
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Crystal faces */}
      <path
        d="M110 20 V190"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M55 70 L110 95 L165 70"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M75 155 L110 95 L145 155"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Small crystal */}
      <path
        d="M35 170 L55 145 L70 175 L50 195 Z"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

export default MineralSymbol;