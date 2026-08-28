import AfricaSymbol from "./symbols/AfricaSymbol";
import GhanaSymbol from "./symbols/GhanaSymbol";
import GhanaHeritageSymbol from "./symbols/GhanaHeritageSymbol";
import AgricultureSymbol from "./symbols/AgricultureSymbol";
import WaterSymbol from "./symbols/WaterSymbol";
import VegetationSymbol from "./symbols/VegetationSymbol";
import CocoaSymbol from "./symbols/CocoaSymbol";
import MaizeSymbol from "./symbols/MaizeSymbol";
import MountainSymbol from "./symbols/MountainSymbol";
import MineralSymbol from "./symbols/MineralSymbol";
import RiverSymbol from "./symbols/RiverSymbol";
import LakeSymbol from "./symbols/LakeSymbol";
import PalmSymbol from "./symbols/PalmSymbol";
import PlantainSymbol from "./symbols/PlantainSymbol";
import FoodBasketSymbol from "./symbols/FoodBasketSymbol";
import AfricanSunSymbol from "./symbols/AfricanSunSymbol";
import CommunitySymbol from "./symbols/CommunitySymbol";

function AfricanPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* AFRICA */}
      <AfricaSymbol
        className="
          absolute
          -left-20
          top-20
          h-72
          w-72
          rotate-[-8deg]
          text-[#D9A441]/10
        "
      />

      {/* GHANA */}
      <GhanaSymbol
        className="
          absolute
          right-[-30px]
          top-24
          h-64
          w-52
          rotate-[8deg]
          text-[#C65D3A]/10
        "
      />

      {/* GHANAIAN HERITAGE */}
      <GhanaHeritageSymbol
        className="
          absolute
          left-[18%]
          top-[18%]
          h-32
          w-32
          rotate-12
          text-[#D9A441]/10
        "
      />

      {/* AGRICULTURE */}
      <AgricultureSymbol
        className="
          absolute
          right-[15%]
          top-[20%]
          h-36
          w-36
          rotate-[-10deg]
          text-[#1F5D42]/10
        "
      />

      {/* VEGETATION */}
      <VegetationSymbol
        className="
          absolute
          left-[-20px]
          top-[38%]
          h-48
          w-48
          rotate-6
          text-[#1F5D42]/10
        "
      />

      {/* COCOA */}
      <CocoaSymbol
        className="
          absolute
          right-[8%]
          top-[38%]
          h-32
          w-32
          rotate-[-12deg]
          text-[#C65D3A]/10
        "
      />

      {/* MAIZE */}
      <MaizeSymbol
        className="
          absolute
          left-[12%]
          top-[58%]
          h-36
          w-36
          rotate-12
          text-[#D9A441]/10
        "
      />

      {/* MOUNTAIN */}
      <MountainSymbol
        className="
          absolute
          right-[-25px]
          top-[60%]
          h-44
          w-64
          rotate-[-5deg]
          text-[#1F5D42]/10
        "
      />

      {/* MINERALS */}
      <MineralSymbol
        className="
          absolute
          left-[38%]
          top-[65%]
          h-32
          w-32
          rotate-6
          text-[#D9A441]/10
        "
      />

      {/* RIVER */}
      <RiverSymbol
        className="
          absolute
          left-[-30px]
          bottom-[5%]
          h-40
          w-56
          rotate-[-8deg]
          text-[#1F5D42]/10
        "
      />

      {/* LAKE */}
      <LakeSymbol
        className="
          absolute
          right-[20%]
          bottom-[4%]
          h-32
          w-48
          rotate-3
          text-[#1F5D42]/10
        "
      />

      {/* WATERFALL */}
      <WaterSymbol
        className="
          absolute
          left-[28%]
          bottom-[-20px]
          h-36
          w-48
          rotate-[-5deg]
          text-[#1F5D42]/10
        "
      />

      {/* PALM TREE */}
      <PalmSymbol
        className="
          absolute
          right-[-20px]
          bottom-[-25px]
          h-48
          w-40
          rotate-6
          text-[#1F5D42]/10
        "
      />

      {/* PLANTAIN */}
      <PlantainSymbol
        className="
          absolute
          left-[55%]
          top-[42%]
          h-32
          w-32
          rotate-[-8deg]
          text-[#1F5D42]/10
        "
      />

      {/* FOOD BASKET */}
      <FoodBasketSymbol
        className="
          absolute
          left-[42%]
          bottom-[8%]
          h-36
          w-40
          rotate-[-6deg]
          text-[#C65D3A]/10
        "
      />

      {/* AFRICAN SUN */}
      <AfricanSunSymbol
        className="
          absolute
          right-[35%]
          top-10
          h-28
          w-28
          text-[#D9A441]/10
        "
      />

      {/* COMMUNITY */}
      <CommunitySymbol
        className="
          absolute
          left-[70%]
          bottom-[20%]
          h-32
          w-40
          rotate-6
          text-[#C65D3A]/10
        "
      />

      {/* WATER DROPS */}
      <WaterSymbol
        className="
          absolute
          right-[45%]
          top-[52%]
          h-24
          w-32
          rotate-12
          text-[#1F5D42]/10
        "
      />
    </div>
  );
}

export default AfricanPattern;