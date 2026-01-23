const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PUBLIC_DIR = path.resolve(__dirname, "../public");
const OUTPUT_FILE = path.resolve(__dirname, "../cloudinary-urls.json");

const MEDIA_EXTENSIONS = [
  ".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg",
  ".mp4", ".webm", ".mov",
];

const SKIP_FILES = ["file.svg", "globe.svg", "next.svg", "vercel.svg", "window.svg"];

function getAllFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (MEDIA_EXTENSIONS.includes(ext) && !SKIP_FILES.includes(entry.name)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

async function uploadFile(filePath) {
  const relativePath = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, "/");
  const ext = path.extname(filePath).toLowerCase();
  const isVideo = [".mp4", ".webm", ".mov"].includes(ext);

  // Use folder structure: iconcept/<relative-path-without-extension>
  const publicId = "iconcept/" + relativePath.replace(/\.[^.]+$/, "");

  const options = {
    public_id: publicId,
    resource_type: isVideo ? "video" : "image",
    overwrite: false,
    unique_filename: false,
  };

  try {
    const result = await cloudinary.uploader.upload(filePath, options);
    return { localPath: "/" + relativePath, url: result.secure_url };
  } catch (err) {
    if (err.http_code === 409 || (err.message && err.message.includes("already exists"))) {
      // File already uploaded, get existing URL
      const resourceType = isVideo ? "video" : "image";
      const ext2 = path.extname(relativePath);
      const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/${resourceType}/upload/${publicId}${ext2}`;
      return { localPath: "/" + relativePath, url };
    }
    console.error(`  Failed: ${relativePath} - ${err.message}`);
    return null;
  }
}

async function main() {
  console.log("Scanning public folder for media files...\n");
  const files = getAllFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} media files to upload.\n`);

  const urlMap = {};
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    const rel = path.relative(PUBLIC_DIR, file).replace(/\\/g, "/");
    process.stdout.write(`[${uploaded + failed + 1}/${files.length}] Uploading: ${rel}...`);

    const result = await uploadFile(file);
    if (result) {
      urlMap[result.localPath] = result.url;
      uploaded++;
      console.log(" done");
    } else {
      failed++;
      console.log(" FAILED");
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(urlMap, null, 2));

  console.log(`\n--- Upload Complete ---`);
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Failed: ${failed}`);
  console.log(`URL mapping saved to: cloudinary-urls.json`);
}

main().catch(console.error);
