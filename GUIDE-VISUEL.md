# 🎨 Guide Visuel - Site Romantique

## 🚀 3 Étapes pour Commencer

```
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 1 : INSTALLER                                    │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Dans le terminal :                                      │
│  > npm install                                           │
│                                                          │
│  ⏱️ Durée : 2-3 minutes                                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 2 : PERSONNALISER                                │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  📝 Ouvre : data/content.ts                              │
│  → Change tous les textes                               │
│  → Modifie la date du compteur                          │
│                                                          │
│  📸 Ajoute dans : public/photos/                         │
│  → 4 photos timeline                                     │
│  → 6 photos galerie                                      │
│                                                          │
│  ⏱️ Durée : 10-15 minutes                                │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 3 : LANCER                                       │
│  ─────────────────────────────────────────────────────  │
│                                                          │
│  Dans le terminal :                                      │
│  > npm run dev                                           │
│                                                          │
│  Ouvre ton navigateur :                                  │
│  👉 http://localhost:3000                                │
│                                                          │
│  ⏱️ Durée : 30 secondes                                  │
└─────────────────────────────────────────────────────────┘
```

---

## 📂 Fichiers Importants

```
┌──────────────────────────────────────────────────────┐
│  ⭐⭐⭐ FICHIER LE PLUS IMPORTANT ⭐⭐⭐              │
│  ───────────────────────────────────────────────────  │
│                                                       │
│  📄 data/content.ts                                   │
│                                                       │
│  → Contient TOUT le texte du site                    │
│  → Dates de la timeline                              │
│  → Messages d'amour                                   │
│  → Date du compteur                                   │
│  → Légendes des photos                               │
│  → Surprise finale                                    │
│                                                       │
│  💡 Change seulement ce fichier pour personnaliser ! │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  📸 DOSSIER DES PHOTOS                               │
│  ───────────────────────────────────────────────────  │
│                                                       │
│  📁 public/photos/                                    │
│                                                       │
│  Timeline (4 photos) :                               │
│  ✓ rencontre.jpg                                     │
│  ✓ premier-rdv.jpg                                   │
│  ✓ voyage.jpg                                        │
│  ✓ special.jpg                                       │
│                                                       │
│  Galerie (6 photos) :                                │
│  ✓ photo1.jpg                                        │
│  ✓ photo2.jpg                                        │
│  ✓ photo3.jpg                                        │
│  ✓ photo4.jpg                                        │
│  ✓ photo5.jpg                                        │
│  ✓ photo6.jpg                                        │
│                                                       │
│  💡 Pas de photos ? Des placeholders s'affichent !   │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  🎨 CHANGER LES COULEURS                             │
│  ───────────────────────────────────────────────────  │
│                                                       │
│  📄 tailwind.config.ts                                │
│                                                       │
│  Section "romantic" :                                │
│  → pink: "#f5d5e0"      (Fond clair)                 │
│  → rose: "#f8b4c8"      (Éléments)                   │
│  → burgundy: "#8b1538"  (Titres)                     │
│  → gold: "#d4af37"      (Accents)                    │
│  → lightGold: "#f4e4c1" (Fond doux)                  │
│                                                       │
│  💡 Change les codes couleur hexadécimaux !          │
└──────────────────────────────────────────────────────┘
```

---

## 🎯 Sections du Site

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  🌸 HERO (Section d'Accueil)                                 │
│  ────────────────────────────────────────────────────────    │
│  • Grand titre "Pour Mounira ❤️"                             │
│  • Sous-titre animé                                          │
│  • Fond dégradé rose + cœurs décoratifs                      │
│  • Animation de scroll                                       │
│                                                               │
│  📝 Modifiable dans : data/content.ts → hero                 │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  📅 TIMELINE (Notre Histoire)                                │
│  ────────────────────────────────────────────────────────    │
│  • 4 étapes importantes                                      │
│  • Photos alternées gauche/droite                            │
│  • Dates + titres + descriptions                             │
│  • Animations au scroll                                      │
│                                                               │
│  📝 Modifiable dans : data/content.ts → timeline             │
│  📸 Photos dans : public/photos/ (4 photos)                  │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  📸 GALERIE (Nos Souvenirs)                                  │
│  ────────────────────────────────────────────────────────    │
│  • Grille de 6 photos                                        │
│  • Lightbox au clic                                          │
│  • Navigation prev/next                                      │
│  • Légendes sur chaque photo                                 │
│                                                               │
│  📝 Modifiable dans : data/content.ts → gallery              │
│  📸 Photos dans : public/photos/ (6 photos)                  │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  💌 MESSAGES D'AMOUR                                         │
│  ────────────────────────────────────────────────────────    │
│  • 4 cartes avec messages personnels                         │
│  • Effet glassmorphism                                       │
│  • Icônes emoji                                              │
│  • Révélation au scroll                                      │
│                                                               │
│  📝 Modifiable dans : data/content.ts → loveMessages         │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  ⏱️ COMPTEUR (Ensemble depuis...)                            │
│  ────────────────────────────────────────────────────────    │
│  • Temps réel : jours, heures, minutes, secondes             │
│  • Mise à jour chaque seconde                                │
│  • Design avec cartes glassmorphism                          │
│  • Cœurs animés en arrière-plan                              │
│                                                               │
│  📝 Modifiable dans : data/content.ts → counter              │
│  ⚠️ IMPORTANT : Vérifie la date startDate !                  │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  🎉 SURPRISE FINALE                                          │
│  ────────────────────────────────────────────────────────    │
│  • Bouton avec dégradé animé                                 │
│  • Confettis multicolores au clic                            │
│  • Message secret révélé                                     │
│  • Effet brillant                                            │
│                                                               │
│  📝 Modifiable dans : data/content.ts → surprise             │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

---

## 🌐 Déploiement Vercel

```
┌────────────────────────────────────────────────────────┐
│  MÉTHODE SIMPLE (5 minutes)                            │
│  ──────────────────────────────────────────────────    │
│                                                         │
│  1️⃣ Push sur GitHub                                    │
│     git init                                            │
│     git add .                                           │
│     git commit -m "Site pour Mounira ❤️"                │
│     git remote add origin https://github.com/...       │
│     git push -u origin main                            │
│                                                         │
│  2️⃣ Va sur vercel.com                                  │
│     → Sign Up / Login                                  │
│     → Continue with GitHub                             │
│     → Import Project                                   │
│     → Sélectionne "site-mounira"                       │
│     → Deploy                                           │
│                                                         │
│  3️⃣ C'est en ligne ! 🎉                                │
│     Tu reçois une URL :                                │
│     https://site-mounira.vercel.app                    │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

## 📚 Documentation

```
┌─────────────────────────────────────────────────┐
│  QUEL FICHIER LIRE ?                            │
│  ───────────────────────────────────────────    │
│                                                  │
│  👉 START-HERE.md                                │
│     → Commence ici ! Guide de démarrage         │
│                                                  │
│  📖 DEMARRAGE-RAPIDE.md                          │
│     → Guide complet en 5 étapes                 │
│                                                  │
│  🎨 PERSONNALISATION.md                          │
│     → Changer couleurs, textes, animations      │
│                                                  │
│  🚀 DEPLOIEMENT.md                               │
│     → Mettre en ligne sur Vercel                │
│                                                  │
│  ✅ CHECKLIST.md                                 │
│     → Liste de vérification avant déploiement   │
│                                                  │
│  📂 STRUCTURE.md                                 │
│     → Architecture complète du projet           │
│                                                  │
│  📘 README.md                                    │
│     → Documentation technique détaillée         │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 🎨 Exemple de Personnalisation

### ✏️ Changer le Titre

**Fichier :** `data/content.ts`

```typescript
hero: {
  title: "Pour Mounira ❤️",        // ⬅️ Change ici
  subtitle: "Mon amour éternel",   // ⬅️ Et ici
  scrollText: "Découvre..."        // ⬅️ Et ici
}
```

### 📅 Modifier une Étape Timeline

**Fichier :** `data/content.ts`

```typescript
timeline: [
  {
    id: 1,
    date: "14 Février 2024",              // ⬅️ Ta date
    title: "Notre Première Rencontre",    // ⬅️ Ton titre
    description: "Ce jour magique où...", // ⬅️ Ta description
    image: "/photos/rencontre.jpg",       // ⬅️ Ta photo
  },
  // ... autres étapes
]
```

### ⏱️ Changer la Date du Compteur

**Fichier :** `data/content.ts`

```typescript
counter: {
  startDate: "2024-02-14T00:00:00",  // ⬅️ Format : YYYY-MM-DDTHH:MM:SS
}
```

### 💌 Personnaliser un Message

**Fichier :** `data/content.ts`

```typescript
loveMessages: [
  {
    id: 1,
    title: "Tu es ma lumière",      // ⬅️ Ton titre
    message: "Ton message ici...",  // ⬅️ Ton message
    icon: "☀️",                      // ⬅️ Change l'emoji
  },
]
```

---

## 💡 Astuces Rapides

```
┌──────────────────────────────────────────────────┐
│  ⚡ RACCOURCIS UTILES                            │
│  ────────────────────────────────────────────    │
│                                                   │
│  Lancer en dev :                                 │
│  > npm run dev                                   │
│                                                   │
│  Build production :                              │
│  > npm run build                                 │
│                                                   │
│  Tester le build :                               │
│  > npm run build && npm start                    │
│                                                   │
│  Hot reload automatique 🔥                       │
│  → Le site se recharge quand tu sauvegardes      │
│                                                   │
└──────────────────────────────────────────────────┘
```

---

## 🎉 Résultat Final

```
┌────────────────────────────────────────────────────────┐
│                                                         │
│  ✨ Un magnifique site romantique avec :               │
│                                                         │
│  ✓ Design moderne et élégant                           │
│  ✓ Animations fluides                                  │
│  ✓ 100% personnalisable                                │
│  ✓ Responsive (mobile/tablette/desktop)                │
│  ✓ Rapide et optimisé                                  │
│  ✓ Prêt pour Vercel                                    │
│  ✓ Documentation complète                              │
│                                                         │
│  🌍 Accessible partout dans le monde                   │
│  💕 Créé avec amour pour Mounira                       │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

**Bonne création ! 🌹💕✨**
