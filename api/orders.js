import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const orderData = req.body.order;
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    if (orderData === null || orderData.items === null || orderData.items.length === 0) {
      return res.status(400).json({ message: 'Missing data.' });
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
      return res.status(400).json({
        message: 'Missing data: Email, name, street, postal code or city is missing.',
      });
    }

    const newOrder = {
      ...orderData,
      id: (Math.random() * 1000).toString(),
    };

    // Note: In production, you'd want to use a database instead of file system
    // File writes don't persist in Vercel serverless functions
    // For now, we'll just return success
    const filePath = path.join(process.cwd(), 'backend', 'data', 'orders.json');
    
    try {
      const orders = await fs.readFile(filePath, 'utf8');
      const allOrders = JSON.parse(orders);
      allOrders.push(newOrder);
      // In Vercel, this write won't persist, but we'll try anyway
      await fs.writeFile(filePath, JSON.stringify(allOrders, null, 2));
    } catch (error) {
      // If file doesn't exist or can't write, just log (in production use a database)
      console.log('Order received:', newOrder);
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({ message: 'Order created!' });
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ message: 'Failed to process order', error: error.message });
  }
}

