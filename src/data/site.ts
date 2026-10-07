import { SOTF_OG } from './images'
import { PAGE_OG } from './og'
import { ALL_KEYWORDS, META_DESCRIPTIONS, META_TITLES } from './keywords'

export const SITE_URL = 'https://sotfhacks.org'
export const SITE_NAME = 'Sons of the Forest Hacks'
export const SITE_HOST = 'sotfhacks.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Sons of the Forest / Sons of the Forest cheats for PC (worldwide).
 * Canonical host is apex https://sotfhacks.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Sons of the Forest cheats for Sons of the Forest on Windows PC — silent-aim Aimbot, player and loot ESP, wallhack, radar hack and live Easy Anti-Cheat (EAC) status with instant digital delivery.'

export const SITE_ABOUT: readonly string[] = ALL_KEYWORDS.map((k) => k.toLowerCase())

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = SOTF_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

/**
 * Homepage SERP copy — keep in sync with HomePage hero H1 + first paragraph (Seobility).
 * Title ~55 chars; description ~155 chars; same primary keywords as visible body text.
 */
export const HOME_PAGE_TITLE = 'Sons of the Forest Hacks | Aimbot, ESP & Radar for PC'
export const HOME_PAGE_DESCRIPTION =
  'Buy Sons of the Forest Hacks on Windows PC — silent-aim Aimbot, player ESP, wallhack, loot ESP and radar hack. Check live Easy Anti-Cheat (EAC) status, then checkout from $35 on sotfhacks.org.'

export const SEO = {
  home: {
    title: HOME_PAGE_TITLE,
    description: HOME_PAGE_DESCRIPTION,
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Sons of the Forest Hacks — Sons of the Forest Aimbot, ESP and radar hack for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: META_TITLES.modsLong,
    description: META_DESCRIPTIONS.working,
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Sons of the Forest Hacks setup guides for Aimbot, ESP and Easy Anti-Cheat (EAC)',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: META_TITLES.premiumShort,
    description: META_DESCRIPTIONS.premiumAntiBanLong,
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Sons of the Forest Hacks buyer reviews for Sons of the Forest',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: META_TITLES.noClipLong,
    description: META_DESCRIPTIONS.noClipStaminaLong,
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Sons of the Forest Hacks FAQ — price, Easy Anti-Cheat (EAC) and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: META_TITLES.noDetectionShort,
    description: META_DESCRIPTIONS.latestSetupShort,
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Sons of the Forest Hacks support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: META_TITLES.flySpeedShort,
    description: META_DESCRIPTIONS.flySpeedShort,
    path: '/sons-of-the-forest-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Sons of the Forest Aimbot, ESP and radar hack product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: HOME_PAGE_TITLE,
  h2Features: 'Sons of the Forest Aimbot, ESP, loot ESP & radar hack',
  h2Featured: 'Sons of the Forest ESP and silent aim Aimbot',
  h2About: 'Clear Easy Anti-Cheat (EAC) status before you buy Sons of the Forest cheats',
  h2Access: 'Buy Sons of the Forest Hacks',
  h2Faq: 'Sons of the Forest Hacks FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
