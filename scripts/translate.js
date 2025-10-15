const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api');

const locales = ['fr', 'pt', 'zh', 'de'];
const sourceFile = path.join(__dirname, '..', 'public', 'locales', 'en', 'common.json');

async function translateObject(obj, targetLang) {
  const translated = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      try {
        const res = await translate(value, { to: targetLang });
        translated[key] = res.text;
      } catch (err) {
        console.error(`Error translating ${key} to ${targetLang}:`, err);
        translated[key] = value; // fallback
      }
    } else if (typeof value === 'object') {
      translated[key] = await translateObject(value, targetLang);
    } else {
      translated[key] = value;
    }
  }
  return translated;
}

async function main() {
  const enData = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

  for (const lang of locales) {
    console.log(`Translating to ${lang}...`);
    const translated = await translateObject(enData, lang);
    const targetFile = path.join(__dirname, '..', 'public', 'locales', lang, 'common.json');
    fs.writeFileSync(targetFile, JSON.stringify(translated, null, 2));
    console.log(`Saved ${targetFile}`);
  }
}

main().catch(console.error);