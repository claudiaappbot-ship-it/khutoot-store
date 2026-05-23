# خطوط المدينة (Urban Lines) - Setup & Deployment Guide

## Overview

This is a complete, production-ready premium e-commerce platform for the Saudi Arabian market. It's built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

---

## Initial Setup

### Prerequisites

Ensure you have installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git** (for version control)

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd /Users/claudia/Desktop/saudi-blueprints-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Verify installation:**
   ```bash
   npm --version
   node --version
   ```

---

## Development Server (Local)

### Start the development server:

```bash
npm run dev
```

The server will start on **http://localhost:3000**

### Access in browser:

- **Local machine:** http://localhost:3000
- **Mobile on same network:** http://[YOUR_MAC_IP]:3000
  
  To find your Mac IP:
  ```bash
  ifconfig | grep "inet " | grep -v 127.0.0.1
  ```

### Features available in development:

- ✅ Hot reload (auto-refresh on file changes)
- ✅ Fast refresh
- ✅ Source maps for debugging
- ✅ API routes
- ✅ Full TypeScript support

---

## Global Access Setup (Mac Mini)

### Option 1: Using ngrok (Easiest - Free)

1. **Install ngrok:**
   ```bash
   brew install ngrok
   ```

2. **Sign up for free account:**
   - Go to https://ngrok.com
   - Create free account
   - Get your auth token

3. **Configure ngrok:**
   ```bash
   ngrok config add-authtoken YOUR_AUTH_TOKEN
   ```

4. **Start your dev server in one terminal:**
   ```bash
   npm run dev
   ```

5. **In another terminal, expose your local server:**
   ```bash
   ngrok http 3000
   ```

6. **Access globally via ngrok URL:**
   ```
   https://xxxxxx-xx-xxx-xxx-xx.ngrok-free.app
   ```

**Pros:** Free, instant setup, no configuration  
**Cons:** URL changes every time you restart

---

### Option 2: Using Tailscale (Recommended - More Permanent)

1. **Install Tailscale:**
   ```bash
   brew install tailscale
   ```

2. **Start Tailscale:**
   ```bash
   sudo tailscale up
   ```

3. **Get your Tailscale IP:**
   ```bash
   tailscale ip -4
   ```

4. **Share with others:**
   - Users install Tailscale on their device
   - Connect to your Tailscale network
   - Access at: `http://[TAILSCALE_IP]:3000`

**Pros:** Secure, permanent IP, works on VPN  
**Cons:** Requires users to install Tailscale

---

### Option 3: Using Cloudflare Tunnel (Professional)

1. **Install Cloudflare CLI:**
   ```bash
   brew install cloudflare/cloudflare/cloudflared
   ```

2. **Authenticate:**
   ```bash
   cloudflared login
   ```

3. **Create tunnel:**
   ```bash
   cloudflared tunnel create urbanlines
   ```

4. **Start tunnel:**
   ```bash
   cloudflared tunnel run urbanlines
   ```

5. **Get public URL:**
   - Check Cloudflare dashboard for your domain
   - Access at: `https://urbanlines.yourdomain.com`

**Pros:** Professional, secure, custom domain  
**Cons:** Requires Cloudflare account + domain

---

## Production Build & Deployment

### Build for production:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start production server:

```bash
npm start
```

The server will start on port 3000 (or custom port via `--port` flag).

---

## Production Deployment Options

### Option A: Vercel (Recommended for Next.js)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts and get instant deployment URL**

**Benefits:** Automatic HTTPS, CDN, serverless functions, auto-scaling

---

### Option B: AWS EC2

1. **Launch EC2 instance** (t3.medium recommended)
2. **SSH into instance**
3. **Install Node.js:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   nvm install 18
   ```

4. **Clone and setup project:**
   ```bash
   git clone <your-repo> urban-lines
   cd urban-lines
   npm install
   npm run build
   ```

5. **Install PM2 (process manager):**
   ```bash
   npm install -g pm2
   pm2 start npm --name "urbanlines" -- start
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx reverse proxy** (optional, recommended)

---

### Option C: Railway.app

1. **Connect GitHub repo to Railway**
2. **Railway auto-detects Next.js**
3. **Auto-deploys on push**
4. **Free tier available**

---

## Environment Variables

Create `.env.local` file in project root:

```env
# NextAuth (if using auth)
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Stripe (if using payments)
NEXT_PUBLIC_STRIPE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# CMS (Sanity, etc.)
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx

# Analytics
NEXT_PUBLIC_GA_ID=G-xxxxx

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## Performance Optimization

### Lighthouse Targets

The site is configured to achieve:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

### Optimization features already enabled:

- ✅ Image optimization (WebP, AVIF formats)
- ✅ Code splitting
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Font optimization
- ✅ Lazy loading

### Run Lighthouse audit:

```bash
npm run build
npm start
# Open http://localhost:3000 in Chrome
# DevTools → Lighthouse → Generate report
```

---

## Troubleshooting

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: EACCES permission denied

**Solution:**
```bash
# Use sudo for system commands
sudo npm install -g pm2
```

### Issue: Module not found

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: ngrok connection dropped

**Solution:** 
- Ngrok free tier has 1-hour session limit
- Upgrade to paid or restart regularly
- Use Tailscale or Cloudflare Tunnel for permanent setup

---

## Docker Deployment (Optional)

### Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Build and run:

```bash
docker build -t urbanlines .
docker run -p 3000:3000 urbanlines
```

---

## Monitoring & Analytics

### Enable Google Analytics:

1. Set `NEXT_PUBLIC_GA_ID` in `.env.local`
2. Visit: https://analytics.google.com
3. Create property for your domain
4. Copy Measurement ID

### Monitor uptime:

- Use **Uptime Robot** (free)
- Use **Pingdom** (paid)
- Set up alerts for downtime

---

## Backup & Version Control

### Initialize Git:

```bash
git init
git add .
git commit -m "Initial commit: Urban Lines e-commerce platform"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Backup strategy:

```bash
# Backup database daily
0 2 * * * /path/to/backup-script.sh

# Backup to S3
aws s3 sync /data s3://urbanlines-backup/
```

---

## Development Workflow

### When adding features:

1. Create feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```

2. Make changes and test locally:
   ```bash
   npm run dev
   ```

3. Run type check:
   ```bash
   npm run type-check
   ```

4. Commit and push:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```

5. Create pull request and review

6. Merge to main and deploy

---

## Adding Features

### To add new product categories:

1. Edit `/src/data/products.ts` - add products
2. Update `/src/context/LanguageContext.tsx` - add translations
3. Create category pages: `/src/pages/[category]/index.tsx`

### To add new pages:

1. Create file in `/src/pages/`
2. Use existing layout and components
3. Add to navigation in `/src/components/Header.tsx`

### To add new sections to homepage:

1. Create component in `/src/components/sections/`
2. Import in `/src/pages/index.tsx`
3. Add with Framer Motion animations

---

## Support & Resources

### Documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tools:
- [ngrok](https://ngrok.com) - Global tunneling
- [Tailscale](https://tailscale.com) - VPN
- [Vercel](https://vercel.com) - Deployment
- [Railway.app](https://railway.app) - Simple deployment

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Visit: `http://localhost:3000`
4. ✅ Set up global access (ngrok/Tailscale)
5. ✅ Customize content in `/src/data/products.ts`
6. ✅ Deploy to production (Vercel/AWS/Railway)

---

**Ready to launch! 🚀**

