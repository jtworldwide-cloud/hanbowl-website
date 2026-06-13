"use client";
import { useMemo, useState } from "react";
import MenuCard from "./MenuCard";
import { bowls, soups, sides, drinks } from "@/data/menu";

type Filter = "all" | "mild" | "medium" | "hot" | "veg";

const FILTERS: { id: Filter; label: string; icon?: string }[] = [
  { id: "all",    label: "ทั้งหมด" },
  { id: "mild",   label: "ไม่เผ็ด", icon: "🥛" },
  { id: "medium", label: "เผ็ดกลาง", icon: "🌶" },
  { id: "hot",    label: "เผ็ดมาก", icon: "🔥" },
  { id: "veg",    label: "มังสวิรัติ", icon: "🥬" },
];

export default function MenuSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredBowls = useMemo(() => {
    switch (filter) {
      case "mild":   return bowls.filter((b) => b.spice <= 1);
      case "medium": return bowls.filter((b) => b.spice === 2);
      case "hot":    return bowls.filter((b) => b.spice >= 3);
      case "veg":    return bowls.filter((b) => b.tags.includes("vegetarian"));
      default:       return bowls;
    }
  }, [filter]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-korean text-terracotta tracking-widest mb-3">메뉴</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-charcoal mb-4">
            เมนู<span className="text-terracotta">ทั้งหมด</span>
          </h2>
          <p className="text-charcoal/70 text-base sm:text-lg max-w-2xl mx-auto">
            10 ชามฮีโร่ · 4 ซุปร้อน · เครื่องเคียง · ทุกอย่างทำสด ใน 4–8 นาที
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 justify-start sm:justify-center -mx-5 px-5 sm:mx-0 sm:px-0 snap-x">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 snap-start px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                filter === f.id
                  ? "bg-terracotta text-cream shadow-md"
                  : "bg-charcoal/5 text-charcoal hover:bg-charcoal/10"
              }`}
            >
              {f.icon && <span className="mr-1">{f.icon}</span>}
              {f.label}
            </button>
          ))}
        </div>

        {/* Bowls grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredBowls.map((b) => (
            <MenuCard key={b.id} item={b} />
          ))}
        </div>

        {filteredBowls.length === 0 && (
          <p className="text-center text-charcoal/50 py-12">
            ไม่พบเมนูในหมวดนี้ — ลองเลือกหมวดอื่นนะ 🍜
          </p>
        )}

        {/* Mini Soups */}
        <div className="mt-20 sm:mt-28">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-korean text-terracotta tracking-wider text-sm mb-1">국</p>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-charcoal">
                ซุปร้อน · Mini Soups
              </h3>
            </div>
            <p className="text-charcoal/60 text-sm hidden sm:block">เพิ่มความอบอุ่นให้มื้อของคุณ</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {soups.map((s) => (
              <MenuCard key={s.id} item={s} />
            ))}
          </div>
        </div>

        {/* Sides + Drinks */}
        <div className="mt-20 sm:mt-28">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-korean text-terracotta tracking-wider text-sm mb-1">반찬 & 음료</p>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-charcoal">
                เครื่องเคียง · เครื่องดื่ม
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...sides, ...drinks].map((s) => (
              <MenuCard key={s.id} item={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
