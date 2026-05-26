// /dsl/prealg-00-before-class-8-urdu.js

import { Taleem } from "taleem-engine";

const taleem = new Taleem("Pre Algebra Course");

// --------------------------------------------------

taleem.background = {
  backgroundColor: "#05070c",
  backgroundImage: "bg.webp",
  backgroundImageOpacity: 0.6
};

// --------------------------------------------------
// Opening
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title(
    "Pre Algebra Course",
    0
  )
  .subtitle(
    "یہ کورس الجبرا اور اعلیٰ ریاضی شروع ہونے سے پہلے بنیادی کمزوریاں دور کرنے کے لیے بنایا گیا ہے۔",
    2
  );

// --------------------------------------------------
// Why this course matters
// --------------------------------------------------

taleem.at(5)
  .titleAndPara()
  .title(
    "یہ کورس کیوں ضروری ہے؟",
    5
  )
  .para(
  "بہت سے طلبہ آٹھویں اور نویں جماعت میں بنیادی ریاضی کی کمزوریوں کے ساتھ داخل ہوتے ہیں۔ ابتدا میں یہ کمزوریاں زیادہ نمایاں محسوس نہیں ہوتیں، لیکن جیسے ہی الجبرا، مساوات، منفی اعداد، تناسب اور فیصد جیسے موضوعات شروع ہوتے ہیں، سمجھنے میں مشکلات بڑھنے لگتی ہیں۔ اکثر طلبہ فارمولے یاد کرنے کی کوشش کرتے ہیں لیکن بنیادی تصورات واضح نہ ہونے کی وجہ سے اعتماد کمزور ہو جاتا ہے۔ یہ کورس انہی بنیادی کمزوریوں کو مضبوط کرنے اور ریاضی کی واضح سمجھ پیدا کرنے کے لیے تیار کیا گیا ہے۔",
  6
);

// --------------------------------------------------
// Topics included
// --------------------------------------------------
taleem.at(33)
  .eq()

  .title(
    "اس کورس میں شامل بنیادی تصورات",
    33,
    [
      {
        name: "image",
        content: "equation_balance_scale_labeled.webp"
      },
      {
        name: "text",
        content: "یہ تمام تصورات آٹھویں اور نویں جماعت کی ریاضی اور الجبرا کی بنیاد بناتے ہیں۔"
      }
    ]
  )

  .line(
    "Number Families اور Number Line",
    39,
    [
       {
        name: "image",
        content: "number-families.jpeg"
      }
    ]
  )

  .line(
    "Factors ، Multiples ، HCF اور LCM",
    43,
    [
      {
        name: "image",
        content: "factors-and-mutiples.jpeg"
      },
      {
        name: "image",
        content: "hcf_vs_lcm.png"
      },
      {
        name: "text",
        content: "یہ تصورات fractions اور algebraic simplification میں مسلسل استعمال ہوتے ہیں۔"
      },
      {
        name: "text",
        content: "کمزور number sense بعد میں confusion پیدا کرتا ہے۔"
      }
    ]
  )

  .line(
    "Fractions اور Decimal System",
    50,
    [
      {
        name: "image",
        content: "fractions-meaning-and-types.png"
      },
      {
        name: "image",
        content: "decimal-place-value.png"
      },
      {
        name: "image",
        content: "decimal-operations.png"
      },
      {
        name: "text",
        content: "Fractions اور decimals تقریباً ہر chapter میں دوبارہ آتے ہیں۔"
      },
      {
        name: "text",
        content: "بنیادی سمجھ مضبوط نہ ہو تو algebra مشکل محسوس ہونے لگتا ہے۔"
      }
    ]
  )

  .line(
    "Algebraic Expressions اور Radicals",
    57,
    [
      {
        name: "image",
        content: "bridge-to-algebra.png"
      },
      {
        name: "text",
        content: "یہ کورس algebra کی طرف ایک مضبوط bridge فراہم کرے گا۔"
      }
    ]
  );

// --------------------------------------------------
// How to study
// --------------------------------------------------

taleem.at(67)
  .titleAndPara()
  .title(
    "اس کورس کو کیسے پڑھیں؟",
    30
  )
  .para(
    "صرف answers یاد کرنے کی کوشش نہ کریں۔ ہر concept کو گہرائی سے سمجھیں اور یہ جاننے کی کوشش کریں کہ ہر mathematical step کیوں درست ہے۔ مضبوط ریاضیاتی سوچ آہستہ آہستہ واضح سمجھ اور مسلسل practice سے بنتی ہے۔",
    32
  );

// --------------------------------------------------

taleem.end(75);

// --------------------------------------------------

export default taleem.compile();