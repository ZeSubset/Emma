# PowerShell script to fetch Blockly locally
$ErrorActionPreference = "Stop"
$newDir = "lib\blockly"
New-Item -ItemType Directory -Force -Path $newDir | Out-Null
Set-Location $newDir

Write-Host "Downloading blockly.min.js ..."
Invoke-WebRequest -Uri "https://unpkg.com/blockly/blockly.min.js" -OutFile "blockly.min.js"

Write-Host "Downloading media assets ..."
New-Item -ItemType Directory -Force -Path "media" | Out-Null

Invoke-WebRequest -Uri "https://unpkg.com/blockly/media/sprites.png" -OutFile "media\sprites.png"
Invoke-WebRequest -Uri "https://unpkg.com/blockly/media/dark-sprites.png" -OutFile "media\dark-sprites.png"
Invoke-WebRequest -Uri "https://unpkg.com/blockly/media/click.mp3" -OutFile "media\click.mp3"
Invoke-WebRequest -Uri "https://unpkg.com/blockly/media/delete.mp3" -OutFile "media\delete.mp3"
Invoke-WebRequest -Uri "https://unpkg.com/blockly/media/disconnect.wav" -OutFile "media\disconnect.wav"

Write-Host "Done. You can now open index.html offline."
