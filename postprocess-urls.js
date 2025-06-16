// This script rewrites asset URLs in exported HTML files to remove the leading slash from _next/static and static asset references.
// Usage: node postprocess-urls.js

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, 'docs');
const HTML_FILES = ['index.html', '404.html'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove leading slash from _next/static and static/chunks, static/media, static/css, etc.
  content = content.replace(/\/(?:_next\/static|static\/(?:chunks|media|css))/g, match => match.slice(1));
  // Optionally, remove leading slash from favicon and other root-level assets
  content = content.replace(/href="\/(favicon.ico|grid.svg|code.jpg|laptop.jpg)"/g, 'href="$1"');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed: ${filePath}`);
}

HTML_FILES.forEach(filename => {
  const filePath = path.join(DOCS_DIR, filename);
  if (fs.existsSync(filePath)) {
    processFile(filePath);
  }
});

console.log('Post-processing complete.');
