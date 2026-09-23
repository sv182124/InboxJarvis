# InboxJarvis API CLI Reference

## Run from the InboxJarvis source

Use one of:

- After `pnpm install`, run `pnpm exec tsx packages/api/src/main.ts --help` from the repository root.
- Published `@inbox-zero/api` packages are upstream compatibility clients. Set `INBOX_ZERO_BASE_URL=http://localhost:3000` before using one with the local app.

The executable name is `inbox-zero-api`.

## Authentication and config

- `INBOX_ZERO_API_KEY` is required for authenticated commands such as `rules` and `stats`.
- `INBOX_ZERO_BASE_URL` selects your deployment; use `http://localhost:3000` for local InboxJarvis.
- Config precedence is: flags, environment variables, `~/.inbox-zero-api/config.json`.

Examples:

```bash
inbox-zero-api config list
inbox-zero-api config get base-url
inbox-zero-api config set base-url https://your-domain.com
```

## Read operations

```bash
inbox-zero-api openapi --json
inbox-zero-api rules list --json
inbox-zero-api rules get rule_123 --json
inbox-zero-api stats by-period --period month --json
inbox-zero-api stats response-time --json
```

## Safe rule mutation flow

1. Inspect the live schema:

```bash
inbox-zero-api openapi --json
```

2. Read the current rule when editing an existing one:

```bash
inbox-zero-api rules get rule_123 --json > rule.json
```

3. Edit `rule.json` in the workspace.

4. Apply the full replacement:

```bash
inbox-zero-api rules update rule_123 --file rule.json --json
```

Create from a file:

```bash
inbox-zero-api rules create --file rule.json --json
```

Create or update from stdin:

```bash
cat rule.json | inbox-zero-api rules create --file - --json
cat rule.json | inbox-zero-api rules update rule_123 --file - --json
```

Delete a rule:

```bash
inbox-zero-api rules delete rule_123
```

## Notes

- `rules update` replaces the rule body rather than patching individual fields.
- Prefer temporary workspace files over inline JSON for larger payloads.
- Stats commands are always scoped to the inbox account attached to the API key.
