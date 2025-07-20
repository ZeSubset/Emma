"""
multi_dot_multiplication.py
---------------------------

Generate dot-multiplication panels (equation strip **centred above** a 10×10
dot grid) laid out in an N × M grid per page.  Panels alternate background
colours; each dot-grid has one uniform background.  Extra (n,m) pairs spill
onto additional pages automatically.

Each panel colours n×m dots, in *m* blocks of *n* dots:
    group-0 → COLOR_A, group-1 → COLOR_B, group-2 → COLOR_A, ...

Usage
-----
    pip install matplotlib
    python multi_dot_multiplication.py -r 2 -c 2 \
        --pairs "3x4,6x5,8x2,7x3" \
        -o dot_mult_sheet.pdf
"""

import math, argparse
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Circle
from matplotlib.backends.backend_pdf import PdfPages

# ——— global style constants ——————————————————————————
FONT_SIZE  = 15
BOX_PAD    = 0.0     # gap after each coloured number box  (fraction of panel W)
SYM_PAD    = 0.05    # gap after each symbol               (fraction of panel W)
COLOR_A, COLOR_B = "#b038a8", "#0070c0"
PANEL_BG   = ["#f2f2f2", "#e8f6ff"]
GRID_BG    = "#cdecc9"
GAP_FRAC   = 0.3     # 5×5 gap size relative to a cell
FIGSIZE    = (11, 8.5)  # US-letter landscape
# ————————————————————————————————————————————————


# ---------- helpers -----------------------------------------------------------
def number_box(fig, text, colour, x, y_top, h_box):
    """Draw a coloured number box and return the new x cursor."""
    box_w = 0.06 + 0.012 * (len(text) - 1)
    fig.patches.append(Rectangle((x, y_top - h_box), box_w, h_box,
                                 facecolor=colour, transform=fig.transFigure))
    fig.text(x + box_w / 2, y_top - h_box / 2, text,
             ha='center', va='center', color='white',
             fontsize=FONT_SIZE, weight='bold')
    return x + box_w + BOX_PAD * panel_W   # panel_W injected later


def draw_panel(fig, bounds, n, m, idx):
    """Draw one centred multiplication panel."""
    L, B, W, H = bounds
    global panel_W         # inject for number_box spacing
    panel_W = W

    # panel background
    fig.patches.append(Rectangle((L, B), W, H,
                     facecolor=PANEL_BG[idx % 2],
                     transform=fig.transFigure, zorder=-1))

    # 1)  centred equation strip ------------------------------------
    eq_h     = 0.17 * H
    box_n_w  = 0.06 * W + 0.012 * W * (len(str(n)) - 1)
    box_m_w  = 0.06 * W + 0.012 * W * (len(str(m)) - 1)
    ans_w    = 0.18 * W

    eq_w = (box_n_w + box_m_w + ans_w
            + 2 * BOX_PAD * W
            + 2 * SYM_PAD  * W)

    x_cur = L + (W - eq_w) / 2
    y_top = B + H - 0.05 * H

    def nb(txt, col, width):
        nonlocal x_cur
        fig.patches.append(Rectangle((x_cur, y_top - eq_h), width, eq_h,
                                     facecolor=col, transform=fig.transFigure))
        fig.text(x_cur + width / 2, y_top - eq_h / 2, txt,
                 ha='center', va='center', color='white',
                 fontsize=FONT_SIZE, weight='bold')
        x_cur += width + BOX_PAD * W

    nb(str(n), COLOR_A, box_n_w)
    fig.text(x_cur, y_top - eq_h / 2, '×',
             ha='left', va='center', fontsize=FONT_SIZE, weight='bold')
    x_cur += SYM_PAD * W
    nb(str(m), COLOR_B, box_m_w)
    fig.text(x_cur, y_top - eq_h / 2, '=',
             ha='left', va='center', fontsize=FONT_SIZE, weight='bold')
    x_cur += SYM_PAD * W
    fig.patches.append(Rectangle((x_cur, y_top - eq_h), ans_w, eq_h,
                                 facecolor='#dddddd', transform=fig.transFigure))

    # 2)  centred dot grid -----------------------------------------
    grid_side = 0.7 * H
    gL = L + (W - grid_side) / 2
    gB = B + 0.05 * H
    gax = fig.add_axes([gL, gB, grid_side, grid_side])
    gax.set_aspect('equal')
    gax.axis('off')

    cell, gap = 1.0, GAP_FRAC
    total = 10 * cell + gap
    gax.add_patch(Rectangle((0, 0), total, total,
                            facecolor=GRID_BG, edgecolor='none'))

    # row labels (10 at bottom)
    for r in range(10):
        y = r * cell + cell / 2 + (gap if r >= 5 else 0)
        gax.text(-0.6, y, str(10 - r),
                 ha='right', va='center', fontsize=8)

        # —— rainbow palette for up to 10 groups ——
    DOT_COLORS = [
        "#ff0000",  # red
        "#ff7f00",  # orange
        "#ffff00",  # yellow
        "#00ff00",  # green
        "#00ffff",  # cyan
        "#0000ff",  # blue
        "#8b00ff",  # violet
        "#ff1493",  # pink
        "#b8860b",  # goldenrod
        "#800000",  # maroon
    ]

    # ───── colour n·m dots: m groups of n, cycling through rainbow ─────
    product = n * m          # total dots to colour
    for k in range(product):
        group = k // n                       # 0 … m-1
        face  = DOT_COLORS[group % 10]       # rainbow cycle
        col, row = k % 10, 9 - k // 10
        dx = col*cell + cell/2 + (gap if col >= 5 else 0)
        dy = row*cell + cell/2 + (gap if row >= 5 else 0)
        gax.add_patch(Circle((dx, dy), radius=cell*0.4,
                             facecolor=face, edgecolor='black', lw=1))

    # draw empty circles for the remainder up to 100
    for k in range(product, 100):
        col, row = k % 10, 9 - k // 10
        dx = col*cell + cell/2 + (gap if col >= 5 else 0)
        dy = row*cell + cell/2 + (gap if row >= 5 else 0)
        gax.add_patch(Circle((dx, dy), radius=cell*0.4,
                             facecolor='white', edgecolor='black', lw=1))


    gax.set_xlim(-1, total + 0.5)
    gax.set_ylim(-0.5, total + 0.5)


def draw_page(fig, pairs, rows, cols):
    margin = 0.02
    pw = (1 - (cols + 1) * margin) / cols
    ph = (1 - (rows + 1) * margin) / rows
    for i, (n, m) in enumerate(pairs):
        r, c = divmod(i, cols)
        bounds = (margin + c * (pw + margin),
                  1 - margin - (r + 1) * ph - r * margin,
                  pw, ph)
        draw_panel(fig, bounds, n, m, i)


def build_pdf(pairs, rows, cols, outfile):
    cap = rows * cols
    pages = math.ceil(len(pairs) / cap)
    with PdfPages(outfile) as pdf:
        for p in range(pages):
            fig = plt.figure(figsize=FIGSIZE)
            draw_page(fig, pairs[p * cap:(p + 1) * cap], rows, cols)
            pdf.savefig(fig, bbox_inches='tight')
            plt.close(fig)
    print('Saved', outfile)


# ---------------------- CLI -------------------------
# example python .\workbook_mult.py -r 2 -c 2 --pairs '3x4,5x2,8x6,7x9'

if __name__ == '__main__':
    ap = argparse.ArgumentParser(description='Dot-multiplication worksheet generator')
    ap.add_argument('-r', '--rows', type=int, default=2, help='panels down')
    ap.add_argument('-c', '--cols', type=int, default=2, help='panels across')
    ap.add_argument('--pairs', type=str,
                    default='3x4,5x2,8x6,7x9',
                    help='comma list like 4x3,7x2 (n×m)')
    ap.add_argument('-o', '--outfile', default='dot_mult_sheet.pdf')
    args = ap.parse_args()

    PAIRS = [tuple(map(int, p.lower().split('x')))
             for p in args.pairs.split(',') if p]

    assert all(0 <= n <= 10 and 0 <= m <= 10 and n * m <= 100 for n, m in PAIRS), \
        "Need 0 ≤ n,m ≤ 10 and n·m ≤ 100 to fit the 10×10 grid."

    build_pdf(PAIRS, args.rows, args.cols, args.outfile)
