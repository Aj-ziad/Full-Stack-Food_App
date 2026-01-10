import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  const { path: imagePath } = req.query;
  
  if (!imagePath || imagePath.length === 0) {
    return res.status(404).json({ message: 'Image path required' });
  }

  // Try multiple path resolutions for different environments
  // In Vercel, process.cwd() should point to the project root
  // The path array will be like ['images', 'mac-and-cheese.jpg']
  const possiblePaths = [
    // Root public folder (Vercel serves this automatically, but we can also read it)
    path.join(process.cwd(), 'public', ...imagePath),
    // Backend public folder (with includeFiles)
    path.join(process.cwd(), 'backend', 'public', ...imagePath),
    // Alternative: relative to API directory
    path.join(__dirname, '..', '..', 'backend', 'public', ...imagePath),
    // Direct from project root public
    path.join(process.cwd(), 'public', 'images', imagePath[imagePath.length - 1]),
    // Direct from backend public
    path.join(process.cwd(), 'backend', 'public', 'images', imagePath[imagePath.length - 1]),
  ];
  
  let image = null;
  let fullPath = null;
  let lastError = null;
  
  // Try each possible path
  for (const testPath of possiblePaths) {
    try {
      await fs.access(testPath);
      image = await fs.readFile(testPath);
      fullPath = testPath;
      break;
    } catch (error) {
      lastError = error;
      continue;
    }
  }
  
  if (!image) {
    console.error('Image loading error:', {
      requestedPath: imagePath,
      triedPaths: possiblePaths,
      error: lastError?.message,
      cwd: process.cwd(),
      __dirname
    });
    return res.status(404).json({ 
      message: 'Image not found',
      triedPaths: possiblePaths,
      error: lastError?.message 
    });
  }
  
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
}

