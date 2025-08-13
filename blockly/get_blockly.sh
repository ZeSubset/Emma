#!/usr/bin/env bash
set -euo pipefail
mkdir -p "lib/blockly"
cd "lib/blockly"

# Fetch latest blockly single bundle and media assets from unpkg
echo "Downloading blockly.min.js ..."
curl -L -o blockly.min.js "https://unpkg.com/blockly/blockly.min.js"

echo "Downloading media assets ..."
rm -rf media
mkdir -p media
# Grab media as a zip via npmcdn (fallback to github if needed)
# Try unpkg directory listing (will recursively fetch common assets)
# We fetch a shortlist of known media files to keep it simple:
curl -L -o media/sprites.png "https://unpkg.com/blockly/media/sprites.png"
curl -L -o media/dark-sprites.png "https://unpkg.com/blockly/media/dark-sprites.png"
curl -L -o media/click.mp3 "https://unpkg.com/blockly/media/click.mp3"
curl -L -o media/delete.mp3 "https://unpkg.com/blockly/media/delete.mp3"
curl -L -o media/disconnect.wav "https://unpkg.com/blockly/media/disconnect.wav"

echo "Done. You can now open index.html offline."
