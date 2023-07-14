---
title: CSS overflow
slug: Web/CSS/CSS_overflow
page-type: css-module
spec-urls: https://drafts.csswg.org/css-overflow/#propdef-overflow
---

{{CSSRef}}

The **CSS overflow** module properties enable you to handle scrollable overflow in visual media.

Overflow happens when the content in an element box extends past one or more of the box's edges. **Scrollable overflow** is the content that appears outside the element box for which you might want to add a scrolling mechanism. CSS overflow properties enable you to control what happens when content overflows an element box.

Painting effects that overflow the content but do not participate in the CSS box model do not affect layout. This type of overflow is also known as {{Glossary("ink overflow")}}. Examples of ink overflows include box shadows, border images, text decoration, overhanging glyphs, and outlines. Ink overflows do not extend the scrollable overflow region.

## Overflow in action

Use the following interactive example to see the effects of various `overflow` property values on the content overflow and scrollbars in the adjacent fixed-size box.

The example also includes options to change the values for the `overflow-clip-margin` and `width` properties, as well as to programmatically scroll the content if the overflow property creates a {{Glossary("scroll container")}}. Select `overflow: clip` and see the effect of different `overflow-clip-margin` values. Select `overflow: hidden` or `overflow: scroll` to check out different `ScrollLeft` and `ScrollTop` slider settings.

{{EmbedGHLiveSample("css-examples/modules/overflow.html", '100%', 320)}}

A link is included in content box above to demonstrate the effects of keyboard focus on overflow and scroll behaviors. Try tabbing to the link or programmatically scrolling the content: the content will scroll only if the enumerated `<overflow>` value created a scroll container.

## Reference

### CSS properties

- {{CSSxRef("overflow")}} shorthand
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
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

## Guides

- [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS building block: learn what overflow is and how to manage it.
- {{Experimental_Inline}} [Creating a named scroll timeline](/en-US/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_timeline)
  - : The CSS scroll timeline {{cssxref('scroll-timeline-name')}} and {{cssxref('scroll-timeline-axis')}} properties, along with the {{cssxref('scroll-timeline')}} shorthand, create animations tied to the scroll offset of a scroll container.

## Related concepts

- {{CSSxRef("scrollbar-width")}} CSS property
- {{CSSxRef("scrollbar-color")}} CSS property
- {{CSSxRef("scrollbar-gutter")}} CSS property
- {{CSSxRef("scroll-behavior")}} CSS property
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
- {{Glossary("Scroll container")}} glossary term
- {{Glossary("Ink overflow")}} glossary term

## Specifications

{{Specifications}}

## See also

- [CSS scrollbars styling](/en-US/docs/Web/CSS/CSS_scrollbars_styling) module
- [CSS scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
- [CSSOM view](/en-US/docs/Web/CSS/CSSOM_view) module
- How to [debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
