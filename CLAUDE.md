# KernelTheory.github.io

Marketing website for **Kernel Theory**, a 2-person product + engineering consulting partner for early-stage startups. Hosted on GitHub Pages at kerneltheory.com.

## What this site represents

Canonical brand/positioning reference: `master_context.md` (read it before any copy, messaging, or structural changes).

One-line positioning:
> Kernel Theory helps early-stage founders go from "messy idea or broken product" to a clear, owned, working system — without wasting time or money on the wrong things.

Key framing to preserve in copy and design:
- **Not a typical dev agency.** Do not commoditize as "we build MVPs." Lead with clarity and structure, then building.
- **Wedge = fixing broken setups.** "We fix what other agencies break" is a strong angle — lean into stabilization/rescue, not generic MVP shops.
- **We push back.** Challenging bad product decisions is a feature, not a bug. Copy should reflect opinionated partnership, not blind execution.
- **Ownership is non-negotiable.** Clients end up owning code, infra, docs, and process. Mention this when relevant.
- **ICP:** early-stage founders (pre-revenue to early traction), confused-but-committed, open to pushback.
- **Anti-ICP:** low-trust, contract-heavy, want blind execution. Do not soften copy to appeal to them.
- **Engagement types:** MVP build ($3k–$10k), Stabilization, Fractional CTO/CPO (~$3.5k/mo), Validation-first, AI/Agentic systems.
- **Discovery phase** (~1 week, currently unpaid) is the qualification + trust-building funnel. Homepage CTA is a discovery/Calendly call, not a quote request.

Objections to address (not dodge):
- "They're too small" → reframe as high ownership, low overhead, direct access.
- "They probably just use AI" → leverage is judgment + systems thinking, AI is a tool.

## Codebase

Plain static site — no build step, no framework. Edit HTML/CSS/JS directly; commits to `main` deploy via GitHub Pages.

- `index.html` — homepage (hero, clients, story, services, contact)
- `work.html` — case studies / portfolio
- `bookameeting/index.html` — meeting booking landing
- `styles.css` — primary stylesheet (current design system)
- `style.css` — legacy/secondary stylesheet; check before editing to avoid duplication
- `main.js` — nav toggle + interactions
- `images/` — logos and client marks
- `CNAME` — custom domain (kerneltheory.com)
- Analytics: Google Analytics gtag `G-WLSPG4KE3Q` in `<head>`
- Primary CTA: `https://calendly.com/hey-kerneltheory/30min`
- Contact email: `hey@kerneltheory.com`
- Typography: Inter (Google Fonts, 300/400/500/600)

Current branch `new-look` contains the recent redesign (see commits `f172344`, `0cc0496`).

## Working conventions

- Test visually in a browser before claiming UI work is done — no test suite exists.
- Preserve the existing visual system in `styles.css`; don't introduce a framework or build tooling without asking.
- Match brand voice: direct, opinionated, clarity-first. Avoid generic agency language ("we craft beautiful experiences", "passionate team", etc.).
- Keep copy tight. Founders reading this are skeptical and time-poor.
