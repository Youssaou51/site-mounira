# 📸 Gestion des Photos

## ✅ Photos Actuellement Installées

Les 10 photos suivantes sont déjà copiées et prêtes à être utilisées :

### Timeline (4 photos)
- ✅ `rencontre.jpg` - Photo de votre première rencontre
- ✅ `premier-rdv.jpg` - Photo de votre premier rendez-vous
- ✅ `voyage.jpg` - Photo de votre premier voyage
- ✅ `special.jpg` - Photo d'un moment spécial

### Galerie (6 photos)
- ✅ `photo1.jpg` à `photo6.jpg` - Photos de vos meilleurs moments

---

## 🎯 Tester le Site

Lance le site pour voir les photos :

```powershell
npm run dev
```

Puis ouvre : **http://localhost:3000**

---

## 🔄 Changer les Photos

Tu as **25 photos disponibles** dans `C:\Users\ASUS\Desktop\photos-mounira`

### Méthode 1 : Script Automatique (Rapide)

Copie automatiquement les 10 premières photos dans l'ordre :

```powershell
.\copier-photos-auto.ps1
```

**Mapping automatique :**
```
Photo 1  → rencontre.jpg      (Timeline)
Photo 2  → premier-rdv.jpg    (Timeline)
Photo 3  → voyage.jpg         (Timeline)
Photo 4  → special.jpg        (Timeline)
Photo 5  → photo1.jpg         (Galerie)
Photo 6  → photo2.jpg         (Galerie)
Photo 7  → photo3.jpg         (Galerie)
Photo 8  → photo4.jpg         (Galerie)
Photo 9  → photo5.jpg         (Galerie)
Photo 10 → photo6.jpg         (Galerie)
```

### Méthode 2 : Script Interactif (Personnalisé)

Choisis manuellement quelle photo utiliser pour chaque emplacement :

```powershell
.\changer-photos.ps1
```

Le script te demandera pour chaque emplacement :
1. Affiche la liste des 25 photos disponibles
2. Tu choisis le numéro de la photo
3. La photo est copiée avec le bon nom

### Méthode 3 : Manuellement

Copie directement les photos depuis l'Explorateur Windows :

```
Source : C:\Users\ASUS\Desktop\photos-mounira
Destination : C:\Users\ASUS\Desktop\site-mounira\public\photos
```

**Noms requis :**
- Timeline : `rencontre.jpg`, `premier-rdv.jpg`, `voyage.jpg`, `special.jpg`
- Galerie : `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`

---

## 📋 Liste de tes 25 Photos

Voici toutes tes photos disponibles :

```
1.  03da473f42e845cf97ba1ed9b77b30cb.jpg
2.  1000534171.jpg
3.  1000534172.jpg
4.  1000534173.jpg
5.  1000534174.jpg
6.  1000534175.jpg
7.  1000534176.jpg
8.  1000534177.jpg
9.  1000534178.jpg
10. 1000534179.jpg
11. 1000534180.jpg
12. 1000534181.jpg
13. 1000534182.jpg
14. 1000534183.jpg
15. 1000534184.jpg
16. 1000534185.jpg
17. 1000534187.jpg
18. 1000534188.jpg
19. 1000534189.jpg
20. 1000534190.jpg
21. 1000534191.jpg
22. 1000534192.jpg
23. 1000534193.jpg
24. 1000534194.jpg
25. 16b21ad8afae47e78d2708e9a074f10a.jpg
```

---

## 🎨 Optimiser les Photos (Optionnel)

Pour un site plus rapide, compresse tes photos :

### Outils en ligne (gratuits)
- [TinyPNG](https://tinypng.com/) - Compression intelligente
- [Squoosh](https://squoosh.app/) - Contrôle avancé
- [iLoveIMG](https://www.iloveimg.com/compress-image) - Compression par lots

### Recommandations
- **Poids cible :** Moins de 500 KB par photo
- **Format :** JPG (meilleure compression)
- **Dimensions :**
  - Timeline : 1600 x 1200 px (ratio 4:3)
  - Galerie : 1200 x 1200 px (carré)

---

## 🔍 Vérifier les Photos

### Voir quelles photos sont installées

```powershell
Get-ChildItem public\photos\*.jpg | Select-Object Name, @{N='Taille (KB)';E={[math]::Round($_.Length/1KB,2)}}
```

### Voir la taille totale

```powershell
$total = (Get-ChildItem public\photos\*.jpg | Measure-Object -Property Length -Sum).Sum
Write-Host "Taille totale : $([math]::Round($total/1MB,2)) MB"
```

---

## 📝 Modifier les Légendes

Les légendes des photos sont dans **`data/content.ts`** :

### Timeline
```typescript
timeline: [
  {
    id: 1,
    date: "14 Février 2024",
    title: "Notre Première Rencontre",      // ⬅️ Change ici
    description: "Le jour où...",            // ⬅️ Et ici
    image: "/photos/rencontre.jpg",
  },
  // ...
]
```

### Galerie
```typescript
gallery: [
  {
    id: 1,
    src: "/photos/photo1.jpg",
    alt: "Nous deux ensemble",               // ⬅️ Description
    caption: "Un sourire qui illumine...",   // ⬅️ Légende affichée
  },
  // ...
]
```

---

## ⚠️ Important

- Les noms de fichiers sont **sensibles à la casse**
- L'extension doit être `.jpg` (pas `.JPG` ou `.jpeg`)
- Les photos doivent être dans `public/photos/`
- Si une photo manque, un placeholder rose avec un cœur s'affiche

---

## 🚀 Workflow Recommandé

1. **Choisis tes 10 meilleures photos** parmi les 25
2. **Lance le script** de ton choix (`copier-photos-auto.ps1` ou `changer-photos.ps1`)
3. **Teste le site** avec `npm run dev`
4. **Modifie les légendes** dans `data/content.ts`
5. **Compresse les photos** si nécessaire (optionnel)
6. **Rebuild** avec `npm run build`
7. **Déploie** sur Vercel

---

## 💡 Astuce Pro

Pour prévisualiser rapidement toutes tes photos dans l'Explorateur Windows :

```powershell
# Ouvre le dossier en mode grandes icônes
explorer C:\Users\ASUS\Desktop\photos-mounira
```

Puis : **Affichage → Très grandes icônes** pour voir les aperçus.

---

## 🆘 Problèmes Courants

### Les photos ne s'affichent pas
1. Vérifie les noms de fichiers (exactement comme documenté)
2. Vérifie qu'elles sont dans `public/photos/`
3. Recharge la page (Ctrl+F5)
4. Redémarre le serveur (`npm run dev`)

### Une photo est pixelisée
→ Utilise une photo en plus haute résolution

### Le site est lent
→ Compresse les photos avec TinyPNG

---

**Tes photos sont prêtes ! Lance le site pour les voir ! 🎉**

```powershell
npm run dev
```
