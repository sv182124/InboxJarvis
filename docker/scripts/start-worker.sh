#!/bin/sh
set -e

echo "🚀 Starting InboxJarvis worker..."
exec node /app/apps/worker/src/index.mjs
