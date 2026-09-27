# How this site is built

- Plain HTML, CSS, and one JS file (`js/main.js`). GitHub Pages serves the
  repo files as they are, so no frameworks, no build step, no server, no
  backend.
- If a request needs a server, a payment backend, or a real form endpoint,
  stop, tell me, and add it to Non-goals / Open follow-ups in `PRD.md`
  instead of building it.
- One shared stylesheet at `css/styles.css` for all 6 pages. Brand
  illustrations go in `images/`. Don't add a second stylesheet or an inline
  `<style>` block.
- Nav is identical on all 6 pages — About · Menu · Subscriptions · Custom ·
  Contact — matching `sketch/home-page-sketch-web.jpg`. Check any nav change
  against the sketch before committing.
- Never hardcode a real email address in client-side code; keep the
  `KAYLA_EMAIL` placeholder in `js/main.js`.
- File and folder names: lowercase, no spaces.
- All copy is real client content from `PRD.md`/`PROPOSAL.md` — no lorem
  ipsum or invented pricing/details.
