# Sons of the Forest Hacks (sotfhacks.org)

Static Astro + React site cloned from [dayzcheats.io](https://github.com/Stellarhamza/dayzcheats.io) and rebranded for **Sons of the Forest Hacks** on **https://sotfhacks.org**.

Product URL: `/sons-of-the-forest-hacks`

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
npx wrangler deploy   # Cloudflare Worker + static assets (sotfhacks.org in wrangler.toml)
npm run check:live    # smoke-test https://sotfhacks.org after deploy
```

Add a real product preview MP4 at `public/videos/sotf-preview.mp4` before launch. `npm run build` creates placeholder `/media/sotf-*` and `/og/*.jpg` assets if they are missing.

### Site works on phone but not on PC (`DNS_PROBE_FINISHED_NXDOMAIN`)

The deploy is fine; the PC is using **stale or bad DNS**. The domain resolves on public DNS (Cloudflare A/AAAA records).

1. **PowerShell (admin):** `ipconfig /flushdns`
2. **Chrome:** open `chrome://net-internals/#dns` → **Clear host cache**; then `chrome://net-internals/#sockets` → **Flush socket pools**
3. **Wi‑Fi DNS:** set manual DNS to **1.1.1.1** and **8.8.8.8**
4. **Test:** `nslookup sotfhacks.org 8.8.8.8` should show `104.21.75.211` / `172.67.182.55`
5. Turn off **VPN**; try **phone hotspot** on the laptop to confirm home-router DNS is the issue

Cloudflare: **Workers & Pages → sotfhacks → Settings → Domains & Routes** — both `sotfhacks.org` and `www.sotfhacks.org` should be **Active**.
