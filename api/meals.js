import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const filePath = path.join(process.cwd(), 'backend', 'data', 'available-meals.json');
    const meals = await fs.readFile(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(JSON.parse(meals));
  } catch (error) {
    res.status(500).json({ message: 'Failed to load meals', error: error.message });
  }
}

