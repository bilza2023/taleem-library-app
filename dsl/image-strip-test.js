// /dsl/image-strip-test.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Image Strip Test");

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.6
};
// --------------------------------------------------
// intro
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title(
    "Image Strip Testing",
    0
  )
  .subtitle(
    "Sequences • comparison • visual rhythm",
    3
  );

// --------------------------------------------------
// strip 01
// --------------------------------------------------

taleem.at(8)
  .imageStrip()

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
  );

// --------------------------------------------------
// strip 02
// --------------------------------------------------

taleem.at(20)
  .imageStrip()

  .image(
    "force-intro.webp",
    20
  )

  .image(
    "eq.webp",
    22
  )

  .image(
    "box.webp",
    24
  );

// --------------------------------------------------
// strip 03
// --------------------------------------------------

taleem.at(32)
  .imageStrip()

  .image(
    "image.png",
    32
  )

  .image(
    "image.png",
    34
  )

  .image(
    "image.png",
    36
  );

// --------------------------------------------------
// strip 04
// --------------------------------------------------

taleem.at(44)
  .imageStrip()

  .image(
    "force-intro.webp",
    44
  )

  .image(
    "force-intro.webp",
    46
  )

  .image(
    "box.webp",
    48
  );

// --------------------------------------------------
// strip 05
// --------------------------------------------------

taleem.at(56)
  .imageStrip()

  .image(
    "eq.webp",
    56
  )

  .image(
    "box.webp",
    58
  )

  .image(
    "force-intro.webp",
    60
  );

// --------------------------------------------------
// strip 06
// --------------------------------------------------

taleem.at(68)
  .imageStrip()

  .image(
    "box.webp",
    68
  )

  .image(
    "box.webp",
    70
  )

  .image(
    "box.webp",
    72
  );

// --------------------------------------------------
// strip 07
// --------------------------------------------------

taleem.at(80)
  .imageStrip()

  .image(
    "image.png",
    80
  )

  .image(
    "eq.webp",
    82
  )

  .image(
    "force-intro.webp",
    84
  );

// --------------------------------------------------

taleem.end(92);

// --------------------------------------------------

export default
  taleem.compile();