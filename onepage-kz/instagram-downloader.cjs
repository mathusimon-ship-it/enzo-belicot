const puppeteer = require("puppeteer");
const axios = require("axios");
const fs = require("fs-extra");

const username = process.argv[2] || "belicot_enzo_driver";
const folder = "./images";

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 1000;

      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 800);
    });
  });
}

async function downloadImage(url, filename) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream"
  });

  const writer = fs.createWriteStream(filename);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

(async () => {

  await fs.ensureDir(folder);

  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  const url = `https://www.instagram.com/${username}/`;

  console.log("Opening", url);

  await page.goto(url, { waitUntil: "networkidle2" });

  await autoScroll(page);

  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll("img"));
    return imgs
      .map(img => img.src)
      .filter(src => src.includes("cdninstagram"));
  });

  const uniqueImages = [...new Set(images)];

  console.log(`Found ${uniqueImages.length} images`);

  for (let i = 0; i < uniqueImages.length; i++) {

    const imageUrl = uniqueImages[i];

    const filename = `${folder}/image_${i}.jpg`;

    console.log("Downloading", filename);

    await downloadImage(imageUrl, filename);
  }

  await browser.close();

  console.log("Done");

})();