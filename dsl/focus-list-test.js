// /dsl/focus-list-test.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Focus List Test");

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
    "Focus List Testing",
    0
  )
  .subtitle(
    "Procedures • sequences • guided thinking",
    3
  );

// --------------------------------------------------
// focus list 01
// --------------------------------------------------

taleem.at(8)
  .focusList()

  .heading(
    "How to Solve an Equation",
    8
  )

  .bullet(
    "Simplify both sides first",
    10
  )

  .bullet(
    "Move variables carefully",
    12
  )

  .bullet(
    "Keep the equation balanced",
    14
  )

  .bullet(
    "Isolate the unknown",
    16
  )

  .bullet(
    "Verify the final answer",
    18
  );

// --------------------------------------------------
// focus list 02
// --------------------------------------------------

taleem.at(26)
  .focusList()

  .heading(
    "Scientific Method",
    26
  )

  .bullet(
    "Observe the phenomenon",
    28
  )

  .bullet(
    "Ask a precise question",
    30
  )

  .bullet(
    "Form a testable hypothesis",
    32
  )

  .bullet(
    "Perform controlled experiments",
    34
  )

  .bullet(
    "Analyze the collected data",
    36
  )

  .bullet(
    "Reach a logical conclusion",
    38
  );

// --------------------------------------------------
// focus list 03
// --------------------------------------------------

taleem.at(46)
  .focusList()

  .heading(
    "Writing an Essay",
    46
  )

  .bullet(
    "Start with a clear thesis",
    48
  )

  .bullet(
    "Develop one idea per paragraph",
    50
  )

  .bullet(
    "Use evidence carefully",
    52
  )

  .bullet(
    "Maintain logical flow",
    54
  )

  .bullet(
    "Conclude with clarity",
    56
  );

// --------------------------------------------------
// focus list 04
// --------------------------------------------------

taleem.at(64)
  .focusList()

  .heading(
    "Exam Preparation Strategy",
    64
  )

  .bullet(
    "Study difficult topics early",
    66
  )

  .bullet(
    "Revise actively not passively",
    68
  )

  .bullet(
    "Solve problems repeatedly",
    70
  )

  .bullet(
    "Take timed practice tests",
    72
  )

  .bullet(
    "Review mistakes honestly",
    74
  )

  .bullet(
    "Sleep before the exam",
    76
  );

// --------------------------------------------------
// focus list 05
// --------------------------------------------------

taleem.at(84)
  .focusList()

  .heading(
    "Programming Workflow",
    84
  )

  .bullet(
    "Understand the problem first",
    86
  )

  .bullet(
    "Break logic into steps",
    88
  )

  .bullet(
    "Write small testable code",
    90
  )

  .bullet(
    "Debug systematically",
    92
  )

  .bullet(
    "Refactor after correctness",
    94
  );

// --------------------------------------------------

taleem.end(102);

// --------------------------------------------------

export default
  taleem.compile();