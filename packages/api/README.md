# InboxJarvis API CLI

CLI tool for managing [InboxJarvis](https://github.com/sv182124/InboxJarvis) through the external API.

This package is separate from `@inbox-zero/cli`, which is focused on self-hosting and deployment.

## Run from this repository

Use Node.js 24 and install the repository dependencies. From the repository root:

```bash
pnpm exec tsx packages/api/src/main.ts --help
pnpm exec tsx packages/api/src/main.ts rules list
pnpm exec tsx packages/api/src/main.ts stats by-period --period week
```

The package name, built `inbox-zero-api` command, and existing configuration paths
are retained for compatibility.

Set `INBOX_ZERO_API_KEY` in your shell or secret manager before running commands. Avoid passing API keys as CLI arguments because they can leak into shell history and process listings.

## Configuration

Configuration is loaded in this order:

1. Command flags
2. Environment variables
3. `~/.inbox-zero-api/config.json`

Supported environment variables:

- `INBOX_ZERO_API_KEY`
- `INBOX_ZERO_BASE_URL` for self-hosted or custom API deployments

## Commands

### `inbox-zero-api config`

Manage local API CLI configuration.

```bash
pnpm exec tsx packages/api/src/main.ts config list
pnpm exec tsx packages/api/src/main.ts config get base-url
```

`base-url` is optional. It defaults to `http://localhost:3000` and can be changed for another deployment.

### `inbox-zero-api openapi`

Fetch the live OpenAPI document from the configured InboxJarvis deployment.

```bash
pnpm exec tsx packages/api/src/main.ts openapi --json
```

### `inbox-zero-api rules`

Manage automation rules for the inbox account scoped by the API key.

```bash
pnpm exec tsx packages/api/src/main.ts rules list
pnpm exec tsx packages/api/src/main.ts rules get rule_123
pnpm exec tsx packages/api/src/main.ts rules delete rule_123
```

Create or update rules with a JSON file or stdin:

```bash
pnpm exec tsx packages/api/src/main.ts rules create --file rule.json
cat rule.json | pnpm exec tsx packages/api/src/main.ts rules update rule_123 --file -
```

The request body must match the public API schema.

### `inbox-zero-api stats`

Read analytics from the external API.

```bash
pnpm exec tsx packages/api/src/main.ts stats by-period --period month
pnpm exec tsx packages/api/src/main.ts stats response-time --json
```

For bot workflows, prefer `--json` so the CLI returns structured output instead of a human-oriented summary.

## License

See [LICENSE](../../LICENSE) in the repository root.
