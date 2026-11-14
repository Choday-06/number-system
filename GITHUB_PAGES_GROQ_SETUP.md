# GitHub Pages + Groq chatbot setup

This version keeps the existing website UI and routes AI chat requests to a Cloudflare Worker. GitHub Pages serves the static HTML/CSS/JS; the Worker securely calls Groq. The Groq key is stored as a Cloudflare secret and must never be placed in this repository.

## Files added/changed
- `chatbot.js`: calls the configured remote chat endpoint rather than same-origin `/api/chat`.
- `chat-config.js`: contains only the public Worker endpoint URL placeholder.
- `index.html`: loads `chat-config.js` before `chatbot.js`.
- `cloudflare-worker/index.js`: Worker endpoint at `/api/chat`, with CORS and Groq chat-completions integration.

## Deployment overview
1. Deploy `cloudflare-worker/index.js` as a Cloudflare Worker named e.g. `digital-number-system-ai`.
2. In Cloudflare Worker Settings → Variables and Secrets, add `GROQ_API_KEY` as a **Secret**. Set `GROQ_MODEL` as a plain text variable to `openai/gpt-oss-20b` if desired (the Worker defaults to that model). Deploy. Cloudflare secrets are encrypted and available to Worker code through `env`; do not commit keys.
3. Copy the Worker URL, then edit `chat-config.js` and replace the placeholder with `https://YOUR-WORKER-NAME.YOUR-SUBDOMAIN.workers.dev/api/chat`.
4. Push the website files to the root of the GitHub repository `Choday-06/digital-number-system`. Enable GitHub Pages in repository Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
5. Test the published GitHub Pages URL and the chatbot.

## CORS note
The Worker currently allows `https://choday-06.github.io`, `https://sites.google.com`, the old Render website origin, and local development origins. If your GitHub Pages site uses a different owner/repository domain or a custom domain, update `ALLOWED_ORIGINS` in `cloudflare-worker/index.js` to include its exact origin (scheme + hostname, no path), then redeploy. Browser requests from the embedded GitHub Pages document normally use the GitHub Pages origin.

## Important
- Keep Render running until the Worker and GitHub Pages version have been tested.
- The Python `server.py` is retained for local development/old Render hosting, but GitHub Pages does not execute it.
- Do not upload `.env` or any API key.
- This Worker includes basic input validation but no durable per-user rate limiting or authentication. Before a high-traffic public launch, add a Cloudflare rate-limit rule / Turnstile protection and monitor Groq usage.
- Google Sites embeds content in a frame. This setup does not itself guarantee true edge-to-edge fullscreen or video fullscreen; those depend on Google Sites iframe sizing and fullscreen permissions.
