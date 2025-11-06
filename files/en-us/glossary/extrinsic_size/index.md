---
title: Extrinsic size
slug: Glossary/Extrinsic_size
page-type: glossary-definition
sidebar: glossarysidebar
---

In CSS, the **extrinsic size** of an element is determined by its layout context, that is, by constraints imposed from outside the element, without regard for its contents. This is the opposite of an element's {{glossary("intrinsic size")}}, which is based on its content.

Extrinsic sizing occurs when you explicitly set or constrain the size of an element using [CSS box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model) properties such as {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("max-width")}}, and {{cssxref("min-height")}}.
For example, when you set `width: 200px`, you're specifying an extrinsic size.

Percentage values are also extrinsic; they're calculated relative to the element's [containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block).
For example, `width: 50%` means the width of the element will be `50%` of the width of its containing block, regardless of the content inside the element.

Block-level elements are sized extrinsically. When a width isn't specified, the block element's default width is `auto`, which resolves to `100%` width of its containing block.

## See also

- Related glossary terms:
  - {{glossary("Intrinsic size")}}
- [CSS box sizing](/en-US/docs/Web/CSS/Guides/Box_sizing) module
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#extrinsic) specification
