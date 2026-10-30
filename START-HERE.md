# 🌹 Bienvenue sur ton Site Romantique ! 💕

## 👋 Par où commencer ?

Suis ces 3 étapes simples :

---

## ⚡ Étape 1 : Installation (2 minutes)

Ouvre un terminal dans ce dossier et exécute :

```bash
npm install
```

Attends que toutes les dépendances s'installent...

---

## 📝 Étape 2 : Personnalisation (10 minutes)

### A. Modifier le contenu

Ouvre le fichier **`data/content.ts`** et change :

1. **Le titre et sous-titre** du Hero
2. **Les 4 étapes** de votre timeline (dates, titres, descriptions)
3. **Les légendes** des 6 photos de galerie
4. **Les 4 messages d'amour**
5. **La date de début** dans le compteur ⚠️ IMPORTANT
6. **Le message** de la surprise finale

### B. Ajouter les photos

Place tes photos dans **`public/photos/`** avec ces noms :

**Timeline :**
- `rencontre.jpg`
- `premier-rdv.jpg`
- `voyage.jpg`
- `special.jpg`

**Galerie :**
- `photo1.jpg` à `photo6.jpg`

> 💡 Pas de photos ? Pas grave ! Des placeholders roses avec des cœurs s'afficheront temporairement.

---

## 🚀 Étape 3 : Lancer le site (30 secondes)

Dans le terminal, exécute :

```bash
npm run dev
```

Puis ouvre ton navigateur sur :  
👉 **[http://localhost:3000](http://localhost:3000)**

---

## ✅ Vérification Rapide

Le site devrait afficher :

- ✨ Une belle page d'accueil rose avec ton titre
- 📅 Une timeline de votre histoire
- 📸 Une galerie de photos cliquable
- 💌 Des messages d'amour animés
- ⏱️ Un compteur qui tourne en temps réel
- 🎉 Un bouton surprise avec des confettis

---

## 📚 Documentation Complète

### Pour aller plus loin :

1. **[DEMARRAGE-RAPIDE.md](DEMARRAGE-RAPIDE.md)** - Guide complet en 5 étapes
2. **[PERSONNALISATION.md](PERSONNALISATION.md)** - Tout changer (couleurs, textes, etc.)
3. **[DEPLOIEMENT.md](DEPLOIEMENT.md)** - Mettre en ligne sur Vercel
4. **[CHECKLIST.md](CHECKLIST.md)** - Liste de vérification complète
5. **[STRUCTURE.md](STRUCTURE.md)** - Architecture du projet
6. **[README.md](README.md)** - Documentation technique complète

---

## 🆘 Besoin d'Aide ?

### Problème courant 1 : npm install échoue
```bash
# Essaie avec --legacy-peer-deps
npm install --legacy-peer-deps
```

### Problème courant 2 : Le compteur affiche des nombres bizarres
➡️ Vérifie que la date dans `counter.startDate` est dans le passé et au bon format

### Problème courant 3 : Les photos ne s'affichent pas
➡️ Vérifie que les noms de fichiers sont exacts (sensible à la casse)
➡️ Vérifie qu'elles sont bien dans `/public/photos/`

---

## 🎨 Personnalisation Rapide

### Changer les couleurs

Ouvre **`tailwind.config.ts`** et modifie la section `romantic` :

```typescript
romantic: {
  pink: "#f5d5e0",      // Change cette couleur
  rose: "#f8b4c8",      // Et celle-ci
  burgundy: "#8b1538",  // Et celle-là
  gold: "#d4af37",      // Etc.
  lightGold: "#f4e4c1",
}
```

---

## 🚀 Mettre en Ligne (Gratuit !)

Une fois satisfait du résultat en local :

1. **Crée un compte GitHub** (si pas déjà fait)
2. **Push ton code** sur GitHub
3. **Va sur [vercel.com](https://vercel.com)**
4. **Connecte GitHub** et importe ton projet
5. **Clique "Deploy"**
6. ✨ **Ton site est en ligne !**

Guide complet dans **[DEPLOIEMENT.md](DEPLOIEMENT.md)**

---

## 🎯 Ordre Recommandé

1. ✅ Installer les dépendances
2. ✅ Lancer en dev (`npm run dev`)
3. ✅ Modifier `data/content.ts`
4. ✅ Ajouter les photos
5. ✅ Tester toutes les sections
6. ✅ Vérifier sur mobile (responsive)
7. ✅ Build production (`npm run build`)
8. ✅ Déployer sur Vercel
9. ✅ Partager avec Mounira ❤️

---

## 💡 Conseil Pro

**Fais des petits changements** et recharge la page après chaque modification pour voir l'effet immédiatement.

Le site se recharge automatiquement quand tu sauvegardes un fichier ! 🔄

---

## 🎉 C'est Parti !

Tu as tout ce qu'il faut pour créer un magnifique site romantique !

**Commence par :**
```bash
npm install
npm run dev
```

Puis ouvre **`data/content.ts`** et personnalise tout ! ✨

---

**Questions ? Consulte les autres fichiers de documentation !**

**Bonne création et félicitations pour ce beau geste d'amour ! 💕🌹**
