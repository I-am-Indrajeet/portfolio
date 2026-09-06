import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, "../assets/originals/hero_section.png");
const output = join(__dirname, "../assets/originals/hero_section_no_bg.png");

const image = sharp(input);
const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = new Uint8ClampedArray(data);
const { width, height } = info;

function isBackground(r, g, b) {
  // Deep red studio backdrop
  const redDominant = r > 55 && g < r * 0.3 && b < r * 0.45;
  const darkRed = r > 40 && g < r * 0.22 && b < r * 0.35;

  return redDominant || darkRed;
}

const background = new Uint8Array(width * height);
const queue = new Uint32Array(width * height);
let start = 0;
let end = 0;

function addBackgroundPixel(index) {
  if (background[index]) return;
  const pixel = index * 4;
  if (!isBackground(pixels[pixel], pixels[pixel + 1], pixels[pixel + 2]))
    return;

  background[index] = 1;
  queue[end++] = index;
}

for (let x = 0; x < width; x++) {
  addBackgroundPixel(x);
  addBackgroundPixel((height - 1) * width + x);
}

for (let y = 1; y < height - 1; y++) {
  addBackgroundPixel(y * width);
  addBackgroundPixel(y * width + width - 1);
}

while (start < end) {
  const index = queue[start++];
  const x = index % width;
  const y = Math.floor(index / width);

  if (x > 0) addBackgroundPixel(index - 1);
  if (x < width - 1) addBackgroundPixel(index + 1);
  if (y > 0) addBackgroundPixel(index - width);
  if (y < height - 1) addBackgroundPixel(index + width);
}

for (let index = 0; index < background.length; index++) {
  const pixel = index * 4;
  const x = index % width;
  const y = Math.floor(index / width);

  if (background[index]) {
    pixels[pixel + 3] = 0;
    continue;
  }

  let backgroundNeighbors = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < width &&
        ny < height &&
        background[ny * width + nx]
      ) {
        backgroundNeighbors++;
      }
    }
  }

  if (backgroundNeighbors >= 4)
    pixels[pixel + 3] = Math.min(pixels[pixel + 3], 120);
  else if (backgroundNeighbors >= 2)
    pixels[pixel + 3] = Math.min(pixels[pixel + 3], 220);

  // The source includes a decorative sparkle in the otherwise empty lower-right corner.
  if (x > width * 0.8 && y > height * 0.55) pixels[pixel + 3] = 0;
}

let left = width;
let top = height;
let right = 0;
let bottom = 0;

for (let i = 0; i < pixels.length; i += 4) {
  if (pixels[i + 3] < 20) continue;

  const x = (i / 4) % width;
  const y = Math.floor(i / 4 / width);
  left = Math.min(left, x);
  top = Math.min(top, y);
  right = Math.max(right, x);
  bottom = Math.max(bottom, y);
}

const padding = 24;
const crop = {
  left: Math.max(0, Math.floor(left - padding)),
  top: Math.max(0, Math.floor(top - padding)),
  width: Math.min(width, Math.ceil(right - left + padding * 2 + 1)),
  height: Math.min(height, Math.ceil(bottom - top + padding * 2 + 1)),
};

crop.width = Math.min(crop.width, width - crop.left);
crop.height = Math.min(crop.height, height - crop.top);

await sharp(Buffer.from(pixels), { raw: { width, height, channels: 4 } })
  .extract(crop)
  .png()
  .toFile(output);

console.log(`Saved ${output} (${crop.width}×${crop.height})`);
