export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is Sons of the Forest cheats only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'sons-of-the-forest', name: 'Sons of the Forest', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-hacks`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  if (lower.endsWith('-hacks')) return lower.slice(0, -6)
  if (lower.endsWith('-cheats')) return lower.slice(0, -7)
  return lower
}

export const GUIDE_FEATURES = [
  {
    name: 'Sons of the Forest Aimbot (silent aim)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — fire near a player and still land the hit, so it reads as legit even when an admin spectates.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See players through walls and treelines with distance, health and gear information when the build supports it — tell friendlies from hostiles instantly.',
  },
  {
    name: 'Mutant ESP',
    text: 'Track mutants and cannibals before they aggro, so a cave or bunker run never turns into a wipe at the worst moment.',
  },
  {
    name: 'Loot & Item ESP',
    text: 'Highlight guns, ammo, medical supplies and rare gear by category so you skip empty houses and gear up in minutes instead of hours.',
  },
  {
    name: 'Radar Hack',
    text: '2D radar awareness for off-screen players across the island and cave zones — spot the third party before it reaches your position.',
  },
  {
    name: 'Base & Stash Intel',
    text: 'Spot player bases, tents and buried stashes on private servers so raids land on full storage instead of empty walls.',
  },
  {
    name: 'Official & modded server support',
    text: 'Works on official Sons of the Forest servers and on private servers running most common mod setups.',
  },
  {
    name: 'Spoofer + Cleaner',
    text: 'Protect hardware identifiers and refresh traces after bans or hardware swaps — included with the package.',
  },
  {
    name: 'Easy Anti-Cheat (EAC) status + support',
    text: 'Live clear-to-load or Updating status is reviewed after Easy Anti-Cheat (EAC) and Sons of the Forest patches before you load.',
  },
  {
    name: 'Movement suite (fly / speed / teleport / no clip)',
    text: 'SOTF fly hack, speed hack, teleport hack, super jump, and no clip modules when the current build includes movement helpers — check the product checklist before checkout.',
  },
  {
    name: 'Trainer survival (stamina / instant build)',
    text: 'Sons of the Forest infinite stamina and instant build style tweaks in the trainer menu alongside loot ESP and radar.',
  },
  {
    name: 'Combat helpers (freeze / weather / damage)',
    text: 'Optional enemy freeze, weather control, and one hit kill labels where supported — pair with sane aimbot settings in multiplayer.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
