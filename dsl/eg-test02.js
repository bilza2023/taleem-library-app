// /dsl/eg-test02.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("EQ Test 02");

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.22
};
// --------------------------------------------------
// welcome
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title(
    "EQ Deep Testing",
    0
  )
  .subtitle(
    "Stress testing reasoning slides and side panels",
    3
  );

// --------------------------------------------------
// eq 01
// --------------------------------------------------

taleem.at(8)
.eq()

.title("Understanding the Square", 8, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "The exponent applies to the entire bracket."
  },

  {
    name: "text",
    content: "The bracket behaves like one unit."
  },

  {
    name: "text",
    content: "Students often square only one term."
  },

  {
    name: "math",
    content: "(a+b)^2 \\neq a^2+b^2"
  },

  {
    name: "text",
    content: "The whole bracket multiplies itself."
  }
])

.math("(a+b)^2", 10, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "This expression represents repeated multiplication."
  },

  {
    name: "text",
    content: "The square means two identical brackets."
  },

  {
    name: "math",
    content: "(a+b)(a+b)"
  },

  {
    name: "text",
    content: "Every term must eventually multiply."
  }
])

.math("= (a+b)(a+b)", 12, [
  {
    name: "image",
    content: "image.png"
  },

  {
    name: "text",
    content: "Rewrite before expanding."
  },

  {
    name: "text",
    content: "This keeps the structure visible."
  },

  {
    name: "text",
    content: "Expansion becomes easier to track."
  },

  {
    name: "math",
    content: "a(a+b)+b(a+b)"
  }
])

.math("= a(a+b) + b(a+b)", 14, [
  {
    name: "image",
    content: "force-intro.webp"
  },

  {
    name: "text",
    content: "Distribute carefully from left to right."
  },

  {
    name: "text",
    content: "Avoid skipping intermediate products."
  },

  {
    name: "text",
    content: "Every multiplication matters."
  },

  {
    name: "math",
    content: "a\\times a , a\\times b"
  },

  {
    name: "math",
    content: "b\\times a , b\\times b"
  }
])

.math("= a^2 + ab + ab + b^2", 16, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "All four products are now visible."
  },

  {
    name: "text",
    content: "Nothing is hidden anymore."
  },

  {
    name: "text",
    content: "This is the expanded form before simplification."
  },

  {
    name: "math",
    content: "ab+ab"
  },

  {
    name: "text",
    content: "The middle terms are identical."
  }
])

.math("= a^2 + 2ab + b^2", 18, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "Combine like terms carefully."
  },

  {
    name: "text",
    content: "Two copies of ab become 2ab."
  },

  {
    name: "math",
    content: "ab+ab=2ab"
  },

  {
    name: "text",
    content: "This identity appears throughout algebra."
  }
]);

// --------------------------------------------------
// eq 02
// --------------------------------------------------

taleem.at(28)
.eq()

.title("Testing with Numbers", 28, [
  {
    name: "image",
    content: "image.png"
  },

  {
    name: "text",
    content: "The same structure works numerically."
  },

  {
    name: "text",
    content: "Substitute values into the identity."
  },

  {
    name: "math",
    content: "(2+3)^2"
  },

  {
    name: "text",
    content: "Now expand step by step."
  }
])

.math("(2+3)^2", 30, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "The bracket multiplies itself."
  },

  {
    name: "math",
    content: "(2+3)(2+3)"
  },

  {
    name: "text",
    content: "Repeated multiplication begins."
  },

  {
    name: "text",
    content: "Every term interacts."
  }
])

.math("= 4 + 6 + 6 + 9", 32, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "math",
    content: "2\\times2=4"
  },

  {
    name: "math",
    content: "2\\times3=6"
  },

  {
    name: "math",
    content: "3\\times2=6"
  },

  {
    name: "math",
    content: "3\\times3=9"
  },

  {
    name: "text",
    content: "All products are visible separately."
  }
])

.math("= 25", 34, [
  {
    name: "image",
    content: "force-intro.webp"
  },

  {
    name: "text",
    content: "Add all values carefully."
  },

  {
    name: "math",
    content: "4+6+6+9=25"
  },

  {
    name: "text",
    content: "The identity works correctly."
  },

  {
    name: "text",
    content: "Expansion and simplification agree."
  }
])

.line("Verification improves confidence.", 36, [
  {
    name: "image",
    content: "image.png"
  },

  {
    name: "text",
    content: "Students trust identities more after testing."
  },

  {
    name: "text",
    content: "Concrete numbers reduce abstraction."
  },

  {
    name: "text",
    content: "Patterns become easier to recognize."
  }
]);

// --------------------------------------------------
// eq 03
// --------------------------------------------------

taleem.at(46)
.eq()

.title("General Identity Pattern", 46, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "Variables can change without changing structure."
  },

  {
    name: "text",
    content: "Only the symbols are different."
  },

  {
    name: "math",
    content: "(x+y)^2"
  },

  {
    name: "text",
    content: "The reasoning process stays identical."
  }
])

.math("(x+y)^2=x^2+2xy+y^2", 48, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "This is the standard algebraic identity."
  },

  {
    name: "text",
    content: "It appears repeatedly in mathematics."
  },

  {
    name: "text",
    content: "Students should memorize the structure."
  },

  {
    name: "math",
    content: "middle\\ term=2xy"
  }
])

.line("The middle term always doubles.", 50, [
  {
    name: "image",
    content: "image.png"
  },

  {
    name: "text",
    content: "Two identical cross products appear."
  },

  {
    name: "math",
    content: "xy+xy=2xy"
  },

  {
    name: "text",
    content: "This pattern is consistent."
  },

  {
    name: "text",
    content: "The coefficient becomes 2."
  }
])

.line("Careless expansion causes mistakes.", 52, [
  {
    name: "image",
    content: "force-intro.webp"
  },

  {
    name: "text",
    content: "Missing one product changes the answer."
  },

  {
    name: "text",
    content: "Students often forget the second middle term."
  },

  {
    name: "math",
    content: "xy\\neq2xy"
  },

  {
    name: "text",
    content: "Write every multiplication explicitly."
  }
])

.line("Stepwise reasoning prevents confusion.", 54, [
  {
    name: "image",
    content: "eq.webp"
  },

  {
    name: "text",
    content: "Clear structure improves understanding."
  },

  {
    name: "text",
    content: "Each step preserves context."
  },

  {
    name: "text",
    content: "Visual pacing supports memory."
  },

  {
    name: "text",
    content: "Students can follow calmly."
  }
]);

// --------------------------------------------------

taleem.end(62);

// --------------------------------------------------

export default
  taleem.compile();