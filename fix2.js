const fs = require('fs');
let c = fs.readFileSync('src/data/portfolio.ts', 'utf8');

// The array ends are on lines with `  ] as Project[],`
c = c.replace(/  \] as Project\[\],/g, '  ],');

fs.writeFileSync('src/data/portfolio.ts', c, 'utf8');
