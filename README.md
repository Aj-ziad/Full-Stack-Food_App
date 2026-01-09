# 📦 ReactFood – Group Project (Frontend + Backend)

This is a group project where we develop the frontend and use a provided Node.js backend.

## 🏗️ Project Structure

- **ReactFood/** (root folder)
  - `backend/` - Node.js API (provided by professor)
  - `frontend/` - React app (we develop this)
  - `.gitignore`
  - `README.md`


## 👥 Team Workflow

We use **Feature Branches** → each feature is developed in its own branch → then merged into `main` **ONLY** through Pull Requests.

## 📋 Main Rules

| Rule | Explanation |
|------|-------------|
| **Never code directly on `main`** | To avoid breaking the project |
| **Every task = create a new branch** | Example: `feature/cart` |
| **Open a Pull Request** | Teammates review before merge |
| **Write clear commit messages** | Example: `feat: add cart modal component` |

## 🌿 Branch Naming Rules
Use these naming patterns:
- `feature/meals`
- `feature/cart`
- `feature/checkout`
- `feature/cart-context`
- `feature/http-hook`
- `feature/ui-components`

### 🔄 Example Workflow

```bash
# Create a new feature branch
git checkout -b feature/meals

# Make your changes
# code...

# Stage and commit changes
git add .
git commit -m "feat: implement Meals.jsx and MealItem.jsx"

# Push to GitHub
git push origin feature/meals

# Then open a Pull Request on GitHub for review

## 🚀 How to Run Locally

### 1️⃣ Backend Setup
```bash
cd backend
npm install
npm start       # runs at http://localhost:3001
```

### 2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start       # runs at http://localhost:3000
```

### 3️⃣ Environment Configuration (Optional)
Create a `frontend/.env` file with:
```
REACT_APP_BACKEND_URL=http://localhost:3001
```

---

## 🌐 Deployment

This project supports **two deployment strategies**:

### Strategy 1: All-in-One Vercel (Quick & Easy)
- Deploy frontend + backend API routes on Vercel
- Best for: Quick demos, portfolios
- **Guide**: See [QUICK_START_DEPLOYMENT.md](./QUICK_START_DEPLOYMENT.md)

### Strategy 2: Separate Deployments (Production Ready)
- Frontend on Vercel
- Backend on Railway/Render/etc.
- Best for: Production apps with data persistence
- **Guide**: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

**Quick Links**:
- 📖 [Complete Deployment Guide](./DEPLOYMENT_GUIDE.md)
- ⚡ [Quick Start Guide](./QUICK_START_DEPLOYMENT.md)
- 🔐 [Environment Variables](./ENVIRONMENT_VARIABLES.md)
- 🔧 [Backend README](./backend/README.md)
