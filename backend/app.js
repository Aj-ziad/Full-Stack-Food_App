import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// CORS configuration - supports both development and production
const allowedOrigins = process.env.CORS_ORIGINS 
  ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
  : ['*']; // Default to allow all (for development)

app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  // Allow request if origin is in allowed list or if '*' is allowed
  if (allowedOrigins.includes('*') || (origin && allowedOrigins.includes(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.get('/meals', async (req, res) => {
  try {
    const meals = await fs.readFile('./data/available-meals.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.json(JSON.parse(meals));
  } catch (error) {
    res.status(500).json({ message: 'Failed to load meals', error: error.message });
  }
});

app.post('/orders', async (req, res) => {
    
  try {
    
    const orderData = req.body.order;
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (orderData === null || orderData.items === null || orderData.items.length === 0) {
      res.setHeader('Content-Type', 'application/json');
      return res
        .status(400)
        .json({ message: 'Missing data.' });
    }

    if (
      orderData.customer.email === null ||
      !orderData.customer.email.includes('@') ||
      orderData.customer.name === null ||
      orderData.customer.name.trim() === '' ||
      orderData.customer.street === null ||
      orderData.customer.street.trim() === '' ||
      orderData.customer['postal-code'] === null ||
      orderData.customer['postal-code'].trim() === '' ||
      orderData.customer.city === null ||
      orderData.customer.city.trim() === ''
    ) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(400).json({
        message:
          'Missing data: Email, name, street, postal code or city is missing.',
      });
    }

    const newOrder = {
      ...orderData,
      id: (Math.random() * 1000).toString(),
    };
    const orders = await fs.readFile('./data/orders.json', 'utf8');
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);
    await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({ message: 'Order created!' });
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ message: 'Failed to process order', error: error.message });
  }
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  res.setHeader('Content-Type', 'application/json');
  res.status(404).json({ message: 'Not found' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
