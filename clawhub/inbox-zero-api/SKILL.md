---
name: inbox-zero-api
description: Use the InboxJarvis API CLI to inspect the live API schema, list and manage automation rules, and read inbox analytics through the public API. Use this when a task involves InboxJarvis rules, stats, or API-driven automation and can be solved through the CLI instead of browser interaction.
homepage: https://github.com/sv182124/InboxJarvis/blob/main/docs/api-reference/cli.mdx
metadata: { "openclaw": { "skillKey": "inboxZeroApi", "requires": { "bins": ["inbox-zero-api"], "env": ["INBOX_ZERO_API_KEY"] }, "primaryEnv": "INBOX_ZERO_API_KEY", "install": [ { "id": "node", "kind": "node", "package": "@inbox-zero/api", "bins": ["inbox-zero-api"], "label": "Install upstream Inbox Zero compatibility CLI (npm)" } ] } }
---

# InboxJarvis API CLI

Use this skill when the task is to inspect or change InboxJarvis state through the public API.

## Workflow

1. Prefer `--json` so the output is stable and machine-readable.
2. For authenticated commands (`rules`, `stats`, etc.), keep credentials in `INBOX_ZERO_API_KEY` or OpenClaw skill config. Avoid passing API keys as CLI flags unless there is no alternative.
3. Before creating or replacing a rule body, fetch the live schema with `inbox-zero-api openapi --json` (no API key required).
4. For create and update flows, write JSON into a workspace file or pipe it on stdin.
5. Treat `rules update` as a full replacement. Read the current rule first if you only intend to change part of it.

## Quick Start

```bash
inbox-zero-api rules list --json
inbox-zero-api stats by-period --period week --json
inbox-zero-api openapi --json
```

For the local source version, run `pnpm exec tsx packages/api/src/main.ts` from the InboxJarvis checkout. The OpenClaw installer uses the upstream `@inbox-zero/api` package; configure its base URL before using it with InboxJarvis.

## Cursor

Set `INBOX_ZERO_API_KEY` when using authenticated commands (`rules`, `stats`, etc.); `openapi --json` works without a key. Use shell profile, Cursor env, or a local env file—never commit keys. The npm and npx packages under `@inbox-zero/api` are upstream compatibility clients, not InboxJarvis releases.

## OpenClaw Config

Set the API key in `~/.openclaw/openclaw.json` under `skills.entries.inboxZeroApi.apiKey`, or export `INBOX_ZERO_API_KEY` in the host environment.

Set `INBOX_ZERO_BASE_URL=http://localhost:3000`, or use `inbox-zero-api config set base-url http://localhost:3000`, for the local InboxJarvis app. Use your deployment URL on a hosted installation. Do not rely on an upstream published client’s default URL.

## Reference

For exact command patterns and a safe mutation flow, read `references/cli-reference.md`.
