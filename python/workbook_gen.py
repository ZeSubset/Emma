
"""
Custom Related-Problems Worksheet Generator
==========================================

Create a colour 3 × 3 worksheet like the sample photo:

* Each *box* holds three related equations the teacher supplies
  plus one blank line the learner must complete.
* Box background colours alternate to aid visual grouping.
* Output is a single-page A4 PDF.

Usage
-----

```
python worksheet_generator.py
```

The script writes `worksheet.pdf` in the same folder.  
Edit the `BOX_CONTENT` list at the bottom to change the problems.
"""

import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.backends.backend_pdf import PdfPages
from pathlib import Path
from typing import List

# -----------------------------------------------------------
# Core drawing routine
# -----------------------------------------------------------

def draw_worksheet(box_content: List[List[str]],
                   title: str,
                   instruction: str,
                   outfile: Path) -> None:
    """Draw a single-page worksheet.

    Parameters
    ----------
    box_content:
        List with 9 elements (row‑major). Each element is a list of
        exactly 3 equation strings, e.g. ["7 + 2 =", "37 + 2 =", "87 + 2 ="].
        A blank line for the learner is added automatically.
    title, instruction:
        Strings shown at the top of the page.
    outfile:
        Path where the PDF will be written.
    """
    # assert len(box_content) == 9, "Expect 9 boxes (3 × 3 grid)."

    # A4 portrait figure
    plt.rcParams['font.family'] = 'DejaVu Sans Mono'
    fig_w, fig_h = 8.27, 11.69
    fig = plt.figure(figsize=(fig_w, fig_h))
    ax = fig.add_axes([0, 0, 1, 1])
    ax.axis('off')

    # Header text
    ax.text(0.5, 0.965, title, ha='center', va='top',
            fontsize=16, weight='bold')
    ax.text(0.5, 0.93, instruction,
            ha='center', va='top', fontsize=11)

    # Layout constants
    rows, cols = 2, 3
    box_w, box_h = 0.28, 0.22           # Normalised coords
    x0, y0_start = 0.05, 0.83           # Top‑left anchor
    x_spacing, y_spacing = 0.035, 0.04
    colours = ['#f7e6a7', '#f9d3ad']    # light yellow, light orange

    for idx, equations in enumerate(box_content):
        row, col = divmod(idx, cols)
        x = x0 + col * (box_w + x_spacing)
        y = y0_start - row * (box_h + y_spacing) - box_h

        # Coloured rectangle
        colour = colours[col % 2]
        ax.add_patch(Rectangle((x, y), box_w, box_h,
                               facecolor=colour, edgecolor='black',
                               linewidth=1.3))

        # Write equations (3) and one blank line
        text_y = y + box_h - 0.03
        line_gap = box_h / 5
        for line_idx, eq in enumerate(equations):
            ax.text(x + 0.015, text_y - line_idx * line_gap,
                    eq, ha='left', va='top', fontsize=12)
        ax.text(x + 0.015, text_y - 3 * line_gap,
                "__________", ha='left', va='top', fontsize=12)

    # Footer page number
    ax.text(0.02, 0.02, "1", ha='left', va='bottom', fontsize=10)

    # Save PDF
    outfile.parent.mkdir(parents=True, exist_ok=True)
    with PdfPages(outfile) as pdf:
        pdf.savefig(fig, bbox_inches='tight')
    plt.close(fig)
    print(f"Worksheet written to {outfile.absolute()}")

# -----------------------------------------------------------
# EXAMPLE CONTENT – edit here
# -----------------------------------------------------------

BOX_CONTENT = [
    [" 5 + 2 =", "35 + 2 =", "85 + 2 ="],
    ["17 + 3 =", "27 + 3 =", "37 + 3 ="],
    [" 2 + 7 =", "12 + 7 =", "42 + 7 ="],

    [" 12 + 10 =", "22 + 10 =", "32 + 10 ="],
    ["50 + 40 =", "50 + 20 =", "50 + 30 ="],
    ["14 + 6 =", "24 + 6 =", "44 + 6 ="],

    # ["5 + 2 =", "35 + 2 =", "55 + 2 ="],
    # ["20 + 30 =", "60 + 40 =", "70 + 10 ="],
    # ["14 + 6 =", "24 + 6 =", "44 + 6 ="],
]

if __name__ == "__main__":
    draw_worksheet(
        box_content=BOX_CONTENT,
        title="Plusrechnen",
        instruction="In jedem Kästchen stehen verwandte Rechnungen. "
                    "Schreibe eine weitere Rechnung, die ins Kästchen passt. Rechne aus.",
        outfile=Path("worksheet.pdf")
    )
