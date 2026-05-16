// /scripts/generate-index.js

import fs from "fs";
import path from "path";

const DECKS_ROOT =
  path.resolve(
    "./static/content/decks"
  );

const OUTPUT =
  path.resolve(
    "./static/index.json"
  );

// --------------------------------------------------

const files =
  fs.readdirSync(DECKS_ROOT)

    .filter(file =>
      file.endsWith(".json")
    )

    .reverse();

// --------------------------------------------------

const index =
  files.map(file => ({

    file,

    slug:
      file.replace(
        /\.json$/,
        ""
      )

  }));

// --------------------------------------------------

fs.writeFileSync(

  OUTPUT,

  JSON.stringify(
    index,
    null,
    2
  )
);

// --------------------------------------------------

console.log(
  `\n🧾 generated index.json`
);