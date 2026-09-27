## Client Brief

**Client:** Kayla, founder of Kayla & Bloom — a student-run floral studio at the University of Michigan selling bouquets, dorm bedside arrangements, and custom/event florals, with an eye toward eventually taking on weddings.

**Purpose:** Give Kayla a site that displays her menu and pricing clearly and lets people request an order or event without having to call her directly.

**Audience:** Mostly college students and sorority houses — a chapter house placing a standing order, a bedside bouquet before finals, flowers for a friend — plus a smaller group of off-campus customers who want recurring home arrangements.

**Key action:** A visitor submits an inquiry (name, contact info, what they want, date needed), and Kayla follows up herself. There's no checkout at this stage — she confirms the details and takes payment via Venmo afterward.

**Pages needed:**
- Home — intro and brand feel, with a link into the menu
- Menu & Subscriptions — bouquet sizes and pricing, add-ons, and the monthly Bloom Subscriptions
- Custom Creations — sorority, event, and custom orders: how the ordering process works, plus care tips
- Contact — the inquiry form

**Content status:** Have — the brand name and logo mark, full pricing across every bouquet size and subscription tier, add-on pricing, the brand color palette (blush/cream with rose accents), the font pairing (Playfair Display + Quicksand), and the brand's illustration assets (swans, florals). Still need — real photos of Kayla's actual arrangements (right now the images are illustrated brand motifs, not product photography). Kayla has since reviewed the rebuilt version and given feedback — see `FEEDBACK.md`.

**Style preferences:** "Girly but classy" — soft pink and white/cream, romantic and delicate without tipping into childish. This was confirmed through the logo and brand mockup Kayla had already signed off on: warm cream background, rose/mauve text, a serif display heading paired with a soft, rounded sans-serif.

**Inspiration sites:**
- [Fleuri Designs](https://fleuridesigns.com/) — Kayla's inspiration. A garden-inspired floral/home-decor studio site (Wellesley, MA) with a neutral white/black/gray palette, real professional product photography (not illustration), and a clean hierarchical nav (Shop All / Floral Services / Our Story, with dropdown submenus). Visually it's a different register than Kayla & Bloom's pink, illustrated brand — closer to upscale-minimal than "girly." *What specifically Kayla likes about it (the photography? the clean category structure? something else?) hasn't been pinned down yet — worth a quick follow-up rather than guessing.*

## Layout Plan

**Sketch:** `sketch/home-page-sketch-web.jpg` — hand-drawn, done before any of this was built. It guided the original single-page brand mockup; committed to this repo when I brought that design into the course project.

**Starting prompt given to the AI agent:** I rebuilt the site from an existing single-page brand mockup (originally designed in a prior Claude session for the real Kayla & Bloom engagement) into a proper multi-page structure to meet the course requirements — separate Home / Menu & Subscriptions / Custom Creations / Contact pages sharing one nav and one external stylesheet, semantic `<header>/<nav>/<main>/<footer>/<section>` markup, a favicon, and a mobile-responsive Grid/Flexbox layout — while keeping the client's real copy, pricing, palette, and brand assets from the approved design.
