NOIRROOTS2

## Deploy Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/<NETLIFY_BADGE_ID>/deploy-status)](https://app.netlify.com/sites/<NETLIFY_SITE_NAME>/deploys)

## Deployment Flow

This project uses Netlify's Git integration for deployments:

- **Push to `main`** → Netlify Production deploy (automatic)
- **Open/update PR** → Netlify Deploy Preview (automatic) + GitHub Actions build check

All deploys are handled by Netlify's Git connection. GitHub Actions only runs build verification on PRs—no duplicate deploys.
