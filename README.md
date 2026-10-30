# Yuwei Chen — Personal Homepage

Website: **https://blue-orz.github.io/**

A compact, text-only academic homepage: name, a short introduction, interests,
and contact links. The layout takes inspiration from the introductory section
of [Jon Barron's homepage](https://jonbarron.info/), with original HTML and CSS.
It includes no personal photograph, research/publication sections, or empty placeholders.

## Editing

- `index.html`: English introduction, contact information, and metadata.
- `style.css`: plain white layout, typography, links, and mobile styles.
- `script.js`: Chinese translation and optional language switch.
- `favicon.svg`: typographic browser icon.

All core content and links are available without JavaScript. No build tools,
third-party fonts, tracking, or external runtime dependencies are required.

## Local preview

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/.

GitHub Pages publishes the repository root from `main`. The `.nojekyll` file
keeps the site as plain static files.
