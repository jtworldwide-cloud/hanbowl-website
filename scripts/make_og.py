"""Generate OG image (1200x630) for social sharing"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "og")
os.makedirs(OUT, exist_ok=True)

TERRA = (139, 58, 31)
BURNT = (216, 122, 59)
CHAR  = (26, 26, 26)
CREAM = (245, 230, 211)

img = Image.new("RGB", (1200, 630), TERRA)
d = ImageDraw.Draw(img)

# Background gradient strip
for y in range(630):
    t = y / 630
    col = tuple(int(TERRA[i]*(1-t) + CHAR[i]*t) for i in range(3))
    d.line([(0,y),(1200,y)], fill=col)

# Bowl illustration right
cx, cy = 920, 320
d.ellipse([cx-220, cy-220, cx+220, cy+220], fill=CHAR)
d.ellipse([cx-200, cy-200, cx+200, cy+200], fill=BURNT)
d.ellipse([cx-160, cy-160, cx+160, cy+160], fill=CREAM)
d.ellipse([cx-130, cy-130, cx+130, cy+130], fill=TERRA)
# chopsticks
d.rounded_rectangle([cx-15, cy-280, cx+5, cy-100], radius=8, fill=CHAR)
d.rounded_rectangle([cx+25, cy-275, cx+45, cy-95], radius=8, fill=CHAR)

# Text left
try:
    big = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 130)
    med = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 56)
    sm  = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 32)
except Exception:
    big = med = sm = ImageFont.load_default()

d.text((80, 180), "HAN", font=big, fill=CREAM)
d.text((80, 320), "BOWL", font=big, fill=BURNT)
d.text((80, 480), "Korean Comfort", font=med, fill=CREAM)
d.text((80, 555), "One Bowl at a Time", font=sm, fill=CREAM)

img.save(os.path.join(OUT, "hanbowl-og.jpg"), "JPEG", quality=92)
print("→ hanbowl-og.jpg")
