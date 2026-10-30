const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let totalOriginal = 0;
  let totalOptimized = 0;
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await processDirectory(fullPath);
      totalOriginal += sub.totalOriginal;
      totalOptimized += sub.totalOptimized;
      results.push(...sub.results);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const baseName = path.basename(entry.name, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);
      
      const statOriginal = fs.statSync(fullPath);
      totalOriginal += statOriginal.size;

      // Convert to WebP with 82% quality (optimum visual fidelity vs size)
      await sharp(fullPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(webpPath);

      const statWebp = fs.statSync(webpPath);
      totalOptimized += statWebp.size;

      const savedPct = ((1 - statWebp.size / statOriginal.size) * 100).toFixed(1);
      results.push({
        file: path.relative(publicDir, fullPath),
        originalKb: (statOriginal.size / 1024).toFixed(1),
        webpKb: (statWebp.size / 1024).toFixed(1),
        savings: `${savedPct}%`
      });
    }
  }

  return { totalOriginal, totalOptimized, results };
}

(async () => {
  console.log('Optimizing images in public directory...');
  const res = await processDirectory(path.join(publicDir, 'images'));
  console.table(res.results);
  const origMb = (res.totalOriginal / (1024 * 1024)).toFixed(2);
  const optMb = (res.totalOptimized / (1024 * 1024)).toFixed(2);
  const totalSaved = ((1 - res.totalOptimized / res.totalOriginal) * 100).toFixed(1);
  console.log(`\nOriginal total: ${origMb} MB`);
  console.log(`Optimized total: ${optMb} MB`);
  console.log(`Total data reduction: ${totalSaved}%`);
})();
