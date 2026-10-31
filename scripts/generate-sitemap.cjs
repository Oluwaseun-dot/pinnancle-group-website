/**
 * Pinnacle Group - Automated XML Sitemap Generator
 * Reads dynamic routes from source data files to ensure sitemap is always accurate,
 * canonical, and maintainable.
 */
const fs = require('fs');
const path = require('path');

const PRIMARY_DOMAIN = 'https://pinnacleteam.co';
const TODAY = '2026-10-30'; // Accurate content update date

// 1. Core static public routes (canonical URLs only, no aliases or query params)
const coreRoutes = [
  { path: '/', lastmod: TODAY },
  { path: '/services', lastmod: TODAY },
  { path: '/industries', lastmod: TODAY },
  { path: '/work', lastmod: TODAY },
  { path: '/about', lastmod: TODAY },
  { path: '/team', lastmod: TODAY },
  { path: '/insights', lastmod: TODAY },
  { path: '/book', lastmod: TODAY },
  { path: '/contact', lastmod: TODAY },
  { path: '/automation-demo', lastmod: TODAY },
  { path: '/automation-assessment', lastmod: TODAY }
];

// 2. Dynamic Case Study routes from caseStudiesData.js
const caseStudiesFilePath = path.resolve(__dirname, '../src/data/caseStudiesData.js');
const caseStudiesContent = fs.readFileSync(caseStudiesFilePath, 'utf8');
const caseStudySlugs = [...caseStudiesContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

// 3. Dynamic Team Member routes from teamData.js
const teamFilePath = path.resolve(__dirname, '../src/data/teamData.js');
const teamContent = fs.readFileSync(teamFilePath, 'utf8');
const teamSlugs = [...teamContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

// Assemble full URL list
const urls = [];

// Add core routes
coreRoutes.forEach(r => {
  urls.push({
    loc: r.path === '/' ? `${PRIMARY_DOMAIN}/` : `${PRIMARY_DOMAIN}${r.path}`,
    lastmod: r.lastmod
  });
});

// Add case study routes
caseStudySlugs.forEach(slug => {
  urls.push({
    loc: `${PRIMARY_DOMAIN}/work/${slug}`,
    lastmod: TODAY
  });
});

// Add team profile routes
teamSlugs.forEach(slug => {
  urls.push({
    loc: `${PRIMARY_DOMAIN}/team/${slug}`,
    lastmod: TODAY
  });
});

// Generate standard XML conforming to sitemaps.org protocol
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

urls.forEach(u => {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>\n';

// Write to public/sitemap.xml
const targetPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(targetPath, xml, 'utf8');

console.log(`Successfully generated sitemap with ${urls.length} canonical URLs at ${targetPath}`);
