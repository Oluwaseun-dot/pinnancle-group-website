const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/data/caseStudiesData.js',
  'src/data/teamData.js',
  'src/components/GlobalReach.jsx',
  'src/components/FinalCTASection.jsx',
  'src/components/OurStorySection.jsx',
  'src/components/ServicesInteractive.jsx',
  'src/components/WhatIsTakingTooMuchTime.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/ServicesPage.jsx'
];

for (const relPath of filesToUpdate) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  // Replace case studies images
  content = content.replace(/\/images\/case-studies\/([a-zA-Z0-9\-_]+)\.(png|jpg|jpeg)/g, '/images/case-studies/$1.webp');
  // Replace general images
  content = content.replace(/\/images\/([a-zA-Z0-9\-_]+)\.(png|jpg|jpeg)/g, '/images/$1.webp');

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated: ${relPath}`);
  } else {
    console.log(`No changes needed in: ${relPath}`);
  }
}
