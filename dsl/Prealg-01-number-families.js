// /dsl/prealg-02-number-families.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Number Families");

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.5
};

// --------------------------------------------------
// TITLE
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title("Number Families",0)
  .subtitle("How the number system expanded step by step",2);

// --------------------------------------------------
// MAIN DIAGRAM
// --------------------------------------------------

taleem.at(5)
  .imageWithCaption()
  .image("number-families.jpeg",5)
  .caption(
    "Smaller number families exist inside larger number families.",
    7
  );

// --------------------------------------------------
// UNDERSTANDING THE DIAGRAM
// --------------------------------------------------

taleem.at(12)
  .imageRightBulletsLeft()
  .image("number-families.jpeg",12)
  .bullet("Natural Numbers are inside Whole Numbers",14)
  .bullet("Whole Numbers are inside Integers",16)
  .bullet("Integers are inside Rational Numbers",18)
  .bullet("Real Numbers contain all major families",20);

// --------------------------------------------------
// NATURAL NUMBERS
// --------------------------------------------------

taleem.at(26)
  .imageWithCaption()
  .image("number-families-2.jpg",26)
  .caption(
    "Natural Numbers are simple counting numbers.",
    28
  );

// --------------------------------------------------
// NATURAL NUMBERS DETAILS
// --------------------------------------------------

taleem.at(33)
  .imageLeftBulletsRight()
  .image("number-families-2.jpg",33)
  .bullet("Humans first needed numbers for counting",35)
  .bullet("These numbers are called Natural Numbers",37)
  .bullet("Examples include 1, 2, 3 and 4",39)
  .bullet("Zero and negative numbers are not included",41);

// --------------------------------------------------
// WHOLE NUMBERS
// --------------------------------------------------

taleem.at(47)
  .imageWithCaption()
  .image("number-families.jpeg",47)
  .caption(
    "Whole Numbers include zero together with Natural Numbers.",
    49
  );

// --------------------------------------------------
// WHOLE NUMBERS DETAILS
// --------------------------------------------------

taleem.at(54)
  .imageRightBulletsLeft()
  .image("number-families.jpeg",54)
  .bullet("Humans later needed zero",56)
  .bullet("Zero represents no quantity",58)
  .bullet("Natural Numbers together with zero form Whole Numbers",60)
  .bullet("Examples include 0, 1, 2 and 3",62);

// --------------------------------------------------
// INTEGERS
// --------------------------------------------------

taleem.at(68)
  .imageWithCaption()
  .image("number-families-2.jpg",68)
  .caption(
    "Integers contain positive numbers, negative numbers and zero.",
    70
  );

// --------------------------------------------------
// INTEGER DETAILS
// --------------------------------------------------

taleem.at(75)
  .imageLeftBulletsRight()
  .image("number-families-2.jpg",75)
  .bullet("Negative values became necessary",77)
  .bullet("Temperature can go below zero",79)
  .bullet("Debt can also be negative",81)
  .bullet("Integers include -3, -2, -1, 0, 1 and 2",83);

// --------------------------------------------------
// QUOTE
// --------------------------------------------------

taleem.at(89)
  .quoteSlide()
  .quote(
    "As human needs increased, the number system continued expanding.",
    89
  )
  .author("— Number Families",91);

// --------------------------------------------------
// RATIONAL NUMBERS
// --------------------------------------------------

taleem.at(97)
  .imageWithCaption()
  .image("number-families-2.jpg",97)
  .caption(
    "Rational Numbers can be written as fractions.",
    99
  );

// --------------------------------------------------
// RATIONAL DETAILS
// --------------------------------------------------

taleem.at(104)
  .imageRightBulletsLeft()
  .image("number-families-2.jpg",104)
  .bullet("Fractions became necessary",106)
  .bullet("Examples include 1/2 and 3/4",108)
  .bullet("Terminating decimals are also rational",110)
  .bullet("0.25 and 2.5 are Rational Numbers",112);

// --------------------------------------------------
// IRRATIONAL NUMBERS
// --------------------------------------------------

taleem.at(118)
  .imageWithCaption()
  .image("number-families-2.jpg",118)
  .caption(
    "Some numbers cannot be written as simple fractions.",
    120
  );

// --------------------------------------------------
// IRRATIONAL DETAILS
// --------------------------------------------------

taleem.at(125)
  .imageLeftBulletsRight()
  .image("number-families.jpeg",125)
  .bullet("π and √2 are Irrational Numbers",127)
  .bullet("Their decimal forms never completely end",129)
  .bullet("They cannot be written as simple fractions",131)
  .bullet("These numbers are also part of Real Numbers",133);

// --------------------------------------------------
// REAL NUMBERS
// --------------------------------------------------

taleem.at(139)
  .imageWithCaption()
  .image("number-families.jpeg",139)
  .caption(
    "All Rational and Irrational Numbers together form Real Numbers.",
    141
  );

// --------------------------------------------------
// ENDING
// --------------------------------------------------

taleem.at(146)
  .imageRightBulletsLeft()
  .image("number-families.jpeg",146)
  .bullet("The number system expanded step by step",148)
  .bullet("Each new family solved a new problem",150)
  .bullet("Smaller families exist inside larger families",152)
  .bullet("This hierarchy forms the Real Number system",154);

// --------------------------------------------------

taleem.end(165);

export default taleem.compile();