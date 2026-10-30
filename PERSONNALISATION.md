# 🎨 Guide de Personnalisation Complet

## 📝 Modifier le contenu (FACILE)

Tout le contenu se trouve dans **un seul fichier** : `data/content.ts`

### 1. Métadonnées du site

```typescript
metadata: {
  title: "Pour Mounira ❤️",           // ⬅️ Titre de l'onglet du navigateur
  description: "...",                  // ⬅️ Description pour les moteurs de recherche
  ogImage: "/og-image.jpg",           // ⬅️ Image de partage (1200x630px)
}
```

### 2. Section Hero (première section)

```typescript
hero: {
  title: "Pour Mounira ❤️",           // ⬅️ Grand titre principal
  subtitle: "Chaque jour avec toi...", // ⬅️ Sous-titre
  scrollText: "Découvre notre histoire", // ⬅️ Texte au-dessus de la souris
}
```

### 3. Timeline (Notre Histoire)

```typescript
timeline: [
  {
    id: 1,                             // Ne pas changer (numéro unique)
    date: "14 Février 2024",           // ⬅️ Date affichée
    title: "Notre Première Rencontre", // ⬅️ Titre de l'étape
    description: "Le jour où...",      // ⬅️ Description
    image: "/photos/rencontre.jpg",    // ⬐ Nom de la photo
  },
  // Ajoute d'autres étapes ici...
]
```

**Pour ajouter une étape :**
1. Copie un bloc complet (de `{` à `},`)
2. Change le `id` (5, 6, 7...)
3. Modifie date, titre, description
4. Ajoute la photo correspondante dans `/public/photos/`

### 4. Galerie Photos

```typescript
gallery: [
  {
    id: 1,
    src: "/photos/photo1.jpg",         // ⬅️ Chemin de l'image
    alt: "Nous deux ensemble",         // ⬅️ Description (accessibilité)
    caption: "Un sourire...",          // ⬅️ Texte affiché sur la photo
  },
  // Ajoute d'autres photos...
]
```

**Pour ajouter des photos :**
1. Copie un bloc complet
2. Change le `id`
3. Nomme ta photo (ex: `photo7.jpg`)
4. Ajoute-la dans `/public/photos/`

### 5. Messages d'Amour

```typescript
loveMessages: [
  {
    id: 1,
    title: "Tu es ma lumière",         // ⬅️ Titre du message
    message: "Dans les moments...",    // ⬅️ Ton message d'amour
    icon: "☀️",                         // ⬅️ Emoji (change si tu veux)
  },
]
```

**Emojis romantiques :**
💕 💖 💗 💝 💘 💞 ❤️ 🌹 🌺 🌸 ✨ 💫 ⭐ 🌟 ☀️ 🌈

### 6. Compteur

```typescript
counter: {
  title: "Ensemble depuis...",
  startDate: "2024-02-14T00:00:00",   // ⬅️ IMPORTANT : Ta vraie date de début
  labels: {
    days: "jours",                     // ⬅️ Peut être changé
    hours: "heures",
    minutes: "minutes",
    seconds: "secondes",
  },
}
```

**Format de date :** `YYYY-MM-DDTHH:MM:SS` (Année-Mois-Jour T Heure:Minute:Seconde)

Exemples :
- `"2024-02-14T00:00:00"` = 14 février 2024 à minuit
- `"2023-12-25T18:30:00"` = 25 décembre 2023 à 18h30

### 7. Surprise Finale

```typescript
surprise: {
  buttonText: "Clique pour une surprise ✨", // ⬅️ Texte du bouton
  title: "Pour toi, mon amour",             // ⬅️ Titre du message
  message: "Je t'aime plus que...",         // ⬅️ Ton message spécial
}
```

## 🎨 Changer les couleurs

Ouvre `tailwind.config.ts` et modifie :

```typescript
colors: {
  romantic: {
    pink: "#f5d5e0",      // Rose poudré (fond clair)
    rose: "#f8b4c8",      // Rose (éléments secondaires)
    burgundy: "#8b1538",  // Bordeaux profond (titres)
    gold: "#d4af37",      // Or (accents)
    lightGold: "#f4e4c1", // Or clair (fond doux)
  },
}
```

**Palettes alternatives :**

### Palette Bleue Romantique
```typescript
pink: "#e3f2fd",       // Bleu très clair
rose: "#90caf9",       // Bleu clair
burgundy: "#1565c0",   // Bleu profond
gold: "#ffd700",       // Or
lightGold: "#fff9c4",  // Jaune pâle
```

### Palette Lavande
```typescript
pink: "#f3e5f5",       // Lavande clair
rose: "#ce93d8",       // Lavande
burgundy: "#6a1b9a",   // Violet profond
gold: "#ffd700",       // Or
lightGold: "#fff9e6",  // Crème
```

### Palette Pêche
```typescript
pink: "#ffe0e6",       // Pêche clair
rose: "#ffb3c1",       // Pêche
burgundy: "#c41e3a",   // Rouge rubis
gold: "#d4af37",       // Or
lightGold: "#fff5ee",  // Crème pêche
```

## 📸 Optimiser tes photos

### Format recommandé
- **Format :** JPG (meilleure compression) ou PNG (transparence)
- **Dimensions :**
  - Timeline : 1600 x 1200 px (ratio 4:3)
  - Galerie : 1200 x 1200 px (carré)
- **Poids :** Moins de 500 KB par photo (idéal)

### Outils gratuits pour compresser
- [TinyPNG](https://tinypng.com/) - Compression sans perte de qualité
- [Squoosh](https://squoosh.app/) - Compression avancée
- [iLoveIMG](https://www.iloveimg.com/compress-image) - Compression par lots

### Renommer tes photos

Utilise ces noms EXACTS dans `/public/photos/` :

**Timeline :**
- `rencontre.jpg`
- `premier-rdv.jpg`
- `voyage.jpg`
- `special.jpg`

**Galerie :**
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`

**Image de partage (optionnel) :**
- `og-image.jpg` (place-la dans `/public/`)

## 🎭 Personnaliser les animations

### Vitesse des cœurs flottants

Dans `components/FloatingElements.tsx`, ligne ~8 :

```typescript
duration: Math.random() * 10 + 20,  // ⬅️ Change 20 (plus = lent)
```

### Quantité d'éléments flottants

Dans `components/FloatingElements.tsx` :

```typescript
const hearts = Array.from({ length: 15 }, ...)  // ⬅️ Change 15
const petals = Array.from({ length: 20 }, ...)  // ⬅️ Change 20
```

### Durée des confettis

Dans `components/Surprise.tsx`, ligne ~18 :

```typescript
const duration = 3000;  // ⬅️ Millisecondes (3000 = 3 secondes)
```

## 🌐 Domaine personnalisé

### Sur Vercel (après déploiement)

1. Va dans les **Settings** de ton projet
2. Clique sur **Domains**
3. Ajoute ton domaine (ex: `pour-mounira.com`)
4. Suis les instructions pour configurer les DNS

### Acheter un domaine

**Recommandations :**
- [Namecheap](https://www.namecheap.com/) - Bon rapport qualité/prix
- [Google Domains](https://domains.google/) - Simple et efficace
- [OVH](https://www.ovh.com/) - Français, bon support

**Idées de noms :**
- `pour-mounira.com`
- `mon-amour-mounira.com`
- `notre-histoire.com`
- `mounira-et-moi.com`

## 📱 Image de partage social

Crée une image **1200 x 630 pixels** avec :
- Votre photo ensemble
- Le titre "Pour Mounira ❤️"
- Un design romantique

Nomme-la `og-image.jpg` et place-la dans `/public/`

**Outils gratuits :**
- [Canva](https://www.canva.com/) - Templates gratuits
- [Figma](https://www.figma.com/) - Design professionnel
- [Adobe Express](https://www.adobe.com/express/) - Facile à utiliser

## 🔧 Modifications avancées

### Ajouter une nouvelle section

1. Crée un nouveau composant dans `/components/`
2. Importe-le dans `app/page.tsx`
3. Ajoute-le entre les autres sections

### Changer les polices

Dans `tailwind.config.ts` :

```typescript
fontFamily: {
  display: ["Playfair Display", "serif"],  // ⬅️ Titres
  sans: ["Inter", "sans-serif"],          // ⬅️ Texte
}
```

**Autres polices Google :**
- Titres : `Cormorant Garamond`, `Lora`, `Crimson Text`
- Texte : `Open Sans`, `Roboto`, `Montserrat`

Change aussi dans `app/globals.css` ligne 3

### Modifier le footer

Dans `app/page.tsx`, tout en bas :

```typescript
<footer className="...">
  <p className="...">
    Fait avec ❤️ pour Mounira  {/* ⬅️ Change ce texte */}
  </p>
</footer>
```

## 💡 Astuces Pro

### Tester sur mobile
```bash
npm run dev
```
Puis ouvre `http://localhost:3000` sur ton téléphone (même réseau WiFi)

### Build de production local
```bash
npm run build
npm start
```

### Vérifier les erreurs
```bash
npm run lint
```

---

**Besoin d'aide ?** Consulte le `README.md` ou le `DEMARRAGE-RAPIDE.md` ! ❤️
