// /scripts/compile.js

import fs from "fs";
import path from "path";

const DSL_ROOT =
  path.resolve("./dsl");

const OUTPUT_ROOT =
  path.resolve("./static/content/decks");

// --------------------------------------------------

fs.mkdirSync(
  OUTPUT_ROOT,
  {
    recursive: true
  }
);

// --------------------------------------------------

const files =
  fs.readdirSync(DSL_ROOT)
    .filter(file =>
      file.endsWith(".js")
    );

// --------------------------------------------------

for (const file of files) {

  const inputPath =
    path.join(
      DSL_ROOT,
      file
    );

  console.log(
    `\n📦 compiling ${file}`
  );

  const mod =
    await import(inputPath);

  const presentation =
    mod.default;

  const outputPath =
    path.join(
      OUTPUT_ROOT,
      file.replace(
        /\.js$/,
        ".json"
      )
    );

  fs.writeFileSync(
    outputPath,

    JSON.stringify(
      presentation,
      null,
      2
    )
  );

  console.log(
    `✅ ${outputPath}`
  );
}

console.log(
  "\n🎉 all decks compiled"
);