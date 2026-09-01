// Optimize gallery images: resize to max 1600px longest edge, JPEG q82, keep filenames.
// Usage: node scripts/optimize-gallery.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'public', 'gallery');
const MAX = 1600;
const QUALITY = 82;

const files = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));

let saved = 0;
let totalBefore = 0;
let totalAfter = 0;

for (const f of files) {
  const fp = path.join(dir, f);
  const meta = await sharp(fp).metadata();
  const before = fs.statSync(fp).size;
  totalBefore += before;

  if ((meta.width ?? 0) > MAX || (meta.height ?? 0) > MAX) {
    await sharp(fp)
      .resize(MAX, MAX, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(fp + '.opt.tmp');
    fs.renameSync(fp + '.opt.tmp', fp);
    const after = fs.statSync(fp).size;
    totalAfter += after;
    saved++;
    console.log(`optimized  ${f}  ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
  } else {
    totalAfter += before;
    console.log(`skipped    ${f}  (${(before / 1024).toFixed(0)} KB, already small)`);
  }
}

console.log(`\nDone: ${saved}/${files.length} optimized. Total ${(totalBefore / 1024 / 1024).toFixed(1)} MB -> ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
