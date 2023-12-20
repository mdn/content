---
title: Alignment subject
slug: Glossary/Alignment_Subject
page-type: glossary-definition
---

{{GlossarySidebar}}

In [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) the **alignment subject** is the thing (or things) being aligned by the property.

For {{cssxref("justify-self")}} and {{cssxref("align-self")}}, the alignment subject is the margin box of the box the property is set on, using the writing mode of that box. For {{cssxref("justify-content")}} and {{cssxref("align-content")}}, the writing mode of the box is also used.

The definition of the alignment subject depends on the layout mode being used.

- Block containers (including table cells)
  - : The entire content of the block as a single unit.
- Multicol containers
  - : The column boxes, with any spacing inserted between column boxes added to the relevant column gaps.
- Flex containers
  - : For {{cssxref("justify-content")}}, the flex items in each flex line. For {{cssxref("align-content")}}, the flex lines. Note, this only has an effect on multi-line flex containers.
- Grid containers
  - : The grid tracks in the appropriate axis, with any spacing inserted between tracks added to the relevant gutters. Collapsed gutters are treated as a single opportunity for space insertion.

## See also

- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
