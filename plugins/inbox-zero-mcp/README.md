# InboxJarvis MCP plugin

Cursor plugin that connects to an InboxJarvis MCP server.

## Install

Copy or symlink this directory to `~/.cursor/plugins/local/inbox-zero-mcp`, then reload Cursor.

Set the URL in `mcp.json` to your InboxJarvis origin, for example `http://localhost:3000/mcp`.

Or connect without the plugin by adding that `mcp.json` into `~/.cursor/mcp.json`.

## Files

- `plugin.json` — Agent Plugins manifest
- `mcp.json` — remote Streamable HTTP MCP URL
- `skills/inbox-zero-mcp/SKILL.md` — how to search, read, and draft without sending

OAuth uses dynamic client registration.
