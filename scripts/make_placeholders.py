"""
สร้าง placeholder images สำหรับเมนู
ใช้ตอน user ยังไม่ได้ copy รูปจริงจาก bundle เข้ามา
รันได้: python scripts/make_placeholders.py
"""
import os, math, hashlib
from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "menu")
os.makedirs(OUT, exist_ok=True)

# Brand palette
CREAM   = (245, 230, 211)
TERRA   = (139, 58, 31)
BURNT   = (216, 122, 59)
CHARCOAL= (26, 26, 26)
KIMCHI  = (199, 62, 29)
SESAME  = (232, 197, 125)
GREEN   = (90, 120, 70)

# Map filenames → (label, base color, accent color, emoji-like icon)
ITEMS = [
    ("Bowl01_MaeunKrapow_1080sq.jpg", "Maeun Krapow", KIMCHI,   SESAME),
    ("Bowl02_Bulgogi_1080sq.jpg",      "Bulgogi",      TERRA,    SESAME),
    ("Bowl03_Jeyuk_1080sq.jpg",        "Jeyuk",        KIMCHI,   GREEN),
    ("Bowl04_DakgalbiCheese_1080sq.jpg","Cheese Dakgalbi", BURNT, SESAME),
    ("Bowl05_DakBulgogi_1080sq.jpg",   "Dak Bulgogi",  BURNT,    SESAME),
    ("Bowl06_YangnyeomChicken_1080sq.png","Yangnyeom Chicken", BURNT, KIMCHI),
    ("Bowl07_BeefPremium_1080sq.jpg",  "Premium Beef", CHARCOAL, BURNT),
    ("Bowl08_SpicyOjingeo_1080sq.jpg", "Spicy Ojingeo",KIMCHI,   CREAM),
    ("Bowl09_TonkatsuCurry_1080sq.jpg","Tonkatsu Curry",BURNT,   SESAME),
    ("Bowl10_BibimPower_1080sq.jpg",   "Bibim Power",  GREEN,    BURNT),
    ("Soup1_Kimchi_1080sq.png",        "Kimchi Soup",  KIMCHI,   CREAM),
    ("Soup2_EggDrop_1080sq.png",       "Egg Drop",     SESAME,   CREAM),
    ("Soup3_Seaweed_1080sq.png",       "Seaweed Soup", GREEN,    CREAM),
    ("Soup4_Sundubu_1080sq.png",       "Sundubu",      KIMCHI,   CREAM),
    ("Side1_Kimchi_1080sq.png",        "Kimchi Side",  KIMCHI,   CREAM),
    ("Side2_Danmuji_1080sq.png",       "Danmuji",      SESAME,   CREAM),
    ("Drink_BananaMilk_Yuja_1080sq.png","Banana Milk", SESAME,   BURNT),
    ("Z_ShopHero_1080sq.jpg",          "HAN BOWL",     TERRA,    CREAM),
]

def mix(a, b, t):
    return tuple(int(a[i]*(1-t)+b[i]*t) for i in range(3))

def make(name, label, base, accent):
    S = 1080
    img = Image.new("RGB", (S, S), CREAM)
    d = ImageDraw.Draw(img)

    # Radial-ish background using polygons (cheap gradient)
    for r in range(S, 0, -8):
        t = (S - r) / S
        col = mix(CREAM, mix(base, CHARCOAL, 0.25), t*0.85)
        d.ellipse([S//2 - r//2, S//2 - r//2, S//2 + r//2, S//2 + r//2], fill=col)

    # Bowl shape (rim + interior)
    cx, cy = S//2, S//2 + 50
    rim_r = 380
    d.ellipse([cx-rim_r, cy-rim_r//3, cx+rim_r, cy+rim_r//3+20], fill=mix(base, CHARCOAL, 0.4))
    d.ellipse([cx-rim_r+18, cy-rim_r//3+12, cx+rim_r-18, cy+rim_r//3+8], fill=base)
    # Highlight ellipse (food)
    d.ellipse([cx-rim_r+50, cy-rim_r//3+28, cx+rim_r-50, cy+rim_r//3-30], fill=accent)
    # Garnish dots
    for i, ang in enumerate(range(0, 360, 28)):
        rr = 160 + (i%3)*40
        x = cx + int(rr * math.cos(math.radians(ang)))
        y = cy + int(rr * math.sin(math.radians(ang))*0.35)
        d.ellipse([x-12, y-12, x+12, y+12], fill=mix(accent, CHARCOAL, 0.35))

    # Try a font — fallback default
    label_text = label.upper()
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 56)
    except Exception:
        font = ImageFont.load_default()
    # Center-top label
    w, h = d.textbbox((0,0), label_text, font=font)[2:]
    d.rectangle([cx - w//2 - 32, 90, cx + w//2 + 32, 90 + h + 36], fill=(0,0,0,0))
    # text shadow
    d.text((cx - w//2 + 3, 110+3), label_text, font=font, fill=(0,0,0))
    d.text((cx - w//2, 110), label_text, font=font, fill=CREAM)

    # corner brand mark
    try:
        sf = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
    except Exception:
        sf = ImageFont.load_default()
    d.text((40, S-60), "HAN BOWL · placeholder", font=sf, fill=CREAM)

    fmt = "JPEG" if name.lower().endswith(".jpg") else "PNG"
    path = os.path.join(OUT, name)
    img.save(path, fmt, quality=88)
    print("→", name)

for n, l, b, a in ITEMS:
    make(n, l, b, a)

# Shop hero landscape (1600x900)
hero = Image.new("RGB", (1600, 900), CREAM)
d = ImageDraw.Draw(hero)
for r in range(1600, 0, -10):
    t = (1600 - r) / 1600
    d.rectangle([0, 0, 1600, 900], fill=mix(CREAM, TERRA, t*0.5))
d.ellipse([1000, 200, 1500, 700], fill=TERRA)
d.ellipse([1020, 380, 1480, 690], fill=CREAM)
d.ellipse([1080, 410, 1420, 540], fill=BURNT)
try:
    bigfont = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 120)
    smallfont = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 40)
except Exception:
    bigfont = ImageFont.load_default(); smallfont = ImageFont.load_default()
d.text((90, 350), "HAN BOWL", font=bigfont, fill=CHARCOAL)
d.text((96, 490), "Korean Comfort, One Bowl at a Time.", font=smallfont, fill=CHARCOAL)
hero.save(os.path.join(OUT, "Z_ShopHero_1600x900.jpg"), "JPEG", quality=90)
print("→ Z_ShopHero_1600x900.jpg")

print("Done.")
