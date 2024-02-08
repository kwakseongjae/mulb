#!/usr/bin/env node

const {existsSync} = require(`fs`);
const {createRequire} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = createRequire(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
<<<<<<< HEAD
    // Setup the environment to be able to require typescript/lib/typescript.js
=======
    // Setup the environment to be able to require typescript
>>>>>>> feat/2-1
    require(absPnpApiPath).setup();
  }
}

<<<<<<< HEAD
// Defer to the real typescript/lib/typescript.js your application uses
module.exports = absRequire(`typescript/lib/typescript.js`);
=======
// Defer to the real typescript your application uses
module.exports = absRequire(`typescript`);
>>>>>>> feat/2-1
