function CocoaSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cocoa pod */}
      <path
        d="
          M110 35
          C75 35 50 70 55 112
          C60 155 82 185 110 190
          C138 185 160 155 165 112
          C170 70 145 35 110 35
          Z
        "
        stroke="currentColor"
        strokeWidth="6"
      />

      {/* Pod ridges */}
      <path
        d="M80 55 C70 100 75 145 95 175"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M105 40 C95 90 100 145 110 185"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M135 55 C150 100 145 145 125 175"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Stem */}
      <path
        d="M110 35 C108 22 115 15 125 10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Leaf */}
      <path
        d="
          M123 20
          C145 5 170 15 177 35
          C155 40 135 35 123 20
          Z
        "
        stroke="currentColor"
        strokeWidth="5"
      />
    </svg>
  );
}

export default CocoaSymbol;