# 🪴 Monis Workspace

**An interactive workspace configurator for designing your perfect Bali-inspired remote work setup.**

Pick your desk, chair, and accessories — see them come alive in a real-time 2D scene — and lock in your monthly bundle.

---

## ✨ Features

- **Visual workspace canvas** — Layered scene with correct depth: chair in front, desk in middle, monitor & accessories on the desk surface
- **Live configurator** — Select desks, chairs, and accessories with instant preview updates
- **Animated transitions** — Smooth framer-motion fade/scale animations on item add/remove
- **Summary panel** — Real-time itemized breakdown with monthly total
- **Elegant UI** — DM Serif Display + DM Sans, warm sand/bark color palette, subtle grain texture

---

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + CSS custom properties |
| State | [Zustand](https://zustand-demo.pmnd.rs) |
| Animation | [Framer Motion](https://www.framer.com/motion) |
| Language | TypeScript |
| Deployment | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/primakurniawan/monis-workspace.git
cd monis-workspace
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page — 3-column grid
│   └── globals.css         # Tailwind + design tokens
│
├── components/
│   ├── configurator/
│   │   ├── DeskSelector.tsx
│   │   ├── ChairSelector.tsx
│   │   └── AccessoriesSelector.tsx
│   ├── workspace/
│   │   └── WorkspaceCanvas.tsx   # 2D layered scene
│   └── summary/
│       └── SummaryPanel.tsx
│
├── store/
│   └── useWorkspaceStore.ts      # Zustand store
│
├── data/
│   └── products.ts               # Product catalog
│
└── types/
    └── workspace.ts              # TypeScript types
```

---

## 🖼 Adding Your Own Furniture Images

Place your assets in the `/public` directory:

```
public/
├── furniture/
│   ├── desk/
│   │   ├── desk-minimal.png
│   │   └── desk-executive.png
│   └── chair/
│       ├── chair-ergo.png
│       └── chair-premium.png
└── accessories/
    ├── monitor.png
    ├── lamp.png
    └── plant.png
```

**Tips for best results:**
- Use **transparent PNG** files
- Recommended sizes: desks ~1000×400px, chairs ~600×600px, accessories ~400×400px
- Shoot/render from a consistent **3/4 perspective** angle

---

## ☁️ Deployment on Vercel

### Option 1 — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

Follow the prompts — your app will be live in ~60 seconds.

### Option 2 — GitHub Integration

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — done!

Vercel auto-deploys on every push to `main`.

---

## 🎨 Customization

### Colors

Design tokens are defined in `globals.css`:

```css
:root {
  --color-sand-50: #faf8f5;
  --color-bark-900: #2a1f15;
  /* ... */
}
```

### Products

Edit `src/data/products.ts` to add/modify desks, chairs, and accessories.

### Canvas Layout

Accessory positioning is controlled via `bottom` % values in `WorkspaceCanvas.tsx`. Adjust to match your specific image dimensions.

---

## 📄 License

MIT — free to use and adapt.

---

*Built with ☀️ for remote workers who appreciate good design.*
