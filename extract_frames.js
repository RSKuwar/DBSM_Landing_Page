import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegPkg from '@ffmpeg-installer/ffmpeg';

const videoPath = 'C:\\Users\\rohit\\.gemini\\antigravity-ide\\scratch\\dbsm-premium-3d\\public\\dbsm-drone-entry.mp4';
const outputDir = 'C:\\Users\\rohit\\.gemini\\antigravity-ide\\scratch\\dbsm-premium-3d\\public\\frames';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Using ffmpeg binary:', ffmpegPkg.path);
execSync(`"${ffmpegPkg.path}" -i "${videoPath}" -vf "fps=12,scale=1280:-1" -vframes 120 -c:v libwebp -quality 80 "${outputDir}\\dbsm-%03d.webp"`, { stdio: 'inherit' });
console.log('SUCCESSFULLY EXTRACTED 120 WEBP FRAMES!');
