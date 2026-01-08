# 🚀 Vercel Deployment Guide for ReactFood

This guide will walk you through deploying your ReactFood application (frontend + backend) to Vercel step by step.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free tier is sufficient)
3. **Node.js installed** - For local testing

---

## 🏗️ Understanding Your Project Structure

- **Frontend**: React app (Create React App) in `/frontend`
- **Backend**: Express.js API in `/backend` (runs on port 3001)
- **Backend endpoints**: 
  - `GET /meals` - Fetches available meals
  - `POST /orders` - Submits new orders

---

## 📝 Step-by-Step Deployment

### **Step 1: Code is Already Prepared! ✅**

I've already updated the necessary files for you:
- ✅ `frontend/src/hooks/useHttp.js` - Now uses environment variable
- ✅ `frontend/src/componentss/Meals/Meals.jsx` - Already has env var support
- ✅ `frontend/src/componentss/Meals/MealItem.jsx` - Already has env var support
- ✅ Created `api/meals.js` - Serverless function for meals endpoint
- ✅ Created `api/orders.js` - Serverless function for orders endpoint
- ✅ Created `api/images/[...path].js` - Serverless function for serving images
- ✅ Created `vercel.json` - Vercel configuration file

#### 1.2 Update Image Paths (Optional but Recommended)

The images are currently served from the backend. For better performance, you can move them to the frontend public folder, OR the API route I created will handle them automatically.

**Option A: Keep using API route** (Already set up - no changes needed)
- Images will be served via `/api/images/...`

**Option B: Move images to frontend** (Better performance)
1. Copy `backend/public/images/` folder to `frontend/public/images/`
2. Update `backend/data/available-meals.json` - change image paths from `images/filename.jpg` to just `images/filename.jpg` (they'll be served from frontend public folder)

---

### **Step 2: Push Code to GitHub**

1. Make sure all changes are committed:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

---

### **Step 3: Deploy to Vercel**

#### 3.1 Connect Your Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Select the repository containing your ReactFood project

#### 3.2 Configure Project Settings

**Root Directory**: Leave empty (root of your repository)

**Framework Preset**: 
- Vercel should auto-detect React
- If not, select **"Create React App"**

**Build Command**: 
```
cd frontend && npm install && npm run build
```

**Output Directory**: 
```
frontend/build
```

**Install Command**: 
```
npm install
```

**Note**: The `vercel.json` file I created will handle the routing automatically, so Vercel should detect the configuration.

#### 3.3 Set Environment Variables

In the Vercel project settings, add these environment variables:

**For Frontend:**
- **Name**: `REACT_APP_BACKEND_URL`
- **Value**: `https://your-project-name.vercel.app/api` 
  - ⚠️ **Important**: Replace `your-project-name` with your actual Vercel project name
  - You'll get the exact URL after the first deployment
  - Make sure to include `/api` at the end (no trailing slash)

#### 3.4 Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployed, you'll get a URL like: `https://your-project-name.vercel.app`

---

### **Step 4: Update Environment Variables After First Deployment**

1. After the first deployment completes, copy your deployment URL (e.g., `https://reactfood.vercel.app`)
2. Go to **Project Settings** → **Environment Variables**
3. Update `REACT_APP_BACKEND_URL` to:
   ```
   https://your-actual-url.vercel.app/api
   ```
   (Replace with your actual URL, and make sure `/api` is included)
4. Go to **Deployments** tab and click **"Redeploy"** on the latest deployment
5. Wait for redeployment to complete

---

### **Step 5: Images Are Already Handled! ✅**

I've already created `api/images/[...path].js` which will serve images from `backend/public/images/`. 

The images will be accessible at: `https://your-url.vercel.app/api/images/images/filename.jpg`

**Note**: The `MealItem.jsx` component uses `${REACT_APP_BACKEND_URL}/${meal.image}`, so with `REACT_APP_BACKEND_URL` set to `https://your-url.vercel.app/api`, images will work correctly.

---

## 🔧 Alternative: Simpler Deployment (Frontend Only on Vercel)

If you want a simpler approach, you can:

1. **Deploy Frontend to Vercel** (as static site)
2. **Deploy Backend separately** to:
   - **Railway** (railway.app) - Easy Node.js hosting
   - **Render** (render.com) - Free tier available
   - **Heroku** - If you have an account
   - **Fly.io** - Good free tier

Then just update `REACT_APP_BACKEND_URL` to point to your backend URL.

---

## 📝 Important Notes

1. **File System Limitations**: Vercel serverless functions have a read-only file system. Orders won't persist between deployments. For production, use a database (MongoDB, PostgreSQL, etc.)

2. **Image Serving**: Static files should be in the frontend `public` folder for best performance

3. **CORS**: The API functions already include CORS headers, so your frontend should work

4. **Environment Variables**: Make sure to set `REACT_APP_BACKEND_URL` in Vercel dashboard

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Frontend loads at your Vercel URL
- [ ] Meals are displayed (check `/api/meals` endpoint)
- [ ] Images load correctly
- [ ] Cart functionality works
- [ ] Checkout form submits successfully
- [ ] No console errors in browser

---

## 🐛 Troubleshooting

**Build fails:**
- Check that all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

**API not working:**
- Check that `api/` folder is in root directory
- Verify `vercel.json` routes are correct
- Check Vercel function logs in dashboard

**Images not loading:**
- Move images to `frontend/public/images/`
- Update image paths in `available-meals.json`

**CORS errors:**
- Verify CORS headers in API functions
- Check that `REACT_APP_BACKEND_URL` is set correctly

---

## 🎉 You're Done!

Your ReactFood app should now be live on Vercel! Share your deployment URL with others.

