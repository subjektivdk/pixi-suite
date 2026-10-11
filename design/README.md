# pixi-suiten · design

Designretning v1, 11. oktober 2026.

## Filer
- `pixi-suiten.html` — hele boardet som én selvstændig fil. Åbn i en browser.
- `pixi-suiten.dc.html` — kildefilen (kræver Claude Design-runtime).
- `pixi/1x/` — pixi-tilstande i 51×46 px, klar til Pebble.
- `pixi/8x/` — samme, forstørret 8× til visning.

## Beslutninger
- **Visuelt sprog:** Industry: hårstreger, firkantede hjørner, registreringsmærker. Mørk tilstand først.
- **Accent:** Omarchy-temaets accent → uni-theme → Material You-seed på telefonen, accent i TUI, nærmeste af 64 farver på uret.
- **pixi:** fast palet, følger ikke temaet. Ti Pebble-farver: `#FFFFFF #AAAAAA #55AAAA #0055AA #005555 #000055 #000000 #00FFFF #AAFFFF #FF55AA`.
- **Tilstande:** neutral, glad, træt, sover (2 frames), blinker (4), snakker (2), hjerte (2), synkroniserer (3), ingen forbindelse, fejl. Kun øjne, mund og bryst skifter.
- **Skrift:** JetBrains Mono til tal og hele terminalen; Barlow / Barlow Condensed til tekst på telefonen.
- **Status:** ingen rød/grøn; status vises med pixi og tekst.
- **Tone:** kort og saglig. Ingen udråbstegn, streaks eller skyld over manglende data.
- **Uret:** hvid baggrund (læsbar i sollys), urskærm tegnes én gang i minuttet, pixi animerer kun ~1 s efter tryk.
- **Notifikationer:** kun når en fejl har varet over 3 timer; sync vises lydløst.

## Åbent
- Rasteret er aflæst fra et skærmbillede (51×46). Udskift med den præcise 50×44 fra `pixi-sense/art/pixi_x8.png`.
- Det faktiske Omarchy-tema er ikke valgt; boardet viser Tokyo Night som standard.
