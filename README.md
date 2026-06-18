# thi3nnq.github.io

Personal CV / portfolio website for **Nguyễn Đình Thiện** — AI Engineer.

Built as a single static page (HTML + CSS + vanilla JS), no build step required.

## Features
- Responsive, mobile-first layout
- Dark / light theme toggle (remembers your choice)
- Scroll-reveal animations & timeline work history
- Print-friendly (Ctrl/Cmd + P → clean PDF)
- Downloadable CV PDF

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo named **`thi3nnq.github.io`** on GitHub (must match your username for a user site).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "Add CV website"
   git branch -M main
   git remote add origin https://github.com/thi3nnq/thi3nnq.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source = Deploy from a branch → `main` / root**.
4. Visit **https://thi3nnq.github.io** (live in ~1 minute).

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure & content |
| `style.css`  | Styling, themes, animations |
| `script.js`  | Theme toggle + scroll reveal |
| `assets/`    | CV PDF |
| `.nojekyll`  | Tells GitHub Pages to serve files as-is |
