/**
 * Native 3840×2160 Sons of the Forest hero — vector SVG → JPEG (no upscaling blur).
 */
import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const mediaDir = join(root, 'public', 'media')
const outJpg = join(mediaDir, 'sotf-hero-full.jpg')
const outWebp = join(mediaDir, 'sotf-hero-full.webp')

const W = 3840
const H = 2160

function heroSvg() {
  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030305"/>
      <stop offset="45%" stop-color="#0a0c14"/>
      <stop offset="100%" stop-color="#050508"/>
    </linearGradient>
    <radialGradient id="spot" cx="22%" cy="8%" r="55%">
      <stop offset="0%" stop-color="#e8eef5" stop-opacity="0.55"/>
      <stop offset="35%" stop-color="#8a9aad" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="floor" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#121820" stop-opacity="0"/>
      <stop offset="50%" stop-color="#1a2430" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0d1018" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ddd0c4"/>
      <stop offset="55%" stop-color="#9a8f86"/>
      <stop offset="100%" stop-color="#3d3835"/>
    </linearGradient>
    <linearGradient id="skinHi" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f5f0ea"/>
      <stop offset="100%" stop-color="#6b635c"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    <linearGradient id="readLeft" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#08060f" stop-opacity="0.82"/>
      <stop offset="55%" stop-color="#08060f" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#08060f" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#spot)"/>
  <polygon points="0,${H * 0.52} ${W},${H * 0.38} ${W},${H} 0,${H}" fill="url(#floor)"/>
  <ellipse cx="${W * 0.18}" cy="${H * 0.22}" rx="420" ry="280" fill="#ffffff" opacity="0.06" filter="url(#soft)"/>

  <!-- reaching arms (vector silhouettes) -->
  <g fill="url(#skin)">
    <ellipse cx="680" cy="920" rx="95" ry="340" transform="rotate(-28 680 920)"/>
    <ellipse cx="920" cy="780" rx="88" ry="380" transform="rotate(-18 920 780)"/>
    <ellipse cx="1180" cy="860" rx="92" ry="360" transform="rotate(-8 1180 860)"/>
    <ellipse cx="1420" cy="980" rx="85" ry="320" transform="rotate(6 1420 980)"/>
    <ellipse cx="520" cy="1100" rx="78" ry="280" transform="rotate(-38 520 1100)"/>
  </g>
  <g fill="url(#skinHi)" opacity="0.45">
    <ellipse cx="700" cy="720" rx="42" ry="120" transform="rotate(-28 700 720)"/>
    <ellipse cx="940" cy="620" rx="38" ry="130" transform="rotate(-18 940 620)"/>
    <ellipse cx="1200" cy="680" rx="40" ry="125" transform="rotate(-8 1200 680)"/>
  </g>

  <!-- title (crisp vector type) -->
  <g font-family="Arial Black, Arial, Helvetica, sans-serif" font-weight="900" fill="#b91c1c">
    <text x="2280" y="780" font-size="220" letter-spacing="8">SONS</text>
    <text x="2280" y="1180" font-size="220" letter-spacing="6">FOREST</text>
  </g>
  <g font-family="Arial, Helvetica, sans-serif" font-weight="700" fill="#b91c1c">
    <text x="2480" y="900" font-size="72" letter-spacing="14">OF</text>
    <text x="2480" y="990" font-size="72" letter-spacing="14">THE</text>
  </g>

  <rect width="${W * 0.55}" height="${H}" fill="url(#readLeft)"/>

  <text x="120" y="${H - 120}" font-family="Arial, sans-serif" font-size="42" fill="#a78bfa" opacity="0.85" letter-spacing="6">SOTFHACKS.ORG</text>
</svg>`)
}

await mkdir(mediaDir, { recursive: true })

const svg = heroSvg()
const pipeline = sharp(svg, { density: 300 }).resize(W, H, { fit: 'fill' })

await pipeline.clone().jpeg({ quality: 96, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(outJpg)
await pipeline.clone().webp({ quality: 92, effort: 6 }).toFile(outWebp)

console.log(`Hero art: ${outJpg} (${W}×${H})`)
