"""
multi_dot_addition_final.py
--------------------------

Generate dot‑addition panels (equation strip **stacked above** a 10×10 dot grid)
laid out in an N × M grid per page.  Panels alternate background colours; each
dot grid has a uniform background.  Automatic pagination if you supply more
(a,b) pairs than fit on one page.

Key change
~~~~~~~~~~
* **Left‑edge alignment** – the equation and dot grid now share the same left
  margin inside each panel (`LEFT_PAD = 0.01*W`).  The grid sits directly
  **below** the equation strip instead of to its right.
* Slightly larger default font.
"""

import math, argparse
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle
from matplotlib.backends.backend_pdf import PdfPages

# ======== Global style constants ==============
FONT_SIZE  = 20               # bigger digits / symbols
LEFT_PAD   = 0.01             # fractional panel‑width inset for both elements
BOX_PAD    = 0.0            # gap after each coloured number box
SYM_PAD    = 0.05             # gap after each '+' or '=' symbol
COLOR_A, COLOR_B = "#b038a8", "#0070c0"
PANEL_BG   = ["#f2f2f2", "#e8f6ff"]
GRID_BG    = "#cdecc9"
GAP_FRAC   = 0.3
FIGSIZE    = (11, 8.5)        # US‑letter landscape
# ==============================================


def number_box(fig, text, colour, x, y_top, h_box):
    """Draw coloured rectangle + centred text; return new x cursor."""
    box_w = 0.06 + 0.012 * (len(text) - 1)
    fig.patches.append(Rectangle((x, y_top - h_box), box_w, h_box,
                                 facecolor=colour, transform=fig.transFigure,
                                 clip_on=False))
    fig.text(x + box_w/2, y_top - h_box/2, text,
             ha='center', va='center', color='white',
             fontsize=FONT_SIZE, weight='bold')
    return x + box_w + BOX_PAD

def draw_panel(fig, bounds, a, b, idx):
    """Draw one centred panel: equation on top, dot grid beneath."""
    L, B, W, H = bounds

    # ——— panel background ———
    fig.patches.append(Rectangle((L, B), W, H,
                     facecolor=PANEL_BG[idx % 2],
                     transform=fig.transFigure, zorder=-1))

    # ---------- 1) build the equation strip (measure first) ----------
    eq_h = 0.17 * H
    box_a_w = 0.06 * W + 0.012 * W * (len(str(a)) - 1)
    box_b_w = 0.06 * W + 0.012 * W * (len(str(b)) - 1)
    ans_w   = 0.18 * W                             # grey answer box
    eq_w = (box_a_w + box_b_w + ans_w
            + 2 * BOX_PAD * W                      # after each number box
            + 2 * SYM_PAD * W)                     # after + and =

    # centre the whole strip
    x_cur = L + (W - eq_w) / 2                     # ⬅️ centred left-edge
    y_top = B + H - 0.05 * H

    # helper: draw a coloured number box & advance cursor
    def number_box(text, colour, width):
        nonlocal x_cur
        fig.patches.append(Rectangle((x_cur, y_top - eq_h),
                                     width, eq_h, facecolor=colour,
                                     transform=fig.transFigure))
        fig.text(x_cur + width/2, y_top - eq_h/2, text,
                 ha='center', va='center', color='white',
                 fontsize=FONT_SIZE, weight='bold')
        x_cur += width + BOX_PAD * W

    number_box(str(a), COLOR_A, box_a_w)
    fig.text(x_cur, y_top - eq_h/2, '+',
             ha='left', va='center', fontsize=FONT_SIZE, weight='bold')
    x_cur += SYM_PAD * W
    number_box(str(b), COLOR_B, box_b_w)
    fig.text(x_cur, y_top - eq_h/2, '=',
             ha='left', va='center', fontsize=FONT_SIZE, weight='bold')
    x_cur += SYM_PAD * W
    fig.patches.append(Rectangle((x_cur, y_top - eq_h), ans_w, eq_h,
                                 facecolor='#dddddd', transform=fig.transFigure))

    # ---------- 2) draw the dot grid (centred separately) ----------
    grid_side = 0.6 * H                            # square height ≤ 60 % panel
    gL = L + (W - grid_side) / 2                   # ⬅️ same centring rule
    gB = B + 0.05 * H                              # gap above panel bottom

    gax = fig.add_axes([gL, gB, grid_side, grid_side])
    gax.set_aspect('equal'); gax.axis('off')

    cell, gap = 1.0, GAP_FRAC
    total = 10*cell + gap
    gax.add_patch(Rectangle((0,0), total, total,
                            facecolor=GRID_BG, edgecolor='none'))

    # row labels (10 at bottom)
    for r in range(10):
        y = r*cell + cell/2 + (gap if r >= 5 else 0)
        gax.text(-0.6, y, str(10 - r), ha='right', va='center', fontsize=8)

    # dots
    for k in range(100):
        c, r = k % 10, 9 - k//10
        dx = c*cell + cell/2 + (gap if c >= 5 else 0)
        dy = r*cell + cell/2 + (gap if r >= 5 else 0)
        face = COLOR_A if k < a else COLOR_B if k < a + b else 'white'
        gax.add_patch(Circle((dx, dy), radius=cell*0.4,
                             facecolor=face, edgecolor='black', lw=1))

    gax.set_xlim(-1, total+0.5); gax.set_ylim(-0.5, total+0.5)

def draw_page(fig, pairs, rows, cols):
    margin = 0.02
    pw = (1 - (cols+1)*margin) / cols
    ph = (1 - (rows+1)*margin) / rows
    for i,(a,b) in enumerate(pairs):
        r,c = divmod(i, cols)
        bounds = (margin + c*(pw+margin), 1 - margin - (r+1)*ph - r*margin, pw, ph)
        draw_panel(fig, bounds, a, b, i)

def build_pdf(pairs, rows, cols, outfile):
    cap = rows*cols
    pages = math.ceil(len(pairs)/cap)
    with PdfPages(outfile) as pdf:
        for p in range(pages):
            fig = plt.figure(figsize=FIGSIZE)
            draw_page(fig, pairs[p*cap:(p+1)*cap], rows, cols)
            pdf.savefig(fig, bbox_inches='tight'); plt.close(fig)
    print('Saved', outfile)

if __name__ == '__main__':
    ap = argparse.ArgumentParser(description='Dot‑addition worksheet generator')
    ap.add_argument('-r','--rows', type=int, default=2)
    ap.add_argument('-c','--cols', type=int, default=2)
    ap.add_argument('--pairs', type=str,
                    default='26+6,15+4,38+5,17+7',
                    help='Comma list like 12+5,8+7 (a+b)')
    ap.add_argument('-o','--outfile', default='dot_sheet.pdf')
    args = ap.parse_args()

    pairs = [tuple(map(int,p.split('+'))) for p in args.pairs.split(',') if p]
    build_pdf(pairs, args.rows, args.cols, args.outfile)
