---
title: CSS Overflow
slug: Web/CSS/CSS_Overflow
page-type: css-module
spec-urls: https://drafts.csswg.org/css-overflow/#propdef-overflow
---

{{CSSRef}}

The **CSS Overflow** module contains the features of CSS relating to scrollable overflow handling in visual media.

CSS overflow happens when the content of a box extends past one or more of the box's edges. **Scrollable overflow** is content that appears outside of the box for which scrolling mechanisms need to be provided. The overflow properties are how we can control what happens when content overflows a box.

Painting effects that overflow content but do not participate in the CSS box model, also known as {{Glossary("ink overflow")}}, do not affect layout. Ink overflows, such as box shadows, border images, text decoration, overhanging glyphs, outlines, etc., do not extend the scrollable overflow region.

## Overflow in action

The following interactive example shows the effects of changing the value of the `overflow` property changes overflow of a fixed-size box. The example also includes options to change the `width` and `overflow-clip-margin` property values, as well as to programmatically scroll the content if the overflow property creates a {{Glossary("scroll container")}}.

{{EmbedGHLiveSample("css-examples/modules/overflow.html", '100%', 320)}}

A link is included in the preformatted lyrics to demonstrate the effects of keyboard focus on overflow and scroll behaviors. Try tabbing to the link or programmatically scrolling the content: the content will only scroll if the enumerated `<overflow>` value created a scroll container.

## Reference

### CSS properties

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("overflow")}} shorthand
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("block-ellipsis")}}
- {{CSSxRef("continue")}} {{experimental_inline}}
- {{CSSxRef("line-clamp")}} {{experimental_inline}}
- {{CSSxRef("max-lines")}} {{experimental_inline}}
- {{CSSxRef("-webkit-line-clamp")}} {{non-standard_inline}}

### Data types

- [`<overflow>`](/en-US/docs/Web/CSS/overflow_value) enumerated values

### Glossary

- {{Glossary("Scroll container")}}
- {{Glossary("Ink overflow")}}

## Guides

- [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS building block: learn what overflow is and how to manage it.
- {{Experimental_Inline}} [Creating a named scroll timeline](/en-US/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_timeline)
  - : The CSS scroll timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, create animations tied to the scroll offset of a scroll container.

## Related concepts

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- {{CSSxRef("scroll-behavior")}} CSS property
- {{CSSxRef("scrollbar-gutter")}} CSS property
- {{cssxref("scroll-margin")}} CSS shorthand property
- {{cssxref("scroll-padding")}} CSS shorthand property
- {{cssxref("scroll-snap-align")}} CSS property
- {{cssxref("scroll-snap-stop")}} CSS property
- {{cssxref("scroll-snap-type")}} CSS property
- {{cssxref("text-overflow")}} CSS property
- {{CSSxRef("::-webkit-scrollbar")}} pseudo-element
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA role
- Element {{domxref("Element.scroll", "scroll()")}} method
- Element {{domxref("Element.scrollBy", "scrollBy()")}} method
- Element {{domxref("Element.scrollIntoView", "scrollIntoView()")}} method
- Element {{domxref("Element.scrollTo", "scrollTo()")}} method
- Element {{domxref("Element.scrollTop", "scrollTop")}} property
- Element {{domxref("Element.scrollLeft", "scrollLeft")}} property
- Element {{domxref("Element.scrollWidth", "scrollWidth")}} property
- Element {{domxref("Element.scrollHeight", "scrollHeight")}} property
- Document {{domxref("Document.scroll_event", "scroll")}} event

## Specifications

{{Specifications}}

## See also

- [CSS scrollbars styling module](/en-US/docs/Web/CSS/CSS_scrollbars)
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [CSSOM view module](/en-US/docs/Web/CSS/CSSOM_View)
- How to [Debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html).
