const fs = require('fs');
let c = fs.readFileSync('src/data/portfolio.ts', 'utf8');
c = c.replace(/\\n\\n\(참조 페이지: nangman\.cloud\)"/g, '",\n      link: "https://nangman.cloud/ko"');
fs.writeFileSync('src/data/portfolio.ts', c, 'utf8');
