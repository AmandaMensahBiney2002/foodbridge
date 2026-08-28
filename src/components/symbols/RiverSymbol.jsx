function RiverSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 260 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M70 10 C120 45 80 80 125 110 C170 140 130 170 185 195"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M105 5 C150 40 110 75 155 105 C200 135 160 165 215 190"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M35 40 C65 30 90 35 110 50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M145 145 C170 135 195 140 225 155"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default RiverSymbol;