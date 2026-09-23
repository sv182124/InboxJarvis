# ClawHub / OpenClaw + Cursor

This folder contains the InboxJarvis API skill. It retains the compatibility package name `@inbox-zero/api` and binary name `inbox-zero-api`. Use a CLI built from this repository, or explicitly configure an upstream published client to point at your InboxJarvis deployment.

- **OpenClaw**: publish or install from here; see `inbox-zero-api/SKILL.md` frontmatter `metadata.openclaw`.
- **Cursor Directory**: the repo root includes `.cursor-plugin/plugin.json`. Skills are exposed via `skills/inbox-zero-api` → symlink to this directory so Open Plugins discovery finds `skills/*/SKILL.md` without duplicating files.

Edit content only under `inbox-zero-api/`; the Cursor plugin picks it up automatically.
