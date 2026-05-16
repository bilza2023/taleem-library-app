// /dsl/eg-test03.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("EQ Test 03");

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.22
};
// --------------------------------------------------
// title
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title(
    "Solving Linear Equations",
    0
  )
  .subtitle(
    "Authoring-rule focused EQ testing",
    3
  );

// --------------------------------------------------
// eq 01
// --------------------------------------------------

taleem.at(8)
.eq()

.title("Start with the equation", 8, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "Keep variables on one side."
  }
])

.math("2x + 3 = 11", 10, [
  {
    name: "text",
    content: "We want to isolate x."
  },

  {
    name: "text",
    content: "Remove constants first."
  },

  {
    name: "math",
    content: "11-3"
  },

  {
    name: "text",
    content: "Subtract from both sides."
  },

  {
    name: "text",
    content: "Balance must remain equal."
  },

  {
    name: "text",
    content: "Every operation affects both sides."
  }
])

.math("2x = 8", 12, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "The constant has been removed."
  }
])

.math("\\frac{2x}{2}=\\frac{8}{2}", 14, [
  {
    name: "text",
    content: "Now divide both sides by 2."
  },

  {
    name: "text",
    content: "The coefficient disappears."
  },

  {
    name: "math",
    content: "2x÷2=x"
  },

  {
    name: "text",
    content: "Only x remains."
  },

  {
    name: "text",
    content: "The equation becomes simpler."
  },

  {
    name: "text",
    content: "Always divide both sides equally."
  }
])

.math("x = 4", 16, [
  {
    name: "image",
    content: "image.png"
  },

  {
    name: "text",
    content: "The variable is isolated."
  }
])

.line("The equation is solved.", 18, [
  {
    name: "text",
    content: "Check the answer mentally."
  },

  {
    name: "text",
    content: "Substitute back if needed."
  },

  {
    name: "text",
    content: "Verification builds confidence."
  },

  {
    name: "text",
    content: "Correct structure prevents mistakes."
  },

  {
    name: "text",
    content: "Each step stayed balanced."
  },

  {
    name: "text",
    content: "The logic remained visible."
  }
]);

// --------------------------------------------------
// eq 02
// --------------------------------------------------

taleem.at(28)
.eq()

.title("Combining Like Terms", 28, [
  {
    name: "image",
    content: "force-intro.webp"
  },

  {
    name: "text",
    content: "Like terms share the same variable."
  }
])

.math("3x + 2x - 4 = 11", 30, [
  {
    name: "text",
    content: "3x and 2x are compatible."
  },

  {
    name: "math",
    content: "3x+2x=5x"
  },

  {
    name: "text",
    content: "Combine variable terms first."
  },

  {
    name: "text",
    content: "Constants remain separate."
  },

  {
    name: "text",
    content: "Simplification improves clarity."
  },

  {
    name: "text",
    content: "Avoid skipping visible steps."
  }
])

.math("5x - 4 = 11", 32, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "Now isolate the variable term."
  }
])

.math("5x = 15", 34, [
  {
    name: "text",
    content: "Add 4 to both sides."
  },

  {
    name: "math",
    content: "11+4=15"
  },

  {
    name: "text",
    content: "The negative constant disappears."
  },

  {
    name: "text",
    content: "Balance remains preserved."
  },

  {
    name: "text",
    content: "The equation becomes cleaner."
  },

  {
    name: "text",
    content: "Only multiplication remains."
  }
])

.math("x = 3", 36, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "Divide both sides by 5."
  }
])

.line("Each operation reduces complexity.", 38, [
  {
    name: "text",
    content: "Equations become simpler stepwise."
  },

  {
    name: "text",
    content: "Visible reasoning improves understanding."
  },

  {
    name: "text",
    content: "Students can track transformations."
  },

  {
    name: "text",
    content: "Logical pacing reduces confusion."
  },

  {
    name: "text",
    content: "The structure stays calm and readable."
  },

  {
    name: "text",
    content: "Every step has a clear purpose."
  }
]);

// --------------------------------------------------
// eq 03
// --------------------------------------------------

taleem.at(48)
.eq()

.title("Checking the Answer", 48, [
  {
    name: "image",
    content: "image.png"
  },

  {
    name: "text",
    content: "Verification is part of solving."
  }
])

.math("x = 4", 50, [
  {
    name: "text",
    content: "Substitute into the original equation."
  },

  {
    name: "text",
    content: "Use the discovered value carefully."
  },

  {
    name: "math",
    content: "2x+3=11"
  },

  {
    name: "text",
    content: "Replace x with 4."
  },

  {
    name: "text",
    content: "Now evaluate step by step."
  },

  {
    name: "text",
    content: "Verification catches hidden mistakes."
  }
])

.math("2(4)+3=11", 52, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "Multiply before adding."
  }
])

.math("8+3=11", 54, [
  {
    name: "text",
    content: "The arithmetic is now simple."
  },

  {
    name: "math",
    content: "8+3"
  },

  {
    name: "text",
    content: "Both sides match correctly."
  },

  {
    name: "text",
    content: "The equality remains true."
  },

  {
    name: "text",
    content: "The solution is confirmed."
  },

  {
    name: "text",
    content: "No contradiction appears."
  }
])

.math("11=11", 56, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "Both sides are identical."
  }
])

.line("Verification completes the reasoning.", 58, [
  {
    name: "text",
    content: "Correct answers should survive checking."
  },

  {
    name: "text",
    content: "This strengthens mathematical confidence."
  },

  {
    name: "text",
    content: "Students learn disciplined solving."
  },

  {
    name: "text",
    content: "Every equation deserves verification."
  },

  {
    name: "text",
    content: "Careful checking prevents careless mistakes."
  },

  {
    name: "text",
    content: "Reasoning becomes trustworthy."
  }
]);

// --------------------------------------------------

taleem.end(66);

// --------------------------------------------------

export default
  taleem.compile();