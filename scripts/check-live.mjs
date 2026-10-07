/**
 * Smoke-test production after deploy (DNS + Worker + assets).
 * Run: npm run check:live
 */
const URLS = [
  { url: 'https://sotfhacks.org/', expectHost: 'sotfhacks.org' },
  { url: 'https://www.sotfhacks.org/', expectHost: 'sotfhacks.org' },
]

for (const { url, expectHost } of URLS) {
  let res
  try {
    res = await fetch(url, { redirect: 'follow' })
  } catch (err) {
    console.error(`FAIL ${url} — network/DNS error: ${err.message}`)
    console.error('If only your PC fails: ipconfig /flushdns and chrome://net-internals/#dns → Clear host cache')
    process.exit(1)
  }
  if (!res.ok) {
    console.error(`FAIL ${url} — HTTP ${res.status}`)
    process.exit(1)
  }
  const finalHost = new URL(res.url).hostname
  if (expectHost && finalHost !== expectHost) {
    console.error(`FAIL ${url} — expected host ${expectHost}, got ${finalHost}`)
    process.exit(1)
  }
  const html = await res.text()
  if (!html.includes('Sons of the Forest') && !html.includes('sotfhacks')) {
    console.error(`FAIL ${url} — unexpected HTML body`)
    process.exit(1)
  }
  console.log(`OK ${url} → ${res.status} (${finalHost})`)
}

console.log('Live site check passed.')
