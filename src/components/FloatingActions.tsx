import { shop } from "@/data/shop";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={shop.contact.lineUrl}
        target="_blank"
        rel="noopener"
        aria-label="Chat on LINE"
        className="w-14 h-14 grid place-items-center rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform"
      >
        <span className="text-2xl">💬</span>
      </a>
      <a
        href={`tel:${shop.contact.phoneIntl}`}
        aria-label="Call HAN BOWL"
        className="w-14 h-14 grid place-items-center rounded-full bg-terracotta text-cream shadow-2xl hover:scale-110 transition-transform"
      >
        <span className="text-2xl">📞</span>
      </a>
    </div>
  );
}
