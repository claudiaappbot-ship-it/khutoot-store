# Khutoot Studio - Complete Launch Guide
## khutoot.store | Hosted on Mac Mini

---

## 🎯 OVERVIEW

This guide will take you from development to a fully live, professional website at **https://khutoot.store** running on your Mac mini.

**Timeline:** 2-3 hours total  
**Cost:** FREE (Let's Encrypt SSL, no hosting fees)  
**Difficulty:** Intermediate (but detailed steps provided)

---

## ⏱️ TIMELINE

| Step | Task | Time | Status |
|------|------|------|--------|
| 1 | Gather Information | 5 min | ⬜ |
| 2 | Install Software | 15 min | ⬜ |
| 3 | Build Production Website | 10 min | ⬜ |
| 4 | Setup GoDaddy DNS | 5 min | ⬜ |
| 5 | Setup PM2 (Auto-restart) | 5 min | ⬜ |
| 6 | Setup Nginx (Reverse Proxy) | 15 min | ⬜ |
| 7 | Get SSL Certificate | 10 min | ⬜ |
| 8 | Test Everything | 20 min | ⬜ |
| 9 | Setup Auto-start | 5 min | ⬜ |
| 10 | Setup Monitoring | 10 min | ⬜ |
| Total | | ~2 hours | ✅ |

---

## STEP 1: GATHER INFORMATION (5 min)

### Get Your Mac's IP Addresses

**Local IP (for network access):**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Example output: `inet 192.168.1.50`

**Write down your local IP:** `192.168.1.___`

**Public IP (for GoDaddy):**
```bash
curl -s https://icanhazip.com
```

Example output: `203.45.67.89`

**Write down your public IP:** `203.45.67.___`

### Check GoDaddy Account

1. Log into https://godaddy.com
2. Find "khutoot.store" domain
3. Note the account email: ___________

---

## STEP 2: INSTALL SOFTWARE (15 min)

### Check What You Already Have

```bash
# Check Node.js
node --version
# Should be 18+

# Check npm
npm --version
# Should be 9+

# Check Brew
brew --version
```

### Install Missing Software

**If Node.js not installed:**
```bash
brew install node
```

**PM2 (server auto-restart):**
```bash
sudo npm install -g pm2
```

**Nginx (web server):**
```bash
brew install nginx
```

**Certbot (free SSL):**
```bash
brew install certbot
```

### Verify All Installed

```bash
node --version        # Should show v18+
npm --version         # Should show 9+
pm2 --version         # Should show version
nginx -version        # Should show version
certbot --version     # Should show version
```

✅ All software installed!

---

## STEP 3: BUILD PRODUCTION WEBSITE (10 min)

### Navigate to Project

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project
```

### Install Dependencies

```bash
npm install
```

This downloads all packages (may take 2-3 minutes).

### Build Optimized Version

```bash
npm run build
```

This creates a production-ready version in `.next/` folder.

### Test Locally

```bash
npm start
```

Visit in browser: http://localhost:3000

**Verify:**
- [ ] Homepage loads
- [ ] Click "AR" to toggle to Arabic - works?
- [ ] Click product - detail page works?
- [ ] No errors in browser console

**Stop server:**
```bash
# Press Ctrl+C in terminal
```

✅ Website builds and runs!

---

## STEP 4: SETUP GODADDY DNS (5 min)

### Log into GoDaddy

1. Go to https://godaddy.com
2. Sign in with your account
3. Find "khutoot.store" → Click it
4. Click "Manage DNS" (or "DNS Settings")

### Add DNS Records

You'll see a table of DNS records. We need to add two A records:

**Record 1 (Root Domain):**
- Name: `@` or leave blank
- Type: A
- Value: **YOUR_PUBLIC_IP** (from Step 1)
- TTL: 600

Click "Add" or "Save"

**Record 2 (www subdomain):**
- Name: `www`
- Type: A
- Value: **YOUR_PUBLIC_IP** (same as above)
- TTL: 600

Click "Add" or "Save"

### Verify Changes Saved

You should see both records listed.

### Wait for DNS to Propagate

DNS changes take **15-30 minutes**. Grab a coffee! ☕

### Test DNS (After 15 minutes)

```bash
nslookup khutoot.store
```

Should show your public IP. If not, wait another 5-10 minutes.

✅ DNS configured!

---

## STEP 5: SETUP PM2 - AUTO-RESTART (5 min)

PM2 keeps your server running and auto-restarts if it crashes.

### Start App with PM2

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project

pm2 start npm --name "khutoot-studio" -- start
```

### Check It's Running

```bash
pm2 status
```

Should show: `online`

If it shows `errored` or `stopped`, run:
```bash
pm2 logs
```

To see what went wrong.

### Setup Auto-start on Mac Restart

```bash
pm2 startup

# Follow the output - it will tell you to run a command
# Copy and paste the command it suggests (with sudo)

pm2 save
```

This makes the app auto-start when Mac restarts.

✅ PM2 configured!

---

## STEP 6: SETUP NGINX - REVERSE PROXY (15 min)

Nginx sits in front of your Node.js app, handling HTTPS, caching, and load balancing.

### Create Nginx Config File

```bash
sudo nano /usr/local/etc/nginx/servers/khutoot.store.conf
```

This opens a text editor. Now **PASTE** this entire config:

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

    # SSL Certificates (we'll add these in Step 7)
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

    # Cache static files for 1 year
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

### Save File

Press: `Ctrl+X` → `Y` → `Enter`

### Test Nginx Configuration

```bash
sudo nginx -t
```

Should output: `successful`

If you get an error, check the config file. Common issues:
- Missing semicolons
- Typos in paths
- Wrong permissions

### Start Nginx

```bash
sudo brew services start nginx
```

### Verify Nginx is Running

```bash
lsof -i :80
lsof -i :443
```

Should show `nginx` processes.

### Test Nginx

```bash
curl http://localhost
```

Should show HTML from your website.

✅ Nginx configured!

---

## STEP 7: GET SSL CERTIFICATE - FREE HTTPS (10 min)

SSL certificate encrypts traffic and makes your site secure (HTTPS).

### Get Certificate from Let's Encrypt

```bash
sudo certbot certonly --standalone -d khutoot.store -d www.khutoot.store
```

It will ask:
1. **Email:** Type your email (for certificate renewal notifications)
2. **Terms:** Type `A` to agree
3. **Share email:** Type `N` or `Y` (your preference)

### Verify Certificate Created

```bash
ls -la /usr/local/etc/letsencrypt/live/khutoot.store/
```

Should show these files:
- `fullchain.pem`
- `privkey.pem`

### Reload Nginx to Use Certificate

```bash
sudo nginx -s reload
```

### Test HTTPS

```bash
curl https://khutoot.store --insecure
# (--insecure needed because DNS may not be propagated yet)
```

Should show website HTML.

### Setup Automatic Renewal

```bash
brew services start certbot
```

This automatically renews your certificate every 90 days. Never expires!

✅ SSL certificate installed!

---

## STEP 8: TEST EVERYTHING (20 min)

### Test 1: Local Access

```bash
curl http://localhost:3000       # Direct app
curl http://localhost            # Via Nginx
curl https://localhost --insecure # HTTPS
```

All should show website HTML.

### Test 2: Check Services Running

```bash
pm2 status         # App status
brew services list # Nginx status
```

- App should show: `online`
- Nginx should show: `started`

### Test 3: DNS Propagation (Wait if needed)

```bash
nslookup khutoot.store
dig khutoot.store
```

If not showing your IP yet, wait 10 more minutes.

### Test 4: Access via Domain (After DNS ready)

```bash
curl http://khutoot.store
curl https://khutoot.store
```

Both should show website HTML.

### Test 5: Browser Access

Open your browser and visit:
- http://khutoot.store (should redirect to HTTPS)
- https://khutoot.store

**Verify:**
- [ ] Homepage loads
- [ ] No security warnings (green lock icon)
- [ ] Images load
- [ ] Language toggle works
- [ ] Products load
- [ ] Click product details - works?
- [ ] No console errors (DevTools → Console)

### Test 6: Mobile Access

On your phone (using WiFi), visit: https://khutoot.store

**Verify:**
- [ ] Loads correctly
- [ ] Responsive layout
- [ ] Touch/click works
- [ ] No broken images

### Test 7: Performance Check

```bash
# Time to first byte
time curl https://khutoot.store > /dev/null
```

Should be under 1 second.

✅ All tests pass!

---

## STEP 9: SETUP AUTO-START (5 min)

So everything starts automatically when Mac restarts.

### PM2 Auto-start (if not done yet)

```bash
pm2 startup
pm2 save
```

### Nginx Auto-start

```bash
sudo brew services start nginx
brew services list
```

Should show: `nginx started`

### Test Auto-start

```bash
# Simulate Mac restart by stopping everything
pm2 stop all
sudo brew services stop nginx

# Verify they stopped
pm2 status  # Should show "stopped"
ps aux | grep nginx  # Should show no nginx processes

# Start them again
pm2 restart khutoot-studio
sudo brew services start nginx

# Verify they're running
pm2 status  # Should show "online"
ps aux | grep nginx  # Should show nginx processes
```

✅ Auto-start configured!

---

## STEP 10: SETUP MONITORING (10 min)

Monitor your website 24/7 and get alerts if it goes down.

### Setup Uptime Robot (Free)

1. Go to https://uptimerobot.com
2. Sign up (free account)
3. Click "Add New Monitor"
4. Fill in:
   - **Monitor Type:** HTTPS
   - **URL:** `https://khutoot.store`
   - **Friendly Name:** Khutoot Studio
   - **Check Interval:** 5 minutes
5. Click "Create Monitor"
6. Setup email alerts (in settings)

### Verify Uptime Robot

Should show: **Status: UP**

You'll get an email alert if site goes down.

### Setup Local Log Monitoring

```bash
# Watch app logs
pm2 logs

# Watch error logs
tail -f /usr/local/var/log/nginx/error.log

# Watch access logs
tail -f /usr/local/var/log/nginx/access.log
```

✅ Monitoring configured!

---

## 🎉 LAUNCH COMPLETE!

Your website is now live at **https://khutoot.studio** ✅

### Verify Everything One Last Time

```bash
pm2 status                    # App online?
brew services list            # Nginx started?
curl https://khutoot.store   # Site accessible?
nslookup khutoot.store       # DNS correct?
```

### Next Steps

1. **Share the link:** https://khutoot.store
2. **Update social media:** Add link to bio
3. **Update email:** Add website to signature
4. **Monitor:** Check Uptime Robot daily for first week
5. **Celebrate! 🎉**

---

## 📋 QUICK REFERENCE COMMANDS

**After launch, these are the commands you'll use:**

```bash
# Check if everything is running
pm2 status
brew services list

# View logs if something's wrong
pm2 logs
tail -f /usr/local/var/log/nginx/error.log

# Restart if needed
pm2 restart khutoot-studio
sudo nginx -s reload

# View website
curl https://khutoot.store

# Deploy new code
cd /Users/claudia/Desktop/saudi-blueprints-project
git pull
npm run build
pm2 restart khutoot-studio
```

---

## 🆘 TROUBLESHOOTING

### "DNS not resolving"
- Wait 15-30 minutes for DNS to propagate
- Check GoDaddy DNS settings are correct
- Run: `nslookup khutoot.store`

### "Can't access site"
- Check PM2: `pm2 status`
- Check Nginx: `ps aux | grep nginx`
- Check ports open: `lsof -i :80`

### "HTTPS certificate error"
- Verify cert exists: `ls /usr/local/etc/letsencrypt/live/khutoot.store/`
- Reload Nginx: `sudo nginx -s reload`
- Wait 30 seconds and refresh

### "Site slow"
- Check system: `top`
- Check logs: `pm2 logs`
- Increase PM2 instances: `pm2 start npm -i max --...`

**For more help:** See DOMAIN_AND_HOSTING_SETUP.md → PART 10: TROUBLESHOOTING

---

## 📊 MONITORING CHECKLIST

**Daily:**
- [ ] Check Uptime Robot for alerts
- [ ] Verify site accessible

**Weekly:**
- [ ] Review logs for errors
- [ ] Check backup completed

**Monthly:**
- [ ] Verify SSL certificate auto-renewed
- [ ] Check analytics/traffic
- [ ] Review performance

---

## 🔐 BACKUP REMINDER

Don't forget to backup your code!

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project
git add .
git commit -m "Working version"
git push origin main
```

Or create backup script (see LAUNCH_CHECKLIST.md)

---

## 📞 SUPPORT

If you get stuck:

1. **Check logs:** `pm2 logs` or `tail -f /usr/local/var/log/nginx/error.log`
2. **Consult guides:**
   - DOMAIN_AND_HOSTING_SETUP.md (detailed reference)
   - LAUNCH_CHECKLIST.md (checklist format)
   - README.md (overview)
3. **Key resources:**
   - Nginx docs: https://nginx.org
   - Let's Encrypt: https://letsencrypt.org
   - PM2 docs: https://pm2.keymetrics.io

---

## ✨ CONGRATULATIONS!

Your website is now professionally hosted at **https://khutoot.store** 🚀

Built on your Mac mini, encrypted with HTTPS, backed up, and monitored 24/7.

**Next features to add:**
- [ ] Payment processing (Stripe)
- [ ] User accounts (NextAuth)
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Admin panel

---

**Welcome to production! 🎉**

