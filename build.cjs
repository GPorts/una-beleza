const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, 'dist');
fs.mkdirSync(out, {recursive:true});
for (const file of ['index.html','app.js','styles.css']) fs.copyFileSync(path.join(__dirname,file),path.join(out,file));
fs.cpSync(path.join(__dirname,'assets'),path.join(out,'assets'),{recursive:true});
console.log('Site estático preparado em dist.');
