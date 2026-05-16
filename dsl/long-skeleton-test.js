// /dsl/long-skeleton-test.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Long Skeleton Test");

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
    "Long Skeleton Experiment",
    0
  )
  .subtitle(
    "Visual rhythm • pacing • atmosphere • cinematic learning",
    3
  );

// --------------------------------------------------
// skeleton
// --------------------------------------------------

taleem.at(8)
  .skeleton()

  .title(
    "Mathematics is Pattern",
    8
  )

  .image(
    "eq.webp",
    12
  )

  .para(
    "Every equation hides structure.",
    16
  )

  .image(
    "box.webp",
    20
  )

  .title(
    "Geometry became language",
    24
  )

  .para(
    "Pythagoras searched for harmony in numbers.",
    28
  )

  .image(
    "image.png",
    32
  )

  .title(
    "The triangle changed history",
    36
  )

  .para(
    "Distance could now be reasoned about.",
    40
  )

  .image(
    "force-intro.webp",
    44
  )

  .title(
    "Then came motion",
    48
  )

  .para(
    "Force explained why objects change.",
    52
  )

  .image(
    "eq.webp",
    56
  )

  .title(
    "Einstein questioned space itself",
    60
  )

  .para(
    "Gravity was no longer a force alone.",
    64
  )

  .image(
    "box.webp",
    68
  )

  .title(
    "Time bends",
    72
  )

  .para(
    "Mass reshapes the geometry around it.",
    76
  )

  .image(
    "image.png",
    80
  )

  .title(
    "Physics became imagination",
    84
  )

  .para(
    "The universe turned into a puzzle of invisible rules.",
    88
  )

  .image(
    "force-intro.webp",
    92
  )

  .title(
    "Every discovery began with curiosity",
    96
  )

  .para(
    "Questions move civilization forward.",
    100
  )

  .image(
    "eq.webp",
    104
  )

  .title(
    "A symbol can outlive empires",
    108
  )

  .para(
    "Ideas travel farther than armies.",
    112
  )

  .image(
    "box.webp",
    116
  )

  .title(
    "Learning changes perception",
    120
  )

  .para(
    "The world looks different once patterns become visible.",
    124
  )

  .image(
    "image.png",
    128
  )

  .title(
    "Equations are compressed thought",
    132
  )

  .para(
    "A single formula may represent centuries of understanding.",
    136
  )

  .image(
    "force-intro.webp",
    140
  )

  .title(
    "Science is organized curiosity",
    144
  )

  .para(
    "Observation slowly becomes understanding.",
    148
  )

  .image(
    "eq.webp",
    152
  )

  .title(
    "Reason builds civilization",
    156
  )

  .para(
    "Careful thinking scales across generations.",
    160
  )

  .image(
    "box.webp",
    164
  )

  .title(
    "Knowledge compounds",
    168
  )

  .para(
    "Every learner inherits the thoughts of thousands before them.",
    172
  )

  .image(
    "image.png",
    176
  )

  .title(
    "The story continues",
    180
  )

  .para(
    "Someone watching today may solve tomorrow’s mysteries.",
    184
  );

// --------------------------------------------------

taleem.end(192);

// --------------------------------------------------

export default
  taleem.compile();