import { shop } from "@/data/shop";

const channels = [
  {
    name: "Grab Food",
    sub: "เดลิเวอรี่ทั่วกรุงเทพ",
    href: shop.delivery.grab,
    bg: "bg-emerald-600 hover:bg-emerald-700",
    icon: "🛵",
  },
  {
    name: "LineMan",
    sub: "ส่งไว 30 นาที",
    href: shop.delivery.lineman,
    bg: "bg-yellow-500 hover:bg-yellow-600",
    icon: "🟡",
  },
  {
    name: "LINE Official",
    sub: "สั่งตรง · ส่วนลดสมาชิก",
    href: shop.contact.lineUrl,
    bg: "bg-green-500 hover:bg-green-600",
    icon: "💬",
  },
];

export default function Order() {
  return (
    <section id="order" className="py-20 sm:py-28 bg-burnt text-charcoal relative overflow-hidden">
      <span className="absolute -left-10 top-10 font-korean text-charcoal/5 text-[260px] sm:text-[400px] font-bold leading-none select-none">주문</span>
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-korean text-terracotta tracking-widest mb-3">주문하세요</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl mb-3">
            สั่งเลย ส่งถึงคุณ
          </h2>
          <p className="text-charcoal/80 text-base sm:text-lg max-w-xl mx-auto">
            เลือกช่องทางที่สะดวก · หรือเดินมาที่ร้านได้เลย
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener"
              className={`${c.bg} text-white rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col items-start gap-3`}
            >
              <span className="text-4xl">{c.icon}</span>
              <div>
                <div className="font-display font-black text-2xl">{c.name}</div>
                <div className="text-white/85 text-sm">{c.sub}</div>
              </div>
              <span className="mt-auto font-semibold text-sm flex items-center gap-1">
                สั่งเลย →
              </span>
            </a>
          ))}
        </div>

        {/* Or visit shop */}
        <div className="mt-10 text-center">
          <a
            href="#location"
            className="inline-flex items-center gap-2 text-charcoal hover:text-cream font-semibold underline underline-offset-4 decoration-2 decoration-charcoal/40 hover:decoration-cream"
          >
            หรือเดินมาที่ร้าน 🚶‍♂️ ดูเส้นทาง
          </a>
        </div>
      </div>
    </section>
  );
}
