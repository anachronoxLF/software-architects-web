# Software Architects — Website

Landing site for **Software Architects s.r.o.**, a senior-led Java software
engineering studio based in Bratislava. Single page plus legal imprint;
static HTML / CSS / vanilla JS — no build step, no framework.

Published via GitHub Pages at
<https://anachronoxlf.github.io/software-architects-web/>.

## Variants

Two visual treatments live on separate branches, sharing the same content
and information architecture:

- `v1.0.0-editorial` — warm, editorial, serif-led (Fraunces / Inter).
- `v1.0.0-technical` — dark, technical, monospace-accented.

The `main` branch is the integration point; a variant is chosen by merging
the preferred branch.

## Structure

```
index.html     Landing page (hero, services, industries, about, contact)
imprint.html   Legal information
styles.css     All styling
main.js        Mobile menu toggle, scroll-spy, footer year
assets/        Portrait (JPG + WebP), favicon (SVG + PNG)
```

## Local preview

No build step. Serve the directory with any static server, for example:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/
```

## Deployment

GitHub Pages serves the repository root of the selected branch. No CI
configuration is required.
