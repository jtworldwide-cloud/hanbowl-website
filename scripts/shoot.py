"""Render preview.html to PNG using Playwright."""
import os, asyncio
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML = "file://" + os.path.join(ROOT, "preview.html")
OUT = os.path.join(ROOT, "..")

async def shoot(page, name, w, h, full=False):
    await page.set_viewport_size({"width": w, "height": h})
    await page.goto(HTML, wait_until="networkidle", timeout=20000)
    await page.wait_for_timeout(800)
    out_path = os.path.join(OUT, name)
    await page.screenshot(path=out_path, full_page=full)
    print("→", out_path)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--no-sandbox", "--disable-dev-shm-usage"])
        ctx = await b.new_context()
        page = await ctx.new_page()
        await shoot(page, "hanbowl_preview_desktop_hero.png", 1440, 900, full=False)
        await shoot(page, "hanbowl_preview_desktop_full.png", 1440, 900, full=True)
        await shoot(page, "hanbowl_preview_mobile.png", 390, 844, full=True)
        await b.close()
    print("Done.")

asyncio.run(main())
