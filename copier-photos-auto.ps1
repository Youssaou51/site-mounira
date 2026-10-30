# Script automatique pour copier les 10 premières photos
# Utilisation : .\copier-photos-auto.ps1

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║   🌹 Copie Automatique des Photos - Pour Mounira 💕   ║" -ForegroundColor Magenta
Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Magenta
Write-Host ""

$sourcePath = "C:\Users\ASUS\Desktop\photos-mounira"
$destPath = "$PSScriptRoot\public\photos"

# Vérifier que le dossier source existe
if (-not (Test-Path $sourcePath)) {
    Write-Host "❌ Erreur : Le dossier source n'existe pas : $sourcePath" -ForegroundColor Red
    exit
}

# Liste des photos disponibles (triées par nom)
$photos = Get-ChildItem -Path $sourcePath -Filter "*.jpg" | Sort-Object Name

if ($photos.Count -lt 10) {
    Write-Host "⚠️  Attention : Seulement $($photos.Count) photos disponibles (10 requises)" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "📸 Photos disponibles : $($photos.Count)" -ForegroundColor Cyan
Write-Host "📁 Source : $sourcePath" -ForegroundColor Gray
Write-Host "📁 Destination : $destPath" -ForegroundColor Gray
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""

# Mapping des photos
$mapping = @(
    @{Source = 0; Dest = "rencontre.jpg"; Desc = "Photo Timeline 1 - Rencontre"},
    @{Source = 1; Dest = "premier-rdv.jpg"; Desc = "Photo Timeline 2 - Premier RDV"},
    @{Source = 2; Dest = "voyage.jpg"; Desc = "Photo Timeline 3 - Voyage"},
    @{Source = 3; Dest = "special.jpg"; Desc = "Photo Timeline 4 - Moment Spécial"},
    @{Source = 4; Dest = "photo1.jpg"; Desc = "Photo Galerie 1"},
    @{Source = 5; Dest = "photo2.jpg"; Desc = "Photo Galerie 2"},
    @{Source = 6; Dest = "photo3.jpg"; Desc = "Photo Galerie 3"},
    @{Source = 7; Dest = "photo4.jpg"; Desc = "Photo Galerie 4"},
    @{Source = 8; Dest = "photo5.jpg"; Desc = "Photo Galerie 5"},
    @{Source = 9; Dest = "photo6.jpg"; Desc = "Photo Galerie 6"}
)

$successCount = 0

foreach ($item in $mapping) {
    if ($item.Source -lt $photos.Count) {
        $sourceFile = $photos[$item.Source].FullName
        $destFile = Join-Path $destPath $item.Dest
        
        try {
            Copy-Item $sourceFile $destFile -Force
            Write-Host "✅ $($item.Desc)" -ForegroundColor Green
            Write-Host "   $($photos[$item.Source].Name) → $($item.Dest)" -ForegroundColor Gray
            $successCount++
        } catch {
            Write-Host "❌ Erreur lors de la copie de $($item.Dest)" -ForegroundColor Red
        }
    } else {
        Write-Host "⚠️  $($item.Desc) - Photo manquante" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""

if ($successCount -eq 10) {
    Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║        ✅ Toutes les photos sont copiées ! 🎉         ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Green
} else {
    Write-Host "╔════════════════════════════════════════════════════════╗" -ForegroundColor Yellow
    Write-Host "║     ⚠️  $successCount/10 photos copiées                          ║" -ForegroundColor Yellow
    Write-Host "╚════════════════════════════════════════════════════════╝" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 Résumé :" -ForegroundColor Cyan
Write-Host "   • Timeline : 4 photos (rencontre, premier-rdv, voyage, special)" -ForegroundColor White
Write-Host "   • Galerie : 6 photos (photo1 à photo6)" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Prochaines étapes :" -ForegroundColor Yellow
Write-Host "   1. Lance : npm run dev" -ForegroundColor White
Write-Host "   2. Ouvre : http://localhost:3000" -ForegroundColor White
Write-Host "   3. Vérifie les photos" -ForegroundColor White
Write-Host ""
Write-Host "💡 Pour choisir manuellement les photos : .\changer-photos.ps1" -ForegroundColor Gray
Write-Host ""
