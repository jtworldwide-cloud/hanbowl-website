import { shop } from "@/data/shop";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] grain overflow-hidden">
      {/* Background image — bowl shot with strong left-side scrim */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <img
          src="/menu/Bowl02_Bulgogi_1080sq.jpg"
          alt=""
          className="w-full h-full object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-3xl text-cream">
          <p className="font-korean text-burnt text-base sm:text-lg tracking-widest mb-3 sm:mb-4">
            한 그릇의 한국
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-5">
            เกาหลี
            <br />
            <span className="text-burnt">ในชามเดียว</span>
          </h1>
          <p className="text-lg sm:text-xl mb-3 text-cream/90 max-w-2xl">
            {shop.hero}
          </p>
          <p className="text-sm sm:text-base mb-9 text-cream/70 italic">
            {shop.heroEn}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#menu"
              className="bg-burnt hover:bg-cream hover:text-charcoal text-charcoal px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg transition-all hover:scale-105 shadow-lg"
            >
              ดูเมนูทั้งหมด →
            </a>
            <a
              href="#order"
              className="border-2 border-cream/80 hover:bg-cream hover:text-charcoal text-cream px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg transition-all"
            >
              สั่ง Grab / LineMan
            </a>
          </div>

          {/* USP highlights */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-16 max-w-2xl">
            {[
              { icon: "⚡", t: "4 นาที", s: "เสิร์ฟเร็ว" },
              { icon: "🥢", t: "เกาหลีแท้", s: "วัตถุดิบนำเข้า" },
              { icon: "💰", t: "เริ่ม 99฿", s: "ราคาคุ้ม" },
            ].map((u) => (
              <div
                key={u.t}
                className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-2xl p-3 sm:p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl mb-1">{u.icon}</div>
                <div className="font-display font-bold text-base sm:text-xl text-cream">{u.t}</div>
                <div className="text-xs sm:text-sm text-cream/70">{u.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/60 animate-bounce">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </section>
  );
}
