$root = Split-Path -Parent $PSScriptRoot
$extensions = @('.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.md', '.css', '.toml', '.txt', '.svg', '.xml')
$skipDirs = @('node_modules', '.git', 'dist')

function ShouldProcess($path) {
  foreach ($d in $skipDirs) {
    if ($path -match [regex]::Escape([IO.Path]::DirectorySeparatorChar + $d + [IO.Path]::DirectorySeparatorChar)) { return $false }
  }
  $ext = [IO.Path]::GetExtension($path)
  return $extensions -contains $ext
}

# Order: longest / most specific phrases first
$replacements = @(
  @('https://dayzcheats.io', 'https://sotfhacks.org'),
  @('dayzcheats.io', 'sotfhacks.org'),
  @('DayZ Standalone', 'Sons of the Forest'),
  @('DayZ Cheats', 'Sons of the Forest Hacks'),
  @('DayZ Hacks', 'Sons of the Forest Hacks'),
  @('DayZ Cheat', 'Sons of the Forest Hack'),
  @('DayZ Aimbot', 'Sons of the Forest Aimbot'),
  @('DayZ ESP', 'Sons of the Forest ESP'),
  @('DayZ Wallhack', 'Sons of the Forest Wallhack'),
  @('DayZ Radar Hack', 'Sons of the Forest Radar Hack'),
  @('DayZ-only', 'SOTF-only'),
  @('DayZ player', 'SOTF player'),
  @('DayZ SA', 'SOTF'),
  @('Official DayZ', 'Official Sons of the Forest'),
  @('private DayZ', 'private Sons of the Forest'),
  @('restart DayZ', 'restart Sons of the Forest'),
  @('running DayZ', 'running Sons of the Forest'),
  @('load DayZ', 'load Sons of the Forest'),
  @('Buy DayZ', 'Buy Sons of the Forest'),
  @('buy DayZ', 'buy Sons of the Forest'),
  @('DayZ on', 'Sons of the Forest on'),
  @('DayZ ·', 'Sons of the Forest ·'),
  @('DayZ,', 'Sons of the Forest,'),
  @('DayZ.', 'Sons of the Forest.'),
  @('DayZ ', 'Sons of the Forest '),
  @(' DayZ', ' Sons of the Forest'),
  @('DayZ', 'Sons of the Forest'),
  @('/sons-of-the-forest-hacks-setup', '/sotf-hacks-setup'),
  @('sotf-hacks-setup', 'sons-of-the-forest-hacks-setup'),
  @('/dayz-cheats', '/sons-of-the-forest-hacks'),
  @('dayz-cheats', 'sons-of-the-forest-hacks'),
  @("getGame('dayz')", "getGame('sons-of-the-forest')"),
  @("guidePath('dayz')", "guidePath('sons-of-the-forest')"),
  @("slug: 'dayz'", "slug: 'sons-of-the-forest'"),
  @('battleye-status', 'eac-status'),
  @('BattlEye', 'Easy Anti-Cheat (EAC)'),
  @('battleye', 'eac'),
  @('Bohemia Interactive', 'Endnight Studios'),
  @('https://dayz.com/', 'https://sons-of-the-forest.com/'),
  @('dayz.com', 'sons-of-the-forest.com'),
  @('dayz standalone cheats', 'sons of the forest hacks'),
  @('dayz cheat aimbot', 'sons of the forest hack aimbot'),
  @('battleye dayz cheats', 'eac sons of the forest hacks'),
  @('dayz radar hack', 'sons of the forest radar hack'),
  @('dayz wallhack', 'sons of the forest wallhack'),
  @('dayz aimbot', 'sons of the forest aimbot'),
  @('dayz esp', 'sons of the forest esp'),
  @('dayz cheats', 'sons of the forest hacks'),
  @('dayz cheat', 'sons of the forest hack'),
  @('dayz hacks', 'sons of the forest hacks'),
  @('dayz hack', 'sons of the forest hack'),
  @('Chernarus and Livonia', 'the island and cave zones'),
  @('Chernarus', 'the forest island'),
  @('Livonia', 'underground caves'),
  @('Infected ESP', 'Mutant ESP'),
  @('infected', 'mutants'),
  @('zombies', 'mutants'),
  @('Zombies', 'Mutants'),
  @('survivors', 'players'),
  @('survivor', 'player'),
  @('DAYZ_', 'SOTF_'),
  @('DayZPreview', 'SotfPreview'),
  @('dayzcheats', 'sotfhacks'),
  @('dayzqrh', 'sotfhacks'),
  @('Commercial DayZ', 'Commercial Sons of the Forest'),
  @('DayZ Reaper', 'SOTF preview'),
  @('DayZ media', 'SOTF media'),
  @('Missing DayZ', 'Missing SOTF'),
  @('embedded DayZ', 'embedded SOTF'),
  @('for DayZ', 'for Sons of the Forest')
)

Get-ChildItem -Path $root -Recurse -File | Where-Object { ShouldProcess $_.FullName } | ForEach-Object {
  $content = [IO.File]::ReadAllText($_.FullName)
  $original = $content
  foreach ($pair in $replacements) {
    $content = $content.Replace($pair[0], $pair[1])
  }
  if ($content -ne $original) {
    [IO.File]::WriteAllText($_.FullName, $content)
    Write-Host "Updated: $($_.FullName)"
  }
}

Write-Host 'Rebrand script finished.'
