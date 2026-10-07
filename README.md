# Sons of the Forest Hacks (sotfhacks.org)

Static Astro + React site cloned from [dayzcheats.io](https://github.com/Stellarhamza/dayzcheats.io) and rebranded for **Sons of the Forest Hacks** on **https://sotfhacks.org**.

Product URL: `/sons-of-the-forest-hacks`

```bash
npm install
npm run dev      # http://localhost:5174
npm run build
npx wrangler deploy   # Cloudflare Worker + static assets (configure sotfhacks.org in wrangler.toml)
```

Add a real product preview MP4 at `public/videos/sotf-preview.mp4` before launch. `npm run build` creates placeholder `/media/sotf-*` and `/og/*.jpg` assets if they are missing.
