// /dsl/full-lesson-flow-test.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Full Lesson Flow Test");

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
    "Understanding Force",
    0
  )
  .subtitle(
    "A complete lesson flow experiment",
    3
  );

// --------------------------------------------------
// opening visual
// --------------------------------------------------

taleem.at(8)
  .imageWithTitle()
  .title(
    "Force changes motion",
    8
  )
  .image(
    "force-intro.webp",
    10
  );

// --------------------------------------------------
// focus list
// --------------------------------------------------

taleem.at(18)
  .focusList()
  .heading(
    "What We Will Learn",
    18
  )
  .bullet(
    "What force means",
    20
  )
  .bullet(
    "How force affects motion",
    22
  )
  .bullet(
    "Balanced and unbalanced forces",
    24
  )
  .bullet(
    "Force in everyday life",
    26
  );

// --------------------------------------------------
// title and para
// --------------------------------------------------

taleem.at(34)
  .titleAndPara()
  .title(
    "What is Force?",
    34
  )
  .para(
    "Force is a push or pull that can change the motion, direction, or shape of an object.",
    37
  );

// --------------------------------------------------
// image + bullets
// --------------------------------------------------

taleem.at(46)
  .imageLeftBulletsRight()
  .image(
    "force-intro.webp",
    46
  )
  .bullet(
    "Pushes move objects away",
    48
  )
  .bullet(
    "Pulls bring objects closer",
    50
  )
  .bullet(
    "Forces can change speed",
    52
  )
  .bullet(
    "Forces can change direction",
    54
  );

// --------------------------------------------------
// eq slide
// --------------------------------------------------

taleem.at(62)
.eq()

.title("Newton's Second Law", 62, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "Force depends on mass and acceleration."
  }
])

.math("F = ma", 64, [
  {
    name: "text",
    content: "F means force."
  },

  {
    name: "text",
    content: "m means mass."
  },

  {
    name: "text",
    content: "a means acceleration."
  },

  {
    name: "text",
    content: "This is one of the most important physics equations."
  },

  {
    name: "text",
    content: "Greater acceleration requires greater force."
  },

  {
    name: "text",
    content: "Heavy objects resist motion changes."
  }
])

.math("F = 2 \\times 3", 66, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "Substitute values into the formula."
  }
])

.math("F = 6", 68, [
  {
    name: "text",
    content: "The resulting force equals 6 newtons."
  },

  {
    name: "text",
    content: "Units matter in physics."
  },

  {
    name: "text",
    content: "Always include measurement units."
  },

  {
    name: "text",
    content: "Physics combines math with reality."
  },

  {
    name: "text",
    content: "Equations describe natural behavior."
  },

  {
    name: "text",
    content: "Reasoning matters more than memorization."
  }
]);

// --------------------------------------------------
// text grid
// --------------------------------------------------

taleem.at(78)
  .textGrid()

  .text(
    "Push",
    78
  )

  .text(
    "Pull",
    80
  )

  .text(
    "Motion",
    82
  )

  .text(
    "Mass",
    84
  )

  .text(
    "Speed",
    86
  )

  .text(
    "Acceleration",
    88
  );

// --------------------------------------------------
// image strip
// --------------------------------------------------

taleem.at(96)
  .imageStrip()

  .image(
    "force-intro.webp",
    96
  )

  .image(
    "box.webp",
    98
  )

  .image(
    "eq.webp",
    100
  );

// --------------------------------------------------
// skeleton cinematic sequence
// --------------------------------------------------

taleem.at(108)
  .skeleton()

  .title(
    "Every Motion Has a Cause",
    108
  )

  .image(
    "force-intro.webp",
    112
  )

  .para(
    "Physics searches for invisible rules.",
    116
  )

  .title(
    "Force Explains Change",
    120
  )

  .image(
    "eq.webp",
    124
  )

  .para(
    "Equations compress understanding.",
    128
  );

// --------------------------------------------------
// quote
// --------------------------------------------------

taleem.at(136)
  .quoteSlide()
  .quote(
    "The important thing is not to stop questioning.",
    136
  )
  .author(
    "— Albert Einstein",
    139
  );

// --------------------------------------------------
// recap
// --------------------------------------------------

taleem.at(146)
  .focusList()
  .heading(
    "Lesson Recap",
    146
  )
  .bullet(
    "Force changes motion",
    148
  )
  .bullet(
    "Force depends on mass",
    150
  )
  .bullet(
    "Equations describe physics",
    152
  )
  .bullet(
    "Reasoning builds understanding",
    154
  );

// --------------------------------------------------

taleem.end(162);

// --------------------------------------------------

export default
  taleem.compile();