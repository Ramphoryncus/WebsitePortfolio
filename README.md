# Portfolio Website with Auto-Documentation

A quick-start personal portfolio deployed via **GitHub Pages** with **auto-generated docs** using **JSDoc** and **GitHub Actions**.

## Live Site

- [Live Portfolio Website](https://ramphoryncus.github.io/WebsitePortfolio/)
- <img width="1216" height="1195" alt="image" src="https://github.com/user-attachments/assets/cf85abf6-7fa5-4568-a7cf-046fe51c5a01" />


## What's included

- `index.html` landing page with name, bio, and contact
- `projects.html` with 2 sample projects
- Simple, consistent styling in `assets/styles.css`
- `src/greeter.js` with JSDoc docblocks (sample code)
- GitHub Actions workflow that builds docs and publishes the site to GitHub Pages
- `docs/setup.md` explaining how it works

## Local preview

Just open `index.html` in your browser.

## Docs built locally

```bash
npx jsdoc -c jsdoc.json
# Output goes to ./public/docs
```

Then open `public/docs/index.html`.


## Deliverables checklist

- [x] `index.html` and styling
- [x] `src/` with documented code
- [x] GitHub Actions workflow in `.github/workflows/pages.yml`
- [x] Docs generated on deploy to GitHub Pages
- [x] A GIF or screenshot of the live site (add to `media/` and reference in your submission)
