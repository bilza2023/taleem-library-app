// /home/bilal-tariq/00--TALEEM/taleem-library/dsl/what-is-taleem-help.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("What Is Taleem.help");

// --------------------------------------------------

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.4
};

// --------------------------------------------------
// title
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title("What is Taleem.help?",0)
  .subtitle("Focused educational videos for Pakistani students",1);

// --------------------------------------------------
// intro
// --------------------------------------------------

taleem.at(4)
  .titleAndPara()
  .title("An educational platform built around clarity",4)
  .para("Taleem.help contains a large collection of narrated educational videos and presentations designed for focused learning.",5);

// bullet list

taleem.at(8)
  .bulletList()
  .bullet("Focused educational videos",8)
  .bullet("Narration with visual explanations",9)
  .bullet("Physics, mathematics, biology and more",10)
  .bullet("Built for Pakistani students",11);

// image with title

taleem.at(15)
  .imageWithTitle()
  .title("Visual learning and guided explanation",15)
  .image("typesOfForce.webp",17);

// why many videos

taleem.at(20)
  .focusList()
  .heading("Why are there so many videos?",20)
  .bullet("Different students struggle at different points",21)
  .bullet("Important questions may receive separate videos",22)
  .bullet("Short focused lessons are easier to revise later",23);

// image left bullets right

taleem.at(25)
  .imageLeftBulletsRight()
  .image("banner.webp",25)
  .bullet("Topics are divided into smaller lessons",26)
  .bullet("Students can revisit specific ideas quickly",27)
  .bullet("Lessons are designed for calm step-by-step learning",28);

// --------------------------------------------------
// equation showcase
// --------------------------------------------------

taleem.at(30)
  .eq()
  .title("Step-by-step reasoning",30,[
    {
      name:"text",
      content:"Complex ideas are explained carefully."
    }
  ])
  .math("F = ma",32,[
    {name:"image",content:"eq.webp"},
    {name:"text",content:"Force depends on mass and acceleration."}
  ])
  .line("Students should understand why formulas work.",33,[
    {
      name:"text",
      content:"Reasoning is more important than memorization."
    }
  ])
  .math("a = \\frac{F}{m}",34,[
    {
      name:"text",
      content:"Ideas are explained through small logical steps."
    }
  ])
  .line("The goal is understanding, not rushed learning.",35,[
    {
      name:"text",
      content:"Lessons are continuously refined and improved."
    }
  ]);

// --------------------------------------------------
// diagrams
// --------------------------------------------------

taleem.at(36)
  .imageWithCaption()
  .image("parallelogram_properties_labeled.png",36)
  .caption(
    "Diagrams and geometry explained visually and carefully.",
    38
  );

// --------------------------------------------------
// updates
// --------------------------------------------------

taleem.at(38)
  .bulletList()
  .bullet("Videos continue improving over time",38)
  .bullet("Errors and narration can be updated",39)
  .bullet("Slides can be refined continuously",40)
  .bullet("Educational content should evolve and improve",41);

// --------------------------------------------------
// quote
// --------------------------------------------------

taleem.at(43)
  .quoteSlide()
  .quote("Focused learning becomes easier when explanations are calm, visual and structured.",43)
  .author("— taleem.help",44);

// --------------------------------------------------

taleem.at(45)
  .twoColumnText()
  .leftText("Students can ask questions and request deeper explanations.",45)
  .rightText("The platform grows from real student confusion and feedback.",48);

// --------------------------------------------------
// image grid
// --------------------------------------------------

taleem.at(50)
  .imageGrid()
  .image("eq.webp",51)
  .image("typesOfForce.webp",53)
  .image("banner.webp",55)
  .image("banner_brand.png",58);

// --------------------------------------------------
// ending
// --------------------------------------------------

taleem.at(60)
  .titleAndPara()
  .title("taleem.help",61)
  .para("Educational videos and narrated lessons designed for focused learning and continuous improvement.",62);

// --------------------------------------------------

taleem.end(70);

export default taleem.compile();