import { SOTF_HERO } from '../data/media'

type VideoBgProps = {
  /** Full-bleed Sons of the Forest hero image (defaults to product artwork). */
  image?: string
  imageAlt?: string
}

/** Full-bleed static Sons of the Forest hero — no legacy video background. */
export function VideoBg({
  image = SOTF_HERO,
  imageAlt = 'Sons of the Forest cheats Aimbot and ESP product artwork',
}: VideoBgProps) {
  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <img
        src={image}
        alt={imageAlt}
        width={3840}
        height={2160}
        decoding="sync"
        fetchPriority="high"
        sizes="100vw"
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-[55%_50%]"
      />
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-28 bg-gradient-to-t from-z-bg/95 via-z-bg/40 to-transparent sm:h-32" />
      <div className="absolute inset-x-0 top-0 z-[3] h-16 bg-gradient-to-b from-z-bg/75 to-transparent sm:h-20" />
    </div>
  )
}
