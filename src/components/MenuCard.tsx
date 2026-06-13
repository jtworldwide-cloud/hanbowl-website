import type { MenuItem } from "@/data/menu";

const SPICE_LABEL = ["ไม่เผ็ด", "เผ็ดน้อย", "เผ็ดกลาง", "เผ็ดมาก"];

const TAG_STYLE: Record<string, string> = {
  signature: "bg-terracotta text-cream",
  premium:   "bg-charcoal text-sesame",
  fitness:   "bg-emerald-700 text-cream",
  vegetarian:"bg-emerald-600 text-cream",
  new:       "bg-burnt text-charcoal",
};
const TAG_TEXT: Record<string, string> = {
  signature: "Signature",
  premium:   "Premium",
  fitness:   "Fitness",
  vegetarian:"มังสวิรัติ",
  new:       "ใหม่",
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-charcoal/5">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-charcoal/5">
        <img
          src={item.image}
          alt={item.nameTh}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Spice badge */}
        {item.spice > 0 && (
          <div className="absolute top-3 left-3 bg-cream/95 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-kimchi flex items-center gap-1">
            {"🌶".repeat(item.spice)} <span className="text-charcoal/70">{SPICE_LABEL[item.spice]}</span>
          </div>
        )}
        {/* Tags */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
          {item.tags.slice(0,2).map((t) => (
            <span
              key={t}
              className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${TAG_STYLE[t]}`}
            >
              {TAG_TEXT[t]}
            </span>
          ))}
        </div>
        {/* Cooking time */}
        <div className="absolute bottom-3 left-3 bg-charcoal/85 text-cream text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
          ⚡ {item.cookingMinutes} นาที
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <div className="min-w-0">
            <h3 className="font-display font-black text-lg sm:text-xl text-charcoal leading-tight">
              {item.nameTh}
            </h3>
            <p className="text-xs sm:text-sm text-terracotta font-medium">
              {item.nameEn}
              {item.nameKr && (
                <span className="font-korean ml-1.5 text-charcoal/50">· {item.nameKr}</span>
              )}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-display font-black text-terracotta text-xl sm:text-2xl whitespace-nowrap">
              ฿{item.price}
            </div>
          </div>
        </div>

        <p className="text-sm text-charcoal/70 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Ingredients on hover/expand */}
        <div className="mt-3 pt-3 border-t border-charcoal/10 flex flex-wrap gap-1.5">
          {item.ingredients.slice(0,4).map((i) => (
            <span key={i} className="text-[10px] sm:text-xs text-charcoal/60 bg-cream-100 bg-charcoal/[0.04] px-2 py-0.5 rounded-full">
              {i}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
