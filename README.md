# YourBanK — Modern Banking Website

A fully responsive banking website built with **React 19**, **Three.js**, and **Tailwind CSS v4**. Features interactive 3D WebGL backgrounds, custom GLSL shaders, smooth animations, and a complete authentication flow with Supabase.

> **Live Demo:** [https://yourbank-pi.vercel.app/](https://yourbank-pi.vercel.app/)

## Features

- **6 fully responsive pages** — Home, Careers, About, Security, Login, Sign Up
- **Interactive 3D backgrounds** — custom GLSL shaders (DotsPlane with mouse tracking, animated arrows, diamond patterns, noise effects)
- **Authentication** — sign up, login, and OAuth (Google, Facebook, Apple) via Supabase
- **Currency converter** — real-time exchange rates from open.er-api.com
- **Testimonials slider** — smooth carousel with tab switching
- **FAQ accordion** — expandable sections with "Load All" functionality
- **Dark theme** — consistent dark UI with green (#CAFF33) accent color

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19.2 + React Compiler |
| Build Tool | Vite 7.3 |
| Styling | Tailwind CSS 4.1 |
| 3D / WebGL | Three.js + React Three Fiber |
| Shaders | Custom GLSL (vertex + fragment) |
| Routing | React Router 7 |
| Auth | Supabase |
| Icons | Font Awesome |
| Testing | Vitest |
| Linting | ESLint 9 (flat config) |

## Architecture

The project follows **[Feature-Sliced Design](https://feature-sliced.design/)** methodology:

```
src/
├── app/            # App shell — entry point, router, layout, global styles
├── pages/          # Route-level components (lazy-loaded)
├── widgets/        # Self-contained UI sections (18 widgets)
├── features/       # Business logic (auth, currency-converter)
├── entities/       # Domain entities
└── shared/         # Reusable UI components, config, assets, GLSL shaders
```

### Key Architectural Decisions

- **No global state** — local `useState` + single `AuthContext` for auth
- **Lazy-loaded routes** — every page is code-split for fast initial load
- **3D inline rendering** — `<Canvas>` placed directly in widget JSX, not in a separate layer
- **Shader patterns** — `useFrame` + `useRef` for animation loops, pointer events for mouse-driven uniforms
- **Max-width breakpoints** — `max-tablet:` (1440px) and `max-mobile:` (390px) for responsive design

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/bogdankalgan/yourbank.git
cd yourbank
npm install
```

### Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-----------|
| `VITE_API_URL` | Exchange rate API (default: open.er-api.com) |
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon/public key |

### Development

```bash
npm run dev        # Start dev server with HMR
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run test       # Run tests
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero with 3D dots, product showcase, use cases, features, FAQ, testimonials |
| Careers | `/careers` | Company values, benefits, job openings |
| About | `/about` | Mission & vision, press releases |
| Security | `/security` | Security features with noise shader backgrounds |
| Login | `/login` | Login form with 3D backgrounds |
| Sign Up | `/signup` | Registration form with Supabase integration |

## Design

Built pixel-perfect from a Figma design with custom design tokens:

- **Font:** Lexend (Google Fonts)
- **Primary color:** `#CAFF33` (green accent)
- **Background:** `#1A1A1A` (dark)
- **Custom GLSL shaders:** 11 shader files for 3D visual effects

## License

This project is for portfolio and educational purposes.
