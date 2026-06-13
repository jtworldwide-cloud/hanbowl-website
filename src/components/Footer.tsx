import { shop } from "@/data/shop";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo/hanbowl-mark.svg" alt="" className="h-12 w-12"/>
              <div>
                <div className="font-display font-black text-2xl text-cream">HAN <span className="text-burnt">BOWL</span></div>
                <div className="text-xs text-cream/60">{shop.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-cream/60 max-w-xs leading-relaxed">
              เกาหลีแท้ในชามเดียว · ส่งถึงคุณใน 30 นาที · เริ่ม 99 บาท
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-3 uppercase text-xs tracking-wider">ติดต่อ</h4>
            <p className="text-sm mb-1">{shop.address.th}</p>
            <p className="text-sm mb-1">
              <a href={`tel:${shop.contact.phoneIntl}`} className="hover:text-burnt">{shop.contact.phone}</a>
            </p>
            <p className="text-sm mb-1">
              <a href={shop.contact.lineUrl} className="hover:text-burnt">LINE {shop.contact.line}</a>
            </p>
            <p className="text-sm">
              <a href={`mailto:${shop.contact.email}`} className="hover:text-burnt">{shop.contact.email}</a>
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-3 uppercase text-xs tracking-wider">ติดตาม</h4>
            <div className="flex gap-3">
              {[
                { href: shop.social.instagram, label: "IG", icon: "📷" },
                { href: shop.social.tiktok,    label: "TT", icon: "🎵" },
                { href: shop.social.facebook,  label: "FB", icon: "👤" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="w-11 h-11 grid place-items-center bg-cream/10 hover:bg-burnt rounded-full transition-colors"
                  aria-label={s.label}
                >
                  <span className="text-lg">{s.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-cream/40 mt-6">
              เปิด {shop.hours.weekday.label} {shop.hours.weekday.open}–{shop.hours.weekday.close}
              <br/>{shop.hours.weekend.label} {shop.hours.weekend.open}–{shop.hours.weekend.close}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 text-xs text-cream/40 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} {shop.name}. All rights reserved.</p>
          <p>Made with 🥢 in Bangkok</p>
        </div>
      </div>
    </footer>
  );
}
