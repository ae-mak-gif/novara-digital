# NOVARA Digital — build and deployment guide

## Repository layout

This repository is a monorepo containing five independent websites.

| Website | Root directory | Framework |
| --- | --- | --- |
| NOVARA Digital | `apps/novara` | Next.js |
| Form & Field | `apps/form-and-field` | Static HTML |
| Common Ground | `apps/common-ground` | Static HTML |
| Northline Advisory | `apps/northline-advisory` | Static HTML |
| Arcwell Systems | `apps/arcwell-systems` | Static HTML |

## Deploying NOVARA to Vercel

1. Import `ae-mak-gif/novara-digital` into Vercel.
2. Create a Vercel project named `novara-digital`.
3. Set Root Directory to `apps/novara`.
4. Framework preset: Next.js.
5. Build command: `npm run build` (default).
6. Install command: `npm install` (default).
7. Add `NEXT_PUBLIC_SITE_URL` with the approved canonical production URL.
8. Deploy only after the GitHub Actions build check passes.

## Deploying each portfolio demonstration

Create a separate Vercel project for each demonstration and point each project to its root directory in the table above. Set Framework Preset to Other and use the root directory as the static output root. These are standalone demonstration websites.

## Environment and backend

No database or automation secrets are needed for the initial frontend deployment. Supabase, n8n, MCP, contact delivery, consent management and analytics are intentionally deferred. Do not add secrets to Git.

## Before public launch

- Confirm NOVARA's final brand name, domain and enquiry email.
- Replace or approve all fictional project content and label it as concept work until then.
- Add approved, licensed project imagery.
- Connect and test enquiry delivery in the later backend phase.
- Add an appropriate privacy notice and cookie/consent tooling only if the final site uses non-essential cookies or tracking.
- Review metadata, Search Console ownership, sitemap submission and local business details.
