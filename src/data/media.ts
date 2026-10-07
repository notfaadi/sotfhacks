export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Sons of the Forest product art + menu stills (self-hosted). */
export const SOTF_HERO = '/media/sotf-hero-full.jpg'
export const SOTF_SOLDIER = '/media/sotf-hero-full.jpg'
export const SOTF_COVER = '/media/sotf-cover.webp'
export const SOTF_BOX = '/media/sotf-box.jpg'
export const SOTF_ESP = '/media/sotf-esp-gameplay.webp'
export const SOTF_MENU = '/media/sotf-menu.webp'
export const SOTF_GAMEPLAY = '/media/sotf-esp-gameplay.webp'
export const SOTF_HOME_ART = '/media/sotf-home-art.jpg'
export const SOTF_CONTROL = '/media/sotf-control-art.jpg'
export const SOTF_TACTICAL = '/media/sotf-tactical-art.jpg'
export const SOTF_VIDEO_THUMB = '/media/sotf-video-thumb.jpg'

/** Self-hosted Sons of the Forest Reaper preview (Bunny Stream GUID ee0735e7-…). */
export const SOTF_HOME_VIDEO = {
  id: 'ee0735e7-c9a3-4072-b818-98e2bb7f07ff',
  src: '/videos/sotf-preview.mp4',
  poster: SOTF_VIDEO_THUMB,
  title: 'Sons of the Forest Hacks Aimbot and ESP preview',
  caption: 'Preview of Sons of the Forest Aimbot, ESP menu, loot highlighting and radar hack features on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: SOTF_SOLDIER,
    alt: 'Sons of the Forest cheats Aimbot and ESP product artwork for Sons of the Forest on PC',
    title: 'Sons of the Forest Hacks for Sons of the Forest',
    caption: 'Feature overview for Sons of the Forest Aimbot, ESP, wallhack, loot ESP and radar hack.',
  },
  product: {
    image: SOTF_COVER,
    video: SOTF_HOME_VIDEO.src,
    alt: 'Sons of the Forest ESP, silent aim Aimbot and loot highlight feature artwork',
    title: 'Sons of the Forest Aimbot, ESP and Radar Hack Features',
    caption: 'Product overview for Sons of the Forest on Windows PC.',
    videoTitle: SOTF_HOME_VIDEO.title,
    videoDescription: SOTF_HOME_VIDEO.caption,
  },
  forums: {
    image: SOTF_HERO,
    alt: 'Sons of the Forest cheats product artwork',
    title: 'Sons of the Forest Hacks Guides',
    caption: 'Reference for setup, Aimbot, ESP, loot and Easy Anti-Cheat (EAC) status articles.',
  },
  reviews: {
    image: SOTF_ESP,
    alt: 'Sons of the Forest cheats ESP gameplay review artwork',
    title: 'Sons of the Forest Hacks Reviews',
    caption: 'Feature and compatibility feedback for Sons of the Forest cheats.',
  },
  faq: {
    image: SOTF_MENU,
    alt: 'Sons of the Forest cheats menu artwork for the FAQ',
    title: 'Sons of the Forest Hacks FAQ',
    caption: 'Compatibility, status and setup answers for Sons of the Forest.',
  },
  support: {
    image: SOTF_HERO,
    alt: 'Sons of the Forest cheats support artwork',
    title: 'Sons of the Forest Hacks Support',
    caption: 'Delivery, loader and setup help for Sons of the Forest cheats.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'undetected-status': { ...PAGE_MEDIA.product },
  'aimbot-settings': { ...PAGE_MEDIA.home },
  'esp-wallhack-guide': { ...PAGE_MEDIA.reviews },
  'radar-hack-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'eac-status': { ...PAGE_MEDIA.product },
  'windows-setup': { ...PAGE_MEDIA.support },
  'raid-play-guide': {
    image: SOTF_BOX,
    alt: 'Sons of the Forest survival and loot run cheats artwork',
    title: 'Sons of the Forest Survival and Loot Run Cheats Guide',
    caption: 'Loot run tips for Sons of the Forest Aimbot, ESP and radar hack.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
