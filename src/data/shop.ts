// HAN BOWL — Shop info (เปลี่ยน address, hours, social ที่นี่)

export const shop = {
  name: "HAN BOWL",
  tagline: "เกาหลีในชามเดียว",
  taglineEn: "Korean Comfort, One Bowl at a Time",
  hero: "เกาหลีแท้ๆ ในชามเดียว เร็ว 4 นาที",
  heroEn: "Authentic Korean comfort. One bowl. 4 minutes.",
  address: {
    th: "ปากซอยศรีบูรพา 9 (ตรงข้ามสวนเสรีไทย)",
    en: "Soi Sriburapha 9, opposite Seri Thai Park, Bangkok",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=ศรีบูรพา+9+สวนเสรีไทย",
    googleMapsEmbed: "https://maps.google.com/maps?q=ศรีบูรพา+9+สวนเสรีไทย+กรุงเทพ&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  hours: {
    weekday: { open: "10:30", close: "21:30", label: "จันทร์–ศุกร์" },
    weekend: { open: "10:30", close: "22:00", label: "เสาร์–อาทิตย์" },
  },
  contact: {
    phone: "081-234-5678",      // ← แก้เป็นเบอร์จริง
    phoneIntl: "+66812345678",
    line: "@hanbowl",            // ← แก้เป็น LINE ID จริง
    lineUrl: "https://line.me/R/ti/p/@hanbowl",
    email: "hello@hanbowl.co",
  },
  social: {
    instagram: "https://instagram.com/hanbowl.bkk",
    tiktok: "https://tiktok.com/@hanbowl.bkk",
    facebook: "https://facebook.com/hanbowl.bkk",
  },
  delivery: {
    grab: "https://food.grab.com",                  // ← link หลัง onboard
    lineman: "https://lineman.line.me",             // ← link หลัง onboard
    foodpanda: "https://www.foodpanda.co.th",
  },
  url: "https://hanbowl.co",  // แก้ตาม domain จริงตอน deploy
};
