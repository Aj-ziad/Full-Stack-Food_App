📦 ReactFood – Group Project (Frontend + Backend)

This is a group project where we develop the frontend and use a provided Node.js backend.

🧱 Project Structure
ReactFood/
├── backend/        # Node.js API (provided by professor)
├── frontend/       # React app (we develop this)
├── .gitignore
└── README.md

🧑‍🤝‍🧑 Team Workflow – How We Work Together

We use Feature Branches → each feature is developed in its own branch → then merged into main ONLY through Pull Requests.

🔑 Main Rules
| Rule                             | Explanation                               |
| -------------------------------- | ----------------------------------------- |
| Never code directly on `main`    | To avoid breaking the project             |
| Every task = create a new branch | Example: `feature/cart`                   |
| Open a Pull Request              | Teammates review before merge             |
| Write clear commit messages      | Example: `feat: add cart modal component` |



🌿 Branch Naming Rules

Create branches like this:
feature/meals
feature/cart
feature/checkout
feature/cart-context
feature/http-hook
feature/ui-components

Example workflow:
git checkout -b feature/meals
# code...
git add .
git commit -m "feat: implement Meals.jsx and MealItem.jsx"
git push origin feature/meals
# then open Pull Request in GitHub


🧭 How to Run Locally
1️⃣ Backend
cd backend
npm install
npm start       # runs at http://localhost:3000

2️⃣ Frontend
cd frontend
npm install
npm run dev     # runs at http://localhost:5173


💡 Create a frontend/.env file:

VITE_BACKEND_URL=http://localhost:3000