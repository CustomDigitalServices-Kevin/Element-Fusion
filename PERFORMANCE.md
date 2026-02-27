# Element Fusion — Optimisations Performance

## Bundle Optimizations
- **Dynamic imports** : FusionParticles, EncyclopediaView, AudioManager (lazy-loaded)
- **Tree shaking** : Lucide React imports individuels (pas import *)
- **CSS** : Tailwind v4 purge automatique, pas de styles inutiles
- **Images** : Aucune image bitmap — tout en SVG/emoji pour légèreté maximale

## Runtime Optimizations
- **Combinations lookup** : O(1) via Map (pas de .find() ou boucle)
- **useMemo** : filtrage inventaire, liste catégories, groupes encyclopédie
- **useCallback** : handlers DnD, callbacks de fusion
- **Zustand** : subscriptions sélectives (pas de re-render global)
- **will-change** : transform sur éléments draggables uniquement

## Animations
- **GPU-only** : transform + opacity uniquement (pas de width/height/top/left)
- **AnimatePresence** : nettoyage automatique des éléments unmontés
- **useReducedMotion** : respect prefers-reduced-motion
- **Particles** : CSS animations (pas de canvas), auto-cleanup après 900ms

## PWA & Offline
- **Service Worker** : next-pwa, cache automatique des assets statiques
- **Fallback data** : 39 éléments + 33 combinaisons disponibles hors ligne
- **localStorage** : progression sauvegardée, pas de réseau requis après init

## Security Headers (next.config.js)
- Content-Security-Policy : script-src self, connect-src *.supabase.co
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security: max-age=63072000
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## Supabase
- **RLS** : lecture seule pour rôle anon
- **Cache in-memory** : combinaisons chargées une fois au démarrage
- **Indexes** : element1_id, element2_id, (element1_id, element2_id) composite

## Core Web Vitals Targets
- LCP < 2.5s (pas d'images lourdes, fonts inline)
- CLS < 0.1 (layout stable, pas de shifts)
- FID < 100ms (interactions légères)
- FCP < 1.5s (SSG/SSR Next.js)
