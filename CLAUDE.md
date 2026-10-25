# pixi-suite: noter til den, der arbejder i repoet

Designet til pixi-suiten (pixi-sync, pixi-sense, pixi-hub og uni-theme): én figur, ét sprog. Indholdet ligger i [`design/`](design), og designets egen README forklarer filerne og beslutningerne.

**Repoet er offentligt.** Læg aldrig hemmeligheder, adgangskoder, adresser eller personlige oplysninger her. Mock-up'en bruger `hub.home.lan` som pladsholder for serveren.

## Indhold
- `design/pixi-suiten.html`: hele boardet som én selvstændig fil (henter React fra unpkg, så det kræver net).
- `design/pixi-suiten.dc.html`: kilden (kræver Claude Design-runtime).
- `design/android-ikoner.dc.html` og `design/pixi-icons.js`: boardet med Android-ikonerne og koden, der tegner dem.
- `design/pixi/1x` og `8x`: pixi-tilstandene som PNG (51×46 og forstørret 8×), gennemsigtig baggrund.
- `design/android/<app>/`: adaptive Android-ikoner som vektor-XML til alle fire apps, med monokromt lag og baggrund `#000055`, plus PNG-eksempler og Play-billede i 512. Kopiér `res/` ind i appens `src/main/res/` og tilføj `android:roundIcon="@mipmap/ic_launcher_round"`.

## Designregler (kort)
Industry-stil: hårstreger, firkantede hjørner (4 dp), mørk tilstand først. Accent fra Omarchy-temaet via uni-theme (Material You-seed på telefonen), nærmeste af 64 farver på uret. pixi har fast palet (ti Pebble-farver) og følger ikke temaet. Skrifter: JetBrains Mono til tal og terminal, Barlow og Barlow Condensed til tekst. Ingen rød/grøn; status vises med pixi og tekst. Kort og saglig tone, ingen udråbstegn eller streaks.

## Hvor det er brugt
- **pixi-sync**: hovedskærm, pixi-tilstande, tema, skrifter og ikon er lagt ind (11/10 2026), opdateret med det rensede raster og de nye ikoner 25/10.
- **pixi-sense, pixi-hub, uni-theme**: designet er ikke lagt ind endnu. Ikonerne ligger klar. uni-theme har stadig sit gamle ikon (tre ringe).

## Åbent
- Rasteret 51×46 er aflæst fra et skærmbillede; den præcise 50×44 ligger i `pixi-sense/art/pixi_x8.png`.
- Det faktiske Omarchy-tema er ikke valgt (boardet viser Tokyo Night).
- Designet viser ikke QR-scanning af serveren på selve skærmen i detaljer.

## Se boardet som billede
`chromium --headless=new --no-sandbox --virtual-time-budget=15000 --window-size=1800,9000 --screenshot=board.png file://$PWD/design/pixi-suiten.html`, og skær billedet i dele (boardet er bredere end 1800 px).
