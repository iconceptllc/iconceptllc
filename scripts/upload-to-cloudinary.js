const cloudinary = require("cloudinary").v2;
const path = require("path");
const fs = require("fs");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const VIDEOS_DIR = path.resolve(__dirname, "../public/videos");
const OUTPUT_FILE = path.resolve(__dirname, "../cloudinary-urls.json");

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function getAllFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (VIDEO_EXTENSIONS.includes(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

async function uploadFile(filePath) {
  const relativePath = path.relative(path.resolve(__dirname, "../public"), filePath).replace(/\\/g, "/");
  const publicId = "iconcept/" + relativePath.replace(/\.[^.]+$/, "");

  const options = {
    public_id: publicId,
    resource_type: "video",
    overwrite: false,
    unique_filename: false,
  };

  try {
    const result = await cloudinary.uploader.upload(filePath, options);
    return { localPath: "/" + relativePath, url: result.secure_url };
  } catch (err) {
    if (err.http_code === 409 || (err.message && err.message.includes("already exists"))) {
      const ext = path.extname(relativePath);
      const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}${ext}`;
      return { localPath: "/" + relativePath, url };
    }
    console.error(`  Failed: ${relativePath} - ${err.message}`);
    return null;
  }
}

async function main() {
  console.log("Scanning public/videos for video files...\n");
  const files = getAllFiles(VIDEOS_DIR);
  console.log(`Found ${files.length} video files to upload.\n`);

  const urlMap = {};
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    const rel = path.relative(path.resolve(__dirname, "../public"), file).replace(/\\/g, "/");
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
