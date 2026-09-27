# Kayla & Bloom

A website for **Kayla**, founder of Kayla & Bloom — a student-run floral studio selling bouquets, dorm bedside arrangements, monthly subscriptions, and custom/event florals, with plans to grow into weddings.

**Live site:** https://ishandhodu.github.io/kaylas-in-bloom12/

Built from `PROPOSAL.md` → `PRD.md` → a hand-drawn sketch in `sketch/`, as six pages (Home, About, Menu, Subscriptions, Custom, Contact) sharing one nav and one stylesheet.

Kayla & Bloom is a real client of Ivy Devs, my own web development business — my professor approved using this existing case for the assignment. The initial interview in `PROPOSAL.md` was a scoping call for that engagement, not one held from scratch for this course, which left real gaps (inspiration sites, Kayla's direct confirmation on this specific rebuild); `PROPOSAL.md`, `PRD.md`, and `FEEDBACK.md` say so directly and track how far each one got closed rather than papering over them.

## The required question

**Pick one piece of AI output you did not accept as-is. What did it give you, what did you change, and how did you know it needed changing? Point at the commit.**

Commit [`efe8dd3`](https://github.com/ishandhodu/kaylas-in-bloom12/commit/efe8dd3) — *"Align navigation with layout sketch."*

When I first had this rebuilt as a multi-page site, I (as the one directing the build) simplified the navigation to 4 items — Home, Menu, Custom, Contact — folding the About content into the Home page and the Subscriptions content into the Menu page. It looked reasonable on its own, and I accepted it without checking it against anything.

The layout sketch (`sketch/home-page-sketch-web.jpg`) already existed from before any of this was built — it's what the original single-page brand mockup was drawn from. When I went to commit it to this repo, comparing it against the live rebuild is what caught the mismatch: the sketch shows the nav Kayla had already approved in the original mockup — **About | Menu | Subscriptions | Custom | Contact**, 5 items, each its own page. My rebuilt nav didn't match it. It wasn't a matter of taste; the sketch was a concrete reference the output either matched or didn't, and it didn't.

The fix, in `efe8dd3`: split `about.html` and `subscriptions.html` out into their own pages, and updated the nav on all 6 pages to match the sketch exactly. `git diff 4ce8f05 efe8dd3` shows the full before/after.

## Notes

- Kayla reviewed the deployed site and gave feedback on Sep 27 — see `FEEDBACK.md`. No changes requested; she approved the design and structure as built.
- The contact form (`contact.html`) is intentionally **not** wired to a real backend yet — it's labeled "not yet connected" rather than pointing at a fake endpoint, so it fails honestly instead of silently. See `PRD.md`'s "Open follow-ups" for what's left after this course deliverable.
- Product photography is currently the approved brand illustration set (swans, florals), not real photos of Kayla's bouquets — also called out in `PRD.md`.
