# InboxJarvis setup CLI

CLI tool for running [InboxJarvis](https://github.com/sv182124/InboxJarvis) - an open-source AI email assistant.

## Run from this repository

Install the repository dependencies, then run these commands from the repository root:

```bash
pnpm setup
```

Follow the printed commands for the mode you select. For production Docker mode,
`pnpm start:cli` starts the configured stack. The app opens at
[localhost:3000](http://localhost:3000). The package name, built
`inbox-zero` command, and existing configuration paths are retained for compatibility.

To run any setup command from source:

```bash
pnpm exec tsx packages/cli/src/main.ts --help
```

## Commands

### `inbox-zero setup`

Interactive setup wizard that:
- Configures OAuth providers (Google/Microsoft)
- Sets up your LLM provider and API key
- Configures ports (to avoid conflicts)
- Generates all required secrets

Configuration is stored in `~/.inbox-zero/`

### `inbox-zero setup-terraform`

Generates Terraform files for AWS deployment (ECS Fargate, RDS, optional Redis).

```bash
# Generate Terraform files in ./terraform (interactive)
pnpm exec tsx packages/cli/src/main.ts setup-terraform

# Non-interactive mode (values read from flags/env vars)
pnpm exec tsx packages/cli/src/main.ts setup-terraform --yes --region us-east-1
```

The generated Terraform uses AWS SSM Parameter Store for secrets and outputs the
service URL after `terraform apply`.

### `inbox-zero setup-vercel`

Links a Vercel project for `apps/web`, provisions Neon and Upstash Redis using
Vercel Marketplace integrations, and seeds the required environment variables.

```bash
# Interactive Vercel setup
pnpm exec tsx packages/cli/src/main.ts setup-vercel

# Skip provisioning an integration you already have
pnpm exec tsx packages/cli/src/main.ts setup-vercel --skip-neon

# Non-interactive setup with defaults and placeholder provider credentials
pnpm exec tsx packages/cli/src/main.ts setup-vercel --yes
```

Use `--deploy` if you want the CLI to trigger `vercel deploy --prod` after setup.

### `inbox-zero start`

Pulls the latest Docker image and starts all containers:
- PostgreSQL database
- Redis cache
- InboxJarvis web app
- Cron job for email sync

```bash
pnpm exec tsx packages/cli/src/main.ts start           # Start in background
pnpm exec tsx packages/cli/src/main.ts start --no-detach  # Start in foreground
```

### `inbox-zero stop`

Stops all running containers.

```bash
pnpm exec tsx packages/cli/src/main.ts stop
```

### `inbox-zero logs`

View container logs.

```bash
pnpm exec tsx packages/cli/src/main.ts logs            # Show last 100 lines
pnpm exec tsx packages/cli/src/main.ts logs -f         # Follow logs
pnpm exec tsx packages/cli/src/main.ts logs -n 500     # Show last 500 lines
```

### `inbox-zero status`

Show status of running containers.

### `inbox-zero update`

Pull the latest InboxJarvis image and optionally restart.

```bash
pnpm exec tsx packages/cli/src/main.ts update
```

## Requirements

- Node.js 24 and the repository dependencies
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- OAuth credentials from Google and/or Microsoft
- An LLM API key (Anthropic, OpenAI, Google, etc.)

## Configuration

All configuration is stored in `~/.inbox-zero/`:
- `.env` - Environment variables
- `docker-compose.yml` - Docker Compose configuration

To reconfigure, run `pnpm setup` from the repository root again.

## License

See [LICENSE](../../LICENSE) in the repository root.
