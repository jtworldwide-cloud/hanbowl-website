# HAN BOWL — Website

เว็บไซต์ร้าน HAN BOWL · อาหารเกาหลีจานเดียว · ปากซอยศรีบูรพา 9

**Tagline:** เกาหลีในชามเดียว · Korean Comfort, One Bowl at a Time
**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS · static export

---

## เริ่มใช้งาน (Quick start)

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. ดูตัวอย่างแบบ live (http://localhost:3000)
npm run dev

# 3. Build static site → โฟลเดอร์ /out
npm run build

# 4. Preview แบบเร็ว (ไม่ต้อง dev server)
open preview.html
```

---

## โครงสร้าง

```
hanbowl-website/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # SEO meta + Schema.org Restaurant
│   │   ├── page.tsx          # Single-page composition
│   │   ├── globals.css
│   │   ├── sitemap.ts        # /sitemap.xml
│   │   └── robots.ts         # /robots.txt
│   ├── components/
│   │   ├── Nav.tsx           # Sticky nav + mobile drawer
│   │   ├── Hero.tsx          # Landing hero
│   │   ├── MenuSection.tsx   # 10 bowls + soups + sides
│   │   ├── MenuCard.tsx
│   │   ├── About.tsx         # Brand story
│   │   ├── Location.tsx      # Map + hours + contact
│   │   ├── Order.tsx         # Grab / LineMan / LINE buttons
│   │   ├── Footer.tsx
│   │   └── FloatingActions.tsx  # LINE + Phone floating btns
│   └── data/
│       ├── menu.ts           # 🔑 เมนู — แก้ที่นี่ที่เดียว
│       └── shop.ts           # 🔑 ที่อยู่ / เวลา / contact / social
├── public/
│   ├── logo/                 # SVG logos (mark, horizontal)
│   ├── menu/                 # รูปอาหาร 1080x1080 (placeholders ตอนนี้)
│   └── og/                   # OG image 1200x630
├── scripts/
│   ├── make_placeholders.py  # gen brand-color placeholders
│   ├── make_og.py            # gen OG image
│   └── shoot.py              # screenshot preview.html
├── preview.html              # standalone preview — เปิดดูใน browser ได้เลย
├── next.config.mjs           # output: 'export' → static
├── tailwind.config.ts        # brand color tokens
└── package.json
```

---

## แก้เมนู / ราคา / รายละเอียดร้าน

แก้ไฟล์เดียว เปลี่ยนทั้งเว็บ:

| ไฟล์                | ใช้แก้                                          |
|---------------------|-------------------------------------------------|
| `src/data/menu.ts`  | ชื่อเมนู ราคา รูป ระดับเผ็ด tag ingredients     |
| `src/data/shop.ts`  | ที่อยู่ เวลาเปิด-ปิด เบอร์ LINE social URL      |
| `src/app/layout.tsx`| SEO title / description / OG image              |
| `tailwind.config.ts`| สี + font                                        |

ตัวอย่างเพิ่มเมนู:
```ts
// ใน src/data/menu.ts → bowls
{
  id: "new-bowl",
  nameTh: "ข้าวใหม่",
  nameEn: "New Bowl",
  nameKr: "새로운",
  description: "...",
  descriptionEn: "...",
  price: 129,
  image: "/menu/Bowl11_NewBowl.jpg",   // เพิ่มไฟล์ใน public/menu/
  spice: 2,
  cookingMinutes: 5,
  ingredients: ["..."],
  tags: ["new"],
  category: "bowl",
},
```

---

## รูปอาหาร — เปลี่ยนจาก placeholder เป็นรูปจริง

ตอนนี้รูปเมนูเป็น brand-color placeholder. **เพื่อใช้รูปจริงจาก brand bundle:**

1. หาโฟลเดอร์ `photos_square_1080/` จาก HanBowl brand bundle เดิม
2. Copy ทุกไฟล์เข้า `public/menu/` (overwrite placeholders) — ชื่อไฟล์ match อยู่แล้ว
3. ทำเหมือนกันกับ `Z_ShopHero_*.jpg` (shop hero banner)

ถ้าจะใช้รูป landscape สำหรับ Grab/LineMan: ใช้ใน `public/menu-landscape/` แล้ว reference ใน data ถ้าต้องการ

---

## Deploy

### Vercel (แนะนำ — เร็ว ฟรี)

```bash
# Option A: ผ่าน CLI
npm i -g vercel
vercel --prod

# Option B: ผ่าน GitHub
# 1. push repo ขึ้น GitHub (ชื่อ "hanbowl-website")
# 2. ไปที่ vercel.com/new → import repo
# 3. Settings เริ่มต้นใช้ได้เลย (Next.js detected)
# 4. ได้ URL: hanbowl-website-xxx.vercel.app
```

### Custom domain

หลัง deploy บน Vercel → **Settings → Domains → Add**
- แนะนำชื่อ: `hanbowlbkk.com`, `hanbowl.app`, `hanbowl.co.th`
- จองได้ที่ Namecheap, Cloudflare Registrar, ThaiName
- ตั้งค่า DNS A/CNAME ตาม Vercel แนะนำ
- เปลี่ยน `url` ใน `src/data/shop.ts` เป็น domain จริง แล้ว redeploy

### Other hosts

`output: 'export'` ใน next.config.mjs ทำให้ build เป็นไฟล์ static ใน `/out/` →
deploy ที่ไหนก็ได้: Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront

---

## SEO ที่ทำไว้แล้ว

- `<title>` + meta description + keywords (TH/EN)
- Open Graph + Twitter Card (image 1200×630)
- Schema.org Restaurant markup (address, hours, cuisine, price range)
- `/sitemap.xml` auto-generated
- `/robots.txt` auto-generated
- font preload + lang="th"
- Mobile-first viewport meta

หลัง deploy:
1. ส่ง sitemap ไป Google Search Console
2. ทำ Google Business Profile (สำคัญสำหรับ local SEO)
3. ลง Maps + IG/TikTok ลิงก์มาที่เว็บ

---

## Brand colors

| Hex      | Use                     |
|----------|-------------------------|
| #8B3A1F  | Terracotta · primary     |
| #D87A3B  | Burnt Orange · accent    |
| #1A1A1A  | Charcoal · text + dark   |
| #F5E6D3  | Cream · background       |
| #C73E1D  | Kimchi · เผ็ดมาก         |
| #E8C57D  | Sesame · accent          |

ใช้เป็น Tailwind classes: `bg-terracotta`, `text-burnt`, `border-charcoal/10`, ...

---

## Tech notes

- **Output:** static export (`output: 'export'` ใน `next.config.mjs`) → ไม่ต้องใช้ server, host ที่ไหนก็ได้
- **Images:** `unoptimized: true` (เพราะ static export) — รูปต้องอยู่ใน `/public`
- **Fonts:** load จาก Google Fonts CDN (Playfair Display + IBM Plex Sans Thai + Noto Serif KR)
- **Lighthouse target:** 90+ ทุกหมวด (Performance / SEO / A11y / Best Practices)

---

## Update log

- v0.1.0 — initial scaffold + 10 hero bowls + 4 soups + sides + drinks
- ยังต้องทำ: ใส่รูปจริง, ใส่ Grab/LineMan link หลัง onboard, ใส่ LINE OA ID จริง

---

Made with 🥢 in Bangkok · `เกาหลีในชามเดียว`
