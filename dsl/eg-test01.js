// /dsl/eq-test01.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("EQ Test 01");

taleem.background = {
  backgroundColor:"#05070c",
  backgroundImage:"bg.webp",
  backgroundImageOpacity:0.22
};

// --------------------------------------------------
// intro
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title("Expanding (a+b)^2",0)
  .subtitle("Testing EQ slide pacing and reasoning flow",3);

// --------------------------------------------------
// eq 01
// --------------------------------------------------

taleem.at(8)
  .eq()

  .title("Understanding the Square",8,[
    {
      name:"text",
      content:"The exponent applies to the whole bracket."
    },
    {
      name:"text",
      content:"The bracket multiplies itself."
    }
  ])

  .math("(a+b)^2",10,[
    {
      name:"text",
      content:"This is not a^2 + b^2."
    }
  ])

  .math("= (a+b)(a+b)",12,[
    {
      name:"image",
      content:"box.webp"
    },
    {
      name:"text",
      content:"Rewrite the square as repeated multiplication."
    }
  ])

  .line("Now every term must multiply.",14,[
    {
      name:"text",
      content:"Each term interacts with every term."
    }
  ])

  .math("= a(a+b) + b(a+b)",16,[
    {
      name:"text",
      content:"Distribute carefully."
    }
  ])

  .math("= a^2 + ab + ab + b^2",18,[
    {
      name:"text",
      content:"All products are now visible."
    }
  ])

  .line("The two middle terms are identical.",20,[
    {
      name:"text",
      content:"Both terms contain ab."
    }
  ])

  .math("= a^2 + 2ab + b^2",22,[
    {
      name:"text",
      content:"Combine like terms."
    }
  ]);

// --------------------------------------------------
// eq 02
// --------------------------------------------------

taleem.at(30)
  .eq()

  .title("Testing with Variables",30,[
    {
      name:"text",
      content:"The identity works for all variables."
    }
  ])

  .math("(x+y)^2",32,[
    {
      name:"text",
      content:"Replace a and b with x and y."
    }
  ])

  .math("= (x+y)(x+y)",34,[
    {
      name:"text",
      content:"Again the bracket multiplies itself."
    }
  ])

  .math("= x^2 + xy + xy + y^2",36,[
    {
      name:"text",
      content:"Write every multiplication step."
    }
  ])

  .math("= x^2 + 2xy + y^2",38,[
    {
      name:"text",
      content:"Combine the two xy terms."
    }
  ])

  .line("This pattern appears throughout algebra.",40,[
    {
      name:"text",
      content:"Used in identities and factorization."
    }
  ])

  .line("Careless expansion causes most mistakes.",42,[
    {
      name:"text",
      content:"Always verify each multiplication."
    }
  ]);

taleem.at(50)
  .skeleton()
  .title("One Idea",50)
  .title("One Step",53)
  .title("One Focus",56)
  .title("Clear Reasoning",59);

// --------------------------------------------------

taleem.end(65);

export default taleem.compile();