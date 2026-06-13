export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-charcoal text-cream relative overflow-hidden">
      {/* Decorative korean character watermark */}
      <span className="absolute -right-10 -top-20 font-korean text-burnt/10 text-[280px] sm:text-[420px] font-bold leading-none select-none">
        한
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="font-korean text-burnt tracking-widest mb-3">우리의 이야기</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl leading-tight mb-6">
            เรื่องราว<br/>
            <span className="text-burnt">ของชามนี้</span>
          </h2>
          <div className="space-y-4 text-cream/85 text-base sm:text-lg leading-relaxed">
            <p>
              HAN BOWL เกิดจากความหลงใหลในรสชาติเกาหลีแบบ <em className="text-burnt not-italic font-semibold">homestyle</em> —
              อาหารที่คุณยายเกาหลีทำให้ครอบครัวกินทุกวัน อบอุ่น เผ็ดร้อน เข้มข้น
            </p>
            <p>
              เรานำสูตรนั้นมาทำให้คนกรุงเทพกินได้ง่าย <strong className="text-cream">จานเดียวพอ เร็ว 4 นาที ราคาเริ่ม 99 บาท</strong> —
              ไม่ต้องไปร้านบุฟเฟ่ต์เกาหลี ไม่ต้องสั่งหลายเมนู
            </p>
            <p className="text-cream/70">
              เราใช้ <span className="text-burnt font-semibold">โคชูจัง</span> นำเข้าตรงจากเกาหลี ·
              <span className="text-burnt font-semibold"> กิมจิหมักเอง</span> ·
              <span className="text-burnt font-semibold"> ไม่ใช้ผงชูรส</span>
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { n: "10", l: "ชามฮีโร่", s: "Hero Bowls" },
              { n: "4", l: "นาที", s: "Avg cook time" },
              { n: "99฿", l: "เริ่มต้น", s: "Starting price" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-burnt pl-4">
                <div className="font-display font-black text-3xl sm:text-4xl text-burnt">{s.n}</div>
                <div className="text-cream font-semibold text-sm">{s.l}</div>
                <div className="text-cream/50 text-xs">{s.s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
          <div className="absolute inset-0 bg-terracotta rounded-3xl rotate-3"/>
          <div className="absolute inset-0 bg-burnt rounded-3xl -rotate-2"/>
          <img
            src="/menu/Bowl02_Bulgogi_1080sq.jpg"
            alt="HAN BOWL signature dish"
            className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 sm:-bottom-8 sm:-left-8 bg-cream text-charcoal rounded-2xl px-5 py-4 shadow-xl">
            <p className="font-korean text-terracotta text-xs">정통</p>
            <p className="font-display font-black text-lg sm:text-xl">เกาหลีแท้</p>
            <p className="text-xs text-charcoal/60">Authentic recipe</p>
          </div>
        </div>
      </div>
    </section>
  );
}
