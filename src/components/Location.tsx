import { shop } from "@/data/shop";

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="font-korean text-terracotta tracking-widest mb-3">위치</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-charcoal">
            แวะมา<span className="text-terracotta">ที่ร้าน</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Map */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto bg-charcoal/5 border border-charcoal/10">
            <iframe
              src={shop.address.googleMapsEmbed}
              loading="lazy"
              className="w-full h-full min-h-[320px]"
              style={{ border: 0 }}
              title="HAN BOWL location"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-terracotta text-cream rounded-3xl p-6 sm:p-7">
              <h3 className="font-display font-black text-2xl mb-3 flex items-center gap-2">
                📍 ที่อยู่
              </h3>
              <p className="text-cream/95 leading-relaxed mb-1">{shop.address.th}</p>
              <p className="text-cream/70 text-sm">{shop.address.en}</p>
              <a
                href={shop.address.googleMapsUrl}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-flex items-center gap-2 bg-cream text-terracotta hover:bg-burnt hover:text-charcoal font-bold px-5 py-2.5 rounded-full transition-colors"
              >
                🧭 นำทาง
              </a>
            </div>

            <div className="bg-charcoal text-cream rounded-3xl p-6 sm:p-7">
              <h3 className="font-display font-black text-2xl mb-4 flex items-center gap-2">
                🕐 เวลาเปิด
              </h3>
              <div className="space-y-2.5 text-cream/90">
                <div className="flex justify-between border-b border-cream/10 pb-2">
                  <span>{shop.hours.weekday.label}</span>
                  <span className="font-semibold text-burnt">
                    {shop.hours.weekday.open}–{shop.hours.weekday.close}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{shop.hours.weekend.label}</span>
                  <span className="font-semibold text-burnt">
                    {shop.hours.weekend.open}–{shop.hours.weekend.close}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-cream border-2 border-terracotta rounded-3xl p-6 sm:p-7">
              <h3 className="font-display font-black text-2xl text-charcoal mb-3 flex items-center gap-2">
                📞 ติดต่อ
              </h3>
              <a href={`tel:${shop.contact.phoneIntl}`} className="block text-charcoal hover:text-terracotta font-semibold py-1">
                {shop.contact.phone}
              </a>
              <a href={shop.contact.lineUrl} className="block text-charcoal hover:text-terracotta font-semibold py-1">
                LINE: {shop.contact.line}
              </a>
              <a href={`mailto:${shop.contact.email}`} className="block text-charcoal hover:text-terracotta py-1">
                {shop.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
