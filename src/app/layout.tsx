import type { Metadata } from "next";
import { shop } from "@/data/shop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(shop.url),
  title: {
    default: `${shop.name} — ${shop.tagline}`,
    template: `%s · ${shop.name}`,
  },
  description: `${shop.hero} เกาหลีจานเดียวที่ ${shop.address.th} เปิดทุกวัน เริ่ม 99 บาท สั่งผ่าน Grab / LineMan / LINE`,
  keywords: [
    "อาหารเกาหลี", "ข้าวเกาหลี", "บูลโกกี", "บิบิมบับ", "กิมจิ",
    "Korean food Bangkok", "han bowl", "ศรีบูรพา", "อาหารจานเดียว",
    "Korean rice bowl", "delivery", "สวนเสรีไทย",
  ],
  authors: [{ name: shop.name }],
  openGraph: {
    title: `${shop.name} — ${shop.tagline}`,
    description: shop.hero,
    url: shop.url,
    siteName: shop.name,
    images: [{ url: "/og/hanbowl-og.jpg", width: 1200, height: 630 }],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${shop.name} — ${shop.tagline}`,
    description: shop.hero,
    images: ["/og/hanbowl-og.jpg"],
  },
  icons: {
    icon: "/logo/hanbowl-mark.svg",
    apple: "/logo/hanbowl-mark.svg",
  },
};

// Schema.org Restaurant markup สำหรับ SEO ร้านอาหาร
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: shop.name,
  description: shop.hero,
  url: shop.url,
  telephone: shop.contact.phoneIntl,
  servesCuisine: ["Korean", "Korean Rice Bowl"],
  priceRange: "฿฿",
  image: `${shop.url}/og/hanbowl-og.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: shop.address.en,
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: shop.hours.weekday.open,
      closes: shop.hours.weekday.close,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: shop.hours.weekend.open,
      closes: shop.hours.weekend.close,
    },
  ],
  sameAs: [
    shop.social.instagram,
    shop.social.tiktok,
    shop.social.facebook,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        {/* Fonts — load via CSS (no SSR fetch needed for static export) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=Noto+Serif+KR:wght@400;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
