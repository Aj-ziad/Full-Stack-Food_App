# Backend API - ReactFood

Express.js backend API for the ReactFood application.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start server
npm start

# Server runs on http://localhost:3001
```

## 📡 API Endpoints

### GET `/meals`
Returns list of available meals.

**Response**:
```json
[
  {
    "id": "m1",
    "name": "Mac & Cheese",
    "price": "8.99",
    "description": "Creamy macaroni...",
    "image": "images/mac-and-cheese.jpg"
  }
]
```

### POST `/orders`
Submit a new order.

**Request Body**:
```json
{
  "order": {
    "customer": {
      "name": "John Doe",
      "email": "john@example.com",
      "street": "123 Main St",
      "postal-code": "12345",
      "city": "New York"
    },
    "items": [
      {
        "id": "m1",
        "name": "Mac & Cheese",
        "price": 8.99,
        "quantity": 2
      }
    ]
  }
}
```

**Response**:
```json
{
  "message": "Order created!"
}
```

## 🌐 Deployment

### Railway (Recommended)

1. Push code to GitHub
2. Create new project on [Railway](https://railway.app)
3. Deploy from GitHub repo
4. Set root directory to `backend`
5. Railway auto-detects and deploys

**Configuration**: See `railway.json` (optional)

### Render

1. Push code to GitHub
2. Create new Web Service on [Render](https://render.com)
3. Connect GitHub repo
4. Set root directory to `backend`
5. Build command: `npm install`
6. Start command: `npm start`

**Configuration**: See `render.yaml`

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment | `development` |
| `CORS_ORIGINS` | Allowed origins (comma-separated) | `*` |

**Example**:
```
CORS_ORIGINS=https://your-app.vercel.app,http://localhost:3000
```

## 📁 Project Structure

```
backend/
├── app.js              # Main Express server
├── data/
│   ├── available-meals.json
│   └── orders.json
├── public/
│   └── images/         # Meal images
├── package.json
└── README.md
```

## 🔧 Configuration

### CORS

The server supports CORS for cross-origin requests. Configure allowed origins via `CORS_ORIGINS` environment variable.

**Development**: Uses `*` (allows all origins)
**Production**: Set specific frontend URLs

### Port

The server uses `process.env.PORT` (for cloud hosting) or defaults to `3001` (for local development).

## 📝 Notes

- File-based storage (`orders.json`) doesn't persist on serverless platforms
- For production, integrate a database (MongoDB, PostgreSQL, etc.)
- Images are served from `public/images/` directory

## 🐛 Troubleshooting

**Port already in use**:
- Change port in `.env` or use different port
- Kill process using port: `lsof -ti:3001 | xargs kill`

**CORS errors**:
- Check `CORS_ORIGINS` environment variable
- Verify frontend URL is in allowed list
- Check browser console for specific error

**Orders not saving**:
- File writes don't persist on serverless platforms
- Use a database for production deployments

## 📚 Related Documentation

- [Deployment Guide](../DEPLOYMENT_GUIDE.md)
- [Environment Variables](../ENVIRONMENT_VARIABLES.md)
- [Quick Start](../QUICK_START_DEPLOYMENT.md)
