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

Create branches using this pattern:

feature/meals
feature/cart
feature/checkout
feature/cart-context
feature/http-hook
feature/ui-components


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

🚀 How to Run Locally
1️⃣ Backend Setup
cd backend
npm install
node app.js      # Server runs at http://localhost:3000

2️⃣ Frontend Setup
cd frontend
npm install
npm start     # Runs at http://localhost:5173

3️⃣ Environment Configuration
Create a frontend/.env file with:
VITE_BACKEND_URL=http://localhost:3000
