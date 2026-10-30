# 📂 Structure du Projet

## 🗂️ Arborescence Complète

```
site-mounira/
│
├── 📁 app/                          # Application Next.js (App Router)
│   ├── 📁 components/              # (Vide - peut être utilisé pour des composants page-specific)
│   ├── 📄 favicon.ico              # Icône du site (change-la si tu veux)
│   ├── 📄 globals.css              # Styles globaux + Tailwind
│   ├── 📄 layout.tsx               # Layout principal + métadonnées SEO
│   └── 📄 page.tsx                 # Page d'accueil (toutes les sections)
│
├── 📁 components/                   # ⭐ Composants réutilisables
│   ├── 📄 Counter.tsx              # Compteur temps réel
│   ├── 📄 FloatingElements.tsx     # Cœurs et pétales animés
│   ├── 📄 Gallery.tsx              # Galerie photos + lightbox
│   ├── 📄 Hero.tsx                 # Section hero plein écran
│   ├── 📄 ImageWithFallback.tsx    # Gestion images avec placeholder
│   ├── 📄 LoveMessages.tsx         # Messages d'amour animés
│   ├── 📄 Surprise.tsx             # Bouton surprise + confettis
│   └── 📄 Timeline.tsx             # Timeline de votre histoire
│
├── 📁 data/                         # ⭐ Données centralisées
│   └── 📄 content.ts               # FICHIER PRINCIPAL - Tout le contenu ici !
│
├── 📁 public/                       # Fichiers statiques (accessibles publiquement)
│   └── 📁 photos/                  # ⭐ Tes photos personnelles
│       ├── 📄 .gitkeep             # Maintient le dossier dans Git
│       ├── 📄 README.md            # Instructions pour les photos
│       │
│       ├── 📸 rencontre.jpg        # (À ajouter) Photo timeline 1
│       ├── 📸 premier-rdv.jpg      # (À ajouter) Photo timeline 2
│       ├── 📸 voyage.jpg           # (À ajouter) Photo timeline 3
│       ├── 📸 special.jpg          # (À ajouter) Photo timeline 4
│       │
│       ├── 📸 photo1.jpg           # (À ajouter) Galerie photo 1
│       ├── 📸 photo2.jpg           # (À ajouter) Galerie photo 2
│       ├── 📸 photo3.jpg           # (À ajouter) Galerie photo 3
│       ├── 📸 photo4.jpg           # (À ajouter) Galerie photo 4
│       ├── 📸 photo5.jpg           # (À ajouter) Galerie photo 5
│       ├── 📸 photo6.jpg           # (À ajouter) Galerie photo 6
│       │
│       └── 📸 og-image.jpg         # (Optionnel) Image partage social
│
├── 📁 node_modules/                 # Dépendances (générées automatiquement)
│
├── 📄 .gitignore                    # Fichiers à ignorer par Git
├── 📄 eslint.config.mjs            # Configuration ESLint
├── 📄 next.config.ts               # Configuration Next.js
├── 📄 next-env.d.ts                # Types Next.js (généré auto)
├── 📄 package.json                 # Dépendances et scripts
├── 📄 tailwind.config.ts           # ⭐ Configuration Tailwind (couleurs)
├── 📄 tsconfig.json                # Configuration TypeScript
├── 📄 vercel.json                  # Configuration déploiement Vercel
│
└── 📚 Documentation/
    ├── 📄 README.md                # Documentation principale complète
    ├── 📄 DEMARRAGE-RAPIDE.md      # Guide de démarrage rapide
    ├── 📄 PERSONNALISATION.md      # Guide de personnalisation détaillé
    ├── 📄 DEPLOIEMENT.md           # Guide de déploiement complet
    ├── 📄 CHECKLIST.md             # Checklist des tâches à faire
    └── 📄 STRUCTURE.md             # Ce fichier !
```

---

## 📝 Fichiers à Modifier (Par Priorité)

### 1️⃣ PRIORITÉ HAUTE (Obligatoire)

#### `data/content.ts`
**Le fichier le plus important !** Contient TOUT le contenu du site.

Modifie :
- ✏️ Métadonnées (titre, description)
- ✏️ Textes du Hero
- ✏️ Timeline (dates, titres, descriptions)
- ✏️ Légendes de la galerie
- ✏️ Messages d'amour (4 cartes)
- ✏️ Date du compteur (`startDate` ⚠️ IMPORTANT)
- ✏️ Message de la surprise finale

#### `/public/photos/`
Ajoute tes 10 photos :
- 📸 4 photos pour la timeline
- 📸 6 photos pour la galerie

---

### 2️⃣ PRIORITÉ MOYENNE (Recommandé)

#### `tailwind.config.ts`
Change les couleurs si tu veux une autre palette :
```typescript
romantic: {
  pink: "#f5d5e0",      // Couleur 1
  rose: "#f8b4c8",      // Couleur 2
  burgundy: "#8b1538",  // Couleur 3
  gold: "#d4af37",      // Couleur 4
  lightGold: "#f4e4c1", // Couleur 5
}
```

#### `app/layout.tsx`
Après déploiement, change la ligne 5 :
```typescript
metadataBase: new URL('https://TON-URL.vercel.app'),
```

---

### 3️⃣ PRIORITÉ BASSE (Optionnel)

#### Favicon
Remplace `app/favicon.ico` par ton propre favicon (16x16 ou 32x32 pixels).

#### Image de partage social
Ajoute `public/og-image.jpg` (1200x630 pixels) pour le partage Facebook/Twitter.

---

## 🚫 Fichiers à NE PAS Modifier

❌ `node_modules/` - Dossier généré automatiquement
❌ `next-env.d.ts` - Généré automatiquement
❌ `.next/` - Build généré (si tu fais `npm run build`)
❌ `tsconfig.json` - Configuration TypeScript (sauf si tu es avancé)
❌ `eslint.config.mjs` - Configuration ESLint (sauf si tu es avancé)
❌ `package.json` - Dépendances (sauf ajout de packages)

---

## 📦 Dépendances Installées

### Production
- **next** 16.4.3 - Framework React
- **react** 19.3.0 - Bibliothèque UI
- **react-dom** 19.3.0 - React pour le DOM
- **framer-motion** 11.15.0 - Animations
- **canvas-confetti** 1.9.3 - Effet confettis

### Développement
- **typescript** 5.x - Typage JavaScript
- **tailwindcss** 4.x - Framework CSS
- **eslint** 9.x - Linter
- **@types/*** - Types TypeScript

---

## 🎯 Composants Principaux

### `Hero.tsx`
Section plein écran avec :
- Grand titre animé
- Sous-titre
- Animation de scroll

### `Timeline.tsx`
Timeline interactive avec :
- Photos gauche/droite alternées
- Dates + titres + descriptions
- Animations au scroll

### `Gallery.tsx`
Galerie photos avec :
- Grille responsive (1/2/3 colonnes)
- Lightbox au clic
- Navigation prev/next
- Légendes

### `LoveMessages.tsx`
Messages d'amour avec :
- 4 cartes en grille
- Effet glassmorphism
- Animations de révélation

### `Counter.tsx`
Compteur temps réel :
- Jours / Heures / Minutes / Secondes
- Mise à jour chaque seconde
- Design avec glassmorphism

### `Surprise.tsx`
Surprise finale :
- Bouton animé
- Confettis multicolores
- Message révélé

### `FloatingElements.tsx`
Arrière-plan animé :
- 15 cœurs flottants
- 20 pétales tombants
- Mouvements aléatoires

### `ImageWithFallback.tsx`
Gestion intelligente des images :
- Affiche un placeholder si l'image manque
- Dégradé rose + cœur
- Optimisation automatique

---

## 🎨 Système de Design

### Couleurs
```css
romantic-pink      #f5d5e0  (Fond clair)
romantic-rose      #f8b4c8  (Éléments secondaires)
romantic-burgundy  #8b1538  (Titres, texte principal)
romantic-gold      #d4af37  (Accents dorés)
romantic-lightGold #f4e4c1  (Fond doux)
```

### Typographie
- **Titres :** Playfair Display (serif élégante)
- **Texte :** Inter (sans-serif moderne)

### Effets
- Glassmorphism (fond flou + transparence)
- Dégradés doux
- Ombres élégantes
- Animations Framer Motion

---

## 🔧 Scripts Disponibles

```bash
npm run dev       # Lancer en développement (http://localhost:3000)
npm run build     # Compiler pour production
npm start         # Lancer en production (après build)
npm run lint      # Vérifier le code
```

---

## 📚 Documentation

- **README.md** : Vue d'ensemble complète
- **DEMARRAGE-RAPIDE.md** : Démarrer en 5 minutes
- **PERSONNALISATION.md** : Guide détaillé de personnalisation
- **DEPLOIEMENT.md** : Mettre en ligne sur Vercel
- **CHECKLIST.md** : Liste de vérification avant déploiement
- **STRUCTURE.md** : Ce fichier (architecture du projet)

---

## 🎓 Technologies Utilisées

| Technologie | Usage | Documentation |
|-------------|-------|---------------|
| **Next.js 16** | Framework React | [nextjs.org](https://nextjs.org) |
| **TypeScript** | Typage statique | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Tailwind CSS** | Framework CSS | [tailwindcss.com](https://tailwindcss.com) |
| **Framer Motion** | Animations | [framer.com/motion](https://www.framer.com/motion/) |
| **Canvas Confetti** | Effet confettis | [github.com/catdad/canvas-confetti](https://github.com/catdad/canvas-confetti) |

---

**Ce projet est prêt à être personnalisé et déployé ! 🚀💕**
