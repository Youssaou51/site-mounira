# ⚡ Commandes Essentielles

## 🚀 Démarrage

```bash
# Installer les dépendances (une seule fois)
npm install

# Lancer en mode développement
npm run dev
```

Puis ouvre : **http://localhost:3000**

---

## 🏗️ Build & Production

```bash
# Compiler pour production
npm run build

# Lancer en production (après build)
npm start

# Tout en un (build + start)
npm run build && npm start
```

---

## 🔍 Vérification

```bash
# Vérifier le code (ESLint)
npm run lint

# Build avec debug
npm run build --debug
```

---

## 📦 Git (Déploiement)

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Site romantique pour Mounira ❤️"

# Changer la branche
git branch -M main

# Ajouter le repository distant (REMPLACE TON-USERNAME)
git remote add origin https://github.com/TON-USERNAME/site-mounira.git

# Push vers GitHub
git push -u origin main
```

---

## 🔄 Mises à Jour

```bash
# Voir les changements
git status

# Ajouter les changements
git add .

# Créer un commit
git commit -m "Mise à jour du contenu"

# Push vers GitHub (déclenche le redéploiement Vercel)
git push
```

---

## 🌐 Vercel CLI (Optionnel)

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer en preview
vercel

# Déployer en production
vercel --prod
```

---

## 🧹 Nettoyage

```bash
# Supprimer node_modules et .next
Remove-Item -Recurse -Force node_modules, .next

# Réinstaller
npm install

# Rebuild
npm run build
```

---

## 🆘 Dépannage

### Problème : npm install échoue

```bash
# Solution 1 : Nettoyer le cache
npm cache clean --force
npm install

# Solution 2 : Legacy peer deps
npm install --legacy-peer-deps

# Solution 3 : Force
npm install --force
```

### Problème : Port 3000 déjà utilisé

```bash
# Lancer sur un autre port
npm run dev -- -p 3001
```

### Problème : Build échoue

```bash
# Nettoyer et rebuilder
Remove-Item -Recurse -Force .next
npm run build
```

---

## 📝 Git - Commandes Utiles

```bash
# Voir l'historique
git log --oneline

# Voir les différences
git diff

# Annuler le dernier commit (garde les changements)
git reset --soft HEAD~1

# Voir le status
git status

# Voir les branches
git branch

# Créer une nouvelle branche
git checkout -b ma-branche

# Revenir à main
git checkout main

# Fusionner une branche
git merge ma-branche
```

---

## 🎨 Développement

```bash
# Lancer en dev avec turbopack (plus rapide)
npm run dev --turbo

# Analyser le bundle
npm run build -- --analyze
```

---

## 📊 Informations

```bash
# Version de Node
node --version

# Version de npm
npm --version

# Liste des dépendances
npm list --depth=0

# Vérifier les mises à jour
npm outdated
```

---

## 🔑 Variables d'Environnement

Créer un fichier `.env.local` :

```bash
# Exemple
MA_VARIABLE=ma_valeur
NEXT_PUBLIC_API_URL=https://api.example.com
```

Utiliser dans le code :
```typescript
const maVariable = process.env.MA_VARIABLE;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## ⚙️ Configuration VS Code (Optionnel)

Créer `.vscode/settings.json` :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## 🎯 Workflow Recommandé

```bash
# 1. Modifier le code
# 2. Tester en local
npm run dev

# 3. Vérifier le build
npm run build

# 4. Committer
git add .
git commit -m "Description des changements"

# 5. Push (déclenche le déploiement automatique)
git push
```

---

## 📦 Packages Importants

```bash
# Installer un nouveau package
npm install nom-du-package

# Installer en dev
npm install --save-dev nom-du-package

# Désinstaller
npm uninstall nom-du-package

# Mettre à jour
npm update
```

---

## 🚨 En Cas d'Urgence

```bash
# Tout réinitialiser
Remove-Item -Recurse -Force node_modules, .next, package-lock.json
npm install
npm run build
```

---

**Toutes les commandes sont prêtes à être copiées-collées ! 💻✨**
