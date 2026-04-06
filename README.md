# Justin - Astro + Tailwind + Sanity

A modern Astro project setup with Tailwind CSS, Sanity CMS, Mux video hosting, GSAP animations, and Cloudflare Pages deployment.

## Tech Stack

- **[Astro](https://astro.build/)** - The web framework for content-driven websites
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Sanity CMS](https://www.sanity.io/)** - Headless CMS for content management
- **[Mux](https://mux.com/)** - Video streaming and hosting
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animation library
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Hosting and deployment
- **[Prettier](https://prettier.io/)** - Code formatting

## Getting Started

### Prerequisites

- Node.js >= 22.12.0
- npm or yarn
- Sanity account (for CMS)
- Mux account (for video)
- Cloudflare account (for hosting)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Cloudflare

```bash
npm run build
npx wrangler deploy
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

### Sanity CMS

1. Create a project at [sanity.io](https://www.sanity.io/)
2. Get your Project ID from the Sanity dashboard
3. Add to `.env`:
   ```
   SANITY_PROJECT_ID=your-project-id
   SANITY_DATASET=production
   ```

### Mux Video

1. Create an account at [mux.com](https://mux.com/)
2. Create API keys in Settings > API
3. Add to `.env`:
   ```
   MUX_TOKEN_ID=your-token-id
   MUX_TOKEN_SECRET=your-token-secret
   ```

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── lib/            # Utility libraries (Sanity client, etc.)
│   ├── pages/          # Astro pages
│   └── styles/         # Global styles
├── studio/             # Sanity Studio (CMS admin)
│   ├── schemas/        # Content type definitions
│   └── sanity.config.ts
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
├── wrangler.jsonc      # Cloudflare Workers configuration
└── package.json
```

## Sanity Studio

The `./studio` directory contains your Sanity CMS admin interface.

### Setup Studio

```bash
cd studio
npm install
```

Update `studio/.env` with your Sanity Project ID.

### Run Studio Locally

```bash
cd studio
npm run dev
```

Access at `http://localhost:3333`

### Deploy Studio

Deploy to Sanity's free hosting:

```bash
cd studio
npm run deploy
```

This hosts your studio at `https://<projectId>.sanity.studio`.

## Code Quality

### Format with Prettier

```bash
npx prettier --write .
```

### Check Formatting

```bash
npx prettier --check .
```

## GitHub Setup

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/justin.git
   git branch -M main
   git push -u origin main
   ```

## Cloudflare Pages Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Pages > Create a project
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Add environment variables in Cloudflare dashboard

## License

MIT
