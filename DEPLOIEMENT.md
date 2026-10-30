# 🚀 Guide de Déploiement

## Option 1 : Déploiement sur Vercel (Recommandé) ⭐

Vercel est gratuit pour les projets personnels et parfaitement optimisé pour Next.js !

### Méthode A : Via GitHub (La plus simple)

#### Étape 1 : Créer un repository GitHub

1. Va sur [github.com](https://github.com) et connecte-toi
2. Clique sur le **+** en haut à droite → **New repository**
3. Nomme-le `site-mounira` (ou autre nom)
4. Laisse-le **Public** ou **Private** (ton choix)
5. **Ne coche rien** (pas de README, pas de .gitignore)
6. Clique **Create repository**

#### Étape 2 : Push ton code

Ouvre un terminal dans le dossier du projet et exécute :

```bash
# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "✨ Site romantique pour Mounira"

# Changer la branche principale
git branch -M main

# Ajouter le repository distant (REMPLACE TON-USERNAME)
git remote add origin https://github.com/TON-USERNAME/site-mounira.git

# Push vers GitHub
git push -u origin main
```

**Note :** Remplace `TON-USERNAME` par ton nom d'utilisateur GitHub !

#### Étape 3 : Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Clique **Sign Up** (inscription) ou **Login**
3. Choisis **Continue with GitHub**
4. Clique **Import Project**
5. Dans la liste, trouve `site-mounira`
6. Clique **Import**
7. Vercel va détecter Next.js automatiquement
8. Clique **Deploy** 🚀

**C'est tout !** Ton site sera en ligne en ~2 minutes.

Tu recevras une URL du type : `https://site-mounira.vercel.app`

### Méthode B : Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

---

## Option 2 : Netlify

### Via GitHub

1. Push ton code sur GitHub (voir étapes ci-dessus)
2. Va sur [netlify.com](https://netlify.com)
3. Clique **Add new site** → **Import an existing project**
4. Connecte GitHub
5. Sélectionne `site-mounira`
6. Build command : `npm run build`
7. Publish directory : `.next`
8. Clique **Deploy**

---

## Option 3 : Railway

1. Va sur [railway.app](https://railway.app)
2. Connecte GitHub
3. Clique **New Project** → **Deploy from GitHub repo**
4. Sélectionne `site-mounira`
5. Railway détectera Next.js automatiquement
6. Clique **Deploy**

---

## Après le déploiement

### 1. Obtenir ton URL

Après le déploiement, tu auras une URL du type :
- Vercel : `https://site-mounira.vercel.app`
- Netlify : `https://site-mounira.netlify.app`
- Railway : `https://site-mounira-production.up.railway.app`

### 2. Mettre à jour la metadataBase

Dans `app/layout.tsx`, ligne 5, change l'URL :

```typescript
metadataBase: new URL('https://TON-URL.vercel.app'), // ⬅️ Ta vraie URL
```

Puis :
```bash
git add app/layout.tsx
git commit -m "🔧 Update metadataBase with production URL"
git push
```

Vercel redéploiera automatiquement !

### 3. Ajouter un domaine personnalisé (Optionnel)

#### Sur Vercel

1. Va dans **Settings** → **Domains**
2. Ajoute ton domaine (ex: `pour-mounira.com`)
3. Configure les DNS selon les instructions
4. Attends la propagation DNS (~10 minutes)

#### Acheter un domaine

**Recommandations :**
- [Namecheap](https://www.namecheap.com/) - ~10€/an
- [Google Domains](https://domains.google/) - ~12€/an
- [OVH](https://www.ovh.com/) - ~8€/an

---

## Mises à jour futures

Quand tu veux modifier le site :

### 1. Modifier localement

```bash
# Ouvre ton projet
cd site-mounira

# Modifie les fichiers (data/content.ts, etc.)
# Teste en local
npm run dev
```

### 2. Push les modifications

```bash
# Ajouter les changements
git add .

# Créer un commit
git commit -m "💕 Ajout de nouvelles photos"

# Push vers GitHub
git push
```

### 3. Déploiement automatique

**Vercel redéploiera automatiquement** dès que tu push sur GitHub ! ✨

Tu peux voir le statut du déploiement sur [vercel.com/dashboard](https://vercel.com/dashboard)

---

## Variables d'environnement (Avancé)

Si tu veux ajouter des secrets (API keys, etc.) :

### Sur Vercel

1. Va dans **Settings** → **Environment Variables**
2. Ajoute tes variables :
   - Name : `MA_VARIABLE`
   - Value : `ma-valeur-secrète`
3. Clique **Save**
4. Redéploie

### Dans ton code

Crée un fichier `.env.local` :

```bash
MA_VARIABLE=ma-valeur-secrète
```

Utilise-la dans ton code :

```typescript
const maVariable = process.env.MA_VARIABLE;
```

**Important :** N'ajoute JAMAIS `.env.local` à Git !

---

## Surveillance et Analytics

### Vercel Analytics (Gratuit)

1. Va sur ton projet Vercel
2. Clique **Analytics**
3. Clique **Enable**
4. Installe le package :

```bash
npm install @vercel/analytics
```

5. Dans `app/layout.tsx` :

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Dépannage

### Le site ne s'affiche pas après déploiement

1. Vérifie les logs sur Vercel Dashboard
2. Assure-toi que le build a réussi
3. Teste en local : `npm run build && npm start`

### Les images ne s'affichent pas

1. Vérifie que les images sont dans `/public/photos/`
2. Vérifie les noms de fichiers (sensible à la casse)
3. Les images seront remplacées par des placeholders si manquantes

### Erreur de build

1. Teste localement : `npm run build`
2. Corrige les erreurs
3. Push les corrections

### Le domaine personnalisé ne fonctionne pas

1. Vérifie la configuration DNS (peut prendre jusqu'à 48h)
2. Assure-toi d'avoir ajouté les bons enregistrements :
   - Type A : `76.76.21.21`
   - Type CNAME : `cname.vercel-dns.com`

---

## Commandes Git utiles

```bash
# Voir le statut
git status

# Voir l'historique
git log --oneline

# Annuler le dernier commit (garde les changements)
git reset --soft HEAD~1

# Voir les différences
git diff

# Créer une branche
git checkout -b ma-nouvelle-branche

# Revenir à main
git checkout main

# Fusionner une branche
git merge ma-nouvelle-branche
```

---

## Sauvegardes

### Backup GitHub

Ton code est automatiquement sauvegardé sur GitHub ! ✅

### Backup local

```bash
# Clone ton repository ailleurs
git clone https://github.com/TON-USERNAME/site-mounira.git backup-site-mounira
```

---

## Support

- **Documentation Vercel :** [vercel.com/docs](https://vercel.com/docs)
- **Documentation Next.js :** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Help :** [docs.github.com](https://docs.github.com)

---

**Ton site est maintenant en ligne et accessible partout dans le monde ! 🌍❤️**
