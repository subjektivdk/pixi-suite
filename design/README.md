# pixi-suiten · design

Designretning v1, 11. oktober 2026.

## Filer
- `pixi-suiten.html` — hele boardet som én selvstændig fil. Åbn i en browser.
- `pixi-suiten.dc.html` — kildefilen (kræver Claude Design-runtime).
- `pixi/1x/` — pixi-tilstande i 51×46 px, klar til Pebble.
- `pixi/8x/` — samme, forstørret 8× til visning.
- `android/<app>/` — Android-ikoner til pixi-hub, pixi-sense, pixi-sync og uni-theme: adaptivt ikon som vektor-XML (`res/`), monokromt lag til tematiske ikoner, baggrund `#000055`, og PNG-eksempler (`png/`, inkl. 512 px til Play). Kopiér `res/` ind i appens `src/main/res/` og tilføj `android:roundIcon="@mipmap/ic_launcher_round"` i manifestet.

## Beslutninger
- **Visuelt sprog:** Industry: hårstreger, firkantede hjørner, registreringsmærker. Mørk tilstand først.
- **Accent:** Omarchy-temaets accent → uni-theme → Material You-seed på telefonen, accent i TUI, nærmeste af 64 farver på uret.
- **pixi:** fast palet, følger ikke temaet. Ti Pebble-farver: `#FFFFFF #AAAAAA #55AAAA #0055AA #005555 #000055 #000000 #00FFFF #AAFFFF #FF55AA`.
- **Tilstande:** neutral, glad, træt, sover (2 frames), blinker (4), snakker (2), hjerte (2), synkroniserer (3), ingen forbindelse, fejl. Kun øjne, mund og bryst skifter.
- **Skrift:** JetBrains Mono til tal og hele terminalen; Barlow / Barlow Condensed til tekst på telefonen.
- **Status:** ingen rød/grøn; status vises med pixi og tekst.
- **Tone:** kort og saglig. Ingen udråbstegn, streaks eller skyld over manglende data.
- **Uret:** hvid baggrund (læsbar i sollys), urskærm tegnes én gang i minuttet, pixi animerer kun ~1 s efter tryk.
- **Notifikationer:** fejl først, når de har varet over 3 timer; sync vises lydløst. Nyheder (dagens readiness, en modelrapport, der venter) må give en notifikation, men uret vibrerer kun for fejl; resten bliver til pins på timeline'n. Ingen egne stilletimer: telefonens Forstyr ikke bestemmer (2026-10-24, pixi-hub#32).

## Åbent
- Rasteret er aflæst fra et skærmbillede (51×46). Udskift med den præcise 50×44 fra `pixi-sense/art/pixi_x8.png`.
- Det faktiske Omarchy-tema er ikke valgt; boardet viser Tokyo Night som standard.
