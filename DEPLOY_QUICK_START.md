# 🚀 Quick Start: Deploy to Vercel

## ✅ What's Already Done

All necessary files have been created and updated:
- ✅ API serverless functions (`api/meals.js`, `api/orders.js`, `api/images/[...path].js`)
- ✅ Vercel configuration (`vercel.json`)
- ✅ Frontend environment variable support updated

## 📋 Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "Add New Project"**
3. **Import your GitHub repository**
4. **Configure:**
   - **Root Directory**: Leave empty
   - **Framework Preset**: Create React App (auto-detected)
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Output Directory**: `frontend/build`
5. **Add Environment Variable:**
   - **Name**: `REACT_APP_BACKEND_URL`
   - **Value**: `https://YOUR-PROJECT-NAME.vercel.app/api`
     - ⚠️ Replace `YOUR-PROJECT-NAME` with your actual project name
     - You'll get the exact URL after first deployment
6. **Click "Deploy"**

### 3. Update Environment Variable After First Deploy

1. After deployment, copy your actual URL (e.g., `https://reactfood-abc123.vercel.app`)
2. Go to **Settings** → **Environment Variables**
3. Update `REACT_APP_BACKEND_URL` to: `https://your-actual-url.vercel.app/api`
4. Go to **Deployments** → Click **"Redeploy"** on latest deployment

### 4. Done! 🎉

Your app should now be live! Visit your Vercel URL to see it.

---

## 📝 Important Notes

- **Orders won't persist**: Vercel serverless functions have read-only file system. For production, use a database (MongoDB, PostgreSQL, etc.)
- **Images**: Will be served via `/api/images/...` route automatically
- **API Endpoints**: 
  - `/api/meals` - Get meals
  - `/api/orders` - Submit orders
  - `/api/images/...` - Serve images

---

## 🐛 Troubleshooting

**Build fails?**
- Check Vercel build logs
- Ensure all dependencies are in `package.json`

**API not working?**
- Verify `REACT_APP_BACKEND_URL` is set correctly
- Check that it includes `/api` at the end
- Check Vercel function logs

**Images not loading?**
- Verify image paths in `available-meals.json`
- Check that images exist in `backend/public/images/`

---

For detailed instructions, see `VERCEL_DEPLOYMENT_GUIDE.md`

