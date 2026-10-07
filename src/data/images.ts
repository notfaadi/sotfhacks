import { SOTF_HERO, SOTF_SOLDIER, SOTF_COVER, SOTF_MENU, SOTF_ESP } from './media'
import { SOTF_OG, getOgImageForPath, PAGE_OG } from './og'

export { SOTF_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const SOTF_PRODUCT_HERO = SOTF_HERO
export const SOTF_PRODUCT_COVER = SOTF_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  'sons-of-the-forest': {
    alt: 'Sons of the Forest cheats product artwork for Sons of the Forest on PC',
    title: 'Sons of the Forest Hacks Product Details',
    caption: 'Sons of the Forest Aimbot, ESP, wallhack, loot ESP, radar hack and Easy Anti-Cheat (EAC) compatibility',
    heroAlt: 'Sons of the Forest cheats silent aim Aimbot and ESP features',
    heroTitle: 'Sons of the Forest Hacks Features',
    heroCaption: 'Review Sons of the Forest Aimbot, ESP, radar hack and current Easy Anti-Cheat (EAC) status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: SOTF_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Sons of the Forest cheats Aimbot and ESP artwork for Sons of the Forest on PC',
    title: 'Sons of the Forest Hacks',
    caption: 'Sons of the Forest Aimbot, ESP, wallhack and radar hack overview.',
  },
  forums: {
    src: SOTF_HERO,
    og: PAGE_OG.forums,
    alt: 'Sons of the Forest cheats product artwork',
    title: 'Sons of the Forest Hacks Guides',
    caption: 'Setup, Aimbot and ESP guides for Sons of the Forest.',
  },
  reviews: {
    src: SOTF_ESP,
    og: PAGE_OG.reviews,
    alt: 'Sons of the Forest cheats review artwork',
    title: 'Sons of the Forest Hacks Reviews',
    caption: 'Feature and compatibility feedback for Sons of the Forest.',
  },
  faq: {
    src: SOTF_MENU,
    og: PAGE_OG.faq,
    alt: 'Sons of the Forest cheats FAQ artwork',
    title: 'Sons of the Forest Hacks FAQ',
    caption: 'Compatibility, feature and setup answers for Sons of the Forest.',
  },
  support: {
    src: SOTF_HERO,
    og: PAGE_OG.support,
    alt: 'Sons of the Forest cheats support artwork',
    title: 'Sons of the Forest Hacks Support',
    caption: 'Delivery, loader and setup support for Sons of the Forest cheats.',
  },
  product: {
    src: SOTF_COVER,
    og: PAGE_OG.product,
    alt: 'Sons of the Forest Aimbot ESP and radar hack product artwork',
    title: 'Sons of the Forest Hacks Features',
    caption: 'Product details for Sons of the Forest Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return SOTF_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return SOTF_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
