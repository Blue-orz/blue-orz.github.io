# Yuwei Chen — Personal Homepage

Public website: **https://blue-orz.github.io/**

A responsive, bilingual academic homepage with no personal photographs.
Built with HTML, CSS, and JavaScript. No build step, analytics, third-party fonts,
or external runtime dependencies.

## Edit the website

- `index.html`: English content, contact details, and page structure.
- `style.css`: layout, typography, colors, and mobile/print styles.
- `script.js`: Chinese translations, language switch, and email copy button.
- `favicon.svg`: typographic browser icon.

When updating contact details, update both `index.html` and `script.js`.

## Preview locally

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Visit http://127.0.0.1:4173.

## Deployment

GitHub Pages publishes the repository root from the `main` branch.
The `.nojekyll` file keeps the site as plain static files.
