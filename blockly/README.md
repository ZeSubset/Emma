
# Blockly Playground (Self-contained after one local fetch)

This package is a minimal Blockly playground you can unzip and open locally.
It becomes fully **offline/self‑contained** after you run one of the provided fetch scripts to bundle Blockly locally.

## Quick start
1. Unzip.
2. From the unzipped folder, run **one** of the commands below (requires internet once):
   - **macOS/Linux (bash)**:
     ```bash
     ./get_blockly.sh
     ```
   - **Windows (PowerShell)**:
     ```powershell
     ./get_blockly.ps1
     ```
3. Open `index.html` in your browser. (No server required.)

The fetch script downloads:
- `blockly.min.js` (the core library)
- The `media/` assets folder used by Blockly (icons, sprites)

After that, everything runs offline.

## Files
- `index.html` — The page with a Blockly workspace, toolbox, and Run/Export buttons.
- `app.js` — Custom blocks, code generator, and run/export logic.
- `styles.css` — Minimal styling.
- `lib/blockly/` — Where the local Blockly files will be placed.
- `get_blockly.sh`, `get_blockly.ps1` — Helper scripts to download Blockly once.

## Notes
- This project uses the single-file `blockly.min.js` build. If you prefer the classic `*_compressed.js` bundles, you can adjust `index.html` accordingly.
- The project generates JavaScript from your blocks and executes it in a sandboxed iframe.
- No external network calls are used at runtime once the library is downloaded locally.

Enjoy!
