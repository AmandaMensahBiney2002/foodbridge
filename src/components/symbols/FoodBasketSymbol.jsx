function FoodBasketSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Basket */}
      <path
        d="
          M45 95
          H195
          L175 180
          H65
          Z
        "
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Basket weaving */}
      <path
        d="M55 120 H185"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M58 145 H182"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M62 165 H178"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Basket handles */}
      <path
        d="
          M65 95
          C65 35 175 35 175 95
        "
        stroke="currentColor"
        strokeWidth="6"
      />

      {/* Food inside */}
      <circle
        cx="85"
        cy="75"
        r="17"
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="M110 85 C100 60 115 40 135 35"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M135 35 C155 40 165 55 160 75"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M150 85 C165 65 180 70 185 85"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default FoodBasketSymbol;