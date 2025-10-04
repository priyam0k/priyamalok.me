# Hugo Development Server Script
# This script will start Hugo's development server with live reload

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

# Start development server
Write-Host "Starting Hugo development server..."
Write-Host "Site will be available at http://localhost:1313"
Write-Host "Press Ctrl+C to stop the server"
Write-Host "----------------------------------------"

..\hugo.exe server --bind "0.0.0.0" --port 1313 --disableFastRender --navigateToChanged

# Return to root directory when server stops
Set-Location ".."