# 🚀 Lance ton Site en 2 Minutes !

## ✅ Les photos sont déjà installées !

10 photos sont prêtes à être utilisées :
- ✅ 4 photos pour la timeline
- ✅ 6 photos pour la galerie

---

## 🎯 Lance le Site (2 commandes)

### 1. Ouvre un terminal PowerShell dans ce dossier

**Méthode rapide :**
- Clique droit dans le dossier `site-mounira`
- Sélectionne **"Ouvrir dans le terminal"**

Ou :
```powershell
cd C:\Users\ASUS\Desktop\site-mounira
```

### 2. Lance le serveur de développement

```powershell
npm run dev
```

⏱️ Attends 5-10 secondes que le serveur démarre...

### 3. Ouvre ton navigateur

Tu verras un message comme :
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

**Ouvre :** http://localhost:3000

---

## 🎉 C'est tout !

Ton site romantique s'affiche maintenant ! 💕

Tu devrais voir :
- 🌸 Hero avec "Pour Mounira ❤️"
- 📅 Timeline avec 4 étapes et photos
- 📸 Galerie de 6 photos cliquables
- 💌 4 messages d'amour
- ⏱️ Compteur en temps réel
- 🎉 Bouton surprise avec confettis
- ❤️ Cœurs et pétales flottants

---

## 📝 Prochaines Étapes

### 1. Personnalise le contenu

Ouvre **`data/content.ts`** et modifie :
- Les textes de chaque section
- Les dates de la timeline
- Les messages d'amour
- **La date du compteur** (IMPORTANT !)

### 2. Vérifie les légendes des photos

Dans `data/content.ts`, change les descriptions pour qu'elles correspondent à tes vraies photos.

### 3. Teste sur mobile

Ouvre l'inspecteur du navigateur (F12) et teste le mode responsive.

---

## 🔄 Changer les Photos

Si tu veux utiliser d'autres photos parmi les 25 disponibles :

```powershell
# Choix automatique (10 premières photos)
.\copier-photos-auto.ps1

# Choix manuel (choisis chaque photo)
.\changer-photos.ps1
```

Voir **GESTION-PHOTOS.md** pour plus de détails.

---

## 🛑 Arrêter le Serveur

Dans le terminal, appuie sur :
```
Ctrl + C
```

---

## 🚀 Déployer en Ligne (Gratuit)

Une fois satisfait du résultat :

1. **Push sur GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Site pour Mounira ❤️"
   git remote add origin https://github.com/TON-USERNAME/site-mounira.git
   git push -u origin main
   ```

2. **Va sur [vercel.com](https://vercel.com)**
   - Connecte GitHub
   - Importe `site-mounira`
   - Clique "Deploy"

3. **✨ En ligne en 2 minutes !**

Voir **DEPLOIEMENT.md** pour le guide complet.

---

## 💡 Commandes Utiles

```powershell
# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production (après build)
npm start

# Vérifier le code
npm run lint
```

---

## 🆘 Problème ?

### Le serveur ne démarre pas
```powershell
# Réinstalle les dépendances
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

### Les photos ne s'affichent pas
1. Vérifie qu'elles sont dans `public/photos/`
2. Recharge la page (Ctrl+F5)
3. Vérifie les noms de fichiers

### Port 3000 déjà utilisé
```powershell
# Lance sur un autre port
npm run dev -- -p 3001
```

---

## 📚 Documentation

- **GESTION-PHOTOS.md** - Gérer les photos
- **PERSONNALISATION.md** - Personnaliser le design
- **DEPLOIEMENT.md** - Mettre en ligne
- **CHECKLIST.md** - Liste de vérification
- **COMMANDES.md** - Toutes les commandes

---

## ✨ Résumé Ultra-Rapide

```powershell
# 1. Ouvre un terminal dans le dossier
cd C:\Users\ASUS\Desktop\site-mounira

# 2. Lance le site
npm run dev

# 3. Ouvre ton navigateur
# http://localhost:3000
```

**C'est tout ! Profite de ton magnifique site romantique ! 🌹💕**

---

**Appuie sur Ctrl+C dans le terminal pour arrêter le serveur quand tu as fini.**
