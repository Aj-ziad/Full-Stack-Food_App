import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const { path: imagePath } = req.query;
  
  if (!imagePath || imagePath.length === 0) {
    return res.status(404).json({ message: 'Image path required' });
  }

  // Handle both Vercel serverless and local environments
  // In Vercel, process.cwd() points to the root of the project
  // The path array will be like ['images', 'mac-and-cheese.jpg']
  const fullPath = path.join(process.cwd(), 'backend', 'public', ...imagePath);
  
  try {
    // Verify file exists before reading
    await fs.access(fullPath);
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
    console.error('Image loading error:', {
      requestedPath: imagePath,
      fullPath,
      error: error.message,
      cwd: process.cwd()
    });
    res.status(404).json({ 
      message: 'Image not found',
      path: fullPath,
      error: error.message 
    });
  }
}

