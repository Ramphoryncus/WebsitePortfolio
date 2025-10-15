# Portfolio Website with Auto-Documentation

A quick-start personal portfolio deployed via **GitHub Pages** with **auto-generated docs** using **JSDoc** and **GitHub Actions**.

## Live Site

> Replace after your first deploy: `https://<your-username>.github.io/<your-repo>/`

## What's included

- `index.html` landing page with name, bio, and contact
- `projects.html` with a sample project
- Simple, consistent styling in `assets/styles.css`
- `src/greeter.js` with JSDoc docblocks (sample code)
- GitHub Actions workflow that builds docs and publishes the site to GitHub Pages
- `docs/setup.md` explaining how it works

## Local preview

Just open `index.html` in your browser.

## Build docs locally (optional)

```bash
npx jsdoc -c jsdoc.json
# Output goes to ./public/docs
```

Then open `public/docs/index.html`.

## First-time setup

1. Create a new GitHub repository (or accept the Classroom assignment).
2. Copy these files into the repository and commit to the `main` branch.
3. Go to **Settings → Pages** and ensure "GitHub Actions" is the source.
4. Push a commit to trigger the workflow. The deployment URL will appear in the Actions run and under **Settings → Pages**.

## Update with your info

- Update name/email in the HTML files.
- Swap out the placeholder screenshot in `media/`.
- Replace the sample project with your own.
- (Optional) Add more files in `src/` and they'll be included in the docs automatically.

## Deliverables checklist

- [x] `index.html` and styling
- [x] `src/` with documented code
- [x] GitHub Actions workflow in `.github/workflows/pages.yml`
- [x] Docs generated on deploy to GitHub Pages
- [ ] A GIF or screenshot of the live site (add to `media/` and reference in your submission)
