# PRD: Kayla & Bloom Website

Derived from `PROPOSAL.md` through a clarifying-questions pass, corrected by Ishan. Source of truth for what "done" means for the OIM 3690 deliverable due Tuesday 9/29.

## Summary

A 6-page static site for Kayla & Bloom, a student-run floral studio, so customers can see pricing and send Kayla an inquiry without a phone call. No checkout — Kayla confirms details and takes payment (Venmo) manually after the fact.

## Goals

- Give visitors everything they need to decide what to order and how much it costs, without messaging Kayla first.
- Capture every inquiry type (standard order, subscription, custom/event) through one form.
- Present the already-approved brand identity (palette, type, illustration assets) consistently across every page.
- Meet every OIM 3690 technical requirement: 3+ pages with shared nav, semantic HTML, one external stylesheet, Grid/Flexbox layout, mobile-readable, favicon, real content, deployed on GitHub Pages.

## Non-goals (out of scope for this deliverable)

- Stripe checkout / any real payment collection
- Automated Bloom Club recurring billing
- Wedding & events growth roadmap content
- SEO blog content
- A lead/order dashboard
- A working form backend (see Open follow-ups)

These map to the Recommended/Premium tiers of the separate Ivy Devs paid engagement and are intentionally not part of the course build.

## Pages & requirements

| Page | Purpose | Key content |
|---|---|---|
| `index.html` (Home) | First impression, brand feel, route to Menu | Hero headline/tagline, CTA to Menu |
| `about.html` | Who Kayla is, build trust | About paragraph, signed "— Kayla" |
| `menu.html` | Show sizes and pricing | 5 bouquet cards (Mini/Classic/Bloom/Grand/Dorm Bedside), add-ons list |
| `subscriptions.html` | Recurring-revenue offering for private clients | 3 subscription tiers with monthly pricing |
| `custom.html` | Capture sorority/event/custom demand | Custom pitch + tags, How to Order steps, Care Tips |
| `contact.html` | The one required action | Inquiry form: name, email, inquiry type, date needed, notes |

Nav is identical on all 6 pages: About · Menu · Subscriptions · Custom · Contact (logo links Home), matching the hand-drawn sketch in `sketch/`.

## Content & design

- **Palette/type:** existing approved brand system — `#FDF3F0` background, `#7A4A55`/`#9C4A5C`/`#C2687D` text/accent scale, `#EFC3CB` borders; Playfair Display (headings) + Quicksand (body). Defined as CSS custom properties in `css/styles.css`.
- **Imagery:** approved brand illustrations (swans, florals, motifs) — real assets, not stock or placeholder. Real photography of Kayla's actual bouquets is a known gap; swap in once she sends photos (post-Tuesday, doesn't block this deliverable).
- **Copy:** all real, taken from the client's approved mockup and the scoping call — no lorem ipsum anywhere.

## Functional requirements

- All pages responsive down to phone width (single-column collapse under 600px).
- Contact form uses native HTML validation (`required`, `type="email"`, `type="date"`) — no JS validation needed.
- Contact form does **not** silently fail: since it isn't wired to a real backend yet, it's explicitly labeled "not yet connected" with an alternate contact path (Instagram), rather than pointing at a fake endpoint.

## Success criteria

- Every required technical checklist item passes (see repo README).
- Kayla can open the deployed link on her phone and find pricing + a way to reach out within a few taps.
- A real accessibility pass done (contrast, alt text, label associations) — targeting, not guaranteeing, Lighthouse a11y > 90.

## Open follow-ups (after Tuesday, not blocking)

1. Real bouquet photography from Kayla, replacing illustrated motifs on `menu.html`/`subscriptions.html`.
2. Wire the contact form to a real backend (Formspree or similar) so inquiries actually reach Kayla.
3. ~~Get Kayla's direct sign-off on this rebuilt version~~ — **done**, see `FEEDBACK.md` (Sep 27). No changes requested; she approved the design and structure as built.
4. Kayla's inspiration site is now identified (Fleuri Designs, see `PROPOSAL.md`), but what specifically she likes about it hasn't been pinned down — still worth a quick follow-up rather than guessing, and worth seeing a couple more comparable sites beyond just the one.
