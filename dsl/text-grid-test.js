// /dsl/text-grid-test.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Text Grid Test");

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
    "Text Grid Testing",
    0
  )
  .subtitle(
    "Chunking • clustering • visual scanning",
    3
  );

// --------------------------------------------------
// text grid 01
// --------------------------------------------------

taleem.at(8)
  .textGrid()

  .text(
    "Addition",
    8
  )

  .text(
    "Subtraction",
    10
  )

  .text(
    "Multiplication",
    12
  )

  .text(
    "Division",
    14
  )

  .text(
    "Fractions",
    16
  )

  .text(
    "Percentages",
    18
  );

// --------------------------------------------------
// text grid 02
// --------------------------------------------------

taleem.at(26)
  .textGrid()

  .text(
    "Photosynthesis",
    26
  )

  .text(
    "Respiration",
    28
  )

  .text(
    "Digestion",
    30
  )

  .text(
    "Circulation",
    32
  )

  .text(
    "Excretion",
    34
  )

  .text(
    "Reproduction",
    36
  );

// --------------------------------------------------
// text grid 03
// --------------------------------------------------

taleem.at(44)
  .textGrid()

  .text(
    "Velocity",
    44
  )

  .text(
    "Acceleration",
    46
  )

  .text(
    "Momentum",
    48
  )

  .text(
    "Gravity",
    50
  )

  .text(
    "Force",
    52
  )

  .text(
    "Energy",
    54
  );

// --------------------------------------------------
// text grid 04
// --------------------------------------------------

taleem.at(62)
  .textGrid()

  .text(
    "Variables",
    62
  )

  .text(
    "Functions",
    64
  )

  .text(
    "Arrays",
    66
  )

  .text(
    "Objects",
    68
  )

  .text(
    "Loops",
    70
  )

  .text(
    "Conditions",
    72
  );

// --------------------------------------------------
// text grid 05
// --------------------------------------------------

taleem.at(80)
  .textGrid()

  .text(
    "Observation",
    80
  )

  .text(
    "Hypothesis",
    82
  )

  .text(
    "Experiment",
    84
  )

  .text(
    "Analysis",
    86
  )

  .text(
    "Conclusion",
    88
  )

  .text(
    "Verification",
    90
  );

// --------------------------------------------------
// text grid 06
// --------------------------------------------------

taleem.at(98)
  .textGrid()

  .text(
    "Focus",
    98
  )

  .text(
    "Clarity",
    100
  )

  .text(
    "Discipline",
    102
  )

  .text(
    "Patience",
    104
  )

  .text(
    "Reasoning",
    106
  )

  .text(
    "Consistency",
    108
  );

// --------------------------------------------------

taleem.end(116);

// --------------------------------------------------

export default
  taleem.compile();