---
name: inbox-zero-mcp
description: Search InboxJarvis mail, read threads, create mailbox drafts, and manage automation rules through a remote MCP server. Use when the user wants ChatGPT, Claude, or Cursor to work with their Gmail or Outlook inbox.
---

# InboxJarvis MCP

Connect to the InboxJarvis MCP server configured in `mcp.json` (OAuth, Streamable HTTP). Hosted URL: `http://localhost:3000/mcp`.

## Tools

- `list_email_accounts` first when the user has more than one inbox. Pass `emailAccountId` or `emailAddress` on later calls.
- `search_inbox` for message metadata and snippets. Do not treat snippets as full bodies.
- `read_thread` for truncated plain-text bodies after you have a `threadId`.
- `create_draft` to save a mailbox draft. This does not send. Never invent a send tool.
- Rule tools (`list_rules`, `get_rule`, `create_rule`, `update_rule`, `delete_rule`) and stats tools manage automation and analytics, not mail delivery.

## Safety

- Do not send email. Drafts stay in the mailbox until the user sends them.
- Do not dump full thread bodies into follow-up tool arguments; summarize.
- Disconnect and MCP access are controlled in InboxJarvis Settings → Account → MCP, not by this skill.
