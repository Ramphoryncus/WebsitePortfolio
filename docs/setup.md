# GitHub Pages + Actions Setup

This repo uses **GitHub Actions** to build the static site and **JSDoc** API docs, then publishes them to **GitHub Pages**.

## How it works

- On every push to `main`, the workflow:
  1. Checks out the repo.
  2. Sets up Node.js.
  3. Copies site files into a `public/` folder.
  4. Runs `npx jsdoc -c jsdoc.json` to generate API docs into `public/docs` from `src/`.
  5. Uploads `public/` as the Pages artifact.
  6. Deploys to GitHub Pages with `actions/deploy-pages`.

The deployed site will be available at a URL like:

```
https://<username>.github.io/<repo>/
```

## Enabling GitHub Pages

- Go to **Settings → Pages**.
- Ensure the **Source** is **GitHub Actions**.
- After a successful deploy, the URL is shown in the workflow summary and on this page.

## Where the generated docs appear

- The JSDoc output is published under `/docs/` on the live site, e.g.:
  - `https://<username>.github.io/<repo>/docs/`
- Navigation links in `index.html` and `projects.html` point to it.
