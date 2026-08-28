function AfricaSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 300 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Simplified outline of Africa */}
      <path
        d="
          M137 12
          C120 18 111 31 112 47
          C113 61 104 72 94 82
          C83 93 80 108 85 122
          C90 136 87 149 78 160
          C68 173 67 188 75 202
          C83 216 92 224 98 238
          C104 252 104 270 111 285
          C118 300 129 316 143 333
          C151 343 160 350 169 345
          C178 340 180 326 178 313
          C176 298 180 284 189 272
          C198 260 207 250 212 236
          C217 222 214 207 220 194
          C226 180 239 168 243 152
          C247 136 241 121 231 111
          C221 101 218 88 220 74
          C222 60 216 48 204 42
          C191 35 177 36 166 29
          C156 22 149 13 137 12
          Z
        "
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Northern detail */}
      <path
        d="M96 95 C122 87 151 88 178 96"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Central detail */}
      <path
        d="M113 125 C137 136 158 149 173 169"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Southern detail */}
      <path
        d="M126 210 C145 225 158 245 164 269"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default AfricaSymbol;