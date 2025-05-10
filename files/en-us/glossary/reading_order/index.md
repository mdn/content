---
title: Reading order
slug: Glossary/Reading_order
page-type: glossary-definition
---

{{GlossarySidebar}}

The **reading order** of an element is the order in which its child nodes are read out, for example via a {{glossary("screen reader")}}, or navigated to using sequential navigation methods such as tabbing through links or buttons.

By default, the reading order of an element is the order of its child content in the DOM. This can be overriden by setting a {{cssxref("reading-flow")}} value other than `normal` on a [block](/en-US/docs/Glossary/Block/CSS), [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout), or [grid](/en-US/docs/Web/CSS/CSS_grid_layout) container. The resulting modified reading order (**reading flow**) can be further modified by setting {{cssxref("reading-order")}} values on child items of the element (which is called a **reading flow container**).

- Reading flow container
  - : A block, flex, or grid container with a `reading-flow` value other than `normal` set on it.
- Reading flow
  - : The modified reading order resulting from setting `reading-flow` and `reading-order` values on an element.

## See also

- {{cssxref("reading-flow")}}
- {{cssxref("reading-order")}}
