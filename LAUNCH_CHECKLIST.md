# Khutoot Studio - Launch Checklist

## Domain: khutoot.store | Branding: Khutoot Studio | Host: Mac Mini

---

## ✅ PRE-LAUNCH (Today)

### Website Rebranding
- [x] Updated Header.tsx with "خطوط ستوديو" / "Khutoot"
- [x] Updated Footer.tsx with "خطوط ستوديو" / "Khutoot Studio"
- [x] Updated package.json project name
- [x] Updated next.config.js with domain
- [ ] Update src/context/LanguageContext.tsx taglines
- [ ] Update any other Arabic/English copy referencing old brand

### Information Gathering
- [ ] Note down your Mac mini's Local IP: `ifconfig | grep "inet " | grep -v 127.0.0.1`
- [ ] Note down your Public IP: `curl -s https://icanhazip.com`
- [ ] GoDaddy account access ready
- [ ] Terminal/SSH access ready

### Software Installation
- [ ] Node.js installed: `node --version`
- [ ] npm installed: `npm --version`
- [ ] Brew installed: `brew --version`
- [ ] PM2 installed: `npm list -g pm2` or `npm install -g pm2`
- [ ] Nginx installed: `brew install nginx`
- [ ] OpenSSL installed: `brew install openssl`
- [ ] Certbot installed: `brew install certbot`

---

## ✅ SETUP (Hours 1-2)

### Build Production Website

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project
npm install
npm run build
npm start
```

- [ ] Verify website runs locally: http://localhost:3000
- [ ] Test language toggle (EN/AR works)
- [ ] Test responsive on mobile
- [ ] Stop production server (Ctrl+C)

### Configure GoDaddy DNS

1. [ ] Log into GoDaddy.com
2. [ ] Find khutoot.store domain
3. [ ] Click "Manage DNS"
4. [ ] Add/Edit A records:
   - [ ] Name: `@`, Type: A, Value: **YOUR_PUBLIC_IP**
   - [ ] Name: `www`, Type: A, Value: **YOUR_PUBLIC_IP**
5. [ ] Save changes
6. [ ] Wait 15-30 minutes for propagation

**Verify DNS:**
```bash
nslookup khutoot.store
dig khutoot.store
```

- [ ] DNS shows your public IP

### Setup PM2 (Auto-restart server)

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project

# Start with PM2
pm2 start npm --name "khutoot-studio" -- start

# Make auto-start on Mac restart
pm2 startup
pm2 save

# View status
pm2 status
```

- [ ] PM2 shows app is running
- [ ] App shows status "online"

### Setup Nginx Reverse Proxy

```bash
# Create Nginx config
sudo nano /usr/local/etc/nginx/servers/khutoot.store.conf
```

**Copy the full Nginx config from DOMAIN_AND_HOSTING_SETUP.md (PART 4, STEP 4)**

```bash
# Save: Ctrl+X, Y, Enter

# Test Nginx config
sudo nginx -t

# Start Nginx
sudo brew services start nginx

# Verify running
lsof -i :80
lsof -i :443
```

- [ ] Nginx config test passes ("successful")
- [ ] Nginx is running

### Setup SSL Certificate (Free HTTPS)

```bash
# Get certificate from Let's Encrypt
sudo certbot certonly --standalone -d khutoot.store -d www.khutoot.store

# Answer prompts:
# - Email: your@email.com
# - Accept terms: Y
# - Share email with EFF: Y or N
```

- [ ] Certificate created successfully
- [ ] Certificate in `/usr/local/etc/letsencrypt/live/khutoot.store/`

**Setup auto-renewal:**
```bash
brew services start certbot
```

- [ ] Auto-renewal scheduled

---

## ✅ TESTING (Hour 3)

### Local Tests

```bash
# 1. Test Node app directly
curl http://localhost:3000

# 2. Test Nginx proxy
curl http://localhost

# 3. Test HTTPS (self-signed will show warning)
curl https://localhost --insecure

# 4. Check PM2 app is running
pm2 status

# 5. Check Nginx is running
ps aux | grep nginx

# 6. Check ports are open
lsof -i :80
lsof -i :443
lsof -i :3000
```

- [ ] All local tests pass

### Network Tests

```bash
# Wait 15-30 min for DNS to propagate, then:

# Test domain HTTP
curl http://khutoot.store

# Test domain HTTPS
curl https://khutoot.store

# Verify DNS
nslookup khutoot.store
# Should show: khutoot.store -> YOUR_PUBLIC_IP
```

- [ ] HTTP works: `curl http://khutoot.store`
- [ ] HTTPS works: `curl https://khutoot.store`
- [ ] DNS resolves: `nslookup khutoot.store`

### Browser Tests

- [ ] Open https://khutoot.store in Safari
- [ ] Open https://khutoot.store in Chrome
- [ ] Test on iPhone/mobile (wifi)
- [ ] Homepage loads completely
- [ ] Language toggle works (EN/AR)
- [ ] Dark mode works
- [ ] Products load
- [ ] Filter/sort works
- [ ] Click product → detail page works
- [ ] Images load
- [ ] No console errors (DevTools)
- [ ] Page loads fast (under 3 seconds)

### External Test

- [ ] Ask friend/colleague to visit https://khutoot.store
- [ ] Confirm they can access
- [ ] Confirm it loads correctly for them

---

## ✅ AUTO-START SETUP (Auto-restart on Mac restart)

### PM2 Auto-start

```bash
pm2 startup
pm2 save
```

- [ ] PM2 auto-start enabled

### Nginx Auto-start

```bash
sudo brew services start nginx
brew services list
```

- [ ] Nginx shows "started" in services list

### Test Auto-start

```bash
# Restart Mac to test everything auto-starts
# OR simulate restart:

# Stop everything
pm2 stop all
sudo brew services stop nginx

# Verify stopped
pm2 status
ps aux | grep node
ps aux | grep nginx

# Start manually
pm2 restart khutoot-studio
sudo brew services start nginx

# Should be running again
pm2 status
```

- [ ] PM2 restarts correctly
- [ ] Nginx restarts correctly

---

## ✅ MONITORING SETUP (Alert on failures)

### Uptime Monitoring

1. [ ] Sign up at https://uptimerobot.com (free)
2. [ ] Create account
3. [ ] Add monitor:
   - URL: `https://khutoot.store`
   - Monitor type: HTTPS
   - Check interval: 5 minutes
4. [ ] Set up email alerts
5. [ ] Verify Uptime Robot can access site

- [ ] Uptime Robot shows site is UP
- [ ] You'll receive alerts if site goes down

### Local Log Monitoring

```bash
# Watch app logs live
pm2 logs

# Watch Nginx access logs
tail -f /usr/local/var/log/nginx/access.log

# Watch Nginx error logs
tail -f /usr/local/var/log/nginx/error.log
```

- [ ] Can view live logs if needed

---

## ✅ BACKUP SETUP (Prevent data loss)

### Git Backup

```bash
cd /Users/claudia/Desktop/saudi-blueprints-project

# Initialize git
git init
git add .
git commit -m "Initial commit: Khutoot Studio production"

# Create GitHub repo at https://github.com/new
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/khutoot-studio.git
git branch -M main
git push -u origin main
```

- [ ] Code backed up on GitHub
- [ ] Can recover from git if needed

### Automatic Backups

```bash
# Create backup script
cat > ~/backup-khutoot.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="$HOME/khutoot-backups"
mkdir -p "$BACKUP_DIR"
BACKUP_FILE="$BACKUP_DIR/khutoot-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "$BACKUP_FILE" /Users/claudia/Desktop/saudi-blueprints-project
echo "Backup created: $BACKUP_FILE"
EOF

chmod +x ~/backup-khutoot.sh

# Schedule daily backup
crontab -e
# Add: 0 2 * * * ~/backup-khutoot.sh
```

- [ ] Backup script created
- [ ] Backup scheduled (runs at 2 AM daily)

---

## ✅ DOCUMENTATION (For future reference)

- [ ] Saved GoDaddy login info securely
- [ ] Noted Mac mini IP address: ___________
- [ ] Noted public IP: ___________
- [ ] Saved PM2 commands: `pm2 -h`
- [ ] Saved Nginx commands: `sudo nginx -h`
- [ ] Bookmarked https://uptimerobot.com
- [ ] Have GitHub backup link ready
- [ ] Have Let's Encrypt certificate info saved

---

## ✅ LAUNCH DAY (Go Live!)

### Final Checks

```bash
# 1. Verify everything running
pm2 status
brew services list

# 2. Check logs for errors
pm2 logs
tail /usr/local/var/log/nginx/error.log

# 3. Test website one more time
curl https://khutoot.store

# 4. Verify DNS
nslookup khutoot.store
```

- [ ] PM2 app: "online"
- [ ] Nginx: "started"
- [ ] No error logs
- [ ] Domain resolves correctly
- [ ] Website loads

### Announcement

- [ ] Announce website launch
- [ ] Share https://khutoot.store with team/customers
- [ ] Update social media links
- [ ] Update email signatures

---

## ✅ POST-LAUNCH (Ongoing)

### Daily
- [ ] Check Uptime Robot for alerts
- [ ] Monitor traffic in Nginx logs

### Weekly
- [ ] Verify backups completed
- [ ] Check for any error logs
- [ ] Verify GitHub backup is current

### Monthly
- [ ] Check SSL certificate expiration (should auto-renew)
- [ ] Verify all features working
- [ ] Update content as needed

### Quarterly
- [ ] Review analytics
- [ ] Plan new features
- [ ] Update products/content

---

## TROUBLESHOOTING QUICK LINKS

If something breaks, consult:
- **DNS issues:** DOMAIN_AND_HOSTING_SETUP.md → PART 10
- **HTTPS errors:** DOMAIN_AND_HOSTING_SETUP.md → PART 10
- **App crashing:** DOMAIN_AND_HOSTING_SETUP.md → PART 10
- **Nginx errors:** DOMAIN_AND_HOSTING_SETUP.md → PART 10
- **Can't access site:** DOMAIN_AND_HOSTING_SETUP.md → PART 10

---

## CRITICAL COMMANDS (Bookmark these)

```bash
# Check status
pm2 status
brew services list

# View logs
pm2 logs
tail -f /usr/local/var/log/nginx/error.log

# Restart
pm2 restart khutoot-studio
sudo nginx -s reload

# Deploy new version
cd /Users/claudia/Desktop/saudi-blueprints-project && git pull && npm run build && pm2 restart khutoot-studio

# Renew certificate (manual)
sudo certbot renew

# Check certificate expiration
echo | openssl s_client -servername khutoot.store -connect khutoot.store:443 2>/dev/null | openssl x509 -noout -dates
```

---

## LAUNCH SIGN-OFF

- [x] Website rebranded to "Khutoot Studio"
- [ ] All setup steps completed
- [ ] All tests passed
- [ ] Monitoring configured
- [ ] Backups automated
- [ ] Team notified
- [ ] Documentation ready
- [ ] Ready for launch

---

**https://khutoot.store is LIVE! 🎉**

---

## Notes & Additional Info

```
Local Mac IP: _________________
Public IP: _________________
GoDaddy Account: _________________
Certificate Renewal Date: _________________
Last Backup: _________________
Last Manual Renewal Check: _________________
```

---

**Questions? See DOMAIN_AND_HOSTING_SETUP.md for detailed instructions.**

