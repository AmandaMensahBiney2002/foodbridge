function GhanaPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Adinkra-inspired symbols */}

      <div className="absolute left-[5%] top-[10%] text-6xl text-[#1F5D42]/10">
        ✦
      </div>

      <div className="absolute right-[8%] top-[15%] text-7xl text-[#C65D3A]/10">
        ✥
      </div>

      <div className="absolute left-[15%] top-[45%] text-8xl text-[#D9A441]/10">
        ◈
      </div>

      <div className="absolute right-[15%] top-[48%] text-7xl text-[#1F5D42]/10">
        ✦
      </div>

      <div className="absolute left-[7%] bottom-[12%] text-7xl text-[#C65D3A]/10">
        ✥
      </div>

      <div className="absolute right-[6%] bottom-[10%] text-8xl text-[#D9A441]/10">
        ◈
      </div>


      {/* Kente-inspired geometric patterns */}

      <div className="absolute left-[30%] top-[8%] h-16 w-16 rotate-45 border-4 border-[#C65D3A]/10" />

      <div className="absolute right-[30%] top-[25%] h-20 w-20 rotate-45 border-4 border-[#D9A441]/10" />

      <div className="absolute left-[40%] bottom-[15%] h-14 w-14 rotate-45 border-4 border-[#1F5D42]/10" />


      {/* Ghana-inspired decorative circles */}

      <div className="absolute left-[3%] top-[70%] h-24 w-24 rounded-full border-4 border-[#D9A441]/10" />

      <div className="absolute right-[4%] top-[65%] h-32 w-32 rounded-full border-4 border-[#C65D3A]/10" />

    </div>
  );
}

export default GhanaPattern;