# Khutoot Studio - Domain & Mac Mini Hosting Setup

## Domain: khutoot.store (GoDaddy)
## Branding: Khutoot Studio
## Hosting: Mac Mini (Your Machine)

---

## PART 1: REBRAND PROJECT (5 minutes)

### Step 1: Update Brand Files

Run these commands to rebrand:

```bash
# Update project name in package.json
sed -i '' 's/"name": "urban-lines"/"name": "khutoot-studio"/g' package.json

# Update display name in Header
sed -i '' "s/خطوط/خطوط ستوديو/g" src/components/Header.tsx
sed -i '' "s/Urban/Khutoot Studio/g" src/components/Header.tsx
```

### Step 2: Update Content Files

Edit these files to change branding:

**`src/components/Header.tsx`** (Line ~25):
```typescript
// OLD:
<span>خطوط</span>

// NEW:
<span>خطوط ستوديو</span>
```

**`src/components/Footer.tsx`** (Line ~95):
```typescript
// OLD:
© {currentYear} {isArabic ? 'خطوط المدينة' : 'Urban Lines'}

// NEW:
© {currentYear} {isArabic ? 'خطوط ستوديو' : 'Khutoot Studio'}
```

**`next.config.js`** (Line ~1):
```javascript
// Update domain references to khutoot.store
// domains: ['khutoot.store', 'www.khutoot.store']
```

**`src/context/LanguageContext.tsx`** (Update taglines):
```typescript
// 'hero.title' for site name references
// Update to mention "Khutoot Studio"
```

---

## PART 2: GET MAC MINI IP ADDRESS

### Find Your Mac's IP Address:

```bash
# Method 1: Simple
ifconfig | grep "inet " | grep -v 127.0.0.1

# Method 2: Full IP
ipconfig getifaddr en0

# Method 3: See all details
ifconfig en0
```

**Example output:**
```
inet 192.168.1.50 netmask 0xffffff00 broadcast 192.168.1.255
```

**Your Local IP:** `192.168.1.50` (example - yours will be different)

### Find Public IP (if accessing from outside your network):

```bash
# Your public IP (what GoDaddy needs):
curl -s https://checkip.amazonaws.com
# or
curl -s https://icanhazip.com
```

**Your Public IP:** `1.2.3.4` (example)

---

## PART 3: SETUP GODADDY DNS

### Step 1: Log into GoDaddy

1. Go to https://godaddy.com
2. Sign in to your account
3. Find "khutoot.store" in your domains list
4. Click on it → **Manage DNS**

### Step 2: Update DNS Records

You need to set up DNS records. Choose ONE approach:

### OPTION A: Direct IP (Recommended if you have static IP)

**Add A Record:**
- **Name:** `@` (or leave blank)
- **Type:** A
- **Value:** Your Public IP (from `curl` command above)
- **TTL:** 600 (or 3600)

**Also add www subdomain:**
- **Name:** `www`
- **Type:** A
- **Value:** Your Public IP
- **TTL:** 600

### OPTION B: Using No-IP (Recommended if IP changes)

If your ISP changes your IP regularly:

1. **Sign up:** https://www.noip.com
2. **Create hostname:** `khutoot.noip.com` pointing to your Mac
3. **In GoDaddy**, add CNAME record:
   - **Name:** `@`
   - **Type:** CNAME
   - **Value:** `khutoot.noip.com`

### OPTION C: Using Cloudflare (Most Professional)

1. **Sign up:** https://cloudflare.com
2. **Add site:** khutoot.store
3. **Update GoDaddy nameservers** to Cloudflare's NS records
4. **In Cloudflare dashboard**, set A record to your public IP

### Save DNS Changes

After adding records, click **Save**. Changes take 15-30 minutes to propagate.

**Verify DNS is working:**
```bash
nslookup khutoot.store
# or
dig khutoot.store
```

---

## PART 4: SETUP MAC MINI SERVER

### Step 1: Install Required Software

```bash
# Install Node.js (if not already)
brew install node

# Install PM2 (process manager - keeps server running)
sudo npm install -g pm2

# Install Nginx (web server / reverse proxy)
brew install nginx

# Install OpenSSL (for HTTPS)
brew install openssl
```

### Step 2: Build Production Website

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project

# Install dependencies
npm install

# Build optimized version
npm run build

# Test production build locally
npm start
# Visit: http://localhost:3000
# Press Ctrl+C to stop
```

### Step 3: Setup PM2 (Auto-restart on crashes)

```bash
# Start the app with PM2
pm2 start npm --name "khutoot-studio" -- start

# Make it auto-start on Mac restart
pm2 startup

# Save PM2 configuration
pm2 save

# Check if running
pm2 status
```

### Step 4: Setup Nginx as Reverse Proxy

**Create Nginx config:**

```bash
# Create config file
sudo nano /usr/local/etc/nginx/servers/khutoot.store.conf
```

**Paste this config:**

```nginx
server {
    listen 80;
    server_name khutoot.store www.khutoot.store;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name khutoot.store www.khutoot.store;

    # SSL Certificates (we'll add these later)
    ssl_certificate /usr/local/etc/letsencrypt/live/khutoot.store/fullchain.pem;
    ssl_certificate_key /usr/local/etc/letsencrypt/live/khutoot.store/privkey.pem;

    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Proxy to Node.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Cache static assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /public/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Save:** Press `Ctrl+X`, then `Y`, then `Enter`

### Step 5: Test Nginx

```bash
# Test configuration
sudo nginx -t

# Start Nginx
sudo brew services start nginx

# Check if running
curl http://localhost:80

# View Nginx logs
tail -f /usr/local/var/log/nginx/access.log
tail -f /usr/local/var/log/nginx/error.log
```

---

## PART 5: SETUP HTTPS/SSL CERTIFICATES (Free)

### Option A: Using Let's Encrypt (Automatic, Free)

```bash
# Install Certbot
brew install certbot

# Get certificate for your domain
sudo certbot certonly --standalone -d khutoot.store -d www.khutoot.store

# You'll be asked for:
# 1. Email (for renewal notifications)
# 2. Accept terms
# 3. Whether to share email with EFF

# Certificates will be in:
# /usr/local/etc/letsencrypt/live/khutoot.store/
```

**Auto-renewal:**
```bash
# Setup automatic renewal (runs twice daily)
brew services start certbot

# Or manually renew
sudo certbot renew
```

### Option B: Self-Signed Certificate (Testing Only)

```bash
# Create self-signed cert (NOT recommended for production)
sudo openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# Update Nginx config with paths
```

---

## PART 6: FIREWALL SETUP (Mac Security)

### Allow Nginx through firewall:

```bash
# Check firewall status
sudo pfctl -s all | grep "block"

# Add Nginx to allowed apps
# System Preferences → Security & Privacy → Firewall Options

# Or command line:
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/local/opt/nginx/bin/nginx
```

---

## PART 7: MACMINI AUTO-START SETUP

### Make everything auto-start on Mac restart:

```bash
# PM2 auto-start (already done above)
pm2 startup
pm2 save

# Nginx auto-start
sudo brew services start nginx

# Check what's set to auto-start
pm2 status
brew services list
```

---

## PART 8: FINAL SETUP & TESTING

### Test everything works:

```bash
# 1. Check PM2 is running
pm2 status

# 2. Check Nginx is running
sudo nginx -s status
# or
ps aux | grep nginx

# 3. Test local access
curl http://localhost:3000

# 4. Test via Nginx
curl http://localhost

# 5. Test HTTPS (if cert installed)
curl https://localhost --insecure

# 6. Test domain (wait for DNS to propagate, 15-30 min)
curl http://khutoot.store
curl https://khutoot.store

# 7. Visit in browser
# http://khutoot.store
# https://khutoot.store
```

### Verify DNS is working:

```bash
# Check DNS resolution
nslookup khutoot.store
dig khutoot.store

# Check if ports are open
lsof -i :80
lsof -i :443
lsof -i :3000
```

---

## PART 9: MONITORING & MAINTENANCE

### Monitor logs:

```bash
# PM2 logs
pm2 logs

# Nginx access logs
tail -f /usr/local/var/log/nginx/access.log

# Nginx error logs
tail -f /usr/local/var/log/nginx/error.log

# System logs
log stream --predicate 'process == "nginx"'
```

### Restart services (if needed):

```bash
# Restart PM2 app
pm2 restart khutoot-studio

# Reload Nginx (no downtime)
sudo nginx -s reload

# Stop all services
pm2 stop all
sudo brew services stop nginx
```

### Update website (deploy new code):

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project

# Pull latest code
git pull

# Rebuild
npm run build

# Restart PM2
pm2 restart khutoot-studio

# Or full restart
pm2 stop khutoot-studio
npm start &
```

---

## PART 10: TROUBLESHOOTING

### Domain not resolving?

```bash
# Clear DNS cache
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

# Check DNS propagation
dig khutoot.store @8.8.8.8
nslookup khutoot.store 8.8.8.8
```

### Can't access from outside network?

```bash
# Check if ports are open
sudo lsof -i :80
sudo lsof -i :443

# Check firewall
sudo pfctl -s all

# Check Nginx is listening
netstat -an | grep LISTEN | grep -E '80|443'
```

### HTTPS certificate errors?

```bash
# Check cert is valid
openssl x509 -in /usr/local/etc/letsencrypt/live/khutoot.store/fullchain.pem -text -noout

# Verify Nginx can read cert
sudo openssl x509 -in /usr/local/etc/letsencrypt/live/khutoot.store/fullchain.pem -noout

# Check cert expiration
echo | openssl s_client -servername khutoot.store -connect khutoot.store:443 2>/dev/null | openssl x509 -noout -dates
```

### Node app crashing?

```bash
# Check PM2 logs
pm2 logs

# Check system resources
top
# Press 'q' to quit

# Restart app
pm2 restart khutoot-studio

# Check error logs
/Users/claudia/Desktop/saudi-blueprints-project/.pm2/logs/*.log
```

### Too much traffic / slow response?

```bash
# Check Mac resources
top
# Look for CPU, Memory usage

# Check Nginx is caching static files
tail -f /usr/local/var/log/nginx/access.log
# Should see 200 responses, not 304

# Increase PM2 instances (use multiple cores)
pm2 start npm --name "khutoot-studio" -i max -- start
```

---

## PART 11: BACKUP & RECOVERY

### Backup your website code:

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project

# Initialize git
git init
git add .
git commit -m "Initial commit: Khutoot Studio"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/khutoot-studio.git
git branch -M main
git push -u origin main
```

### Backup database/data:

```bash
# Backup everything
cp -r /Users/claudia/Desktop/saudi-blueprints-project ~/khutoot-studio-backup-$(date +%Y%m%d)

# Schedule daily backup
crontab -e
# Add: 0 2 * * * cp -r /Users/claudia/Desktop/saudi-blueprints-project ~/backups/khutoot-$(date +\%Y\%m\%d)
```

---

## PART 12: MONITORING & UPTIME

### Setup uptime monitoring:

```bash
# Uptime Robot (free monitoring)
# 1. Visit https://uptimerobot.com
# 2. Create account
# 3. Add monitor for https://khutoot.store
# 4. Set to check every 5 minutes
# 5. Get alerts if site goes down
```

### Check server status:

```bash
# Overall health check
pm2 status
brew services list

# CPU/Memory usage
top -l 1 | head -20

# Disk usage
df -h

# Network stats
netstat -i
```

---

## QUICK REFERENCE: ALL COMMANDS

```bash
# START EVERYTHING
pm2 start npm --name "khutoot-studio" -- start
sudo brew services start nginx

# STOP EVERYTHING
pm2 stop all
sudo brew services stop nginx

# RESTART
pm2 restart khutoot-studio
sudo nginx -s reload

# CHECK STATUS
pm2 status
sudo nginx -t

# VIEW LOGS
pm2 logs
tail -f /usr/local/var/log/nginx/access.log

# UPDATE CODE
cd /Users/claudia/Desktop/saudi-blueprints-project
git pull
npm run build
pm2 restart khutoot-studio

# RENEW SSL CERT
sudo certbot renew

# CHECK DOMAIN
curl https://khutoot.store
nslookup khutoot.store
```

---

## CHECKLIST: LAUNCH PROCESS

- [ ] Rebrand to "Khutoot Studio"
- [ ] Get Mac mini IP address
- [ ] Setup GoDaddy DNS (A records)
- [ ] Install Node, PM2, Nginx, Certbot
- [ ] Build production website (`npm run build`)
- [ ] Start PM2 server (`pm2 start npm...`)
- [ ] Setup Nginx reverse proxy
- [ ] Get SSL certificate (Let's Encrypt)
- [ ] Test HTTPS works
- [ ] Setup PM2 auto-start
- [ ] Setup Nginx auto-start
- [ ] Test domain resolution (`nslookup khutoot.store`)
- [ ] Visit https://khutoot.store in browser ✅
- [ ] Setup monitoring (Uptime Robot)
- [ ] Setup GitHub backup
- [ ] Setup daily backups

---

## GOING LIVE: FINAL STEPS

1. **Verify DNS is working:**
   ```bash
   nslookup khutoot.store
   # Should show your public IP
   ```

2. **Test from outside Mac:**
   - Ask a friend to visit https://khutoot.store
   - Or use phone on different network

3. **Monitor first 24 hours:**
   - Watch PM2 logs
   - Watch Nginx logs
   - Check monitoring alerts

4. **Celebrate! 🎉**
   - Your website is live at khutoot.store
   - Running on your Mac mini
   - Automatic SSL/HTTPS
   - Auto-restart on crashes
   - Professional setup

---

## SUPPORT

**Resources:**
- Let's Encrypt: https://letsencrypt.org
- Nginx: https://nginx.org
- PM2: https://pm2.keymetrics.io
- GoDaddy: https://godaddy.com

**If something breaks:**
1. Check logs: `pm2 logs`
2. Check DNS: `nslookup khutoot.store`
3. Check ports: `lsof -i :80`
4. Restart everything: `pm2 restart all && sudo nginx -s reload`

---

**You're now running a professional web server at khutoot.store on your Mac mini!** 🚀

