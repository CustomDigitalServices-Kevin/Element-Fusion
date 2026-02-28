# Element Fusion

**[Francais](#francais) | [English](#english)**

---

<div align="center">

### **https://element-fusion.vercel.app**

An element combination puzzle game inspired by Little Alchemy.
Combine Water, Fire, Earth and Air to discover new elements.

*Un jeu de combinaison d'elements inspire de Little Alchemy.
Combinez Eau, Feu, Terre et Air pour decouvrir de nouveaux elements.*

</div>

---

<a id="english"></a>

## English

### Overview

Element Fusion is a browser-based puzzle game where players combine basic elements (Water, Fire, Earth, Air) to discover increasingly complex ones. The game features a glassmorphism UI with neon glow effects, drag-and-drop interactions, a tap-to-fuse mobile mode, and full offline support via a Progressive Web App (PWA).

**Live demo:** https://element-fusion.vercel.app

### Key Features

- **47 discoverable elements** across 4 tiers, organized into 5 categories
- **55 fusion combinations** with multiple discovery paths
- **Drag & Drop** workspace (desktop) + **Tap-to-Fuse** (mobile)
- **Slot-based fusion** with visual feedback (success, failure, already known)
- **3-step onboarding** tutorial for first-time players
- **12 achievements** to unlock (discovery milestones, fusion count, hints, tier-based)
- **Hint system** suggesting the next possible fusion
- **Encyclopedia** listing all discovered elements
- **Sound effects** via Web Audio API (synthesized, no audio files)
- **PWA** with service worker for offline play
- **Responsive design:** desktop (sidebar 420px), tablet (360px), mobile (bottom sheet)
- **Progress persistence** in localStorage

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | React 18 + Tailwind CSS v4 |
| State Management | Zustand v5 |
| Drag & Drop | @dnd-kit/core |
| Animations | Framer Motion + CSS keyframes |
| Audio | Web Audio API (no external files) |
| Database | Supabase (optional, with offline fallback) |
| PWA | next-pwa (service worker) |
| Language | TypeScript 5 (strict mode) |
| Linting | ESLint 8 + eslint-config-next |
| Testing | Vitest + Playwright |
| Deployment | Vercel |

### Project Structure

```
element-fusion/
├── app/
│   ├── globals.css              # Tailwind theme, animations, glassmorphism classes
│   ├── layout.tsx               # Root layout, metadata, fonts (Inter)
│   └── page.tsx                 # Main game page (DnD context, layout, tap-to-fuse)
│
├── components/
│   ├── game/
│   │   ├── DraggableElement.tsx  # @dnd-kit draggable wrapper
│   │   ├── ElementCard.tsx       # Element card (sm/md/lg/list sizes, glassmorphism)
│   │   ├── EncyclopediaView.tsx  # Full element catalog modal
│   │   ├── FusionResultModal.tsx # Success/discovery popup with particles
│   │   ├── Header.tsx            # Top bar (progress, hints, encyclopedia, reset)
│   │   ├── InventoryPanel.tsx    # Left sidebar (search, sort, categories, grid)
│   │   ├── OnboardingOverlay.tsx # 3-step first-time tutorial
│   │   └── WorkspaceZone.tsx     # Fusion workspace with 2 slots + feedback
│   │
│   ├── effects/
│   │   ├── AchievementToast.tsx       # Achievement unlock notification
│   │   ├── ConfettiEffect.tsx         # Celebration confetti particles
│   │   ├── ElementAppear.tsx          # Element discovery animation
│   │   ├── FusionParticles.tsx        # Fusion particle burst
│   │   ├── ProgressBarAnimation.tsx   # Animated progress bar glow
│   │   ├── ShakeAnimation.tsx         # Shake on failed fusion
│   │   └── SoundToggle.tsx            # Mute/unmute button
│   │
│   └── ui/
│       ├── Badge.tsx            # "New" dot badge with glow
│       ├── Button.tsx           # Reusable button (variants: primary, ghost, danger)
│       ├── CategoryPill.tsx     # Category filter button (vertical layout)
│       ├── Modal.tsx            # Modal dialog
│       ├── ProgressBar.tsx      # Discovery progress bar
│       ├── SearchBar.tsx        # Debounced search input
│       └── Tooltip.tsx          # Tooltip component
│
├── hooks/
│   ├── useAnimations.ts         # Animation utilities
│   ├── useFusion.ts             # Fusion logic hook
│   ├── useGameInit.ts           # Game initialization (load data, restore progress)
│   ├── useLocalStorage.ts       # LocalStorage hook
│   └── useResponsive.ts         # Breakpoints: mobile <768, tablet 768-1023, desktop >=1024
│
├── lib/
│   ├── audio/
│   │   └── audioManager.ts      # Web Audio API: pickup, success, discovery, fail, ambient
│   ├── game/
│   │   ├── achievements.ts      # 12 achievements with unlock conditions
│   │   ├── combinationsMap.ts   # O(1) fusion lookup (Map with "min-max" keys)
│   │   ├── hints.ts             # Hint generator (finds undiscovered combinations)
│   │   └── localStorage.ts      # Save/load/clear progress (key: element-fusion-progress)
│   └── supabase/
│       ├── client.ts            # Supabase client (lazy init, optional)
│       ├── fallback.ts          # 47 elements + 55 combinations (offline data)
│       └── queries.ts           # DB queries with in-memory cache + auto-fallback
│
├── store/
│   └── gameStore.ts             # Zustand store: elements, workspace, fusion, stats, achievements
│
├── types/
│   ├── game.ts                  # GameElement, WorkspaceElement, FusionResult, Achievement, etc.
│   └── database.ts              # Supabase DB schema (Category, Element, Combination)
│
├── public/
│   ├── icons/                   # PWA icons (192x192, 512x512)
│   ├── manifest.json            # PWA manifest (standalone, dark theme)
│   └── sw.js                    # Service worker (auto-generated by next-pwa)
│
├── tests/
│   ├── e2e/                     # Playwright E2E tests
│   └── setup.ts                 # Vitest setup
│
├── middleware.ts                # Security headers (CSP, HSTS, X-Frame-Options)
├── next.config.js               # PWA + security headers + CSP
├── tsconfig.json                # TypeScript strict mode, path aliases (@/*)
├── .eslintrc.json               # ESLint config (next/core-web-vitals)
├── postcss.config.js            # Tailwind v4 PostCSS plugin
├── vitest.config.ts             # Unit tests (jsdom, 80% coverage target)
├── playwright.config.ts         # E2E tests (Chromium + Mobile Chrome)
├── .env.local.example           # Environment variables template
└── package.json                 # Dependencies & scripts
```

### Getting Started

#### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

#### Installation

```bash
# Clone the repository
git clone https://github.com/CustomDigitalServices-Kevin/Element-Fusion.git
cd Element-Fusion

# Install dependencies
npm install

# Start development server
npm run dev
```

The game runs at `http://localhost:3000` with full offline fallback data (no database required).

#### Environment Variables (optional)

Copy `.env.local.example` to `.env.local` to connect a Supabase database:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Without these variables, the game works in offline mode** with the built-in fallback data (47 elements, 55 combinations). The Supabase connection is entirely optional and only needed if you want to expand the element database server-side.

#### Supabase Database Schema

If you want to set up a Supabase backend, create these 3 tables:

```sql
-- Categories
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT NOT NULL,       -- hex color (e.g. #4CAF50)
  icon TEXT NOT NULL          -- emoji (e.g. 🌿)
);

-- Elements
CREATE TABLE elements (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  emoji TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  is_base BOOLEAN DEFAULT false,
  tier INTEGER DEFAULT 0,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Combinations
CREATE TABLE combinations (
  id SERIAL PRIMARY KEY,
  element1_id INTEGER NOT NULL REFERENCES elements(id),
  element2_id INTEGER NOT NULL REFERENCES elements(id),
  result_id INTEGER NOT NULL REFERENCES elements(id)
);
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Production build (Next.js + PWA) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests (Vitest) |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:e2e` | Run E2E tests (Playwright) |

### Game Data Summary

| Data | Count |
|---|---|
| Base elements | 4 (Water, Fire, Earth, Air) |
| Total elements | 47 |
| Element tiers | 4 (Tier 0 to Tier 3) |
| Combinations | 55 |
| Categories | 5 (Nature, Technology, Life, Food, Mythology) |
| Achievements | 12 |

### Architecture Decisions

- **Combination lookup:** Uses a `Map<string, number>` with keys formatted as `"min(id1,id2)-max(id1,id2)"` for O(1) fusion lookup regardless of element order
- **State management:** Zustand v5 with selective subscriptions to avoid unnecessary re-renders
- **Offline-first:** All game data is bundled as a TypeScript fallback module; Supabase is queried first with automatic fallback on error
- **Audio:** Procedurally generated using Web Audio API oscillators (no audio files to load)
- **Animations:** GPU-accelerated (transform + opacity only); respects `prefers-reduced-motion`
- **Security:** CSP headers, HSTS, X-Frame-Options DENY, restricted Permissions-Policy
- **PWA:** Service worker auto-generated by next-pwa; manifest with standalone display mode

### Deployment (Vercel)

The project is deployed on Vercel with automatic deploys on each push to `main`.

1. Connect the GitHub repository to Vercel
2. (Optional) Set environment variables in Vercel project settings
3. Every push to `main` triggers an automatic deployment

No additional configuration is required. The build passes `next build`, `tsc --noEmit`, and `next lint` with 0 errors.

### How to Extend

#### Adding new elements

Edit `lib/supabase/fallback.ts`:

1. Add the element to the `elements` array (choose an `id`, `emoji`, `categoryId`, and `tier`)
2. Add combinations to the `combinations` array (`element1_id` + `element2_id` = `result_id`)
3. Update `TOTAL_ELEMENTS` constant in `components/game/InventoryPanel.tsx` (currently 90)

#### Adding new categories

Add a new entry to the `categories` array in `lib/supabase/fallback.ts` with a unique `id`, `name`, `color` (hex), and `icon` (emoji).

#### Adding new achievements

Edit `lib/game/achievements.ts` and add a new entry to the `ACHIEVEMENTS` array. Then add the unlock check logic in `store/gameStore.ts` inside the `checkAchievements` function.

---

<a id="francais"></a>

## Francais

### Presentation

Element Fusion est un jeu de puzzle dans le navigateur ou les joueurs combinent des elements de base (Eau, Feu, Terre, Air) pour en decouvrir de plus complexes. Le jeu propose une interface glassmorphism avec effets neon, du drag-and-drop, un mode tap-to-fuse sur mobile et un support offline complet via Progressive Web App (PWA).

**Demo en ligne :** https://element-fusion.vercel.app

### Fonctionnalites principales

- **47 elements a decouvrir** sur 4 niveaux (tiers), organises en 5 categories
- **55 combinaisons** de fusion avec plusieurs chemins de decouverte
- **Drag & Drop** sur le workspace (desktop) + **Tap-to-Fuse** (mobile)
- **Fusion par slots** avec retour visuel (succes, echec, deja connu)
- **Onboarding en 3 etapes** pour les nouveaux joueurs
- **12 succes** a debloquer (jalons de decouverte, nombre de fusions, indices, tiers)
- **Systeme d'indices** suggerant la prochaine fusion possible
- **Encyclopedie** listant tous les elements decouverts
- **Effets sonores** via Web Audio API (synthetises, aucun fichier audio)
- **PWA** avec service worker pour jouer hors ligne
- **Design responsive :** desktop (sidebar 420px), tablette (360px), mobile (bottom sheet)
- **Sauvegarde** de la progression dans localStorage

### Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | React 18 + Tailwind CSS v4 |
| Gestion d'etat | Zustand v5 |
| Drag & Drop | @dnd-kit/core |
| Animations | Framer Motion + keyframes CSS |
| Audio | Web Audio API (sans fichiers externes) |
| Base de donnees | Supabase (optionnel, avec fallback offline) |
| PWA | next-pwa (service worker) |
| Langage | TypeScript 5 (mode strict) |
| Linting | ESLint 8 + eslint-config-next |
| Tests | Vitest + Playwright |
| Deploiement | Vercel |

### Demarrage rapide

#### Prerequis

- **Node.js** >= 18
- **npm** >= 9

#### Installation

```bash
# Cloner le depot
git clone https://github.com/CustomDigitalServices-Kevin/Element-Fusion.git
cd Element-Fusion

# Installer les dependances
npm install

# Lancer le serveur de developpement
npm run dev
```

Le jeu tourne sur `http://localhost:3000` avec les donnees de fallback integrees (aucune base de donnees requise).

#### Variables d'environnement (optionnel)

Copier `.env.local.example` en `.env.local` pour connecter une base Supabase :

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon
```

**Sans ces variables, le jeu fonctionne en mode offline** avec les donnees de fallback integrees (47 elements, 55 combinaisons). La connexion Supabase est entierement optionnelle et n'est necessaire que pour etendre la base d'elements cote serveur.

#### Schema de la base Supabase

Pour mettre en place un backend Supabase, creer ces 3 tables :

```sql
-- Categories
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT NOT NULL,       -- couleur hex (ex: #4CAF50)
  icon TEXT NOT NULL          -- emoji (ex: 🌿)
);

-- Elements
CREATE TABLE elements (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  emoji TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  is_base BOOLEAN DEFAULT false,
  tier INTEGER DEFAULT 0,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Combinaisons
CREATE TABLE combinations (
  id SERIAL PRIMARY KEY,
  element1_id INTEGER NOT NULL REFERENCES elements(id),
  element2_id INTEGER NOT NULL REFERENCES elements(id),
  result_id INTEGER NOT NULL REFERENCES elements(id)
);
```

### Commandes disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lancer le serveur de developpement (port 3000) |
| `npm run build` | Build de production (Next.js + PWA) |
| `npm run start` | Lancer le serveur de production |
| `npm run lint` | Lancer ESLint |
| `npm run test` | Lancer les tests unitaires (Vitest) |
| `npm run test:coverage` | Lancer les tests avec rapport de couverture |
| `npm run test:e2e` | Lancer les tests E2E (Playwright) |

### Donnees du jeu

| Donnees | Nombre |
|---|---|
| Elements de base | 4 (Eau, Feu, Terre, Air) |
| Total elements | 47 |
| Niveaux d'elements | 4 (Tier 0 a Tier 3) |
| Combinaisons | 55 |
| Categories | 5 (Nature, Technologie, Vie, Nourriture, Mythologie) |
| Succes | 12 |

### Categories et elements

| Categorie | Couleur | Icone | Exemples d'elements |
|---|---|---|---|
| Nature | #4CAF50 | 🌿 | Plante, Arbre, Foret, Montagne, Ocean |
| Technologie | #2196F3 | ⚡ | Metal, Brique, Mur, Verre |
| Vie | #E91E63 | ❤️ | Animal, Poisson, Oiseau, Champignon |
| Nourriture | #FF9800 | 🍎 | Ble, Sel, Algue |
| Mythologie | #9C27B0 | ✨ | Soleil, Lune, Arc-en-ciel |

### Arbre de decouverte (exemples)

```
Eau + Feu       = Vapeur
Eau + Terre     = Boue
Feu + Terre     = Lave
Feu + Air       = Fumee
Eau + Air       = Pluie
Lave + Eau      = Pierre
Lave + Air      = Obsidienne
Vapeur + Air    = Nuage
Pierre + Feu    = Metal
Plante + Riviere = Animal
Eau + Animal    = Poisson
Air + Animal    = Oiseau
Arbre + Arbre   = Foret
Pierre + Pierre = Montagne
```

### Decisions architecturales

- **Lookup des combinaisons :** Utilise une `Map<string, number>` avec des cles au format `"min(id1,id2)-max(id1,id2)"` pour un lookup O(1) quel que soit l'ordre des elements
- **Gestion d'etat :** Zustand v5 avec souscriptions selectives pour eviter les re-rendus inutiles
- **Offline-first :** Toutes les donnees du jeu sont integrees en tant que module TypeScript de fallback ; Supabase est interroge en premier avec fallback automatique en cas d'erreur
- **Audio :** Genere proceduralement avec les oscillateurs Web Audio API (aucun fichier audio a charger)
- **Animations :** Accelerees GPU (transform + opacity uniquement) ; respecte `prefers-reduced-motion`
- **Securite :** Headers CSP, HSTS, X-Frame-Options DENY, Permissions-Policy restrictif
- **PWA :** Service worker auto-genere par next-pwa ; manifest en mode standalone

### Deploiement (Vercel)

Le projet est deploye sur Vercel avec deploiement automatique a chaque push sur `main`.

1. Connecter le depot GitHub a Vercel
2. (Optionnel) Configurer les variables d'environnement dans les settings du projet Vercel
3. Chaque push sur `main` declenche un deploiement automatique

Aucune configuration supplementaire n'est necessaire. Le build passe `next build`, `tsc --noEmit` et `next lint` avec 0 erreurs.

### Comment etendre le jeu

#### Ajouter de nouveaux elements

Editer `lib/supabase/fallback.ts` :

1. Ajouter l'element dans le tableau `elements` (choisir un `id`, `emoji`, `categoryId` et `tier`)
2. Ajouter les combinaisons dans le tableau `combinations` (`element1_id` + `element2_id` = `result_id`)
3. Mettre a jour la constante `TOTAL_ELEMENTS` dans `components/game/InventoryPanel.tsx` (actuellement 90)

#### Ajouter de nouvelles categories

Ajouter une entree dans le tableau `categories` de `lib/supabase/fallback.ts` avec un `id` unique, `name`, `color` (hex) et `icon` (emoji).

#### Ajouter de nouveaux succes

Editer `lib/game/achievements.ts` et ajouter une entree dans le tableau `ACHIEVEMENTS`. Puis ajouter la logique de deblocage dans `store/gameStore.ts` dans la fonction `checkAchievements`.

---

### Structure du projet

```
element-fusion/
├── app/
│   ├── globals.css              # Theme Tailwind, animations, classes glassmorphism
│   ├── layout.tsx               # Layout racine, metadata, polices (Inter)
│   └── page.tsx                 # Page principale (contexte DnD, layout, tap-to-fuse)
│
├── components/
│   ├── game/                    # Composants du jeu
│   │   ├── DraggableElement.tsx  # Wrapper draggable @dnd-kit
│   │   ├── ElementCard.tsx       # Carte element (tailles sm/md/lg/list, glassmorphism)
│   │   ├── EncyclopediaView.tsx  # Modale catalogue complet
│   │   ├── FusionResultModal.tsx # Popup succes/decouverte avec particules
│   │   ├── Header.tsx            # Barre superieure (progression, indices, encyclopedie, reset)
│   │   ├── InventoryPanel.tsx    # Sidebar gauche (recherche, tri, categories, grille)
│   │   ├── OnboardingOverlay.tsx # Tutoriel 3 etapes (premiere visite)
│   │   └── WorkspaceZone.tsx     # Zone de fusion avec 2 slots + retour visuel
│   │
│   ├── effects/                 # Effets visuels et sonores
│   │   ├── AchievementToast.tsx       # Notification de succes debloque
│   │   ├── ConfettiEffect.tsx         # Confettis de celebration
│   │   ├── ElementAppear.tsx          # Animation d'apparition d'element
│   │   ├── FusionParticles.tsx        # Explosion de particules lors de la fusion
│   │   ├── ProgressBarAnimation.tsx   # Lueur animee de la barre de progression
│   │   ├── ShakeAnimation.tsx         # Tremblement lors d'un echec de fusion
│   │   └── SoundToggle.tsx            # Bouton muet/son
│   │
│   └── ui/                      # Composants UI reutilisables
│       ├── Badge.tsx, Button.tsx, CategoryPill.tsx, Modal.tsx
│       ├── ProgressBar.tsx, SearchBar.tsx, Tooltip.tsx
│       └── index.ts
│
├── hooks/                       # Hooks React custom
│   ├── useAnimations.ts, useFusion.ts, useGameInit.ts
│   ├── useLocalStorage.ts, useResponsive.ts
│
├── lib/
│   ├── audio/audioManager.ts    # Web Audio API (5 sons synthetises)
│   ├── game/                    # Logique de jeu
│   │   ├── achievements.ts      # 12 succes avec conditions de deblocage
│   │   ├── combinationsMap.ts   # Lookup O(1) des fusions (Map "min-max")
│   │   ├── hints.ts             # Generateur d'indices
│   │   └── localStorage.ts      # Sauvegarde/chargement progression
│   └── supabase/                # Couche donnees
│       ├── client.ts            # Client Supabase (init lazy, optionnel)
│       ├── fallback.ts          # 47 elements + 55 combinaisons (donnees offline)
│       └── queries.ts           # Requetes DB avec cache memoire + fallback auto
│
├── store/gameStore.ts           # Store Zustand (elements, workspace, fusion, stats)
├── types/game.ts                # Types TypeScript du jeu
├── types/database.ts            # Types du schema Supabase
├── middleware.ts                # Headers de securite (CSP, HSTS, X-Frame-Options)
├── next.config.js               # Config Next.js + PWA + securite
└── package.json                 # Dependances et scripts
```

---

<div align="center">

**Built by [Custom Digital Services](https://github.com/CustomDigitalServices-Kevin)**

</div>
