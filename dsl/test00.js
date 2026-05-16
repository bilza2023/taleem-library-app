// /dsl/eg-test02.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("EQ Test 02");

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.5
};
taleem.audio = "music",

taleem.at(0).titleAndSubtitle()
  .title("Testing",0)
  .subtitle("Stress testing reasoning slides and side panels",3);

taleem.at(0).titleAndSubtitle()
  .title("Solving Linear Equations",0 )
  .subtitle("Authoring-rule focused EQ testing",3 );


taleem.end(62);

export default
  taleem.compile();