// /dsl/image-grid-test.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Image Grid Test");

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.22
};
// --------------------------------------------------
// intro
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title(
    "Image Grid Testing",
    0
  )
  .subtitle(
    "Grouping • repetition • visual organization",
    3
  );

// --------------------------------------------------
// grid 01
// --------------------------------------------------

taleem.at(8)
  .imageGrid()

  .image(
    "box.webp",
    8
  )

  .image(
    "eq.webp",
    10
  )

  .image(
    "image.png",
    12
  )

  .image(
    "force-intro.webp",
    14
  );

// --------------------------------------------------
// grid 02
// --------------------------------------------------

taleem.at(22)
  .imageGrid()

  .image(
    "box.webp",
    22
  )

  .image(
    "box.webp",
    24
  )

  .image(
    "box.webp",
    26
  )

  .image(
    "box.webp",
    28
  );

// --------------------------------------------------
// grid 03
// --------------------------------------------------

taleem.at(36)
  .imageGrid()

  .image(
    "eq.webp",
    36
  )

  .image(
    "eq.webp",
    38
  )

  .image(
    "image.png",
    40
  )

  .image(
    "image.png",
    42
  );

// --------------------------------------------------
// grid 04
// --------------------------------------------------

taleem.at(50)
  .imageGrid()

  .image(
    "force-intro.webp",
    50
  )

  .image(
    "image.png",
    52
  )

  .image(
    "eq.webp",
    54
  )

  .image(
    "box.webp",
    56
  );

// --------------------------------------------------
// grid 05
// --------------------------------------------------

taleem.at(64)
  .imageGrid()

  .image(
    "force-intro.webp",
    64
  )

  .image(
    "force-intro.webp",
    66
  )

  .image(
    "eq.webp",
    68
  )

  .image(
    "eq.webp",
    70
  );

// --------------------------------------------------
// grid 06
// --------------------------------------------------

taleem.at(78)
  .imageGrid()

  .image(
    "image.png",
    78
  )

  .image(
    "box.webp",
    80
  )

  .image(
    "image.png",
    82
  )

  .image(
    "box.webp",
    84
  );

// --------------------------------------------------
// grid 07
// --------------------------------------------------

taleem.at(92)
  .imageGrid()

  .image(
    "eq.webp",
    92
  )

  .image(
    "force-intro.webp",
    94
  )

  .image(
    "box.webp",
    96
  )

  .image(
    "image.png",
    98
  );

// --------------------------------------------------

taleem.end(106);

// --------------------------------------------------

export default
  taleem.compile();