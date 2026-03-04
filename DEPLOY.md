# How to Upload to GitHub and Deploy on Vercel

Follow these steps exactly — it takes about 10 minutes.

---

## PART 1 — Push to GitHub

### Step 1: Create a GitHub Account (if you don't have one)
- Go to https://github.com → Sign Up → Free plan is fine

### Step 2: Create a New Repository
1. Once logged in, click the **"+"** icon (top right) → **"New repository"**
2. Fill in:
   - **Repository name:** `legalsri-website`
   - **Description:** Legalsri legal services website
   - **Visibility:** Public (teammates can view) OR Private (invite teammates)
   - ❌ Do NOT check "Add a README file"
3. Click **"Create repository"**

### Step 3: Open Terminal on Your Computer
- Windows: Press `Win + R`, type `cmd`, press Enter
- Mac: Press `Cmd + Space`, type `Terminal`, press Enter

### Step 4: Navigate to Your Project Folder
```
cd C:\Users\DELL\Desktop\LEGAL\legalsri-next
```
(On Mac: `cd ~/Desktop/LEGAL/legalsri-next`)

### Step 5: Run These Commands One by One
```bash
git init
git add .
git commit -m "Initial commit - Legalsri website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/legalsri-website.git
git push -u origin main
```
⚠️ Replace `YOUR_USERNAME` with your actual GitHub username!

### Step 6: Enter GitHub Credentials
When prompted, enter your GitHub username and password (or personal access token).

✅ Your code is now on GitHub!  
Share this link with teammates: `https://github.com/YOUR_USERNAME/legalsri-website`

---

## PART 2 — Deploy on Vercel (Free Live Website)

### Step 1: Create Vercel Account
- Go to https://vercel.com → **"Sign Up"** → Choose **"Continue with GitHub"**
- Authorize Vercel to access your GitHub

### Step 2: Import Your Project
1. On the Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find `legalsri-website` in the list → Click **"Import"**
3. Settings (leave as default — Vercel auto-detects Next.js):
   - Framework: **Next.js** ✓ (auto-detected)
   - Root Directory: `./` (leave blank)
   - Build Command: `npm run build` (auto-filled)
4. Click **"Deploy"**

### Step 3: Wait ~2 Minutes
Vercel builds and deploys your site automatically.

### Step 4: Get Your Live URL
Once done, you'll see:  
🎉 **"Congratulations! Your project has been deployed."**

Your live URL: `https://legalsri-website.vercel.app`

---

## PART 3 — Share with Teammates

### Option A: View Code (GitHub)
Share: `https://github.com/YOUR_USERNAME/legalsri-website`

Teammates can:
- Browse all code files
- Download the project (Code → Download ZIP)
- Clone it: `git clone https://github.com/YOUR_USERNAME/legalsri-website.git`

### Option B: View Live Website (Vercel)
Share: `https://legalsri-website.vercel.app`

---

## PART 4 — Future Updates

Whenever you make changes and want to update GitHub + Vercel:
```bash
git add .
git commit -m "Update: describe what you changed"
git push
```
Vercel automatically redeploys whenever you push to GitHub. 🚀

---

## Troubleshooting

**"git is not recognized"**  
→ Install Git from https://git-scm.com/download/win then restart terminal

**"Permission denied" on push**  
→ In GitHub Settings → Developer Settings → Personal Access Tokens → Generate a token  
→ Use the token as your password when pushing

**Build fails on Vercel**  
→ Check that `npm run build` works locally first  
→ Make sure you pushed all files including package.json
