# Script pour changer facilement les photos du site
# Utilisation : .\changer-photos.ps1

Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║     🌹 Gestion des Photos - Site pour Mounira 💕      ║" -ForegroundColor Magenta
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Magenta
Write-Host ""

$sourcePath = "C:\Users\ASUS\Desktop\photos-mounira"
$destPath = "$PSScriptRoot\public\photos"

# Vérifier que le dossier source existe
if (-not (Test-Path $sourcePath)) {
    Write-Host "❌ Erreur : Le dossier source n'existe pas : $sourcePath" -ForegroundColor Red
    exit
}

# Liste des photos disponibles
$photos = Get-ChildItem -Path $sourcePath -Filter "*.jpg" | Sort-Object Name
Write-Host "📸 Photos disponibles ($($photos.Count) photos) :" -ForegroundColor Cyan
Write-Host ""

for ($i = 0; $i -lt $photos.Count; $i++) {
    Write-Host "  [$($i+1)] $($photos[$i].Name)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

# Fonction pour copier une photo
function Copy-Photo {
    param(
        [string]$Title,
        [string]$DestName
    )
    
    Write-Host "📷 $Title" -ForegroundColor Cyan
    Write-Host "   Quelle photo utiliser ? (numéro) : " -NoNewline -ForegroundColor White
    $choice = Read-Host
    
    $index = [int]$choice - 1
    if ($index -ge 0 -and $index -lt $photos.Count) {
        $sourcePh = $photos[$index].FullName
        $destFile = Join-Path $destPath $DestName
        Copy-Item $sourcePh $destFile -Force
        Write-Host "   ✅ $DestName copié !" -ForegroundColor Green
        Write-Host ""
        return $true
    } else {
        Write-Host "   ❌ Numéro invalide !" -ForegroundColor Red
        Write-Host ""
        return $false
    }
}

Write-Host "🎯 Configuration des photos du site" -ForegroundColor Magenta
Write-Host ""

# Timeline
Write-Host "━━━ TIMELINE (4 photos) ━━━" -ForegroundColor Yellow
Write-Host ""
Copy-Photo "Photo de votre première rencontre" "rencontre.jpg"
Copy-Photo "Photo de votre premier rendez-vous" "premier-rdv.jpg"
Copy-Photo "Photo de votre premier voyage" "voyage.jpg"
Copy-Photo "Photo d'un moment spécial" "special.jpg"

Write-Host "━━━ GALERIE (6 photos) ━━━" -ForegroundColor Yellow
Write-Host ""
Copy-Photo "Photo 1 de la galerie" "photo1.jpg"
Copy-Photo "Photo 2 de la galerie" "photo2.jpg"
Copy-Photo "Photo 3 de la galerie" "photo3.jpg"
Copy-Photo "Photo 4 de la galerie" "photo4.jpg"
Copy-Photo "Photo 5 de la galerie" "photo5.jpg"
Copy-Photo "Photo 6 de la galerie" "photo6.jpg"

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║           ✅ Configuration terminée ! 🎉               ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "Les photos ont été copiées dans : $destPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "Prochaines étapes :" -ForegroundColor Yellow
Write-Host "  1. Lance le site : npm run dev" -ForegroundColor White
Write-Host "  2. Ouvre http://localhost:3000" -ForegroundColor White
Write-Host "  3. Vérifie que les photos sont correctes" -ForegroundColor White
Write-Host ""
Write-Host "💡 Pour relancer ce script : .\changer-photos.ps1" -ForegroundColor Gray
Write-Host ""
