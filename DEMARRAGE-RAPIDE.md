# 🚀 Démarrage Rapide

## Étape 1 : Installer les dépendances

Ouvre un terminal dans le dossier du projet et exécute :

```bash
npm install
```

## Étape 2 : Personnaliser le contenu

Ouvre le fichier **`data/content.ts`** et modifie :

### 📅 Date du compteur (IMPORTANT !)
```typescript
counter: {
  startDate: "2024-02-14T00:00:00", // ⬅️ Change cette date
}
```

### 📝 Titres et messages
- Modifie les textes de chaque section
- Personnalise les messages d'amour
- Change la surprise finale

### 📸 Légendes des photos
- Modifie les descriptions de la timeline
- Change les légendes de la galerie

## Étape 3 : Ajouter tes photos

Place tes photos dans **`public/photos/`** :

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

> 💡 **Astuce :** Si tu n'as pas encore de photos, le site affichera des placeholders temporaires en rose avec un cœur.

## Étape 4 : Lancer le site

```bash
npm run dev
```

Ouvre ton navigateur sur [http://localhost:3000](http://localhost:3000)

## Étape 5 : Vérifier que tout fonctionne ✅

- [ ] Le hero s'affiche avec ton titre personnalisé
- [ ] La timeline montre tes étapes (avec photos ou placeholders)
- [ ] La galerie s'ouvre en lightbox au clic
- [ ] Les messages d'amour s'animent au scroll
- [ ] Le compteur compte en temps réel
- [ ] La surprise affiche des confettis au clic
- [ ] Les cœurs et pétales flottent en arrière-plan

## Étape 6 : Déployer sur Vercel

### Option A : Via GitHub (Recommandé)

1. **Crée un repository GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Site romantique pour Mounira ❤️"
   git branch -M main
   git remote add origin https://github.com/TON-USERNAME/site-mounira.git
   git push -u origin main
   ```

2. **Déploie sur Vercel :**
   - Va sur [vercel.com](https://vercel.com)
   - Connecte ton compte GitHub
   - Clique "Import Project"
   - Sélectionne ton repo `site-mounira`
   - Clique "Deploy"
   - ✨ C'est en ligne !

### Option B : Via CLI

```bash
npm install -g vercel
vercel
```

## 🎨 Personnalisation Avancée

### Changer les couleurs

Ouvre `tailwind.config.ts` et modifie :

```typescript
colors: {
  romantic: {
    pink: "#f5d5e0",      // Rose poudré
    rose: "#f8b4c8",      // Rose
    burgundy: "#8b1538",  // Bordeaux profond
    gold: "#d4af37",      // Or
    lightGold: "#f4e4c1", // Or clair
  },
}
```

### Ajouter plus d'étapes à la timeline

Dans `data/content.ts`, ajoute des objets dans `timeline: [...]`

### Ajouter plus de photos

Dans `data/content.ts`, ajoute des objets dans `gallery: [...]`

## 🆘 Problèmes courants

### Le compteur affiche des nombres négatifs
➡️ Vérifie que la date dans `counter.startDate` est dans le passé

### Les photos ne s'affichent pas
➡️ Vérifie que les noms des fichiers correspondent exactement (avec `.jpg`)
➡️ Les placeholders s'afficheront si les photos sont manquantes

### Les animations ne fonctionnent pas
➡️ Assure-toi que `framer-motion` est installé : `npm install framer-motion`

### Les confettis ne s'affichent pas
➡️ Assure-toi que `canvas-confetti` est installé : `npm install canvas-confetti`

## 💡 Conseils

- **Format d'images :** JPG ou PNG, 1920x1080 minimum
- **Poids des images :** Moins de 2 MB par image pour une bonne performance
- **Mobile :** Teste sur ton téléphone pour voir le rendu responsive
- **Partage :** Change l'image `ogImage` dans `data/content.ts` pour le partage social

## 📱 Partager le site

Une fois déployé sur Vercel, tu auras une URL du type :
```
https://site-mounira.vercel.app
```

Tu peux :
- Acheter un nom de domaine personnalisé (ex: `pour-mounira.com`)
- Le configurer dans les settings Vercel
- Partager le lien directement

---

**Besoin d'aide ?** Consulte le `README.md` complet pour plus de détails ! ❤️
