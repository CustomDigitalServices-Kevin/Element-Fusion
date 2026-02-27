#!/bin/bash
echo "=== Element Fusion Security & Performance Audit ==="
echo ""

echo ">>> Checking npm vulnerabilities..."
npm audit --audit-level=moderate

echo ""
echo ">>> Checking bundle size (after build)..."
if [ -d ".next" ]; then
  du -sh .next/static/chunks/*.js 2>/dev/null | sort -rh | head -10
else
  echo "Run 'npm run build' first to check bundle size"
fi

echo ""
echo ">>> Checking TypeScript..."
npx tsc --noEmit

echo ""
echo ">>> Running ESLint..."
npm run lint

echo ""
echo "=== Audit complete ==="
