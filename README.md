# Site Romantique pour Mounira ❤️

Un site web romantique, moderne et créatif créé avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## 🎨 Caractéristiques

- **Design romantique** : Palette de couleurs rose poudré, bordeaux profond et or doux
- **Animations fluides** : Effets de scroll, glassmorphism, et éléments flottants (cœurs et pétales)
- **Hero plein écran** avec phrase d'accroche animée
- **Timeline interactive** montrant votre histoire
- **Galerie photos** avec lightbox au clic
- **Messages d'amour** avec cartes révélées au scroll
- **Compteur en temps réel** (jours, heures, minutes, secondes)
- **Surprise finale** avec confettis animés
- **100% Responsive** : Mobile-first et parfaitement adapté à tous les écrans

## 📁 Structure du Projet

```
site-mounira/
├── app/
│   ├── layout.tsx        # Layout principal avec métadonnées
│   ├── page.tsx          # Page d'accueil
│   └── globals.css       # Styles globaux
├── components/
│   ├── Hero.tsx          # Section hero
│   ├── Timeline.tsx      # Timeline de votre histoire
│   ├── Gallery.tsx       # Galerie photos avec lightbox
│   ├── LoveMessages.tsx  # Messages d'amour
│   ├── Counter.tsx       # Compteur temps réel
│   ├── Surprise.tsx      # Surprise avec confettis
│   ├── FloatingElements.tsx  # Cœurs et pétales animés
│   └── ImageWithFallback.tsx # Gestion images avec fallback
├── data/
│   └── content.ts        # ⭐ FICHIER CENTRAL DE CONTENU
└── public/
    └── photos/           # Tes photos personnelles
```

## 🚀 Installation et Démarrage

### 1. Installer les dépendances

```bash
npm install
```

### 2. Ajouter tes photos

Place tes photos dans le dossier `public/photos/` avec les noms suivants :

**Pour la Timeline :**
- `rencontre.jpg`
- `premier-rdv.jpg`
- `voyage.jpg`
- `special.jpg`

**Pour la Galerie :**
- `photo1.jpg` à `photo6.jpg`

> **Note :** Si tu n'as pas encore de photos, le site affichera des placeholders avec un dégradé romantique et un cœur.

### 3. Personnaliser le contenu

Ouvre le fichier `data/content.ts` et modifie :

- Les **textes** de chaque section
- Les **dates** de la timeline et du compteur
- Les **messages d'amour**
- La **surprise finale**
- Les **légendes des photos**

```typescript
// Exemple : Modifier la date de début du compteur
counter: {
  startDate: "2024-02-14T00:00:00", // ⬅️ Change cette date
}
```

### 4. Lancer en développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### 5. Build pour production

```bash
npm run build
npm start
```

## 🌐 Déploiement sur Vercel

### Méthode 1 : Via GitHub (Recommandé)

1. Crée un repository GitHub et push ton code :
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ton-username/site-mounira.git
git push -u origin main
```

2. Va sur [vercel.com](https://vercel.com)
3. Clique sur "Import Project"
4. Sélectionne ton repository GitHub
5. Vercel détectera automatiquement Next.js et configurera tout
6. Clique sur "Deploy"

### Méthode 2 : Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Suis les instructions dans le terminal.

### Configuration Vercel

Aucune configuration spéciale n'est nécessaire ! Vercel optimise automatiquement Next.js.

## 🎨 Personnalisation Avancée

### Changer les couleurs

Modifie `tailwind.config.ts` :

```typescript
colors: {
  romantic: {
    pink: "#f5d5e0",      // Rose poudré
    rose: "#f8b4c8",      // Rose
    burgundy: "#8b1538",  // Bordeaux
    gold: "#d4af37",      // Or
    lightGold: "#f4e4c1", // Or clair
  },
}
```

### Ajouter plus d'étapes à la Timeline

Dans `data/content.ts`, ajoute des objets dans le tableau `timeline` :

```typescript
timeline: [
  // ... étapes existantes
  {
    id: 5,
    date: "1 Juillet 2024",
    title: "Nouvelle étape",
    description: "Description de ce moment...",
    image: "/photos/nouvelle-etape.jpg",
  },
]
```

### Ajouter plus de photos à la Galerie

Dans `data/content.ts`, ajoute des objets dans le tableau `gallery` :

```typescript
gallery: [
  // ... photos existantes
  {
    id: 7,
    src: "/photos/photo7.jpg",
    alt: "Description",
    caption: "Légende de la photo",
  },
]
```

### Modifier les messages d'amour

Dans `data/content.ts`, personnalise le tableau `loveMessages` :

```typescript
loveMessages: [
  {
    id: 1,
    title: "Ton titre",
    message: "Ton message personnel...",
    icon: "💕", // Change l'emoji
  },
]
```

## 📱 Accessibilité

Le site respecte les bonnes pratiques d'accessibilité :
- Labels ARIA sur les boutons
- Navigation au clavier
- Contraste de couleurs optimal
- Support du mode réduit de mouvement
- Images avec textes alternatifs

## 🎉 Fonctionnalités Techniques

- **Next.js 15** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **canvas-confetti** pour l'effet confettis
- **next/image** pour l'optimisation des images
- **Métadonnées Open Graph** pour le partage sur réseaux sociaux

## 📝 License

Ce projet est créé pour un usage personnel. Libre à toi de le modifier et de l'adapter ! ❤️

---

**Créé avec amour pour Mounira 💕**
