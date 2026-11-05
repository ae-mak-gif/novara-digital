# Architecture

Monorepo with five independent application roots:
- `apps/novara`: flagship Next.js agency website.
- `apps/form-and-field`: architecture studio demo.
- `apps/common-ground`: lifestyle commerce demo.
- `apps/northline-advisory`: consulting demo.
- `apps/arcwell-systems`: technology solutions demo.

Each portfolio directory is intended to be the Root Directory of its own Vercel project. Source is versioned in this repository. Apps can later be split into separate GitHub repositories without changing their app code.

No backend integration is included. The enquiry form is a validated frontend prototype and must not claim to deliver messages.
