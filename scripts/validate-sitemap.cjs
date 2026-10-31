/**
 * Pinnacle Group - Technical SEO & XML Sitemap Validator
 */
const fs = require('fs');
const path = require('path');

function validate() {
  const errors = [];
  const warnings = [];

  // 1. Read sitemap.xml
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    throw new Error('public/sitemap.xml does not exist!');
  }
  const xml = fs.readFileSync(sitemapPath, 'utf8');

  // Check XML declaration
  if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
    errors.push('Missing standard XML declaration.');
  }

  // Check xmlns namespace
  if (!xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
    errors.push('Missing or invalid sitemap protocol namespace.');
  }

  // Extract all <url> entries
  const urlMatches = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  if (urlMatches.length === 0) {
    errors.push('Zero <url> entries found in sitemap.');
  }

  const seenUrls = new Set();
  const canonicalDomain = 'https://pinnacleteam.co';

  urlMatches.forEach((match, index) => {
    const block = match[1];
    const locMatch = block.match(/<loc>(.*?)<\/loc>/);
    const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);

    if (!locMatch) {
      errors.push(`Entry #${index + 1} is missing <loc> tag.`);
      return;
    }

    const loc = locMatch[1].trim();

    // Check canonical domain
    if (!loc.startsWith(canonicalDomain)) {
      errors.push(`URL does not use canonical domain (${canonicalDomain}): ${loc}`);
    }

    // Check for mixed domain or HTTP
    if (loc.startsWith('http://')) {
      errors.push(`URL uses non-secure HTTP: ${loc}`);
    }
    if (loc.includes('pinnanclegroup.com') || loc.includes('pinnaclegroup.com')) {
      errors.push(`URL contains incorrect domain name: ${loc}`);
    }

    // Check for duplicates
    if (seenUrls.has(loc)) {
      errors.push(`Duplicate URL found: ${loc}`);
    }
    seenUrls.add(loc);

    // Check query params and hash fragments
    if (loc.includes('?')) {
      errors.push(`URL contains query parameters: ${loc}`);
    }
    if (loc.includes('#')) {
      errors.push(`URL contains hash fragment: ${loc}`);
    }

    // Check lastmod
    if (!lastmodMatch) {
      errors.push(`Entry #${index + 1} (${loc}) is missing <lastmod> tag.`);
    } else {
      const lastmod = lastmodMatch[1].trim();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
        errors.push(`Invalid lastmod format (${lastmod}) on ${loc}. Must be YYYY-MM-DD.`);
      }
    }
  });

  // 2. Read robots.txt
  const robotsPath = path.resolve(__dirname, '../public/robots.txt');
  if (!fs.existsSync(robotsPath)) {
    errors.push('public/robots.txt does not exist!');
  } else {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    if (!robotsContent.includes('Sitemap: https://pinnacleteam.co/sitemap.xml')) {
      errors.push('robots.txt does not point to https://pinnacleteam.co/sitemap.xml');
    }
    if (!robotsContent.includes('Allow: /')) {
      warnings.push('robots.txt does not explicitly declare Allow: /');
    }
  }

  // 3. Read _redirects
  const redirectsPath = path.resolve(__dirname, '../public/_redirects');
  if (!fs.existsSync(redirectsPath)) {
    errors.push('public/_redirects does not exist!');
  } else {
    const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');
    if (!redirectsContent.includes('/*                      /index.html             200')) {
      errors.push('_redirects is missing SPA fallback rule (/* /index.html 200).');
    }
  }

  // 4. Read index.html canonical
  const indexPath = path.resolve(__dirname, '../index.html');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  if (!indexContent.includes('<link rel="canonical" href="https://pinnacleteam.co/" />')) {
    errors.push('index.html does not have canonical tag pointing to https://pinnacleteam.co/');
  }

  console.log('----------------------------------------------------');
  console.log('TECHNICAL SEO & SITEMAP VALIDATION SUMMARY');
  console.log('----------------------------------------------------');
  console.log(`Canonical Domain:      ${canonicalDomain}`);
  console.log(`Total URLs in Sitemap: ${seenUrls.size}`);
  console.log(`Validation Errors:     ${errors.length}`);
  console.log(`Validation Warnings:   ${warnings.length}`);
  console.log('----------------------------------------------------');

  if (errors.length > 0) {
    console.error('Validation FAILED with the following errors:');
    errors.forEach(e => console.error('  ❌ ' + e));
    process.exit(1);
  } else {
    console.log('✅ ALL SITEMAP, ROBOTS.TXT, AND CANONICAL CHECKS PASSED PERFECTLY!');
  }
}

validate();
