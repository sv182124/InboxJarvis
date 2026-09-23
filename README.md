# InboxJarvis

email is a mess. this helps.

A place to sort mail, draft replies, unsubscribe from stuff, and keep track of the things that still need an answer. There are calendar tools and an assistant in here too.

## running it

You'll need Node 24, pnpm 11.19.0, and Docker running.

```sh
git clone https://github.com/sv182124/InboxJarvis.git
cd InboxJarvis
pnpm install
pnpm setup
```

In setup, pick **Development**, **Docker**, then **just database & Redis**. It writes `apps/web/.env` and helps with the keys. Gmail or Outlook needs your own OAuth app; AI features need a model provider configured too.

Then:

```sh
docker compose --env-file apps/web/.env --profile local-db --profile local-redis up -d db redis serverless-redis-http
pnpm --dir apps/web exec prisma migrate deploy
pnpm dev
```

Open [localhost:3000](http://localhost:3000). If setup picked different ports because something was already running, use the address it prints.

A few more notes live in [the docs](docs/hosting/quick-start.mdx). Keep `.env` private.

## bits and pieces

- `apps/web` — the web app
- `apps/desktop` — the desktop wrapper
- `packages` — shared mail, UI, and email code

Next.js, React, Postgres, Redis, and Prisma do most of the heavy lifting. UI components use shadcn/ui; illustrations include [Popsy](https://popsy.co/).

Found something broken? [Open an issue](https://github.com/sv182124/InboxJarvis/issues).

## license

See [LICENSE](LICENSE). The enterprise bits have [separate terms](apps/web/ee/LICENSE.md). Existing copyright and third-party notices apply.
