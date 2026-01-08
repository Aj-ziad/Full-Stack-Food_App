import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const { path: imagePath } = req.query;
  
  if (!imagePath || imagePath.length === 0) {
    return res.status(404).json({ message: 'Image path required' });
  }

  const fullPath = path.join(process.cwd(), 'backend', 'public', ...imagePath);
  
  try {
    const image = await fs.readFile(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    const contentType = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp'
    }[ext] || 'image/jpeg';
    
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(image);
  } catch (error) {
    res.status(404).json({ message: 'Image not found' });
  }
}

