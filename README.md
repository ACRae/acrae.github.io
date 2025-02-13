# Personal Website 🌐

ACRae's personal website. Showcases my portfolio, projects, and professional journey in the field of **computer science** and **technology**.

## 🚀 Features
- 🌟 About Me section
- 📂 Portfolio & Projects
- 📫 Contact Information

## 🛠️ Tech Stack
- [VitePress](https://vitepress.dev/) – Static Site Generator
- [Bun](https://bun.sh/) – JavaScript Runtime
- Markdown & HTML for content
- GitHub Pages for deployment

## 📂 Project Structure
```
website/ 
├── docs/ 
│ ├── .vitepress/       # VitePress config 
│ ├── public/           # Static assets (images, etc.) 
│ ├── index.md          # Home page 
├── .github/workflows/  # GitHub Actions for deployment 
├── package.json        # Dependencies & scripts 
└── README.md           # This file
```

## 🚀 Installation & Local Development
To run the site locally:
```sh
bun install
bun run docs:dev
```
Then, open http://localhost:5173 in your browser.

## 🚀 Deployment
This website is automatically deployed using GitHub Actions and hosted on GitHub Pages.
To manually deploy:
```bash
bun run docs:build
```