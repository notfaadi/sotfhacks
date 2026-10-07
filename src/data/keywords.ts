/** SEO keyword targets — primary, secondary, and long-tail (SOTF + Sons of the Forest). */

export const KEYWORDS_PRIMARY = [
  'Sons of the Forest hacks',
  'SOTF hacks',
  'Sons of the Forest cheats',
  'SOTF cheats',
  'Sons of the Forest mods',
  'SOTF mods',
  'Sons of the Forest trainer',
  'SOTF trainer',
  'Sons of the Forest cheat codes',
  'SOTF cheat codes',
] as const

export const KEYWORDS_SECONDARY = [
  'Sons of the Forest hack download',
  'SOTF hack free',
  'Sons of the Forest aimbot',
  'SOTF aimbot',
  'Sons of the Forest ESP',
  'SOTF ESP',
  'Sons of the Forest wallhack',
  'SOTF wallhack',
  'Sons of the Forest god mode',
  'SOTF god mode',
  'Sons of the Forest unlimited resources',
  'SOTF unlimited resources',
  'Sons of the Forest item spawner',
  'SOTF item spawner',
  'Sons of the Forest multiplayer hacks',
  'SOTF multiplayer hacks',
] as const

export const KEYWORDS_LONG_TAIL = [
  'Sons of the Forest hacks 2026',
  'SOTF hacks 2026',
  'Sons of the Forest hacks 2024',
  'SOTF hacks 2024',
  'SOTF hacks no ban',
  'Sons of the Forest undetected hacks',
  'SOTF undetected cheats',
  'Sons of the Forest hack tutorial',
  'SOTF hack installation',
  'Sons of the Forest free hacks download',
  'SOTF working hacks',
  'Sons of the Forest hack for PC',
  'SOTF console hacks',
  'Sons of the Forest hack safe to use',
  'SOTF hack with anti-cheat bypass',
] as const

export const KEYWORDS_FEATURES = [
  'Sons of the Forest fly hack',
  'SOTF fly hack',
  'Sons of the Forest speed hack',
  'SOTF speed hack',
  'Sons of the Forest teleport hack',
  'SOTF teleport hack',
  'Sons of the Forest no clip',
  'SOTF no clip',
  'Sons of the Forest infinite stamina',
  'SOTF infinite stamina',
  'Sons of the Forest instant build',
  'SOTF instant build',
  'Sons of the Forest weather control',
  'SOTF weather control',
  'Sons of the Forest enemy freeze',
  'SOTF enemy freeze',
  'Sons of the Forest one hit kill',
  'SOTF one hit kill',
  'Sons of the Forest super jump',
  'SOTF super jump',
] as const

export const KEYWORDS_PLATFORM = [
  'Sons of the Forest Steam hacks',
  'SOTF Steam cheats',
  'Sons of the Forest Epic Games hacks',
  'SOTF Epic Games cheats',
  'Sons of the Forest Windows hacks',
  'SOTF Windows cheats',
  'Sons of the Forest multiplayer trainer',
  'SOTF multiplayer trainer',
] as const

export const ALL_KEYWORDS = [
  ...KEYWORDS_PRIMARY,
  ...KEYWORDS_SECONDARY,
  ...KEYWORDS_LONG_TAIL,
  ...KEYWORDS_FEATURES,
  ...KEYWORDS_PLATFORM,
] as const

/** Lowercase phrases for site search + internal matching */
export const SEARCH_PHRASES = ALL_KEYWORDS.map((k) => k.toLowerCase())

/** Meta keywords tag (comma-separated) */
export const META_KEYWORDS = ALL_KEYWORDS.join(', ')

export const META_TITLES = {
  homeLong: 'Sons of the Forest Hacks | Aimbot, ESP & Radar for PC',
  homeShort: 'SOTF Hacks | Aimbot, ESP & Radar for PC',
  productShort: 'SOTF Cheats - Aimbot, ESP & More | Download',
  productYear: 'SOTF Hacks 2026 - Safe & Undetected | Get Access',
  trainer: 'SOTF Trainer - Unlimited Resources & More | Download',
  mods: 'SOTF Mods - Enhanced Gameplay | Free Access',
  cheatsLong:
    'Sons of the Forest Cheats - Aimbot, ESP, God Mode & More | Download',
  hacksYear:
    'Sons of the Forest Hacks 2026 - Safe Anti-Ban Cheats | Get Now',
  trainerLong:
    'Sons of the Forest Trainer - Unlock All Features | Download',
  modsLong:
    'Sons of the Forest Mods - Enhanced Gameplay Experience | Access',
  flySpeedShort: 'SOTF Hacks - Fly, Speed & Teleport | Undetected 2024',
  flySpeedLong:
    'Sons of the Forest Hacks - Fly, Speed & Teleport | Undetected 2024',
  noClipShort: 'SOTF Cheats - No Clip, Infinite Stamina | Download',
  noClipLong:
    'Sons of the Forest Cheats - No Clip, Infinite Stamina | Download',
  trainerAdvancedShort: 'SOTF Trainer - Advanced Features | Instant Access',
  trainerAdvancedLong:
    'Sons of the Forest Trainer - Advanced Features | Instant Access',
  multiplayerSafeShort: 'SOTF Hacks - Multiplayer Safe | Updated Daily',
  multiplayerSafeLong:
    'Sons of the Forest Hacks - Multiplayer Safe | Updated Daily',
  modsUltimateShort: 'SOTF Mods - Ultimate Collection | Download Now',
  modsUltimateLong:
    'Sons of the Forest Mods - Ultimate Collection | Download Now',
  unlockedShort: 'SOTF Hacks - All Features Unlocked | Access',
  unlockedLong:
    'Sons of the Forest Hacks - All Features Unlocked | Access',
  premiumShort: 'SOTF Cheats - Premium Quality | Anti-Ban System',
  premiumLong:
    'Sons of the Forest Cheats - Premium Quality | Anti-Ban System',
  noDetectionShort: 'SOTF Hacks - No Detection | Instant Setup',
  noDetectionLong:
    'Sons of the Forest Hacks - No Detection | Instant Setup',
  vipShort: 'SOTF Trainer - Complete Package | VIP Access',
  vipLong: 'Sons of the Forest Trainer - Complete Package | VIP Access',
  latestShort: 'SOTF Hacks - Latest Version | Guaranteed Working',
  latestLong:
    'Sons of the Forest Hacks - Latest Version | Guaranteed Working',
} as const

export const META_DESCRIPTIONS = {
  homeLong:
    'Buy Sons of the Forest Hacks on Windows PC — silent-aim Aimbot, player ESP, wallhack, loot ESP and radar hack. Check live Easy Anti-Cheat (EAC) status, then checkout from $35 on sotfhacks.org.',
  homeShort:
    'SOTF Hacks for Windows PC: Aimbot, ESP, wallhack, loot ESP, radar hack and live EAC status. From $35 on sotfhacks.org.',
  antiBan:
    'Get the best Sons of the Forest hacks with anti-ban protection. Our Sons of the Forest cheats include wallhacks, god mode, and more. Working SOTF hacks for PC — checkout from $35.',
  working:
    'Looking for working SOTF hacks? We offer undetected Sons of the Forest cheats with aimbot, ESP, and item spawning. Safe to use with regular updates. Join now on sotfhacks.org.',
  premium:
    'Access premium SOTF hacks with advanced features. Our Sons of the Forest trainer includes aimbot, ESP, wallhack, and loot tools. Download access from $35 and start winning.',
  ultimate:
    'The ultimate SOTF hacks collection — aimbot, ESP, god mode, item spawner, and more. All our Sons of the Forest cheats are undetected with live Easy Anti-Cheat (EAC) status.',
  flySpeedShort:
    'Unlock SOTF hacks with fly, speed, and teleport features. Our undetected SOTF cheats include no clip, infinite stamina, and more. Get access on sotfhacks.org from $35.',
  flySpeedLong:
    'Unlock Sons of the Forest hacks with fly, speed, and teleport features. Our undetected Sons of the Forest cheats include no clip, infinite stamina, and more. Download access on sotfhacks.org.',
  trainerMultiShort:
    'Get the ultimate SOTF trainer with advanced features. Our SOTF hacks are multiplayer safe and updated daily. Access from sotfhacks.org after checkout.',
  trainerMultiLong:
    'Get the ultimate Sons of the Forest trainer with advanced features. Our Sons of the Forest hacks are multiplayer safe and updated daily. Access from sotfhacks.org.',
  premiumAntiBanShort:
    'Download premium SOTF hacks with anti-ban protection. Our SOTF cheats include advanced movement and combat helpers with instant setup. Join on sotfhacks.org.',
  premiumAntiBanLong:
    'Download premium Sons of the Forest hacks with anti-ban protection. Our Sons of the Forest cheats include advanced features with instant setup. Join on sotfhacks.org.',
  workingLatestShort:
    'Looking for working SOTF hacks? We offer the latest SOTF cheats with live Easy Anti-Cheat (EAC) status — not empty “no detection” promises. Checkout from $35.',
  workingLatestLong:
    'Looking for working Sons of the Forest hacks? Latest Sons of the Forest cheats with live EAC status on sotfhacks.org. Download access after purchase.',
  vipCollectionShort:
    'Access the complete SOTF hacks collection with VIP-style modules — fly, ESP, aimbot, and trainer tools. Updated regularly on sotfhacks.org.',
  vipCollectionLong:
    'Access the complete Sons of the Forest hacks collection. Our Sons of the Forest trainer is updated after patches — checkout on sotfhacks.org.',
  multiplayerFlyShort:
    'Discover SOTF hacks with fly, speed, and teleport capabilities. Undetected Sons of the Forest cheats for Windows PC co-op — check EAC status before load.',
  multiplayerFlyLong:
    'Discover Sons of the Forest hacks with fly, speed, and teleport capabilities. Undetected cheats for PC multiplayer with live status on sotfhacks.org.',
  noClipStaminaShort:
    'Get SOTF hacks with no clip, infinite stamina, and more. Premium-quality Sons of the Forest cheats with anti-ban awareness and support.',
  noClipStaminaLong:
    'Get Sons of the Forest hacks with no clip, infinite stamina, instant build, and more. Premium Sons of the Forest cheats on sotfhacks.org.',
  latestSetupShort:
    'Download SOTF hacks with latest features and live EAC labels. Our SOTF trainer guide covers instant setup — guaranteed delivery from sotfhacks.org.',
  latestSetupLong:
    'Download Sons of the Forest hacks with latest features and instant setup guides. Sons of the Forest trainer help on sotfhacks.org.',
  unlockedAccessShort:
    'Find SOTF hacks with combat and movement modules unlocked in one menu. Sons of the Forest cheats license from sotfhacks.org — not random free trials.',
  unlockedAccessLong:
    'Find Sons of the Forest hacks with feature modules in one license. Sons of the Forest cheats checkout on sotfhacks.org.',
  multiplayerDailyShort:
    'Access SOTF hacks with advanced features and multiplayer safety tips. SOTF cheats updated after patches — join via sotfhacks.org.',
  multiplayerDailyLong:
    'Access Sons of the Forest hacks with advanced features and multiplayer safety tips. Sons of the Forest cheats updated daily on status — sotfhacks.org.',
} as const
