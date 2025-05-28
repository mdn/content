---
title: Reading order
slug: Glossary/Reading_order
page-type: glossary-definition
---

{{GlossarySidebar}}

**Reading order** refers to the order in which content is accessed, for example when read out by a {{glossary("screen reader")}}, or navigated to using sequential navigation methods such as tabbing through links or buttons. By default, the reading order of a webpage is defined by the document source order.

Generally, the source order should express a sensible reading order for the content, and this should also be reflected by the visual order of the content layout. However, sometimes the visual order goes out of sync with the source order. For example, you might apply different layouts to a document based on [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to suit various device or user requirements, or adjust tabbing order via [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex).

These updates can cause accessibility issues. For example, when a sighted screen reader user tabs through content, and the screen reader order differs from the visual order, this is bad user experience and can be inaccessible. The reading order should make sense to all users no matter how they access the content.

An element's reading order can be modified via the {{cssxref("reading-flow")}} property, and tweaked further by setting {{cssxref("reading-order")}} values on child items of the element.

- Reading flow
  - : A modified reading order.
- Reading flow container
  - : An element with a reading flow set on it.

## See also

- {{cssxref("reading-flow")}}
- {{cssxref("reading-order")}}
- {{cssxref("flex-direction")}}
- {{cssxref("order")}}
- [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex)
