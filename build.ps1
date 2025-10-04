# Hugo Build Script for Windows (Cloudflare Pages Compatible)
# This script will download and run Hugo to build the site

# Download Hugo if not present
if (!(Test-Path "hugo.exe")) {
    Write-Host "Downloading Hugo Extended..."
    $url = "https://github.com/gohugoio/hugo/releases/download/v0.121.0/hugo_extended_0.121.0_windows-amd64.zip"
    Invoke-WebRequest -Uri $url -OutFile "hugo.zip"
    Expand-Archive -Path "hugo.zip" -DestinationPath "." -Force
    Remove-Item "hugo.zip"
    Write-Host "Hugo downloaded and extracted successfully."
}

# Change to Hugo site directory
Set-Location "hugo-site"

# Build the site with optimizations for Cloudflare Pages
Write-Host "Building Hugo site for production..."
..\hugo.exe --gc --minify --enableGitInfo

# Move back to root directory
Set-Location ".."

Write-Host "Hugo build complete! Site generated in 'hugo-site/public' directory."
Write-Host "Ready for Cloudflare Pages deployment!"

# Display build info
if (Test-Path "hugo-site/public/index.html") {
    Write-Host "✅ Build successful - index.html generated"
    $fileCount = (Get-ChildItem -Recurse "hugo-site/public" | Measure-Object).Count
    Write-Host "📁 Total files generated: $fileCount"
} else {
    Write-Host "❌ Build failed - no index.html found"
}