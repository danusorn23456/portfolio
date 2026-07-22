<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Static export

`next.config.ts` sets `output: "export"` — the site builds to a plain `out/` folder for static hosting, no Node server. This means:

- `robots.ts`, `sitemap.ts`, and `opengraph-image.tsx` (and any other special metadata/route-handler file) must export `const dynamic = "force-static"`, or `next build` fails with "not configured on route ... with output: export". Stock Next.js doesn't require this — it's specific to this project's Next.js build, only discoverable by hitting the build error.
- `next/image` runs with `images.unoptimized: true` since the default optimizer needs a server.
- Server Actions, `cookies()`/`headers()`, ISR, dynamic routes without `generateStaticParams`, and `next.config` rewrites/redirects/headers are all unsupported under static export — avoid introducing them.
- `SITE_URL` (`src/lib/site.ts`) reads `NEXT_PUBLIC_APP_DOMAIN` from `.env` for `metadataBase`/canonical URLs/sitemap — it's currently a `localhost` placeholder and needs updating once a real domain is set.
